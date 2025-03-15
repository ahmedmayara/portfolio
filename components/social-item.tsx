import { GridItem } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface SocialItemProps {
  item: GridItem;
}

export function SocialItem({ item }: SocialItemProps) {
  return (
    <Link href={item.url ?? "#"} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-between">
        {item.icon && (
          <div className="shrink-0">
            <item.icon className="h-8 w-8" />
          </div>
        )}
        {item.layout === "2x2" && (
          <Button size="sm" variant={item.buttonVariant}>
            {item.buttonText}
          </Button>
        )}
      </div>

      <div className="mt-2">
        <div className="line-clamp-1 text-lg font-semibold">{item.title}</div>
        <div className="text-muted-foreground text-sm">{item.username}</div>
        {item.description && (
          <div className="text-muted-foreground mt-1 line-clamp-2 text-sm">
            {item.description}
          </div>
        )}

        {item.layout === "1x2" && (
          <div className="mt-3">
            <Button size="sm" variant={item.buttonVariant}>
              {item.buttonText}
            </Button>
          </div>
        )}
      </div>
    </Link>
  );
}
