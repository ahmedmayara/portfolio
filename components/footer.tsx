import React from "react";

import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { format, getYear, startOfToday } from "date-fns";

export function Footer() {
  return (
    <>
      <Separator className="mt-4" />

      <div className="mt-2 flex items-center justify-between">
        <p className="text-muted-foreground text-xs font-light">
          Built by Ahmed Mayara | &copy; {getYear(startOfToday())}. All rights
          reserved.
        </p>

        <ThemeSwitcher />
      </div>
    </>
  );
}
