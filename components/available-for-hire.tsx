"use client";

import Link from "next/link";

import { config } from "@/constants";
import { click003Sound } from "@/sounds/click-003";
import { RiMailSendFill } from "@remixicon/react";

import { useSound } from "@/hooks/use-sound";

export function AvailableForHire() {
  const [play] = useSound(click003Sound);
  return (
    <Link
      href={`mailto:${config.email}`}
      onClick={() => play()}
      className="hover:bg-accent border-border bg-muted/40 mt-1 inline-flex h-7.5 w-fit items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]"
    >
      <RiMailSendFill className="dark:text-muted-foreground size-4" />
      <span className="hidden md:inline">Available for hire</span>
    </Link>
  );
}
