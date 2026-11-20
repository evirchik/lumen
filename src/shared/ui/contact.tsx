"use client";
import Link from "next/link";
import { cn } from "../utils/cn";
import { motion } from "motion/react";

interface IContactProps {
  title: string;
  data: string;
  href: string;
  className?: string;
}

export const Contact: React.FC<IContactProps> = ({
  data,
  title,
  className,
  href,
}) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={cn(
          "py-8.75 border-y flex items-center justify-between sm:text-2xl lg:text-[40px] relative group/contact cursor-pointer",
          className,
        )}
      >
        <div className="h-full absolute top-0 left-1/2 bg-foreground w-0  group-hover/contact:w-full group-hover/contact:left-0 duration-500" />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 text-background mix-blend-difference"
        >
          {title}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 text-background mix-blend-difference"
        >
          {data}
        </motion.span>
      </motion.div>
    </Link>
  );
};
