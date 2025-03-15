import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { config } from "@/constants";
import { Footer } from "@/components/footer";
import { MailIcon, PinIcon } from "lucide-react";

export function LeftPanel() {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:h-full xl:max-w-sm xl:py-[4.5rem]"
    >
      <div className="flex h-full flex-col rounded-xl">
        <Avatar className="size-32">
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
          <p className="text-muted-foreground mt-2 text-lg font-light">
            {config.bio}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 place-content-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a className="flex items-center gap-2" href={config.locationUrl}>
              <PinIcon size={16} strokeWidth={2} aria-hidden="true" />
              <span>{config.location}</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              className="flex items-center gap-2"
              href={`mailto:${config.email}`}
            >
              <MailIcon size={16} strokeWidth={2} aria-hidden="true" />
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
