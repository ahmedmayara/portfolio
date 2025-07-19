import React from "react";

import { config } from "@/constants";

export function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
          Stuff I’m good at!
        </h1>
        <h2 className="font-doto text-2xl font-bold">Skills</h2>
      </div>

      {config.skills.map((skillCategory, index) => {
        const [category, skillItems] = Object.entries(skillCategory)[0];

        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-muted-foreground font-mono text-xs uppercase">
              {category.replace(/([A-Z])/g, " $1")}
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {skillItems.map((item, idx) => (
                <button
                  key={idx}
                  className="hover:bg-accent border-border bg-muted/40 inline-flex h-[30px] items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50"
                >
                  <img src={item.icon} alt={item.name} className="size-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
