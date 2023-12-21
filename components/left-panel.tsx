import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { config } from "@/constants";
import { DrawingPinIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Footer } from "./footer";

export function LeftPanel() {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:h-full xl:max-w-sm xl:py-[4.5rem]"
    >
      <div className="flex h-full flex-col rounded-xl">
        <Avatar>
          <AvatarImage
            src="/images/profile-picture.jpg"
            alt="Profile picture"
          />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="mt-4 flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-blue-500">
            {config.title}
          </h2>
          <h1 className="mt-2 text-4xl font-bold">{config.name}</h1>
          <p className="mt-2 text-lg font-light text-muted-foreground">
            {config.bio}
          </p>
        </div>

        <div className="mt-4 flex flex-row items-center justify-between gap-2">
          <Button size="sm" variant="outline" className="w-full" asChild>
            <a className="flex items-center gap-2" href={config.locationUrl}>
              <DrawingPinIcon className="h-4 w-4" />
              <span>{config.location}</span>
            </a>
          </Button>
          <Button size="sm" variant="outline" className="w-full" asChild>
            <a
              className="flex items-center gap-2"
              href={`mailto:${config.email}`}
            >
              <EnvelopeClosedIcon className="h-4 w-4" />
              <span>Contact me</span>
            </a>
          </Button>
        </div>

        <div className="hidden xl:block">
          <Footer />
        </div>
      </div>
    </div>
  );
}
