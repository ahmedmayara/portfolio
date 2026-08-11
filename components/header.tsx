import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvailableForHire } from "@/components/available-for-hire";
import { ThemeSwitcher } from "@/components/theme-switcher";

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

      <AvailableForHire />
    </div>
  );
}
