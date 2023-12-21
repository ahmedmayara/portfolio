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
          <div className="flex-shrink-0">
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
        <div className="text-sm text-muted-foreground">{item.username}</div>
        {item.description && (
          <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">
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
