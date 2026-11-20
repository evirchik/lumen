"use client";
import { motion } from "motion/react";

export const About = () => {
  const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";

  return (
    <section className="relative h-lvh" id="about">
      <div className="h-full w-full overflow-hidden [clip-path:inset(0)] flex justify-center items-center">
        <div
          className="pointer-events-none fixed top-0 left-0 h-lvh w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${basePath}/images/about.jpg')`,
          }}
        />
        <motion.span
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative z-20 text-background sm:text-2xl lg:-mt-10 lg:text-[40px] text-justify max-w-180 block px-5"
        >
          LUMEN - Компания, специализирующаяся на создании уникальных световых
          решений, разработанных с учётом ваших пожеланий, потребностей и
          особенностей пространства. 
        </motion.span>
      </div>
    </section>
  );
};
