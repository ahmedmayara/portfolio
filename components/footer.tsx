import React from "react";

import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Footer() {
  return (
    <>
      <Separator className="mt-4" />

      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs font-light text-muted-foreground">
          Built by Ahmed Mayara | &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>

        <ThemeSwitcher />
      </div>
    </>
  );
}
