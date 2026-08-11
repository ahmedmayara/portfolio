"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { drop002Sound } from "@/sounds/drop-002";
import {
  RemixiconComponentType,
  RiBriefcase5Fill,
  RiHome3Fill,
  RiSparklingFill,
  RiSurveyFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";

import { useSound } from "@/hooks/use-sound";

const routes: { title: string; icon: RemixiconComponentType; href: string }[] =
  [
    {
      title: "Home",
      icon: RiHome3Fill,
      href: "/",
    },
    {
      title: "Work",
      icon: RiBriefcase5Fill,
      href: "/work",
    },
    {
      title: "Projects",
      icon: RiSurveyFill,
      href: "/projects",
    },
    {
      title: "Skills",
      icon: RiSparklingFill,
      href: "/skills",
    },
  ];

export function BottomNavigation() {
  const pathname = usePathname();
  const [play] = useSound(drop002Sound);

  return (
    <div className="ring-border/50 bg-background/20 fixed bottom-4 left-1/2 z-999 mt-7 flex h-fit -translate-x-1/2 flex-col items-center rounded-full p-3 px-6 py-2.5 shadow-xs ring backdrop-blur-lg sm:bottom-8">
      <div className="flex flex-row gap-8">
        {routes.map((route) => (
          <Link
            href={route.href}
            onClick={() => play()}
            key={route.href}
            className="relative"
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center transition-all duration-200",
                pathname === route.href && "scale-110",
              )}
            >
              <route.icon
                className={cn(
                  "text-muted-foreground mb-0.5 size-4",
                  pathname === route.href ? "text-primary" : "opacity-30",
                )}
              />
              <span
                className={cn(
                  "text-muted-foreground text-[0.625rem] font-medium",
                  pathname === route.href ? "text-primary" : "opacity-70",
                )}
              >
                {route.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
