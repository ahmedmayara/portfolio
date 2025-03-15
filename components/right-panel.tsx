"use client";

import React from "react";

import { stagger, useAnimate } from "motion/react";

import { config } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GridItem } from "@/components/grid-item";
import { ProjectItem } from "@/components/project-item";
import { SocialItem } from "@/components/social-item";
import { ExperienceItem } from "@/components/experience-item";

export function RightPanel() {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  React.useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        },
      );
    }
  }, [animate, scope, staggerGridItems]);

  return (
    <ScrollArea className="h-screen flex-1 p-0 xl:p-6">
      <div
        ref={scope}
        className="grid w-full auto-rows-[75px] grid-cols-4 gap-6 py-6 xl:gap-10 xl:px-1 xl:py-10"
      >
        {config.items.map((item, index) => (
          <GridItem key={index} size={item.layout}>
            {item.type === "SOCIAL" ? <SocialItem item={item} /> : null}
            {item.type === "PROJECT" ? <ProjectItem item={item} /> : null}
            {item.type === "EXPERIENCE" ? <ExperienceItem item={item} /> : null}
          </GridItem>
        ))}
      </div>
    </ScrollArea>
  );
}
