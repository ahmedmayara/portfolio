"use client";

import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1500px]">{children}</div>;
}
