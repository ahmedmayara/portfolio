import React from "react";

import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { getYear, startOfToday } from "date-fns";

export function Footer() {
  return (
    <div className="flex flex-col gap-2.5">
      <Separator />
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs font-light">
          Built by Ahmed Mayara | &copy; {getYear(startOfToday())}. All rights
          reserved.
        </p>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
