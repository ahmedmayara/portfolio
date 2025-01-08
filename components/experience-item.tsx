import { GridItem } from "@/types";
import React from "react";

interface ExperienceItemProps {
  item: GridItem;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <div className="flex flex-col">
      {item.icon ? <item.icon className="h-8 w-8" /> : null}
      <h1 className="w-full pt-2 text-lg font-semibold md:text-xl">
        {item.title}
      </h1>
      <p className="text-md w-full text-muted-foreground md:text-lg">
        {item.description}
      </p>

      <span className="text-md w-full pt-2 text-muted-foreground">
        {item.startDate} - {item.endDate}
      </span>
    </div>
  );
}
