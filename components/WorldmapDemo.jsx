"use client";
import { eb, inconsolata } from "@/app/fonts/font";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    (<div className =" mb-5 w-full dark:bg-[#000319] bg-[#dee4e7] " >      
      <div className="max-w-7xl mx-auto text-center dark:bg-[#000319] bg-[#dee4e7]">
        <p className={`${inconsolata.className} font-bold text-3xl md:text-6xl dark:text-white text-black `}>
          Remote{" "}
          <span className={`text-orange-400 ${eb.className} `}>
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {word}
              </motion.span>
            ))}
          </span>
        </p>
      
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: -15.7975, lng: -47.8919 }, 
          },
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: 38.7223, lng: -9.1393 }, 
          },
          
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: 43.1332, lng: 131.9113 }, 
          },
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: -1.2921, lng: 36.8219 }, 
          },
          {           
            start: { lat: 20.513123, lng: 55.438728 }, 
            end: { lat: 33.998023, lng: 6.572607 }, 
          },
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: 15.7975, lng: -113.160353 }, 
          },
          {
            start: { lat: 20.513123, lng: 55.438728  }, 
            end: { lat: 60.641086, lng: -101.714112 }, 
          },
        ]} />
    </div>)
  );
}
