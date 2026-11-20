"use client";
import { Container } from "@/shared/ui/container";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <motion.header
      initial={{ translateY: "-100%" }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
      className="py-10 text-[20px] uppercase fixed  top-0 left-0 w-full z-40"
    >
      <Container className="flex items-center justify-between">
        <Link href={"/"}>lumen</Link>
        <ul className="flex gap-15 max-sm:hidden">
          <li>
            <Link href={"#about"}>О нас</Link>
          </li>
          <li>
            <Link href={"#cases"}>Примеры</Link>
          </li>
          <li>
            <Link href={"#contacts"}>Контакты</Link>
          </li>
        </ul>

        <MobileMenu />
      </Container>
    </motion.header>
  );
};
