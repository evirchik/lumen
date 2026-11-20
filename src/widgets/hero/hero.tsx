"use client";

import { Container } from "@/shared/ui/container";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";

export const Hero = () => {
  // Положение курсора
  const mouseX = useMotionValue(0);

  // Плавность движения
  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Свет движется в противоположную сторону
  const glowX = useTransform(x, (value) => -value * 1.5);

  const handleMouseMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();

    const moveX = (e.clientX - rect.left) / rect.width - 0.5;

    mouseX.set(moveX * 30);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
  };

  return (
    <section
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      className="relative h-dvh overflow-hidden"
    >
      <Container className="relative flex h-full flex-col items-center justify-center">
        {/* Лампа */}
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-1/2 top-0 z-20 h-200 w-7xl -translate-x-1/2 max-sm:h-100 max-sm:w-4xl"
        >
          <motion.div style={{ x }} className="relative h-full w-full">
            <Image
              src={`${basePath}/images/one.jpg`}
              alt="hero lamp"
              fill
              priority
              className="object-contain"
            />

            {/* Световое пятно */}
            <motion.div
              style={{ x: glowX, }}
              className="absolute left-1/2 top-1/2 aspect-square w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E4AA6E]/20 blur-3xl max-sm:w-100"
            />
          </motion.div>
        </motion.div>

        {/* Заголовок */}
        <div className="flex flex-col items-center">
          <ul className="flex gap-4 overflow-hidden text-[clamp(80px,30vw,500px)] leading-none sm:gap-8 lg:gap-24">
            {["С", "В", "Е", "Т"].map((letter, index) => (
              <motion.li
                key={letter}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 * (index + 1) }}
              >
                {letter}
              </motion.li>
            ))}
          </ul>

          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="-mt-2 text-center text-sm uppercase tracking-widest sm:-mt-5 sm:text-2xl lg:-mt-10 lg:text-[40px]"
          >
            Это искусство создавать атмосферу
          </motion.span>
        </div>

        {/* Кнопка */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-1/2 top-[85%] z-20 -translate-x-1/2"
        >
          <Button className="hover:gap-5">
            Узнать больше
            <ArrowRight strokeWidth={1} size={16} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
