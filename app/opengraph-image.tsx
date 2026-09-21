import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { config } from "@/constants";

import { Profile } from "@/components/og/profile";

export const alt = `${config.name} — ${config.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadGeist(weight: number, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(text)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((res) => res.text());

  const match = css.match(
    /src: url\((.+)\) format\('(opentype|truetype|woff)'\)/,
  );

  if (!match) {
    throw new Error(`Failed to load Geist ${weight}`);
  }

  const font = await fetch(match[1]);

  if (!font.ok) {
    throw new Error(`Failed to fetch Geist ${weight}`);
  }

  return font.arrayBuffer();
}

export default async function Image() {
  const text = `${config.name} ${config.title} ${config.description}`;
  const [avatar, geistRegular, geistSemiBold, geistBold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/profile-picture.jpg")),
    loadGeist(400, text),
    loadGeist(600, text),
    loadGeist(700, text),
  ]);

  return new ImageResponse(
    (
      <Profile
        name={config.name}
        role={config.title}
        bio={config.description}
        avatar={`data:image/jpeg;base64,${avatar.toString("base64")}`}
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistSemiBold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Geist",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
