"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const pathName = usePathname("");

  return (
    <div className="flex items-center justify-center">
      <p className="text-[#00D991] text-3xl my-[37vh]">
        This movie with{" "}
        <span className="text-rose-400">{pathName.slice(8)}</span> was not
        found!
      </p>
    </div>
  );
}
