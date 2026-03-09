"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface ContributionHeatmapProps {
  history: Record<string, number>;
  compact?: boolean;
}

type Day = { date: string; count: number | undefined };

function buildGrid(history: Record<string, number>): Day[][] {
  const today = new Date();
  const yearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate(),
  );

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const weeks: Day[][] = [];
  const cursor = new Date(startDate);

  while (cursor <= today) {
    const week: Day[] = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = cursor.toISOString().split("T")[0];
      week.push({
        date: dateStr,
        count:
          cursor >= yearAgo && cursor <= today
            ? (history[dateStr] ?? 0)
            : undefined,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}

function formatLabel(date: string, count: number): string {
  const d = new Date(date + "T00:00:00");
  const label = d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return count === 0
    ? `No contributions on ${label}`
    : `${count} contribution${count > 1 ? "s" : ""} on ${label}`;
}

function getColor(count: number): string {
  if (count === 0) return "transparent";
  if (count <= 2) return "#166534"; // low
  if (count <= 5) return "#16a34a"; // medium
  if (count <= 9) return "#4ade80"; // high
  return "#86efac"; // very high
}

export function ContributionHeatmap({
  history,
  compact = false,
}: ContributionHeatmapProps) {
  const weeks = useMemo(() => buildGrid(history), [history]);

  const cellSize = compact ? 9.5 : 13;
  const cellGap = compact ? 2 : 3;
  const stride = cellSize + cellGap;

  const monthPositions = useMemo(() => {
    const positions: { label: string; x: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const first = week.find((d) => d.date !== "");
      if (!first) return;
      const month = new Date(first.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        positions.push({ label: MONTH_LABELS[month], x: wi * stride });
        lastMonth = month;
      }
    });
    return positions;
  }, [weeks, stride]);

  const headerHeight = compact ? 0 : 18;
  const totalWidth = weeks.length * stride;

  return (
    <TooltipProvider>
      <div className="overflow-x-auto">
        {!compact && (
          <div
            className="relative mb-1"
            style={{ width: totalWidth, height: 16 }}
          >
            {monthPositions.map(({ label, x }) => (
              <span
                key={`${label}-${x}`}
                className="text-muted-foreground absolute text-[10px]"
                style={{ left: x }}
              >
                {label}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-0.75">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.75">
              {week.map((day, di) => {
                if (day.count === undefined) {
                  return (
                    <div
                      key={di}
                      style={{ width: cellSize, height: cellSize }}
                    />
                  );
                }

                const active = day.count > 0;

                return (
                  <Tooltip key={di}>
                    <TooltipTrigger asChild>
                      <div
                        style={{
                          width: cellSize,
                          height: cellSize,
                          borderRadius: compact ? 2 : 3,
                          backgroundColor: active
                            ? getColor(day.count)
                            : undefined,
                        }}
                        className={cn(
                          "cursor-pointer transition-opacity",
                          active
                            ? "opacity-85 hover:opacity-100"
                            : "bg-foreground opacity-10 hover:opacity-20",
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {formatLabel(day.date, day.count)}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
