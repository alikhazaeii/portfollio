import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin ,
  IconMail ,
  IconHome,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-orange-400 " />
      ),
      href: "#home",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin  className="h-full w-full text-orange-400 " />
      ),
      href: "https://www.linkedin.com/in/ali-khazaei021/",
    },
    {
      title: "E-mail",
      icon: (
        <IconMail  className="h-full w-full text-orange-400 " />
      ),
      href: "mailto:ali.tradding021@gmail.com",
    },
    
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-orange-400 " />
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
