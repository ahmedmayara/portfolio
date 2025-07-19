import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";
import { RiMailSendFill } from "@remixicon/react";
import { config } from "@/constants";

export function Header() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4.5">
          <Avatar className="size-11 rounded-md">
            <AvatarImage
              src="/images/profile-picture.jpg"
              alt="Profile picture"
              className="scale-105 rounded-md"
            />
            <AvatarFallback className="bg-muted/40 text-muted-foreground rounded-md">
              AM
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs tracking-tighter">
              Hey there!
            </h1>
            <h2 className="font-doto text-2xl font-bold">
              <span className="uppercase">Ahmed Mayara</span>
            </h2>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">
          My name is Ahmed Mayara and I’m a{" "}
          <span className="text-foreground">software engineer</span>. My main
          focus is building{" "}
          <span className="text-foreground">high-quality</span>,{" "}
          <span className="text-foreground">scalable software solutions</span>{" "}
          that meet and exceed client expectations.
        </span>
      </div>

      <Link
        href={`mailto:${config.email}`}
        className="hover:bg-accent border-border bg-muted/40 mt-1 inline-flex h-[30px] w-fit items-center justify-center gap-1.5 rounded-md border px-1.5 py-2 pr-2 text-xs font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 dark:shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]"
      >
        <RiMailSendFill className="dark:text-muted-foreground size-4" />
        <span className="hidden md:inline">Available for hire</span>
      </Link>
    </div>
  );
}
