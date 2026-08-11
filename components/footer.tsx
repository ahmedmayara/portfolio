import { getYear, startOfToday } from "date-fns";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <div className="flex flex-col gap-2.5">
      <Separator />
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs font-light">
          Built by Ahmed Mayara | &copy; {getYear(startOfToday())}. All rights
          reserved.
        </p>
        <p className="text-muted-foreground text-xs font-light">
          Tunisia, Nabeul
        </p>
      </div>
    </div>
  );
}
