import React from "react";

import Link from "next/link";
import { config } from "@/constants";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
          Things I’ve built and contributed to!
        </h1>
        <h2 className="font-doto text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {config.projects.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group hover:bg-accent relative flex cursor-pointer flex-col rounded border border-dashed p-2.5 transition-colors duration-200 ease-in-out">
              <div className="z-10 h-44 min-h-44 overflow-hidden rounded-sm">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full object-cover object-top"
                />
              </div>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-sm">{project.name}</span>
                <span className="text-muted-foreground line-clamp-2 font-mono text-xs tracking-tight">
                  {project.description}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
