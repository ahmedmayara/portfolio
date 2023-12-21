import React from "react";

export type GridItemLayout = "1x2" | "2x2" | "2x1" | "2x4";
export type GridItemType = "SOCIAL" | "PROJECT" | "EXPERIENCE";

export interface GridItem {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  description?: string;
  icon?: React.ComponentType | React.ElementType;
  url?: string;
  buttonText?: string;
  buttonVariant?: "blue" | "pink" | "gray";
  buttonLink?: string;
  buttonSecondaryText?: string;
  image?: string;
  /** Only for socials **/
  username?: string;
  /** Only for projects **/
  techStack?: string[];
  demoLink?: string;
  /** Only for experiences **/
  location?: string;
  startDate?: string;
  endDate?: string;
}
