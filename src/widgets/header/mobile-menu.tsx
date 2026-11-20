"use client";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="sm:hidden flex flex-col gap-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="w-10 h-px bg-foreground" />
        <div className="w-10 h-px bg-foreground" />
      </div>
      <AnimatePresence>
        {open && (
          <div className="fixed sm:hidden top-0 left-0 w-full h-full z-20">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              onClick={() => setOpen(false)}
              className="w-full h-full bg-foreground/50"
            />
            <motion.div
              initial={{
                translateX: "100%",
              }}
              animate={{
                translateX: "0",
              }}
              exit={{
                translateX: "100%",
              }}
              transition={{
                ease: "circInOut",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100 || info.velocity.x > 500) {
                  setOpen(false);
                }
              }}
              className="p-5 flex justify-between absolute top-0 right-0 h-full w-2/3 bg-background z-20"
            >
              <ul className="flex flex-col gap-2 sm:hidden text-foreground">
                <li>
                  <Link href={"#about"} onClick={() => setOpen(false)}>
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href={"#cases"} onClick={() => setOpen(false)}>
                    Примеры
                  </Link>
                </li>
                <li>
                  <Link href={"#contacts"} onClick={() => setOpen(false)}>
                    Контакты
                  </Link>
                </li>
              </ul>
              <XIcon strokeWidth={1} onClick={() => setOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
