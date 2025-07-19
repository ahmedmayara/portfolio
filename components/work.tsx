import { config } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Work() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
          Where I’ve made an impact!
        </h1>
        <h2 className="font-doto text-2xl font-bold">Work</h2>
      </div>

      <div className="flex flex-col gap-6">
        {config.work.map((work, index) => (
          <div key={index} className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-start">
              <Link
                href={work.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2"
              >
                <div className="grid size-9 place-items-center rounded-md select-none">
                  <Image
                    src={work.logo}
                    alt={`${work.company} logo`}
                    width={36}
                    height={36}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between whitespace-nowrap">
                  <div className="space-x-2 text-sm font-medium">
                    <span>{work.company}</span>
                    <span className="bg-muted/35 text-muted-foreground/80 rounded-full px-2 py-0.5 text-[10px] select-none">
                      {work.type}
                    </span>
                  </div>
                  <div className="text-muted-foreground text-xs">
                    <span>{work.role}</span>
                  </div>
                </div>
              </Link>
              <div className="mt-2 -mr-1.5 flex h-px w-full flex-row gap-2 bg-gradient-to-r from-transparent via-transparent to-neutral-300 dark:to-neutral-700" />
              <div className="flex min-w-24 flex-col justify-between text-xs whitespace-nowrap">
                <div>{work.period}</div>
                <div className="text-muted-foreground">{work.location}</div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {work.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-start gap-2 sm:ml-[30px]"
                >
                  <div className="mt-[7px] size-1.5 shrink-0 rounded-full bg-zinc-300" />
                  <div className="inline-block space-x-1.5 text-[13px] font-light sm:pr-20">
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
