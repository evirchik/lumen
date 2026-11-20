"use client";
import { Slider } from "@/features/slider/slider";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const Cases = () => {
  return (
    <section className="flex min-h-dvh relative items-center" id="cases">
      <span className="absolute top-[15%] z-30 text-[40px] left-1/2 -translate-x-1/2">
        Коллекция
      </span>
      <Slider />
      <motion.div
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-[85%] z-20 -translate-x-1/2"
      >
        <Button className="hover:gap-5">
          Заказать
          <ArrowRight strokeWidth={1} size={16} />
        </Button>
      </motion.div>
    </section>
  );
};
