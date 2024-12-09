"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react"
import { FaAmilia, FaLocationArrow } from "react-icons/fa";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";


export default function Magicbutton() {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#000319] bg-[linear-gradient(110deg,#000319,45%,#fb923c,55%,#000319)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 relative ">
    Show my works
    <HiGlobeAsiaAustralia className="ml-4 text-xl" />
  </button>
  )
}

