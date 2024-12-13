import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin ,
  IconMail ,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
  
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin  className="h-full w-full dark:text-orange-400 text-black " />
      ),
      href: "https://www.linkedin.com/in/ali-khazaei021/",
    },
    {
      title: "E-mail",
      icon: (
        <IconMail  className="h-full w-full dark:text-orange-400 text-black " />
      ),
      href: "mailto:ali.tradding021@gmail.com",
    },
    
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full dark:text-orange-400 text-black " />
      ),
      href: "https://github.com/alikhazaeii",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
