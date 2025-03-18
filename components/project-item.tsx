import { GridItem } from "@/types";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  item: GridItem;
}

export function ProjectItem({ item }: ProjectItemProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-end justify-end overflow-hidden">
      <div
        className={cn("absolute h-full w-full", {
          "bg-linear-to-r from-[#24C6DC] to-[#514A9D]": item.title === "Oladoc",
          "bg-linear-to-r from-[#1488CC] to-[#2B32B2]":
            item.title === "Residia",
          "bg-linear-to-tr from-[#9be15d] to-[#00e3ae]":
            item.title === "Shadcn Vue",
          "bg-linear-to-r from-zinc-500 to-zinc-700": item.title === "Devoxys",
        })}
      />
      <div className="relative z-20 w-full space-y-2 p-4 md:p-8">
        <div
          className={cn(
            "text-xl font-semibold md:text-3xl",
            (item.title === "Oladoc" ||
              item.title === "Residia" ||
              item.title === "Devoxys") &&
              "text-white",
            item.title === "Shadcn Vue" && "text-zinc-900",
          )}
        >
          {item.title}
        </div>
        <p
          className={cn(
            "text-opacity-70 text-white",
            item.title === "Shadcn Vue" && "text-zinc-900",
          )}
        >
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {item.techStack?.map((technology, index) => {
            return (
              <Badge
                key={index}
                variant={
                  item.title === "Residia"
                    ? "blueLighter"
                    : item.title === "Oladoc"
                      ? "blueLight"
                      : item.title === "Devoxys"
                        ? "secondary"
                        : "greenLight"
                }
              >
                {technology}
              </Badge>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-2 pt-2">
          <Button size="sm" variant="default" asChild>
            <a
              href={item.demoLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
          {item.buttonLink && (
            <Button size="sm" variant="blue" asChild>
              <a
                href={item.buttonLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
