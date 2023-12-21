import { GridItem } from "@/types";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectItemProps {
  item: GridItem;
}

export function ProjectItem({ item }: ProjectItemProps) {
  return (
    <div className="flex h-full w-full flex-col items-end justify-end overflow-hidden rounded-2xl">
      <Image
        className="z-0 h-full w-full object-cover object-center"
        src={item.image ?? ""}
        alt={item.title}
        fill
        sizes="100%"
        priority
      />
      <div className="relative z-20 w-full space-y-2 p-4 md:p-8">
        <div className="text-xl font-semibold text-white md:text-3xl">
          {item.title}
        </div>
        <p className="text-white text-opacity-70">{item.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {item.techStack?.map((technology, index) => {
            return <Badge key={index}>{technology}</Badge>;
          })}
        </div>
        <div className="flex flex-row items-center gap-2 pt-2">
          <Button size="sm" variant="secondary" asChild>
            <a
              href={item.demoLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="blue" asChild>
            <a
              href={item.buttonLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
