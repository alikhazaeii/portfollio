"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconBrandAdobePremier ,IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-orange-400" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconBrandAdobePremier className="h-4 w-4 text-neutral-500 dark:text-orange-400" />,
    },
    {
      name: "Skills",
      link: "#experiance",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-orange-400" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-orange-400" />
      ),
    },
  ];
  return (
    (<div className="absolute">
      <FloatingNav navItems={navItems} />
    </div>)
  );
}

