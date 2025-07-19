import { config } from "@/constants";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFilePdf2Fill,
} from "@remixicon/react";
import Link from "next/link";
import React from "react";

export function Socials() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
      <span className="text-muted-foreground text-sm">
        You can check these <span className="text-foreground">links</span> if
        you wish to:
      </span>
      <div className="flex flex-row flex-wrap gap-2">
        <Link
          href={config.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-accent border-border bg-muted/40 inline-flex h-[30px] items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]"
        >
          <RiGithubFill className="dark:text-muted-foreground size-4" />
          <span className="hidden md:inline">GitHub</span>
        </Link>
        <Link
          href={config.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-accent border-border bg-muted/40 inline-flex h-[30px] items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]"
        >
          <RiLinkedinBoxFill className="dark:text-muted-foreground size-4" />
          <span className="hidden md:inline">LinkedIn</span>
        </Link>
        <Link
          href={config.socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hover:bg-accent border-border bg-muted/40 inline-flex h-[30px] items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]"
        >
          <RiFilePdf2Fill className="dark:text-muted-foreground size-4" />
          <span className="hidden md:inline">Resume</span>
        </Link>
      </div>
    </div>
  );
}
