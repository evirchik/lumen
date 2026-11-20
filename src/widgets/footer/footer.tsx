"use client";
import { Contact } from "@/shared/ui/contact";
import { Container } from "@/shared/ui/container";
import Image from "next/image";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="py-25" id="contacts">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="overflow-hidden">
            <motion.span
              initial={{ translateY: "100%" }}
              whileInView={{ translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 text-[clamp(40px,12vw,128px)] uppercase block"
            >
              Контакты
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              width={100}
              height={100}
              className="h-auto w-[clamp(40px,8vw,100px)] shrink-0"
            />
          </motion.div>
        </div>
        <div className="flex flex-col mt-25">
          <Contact
            title="Телефон"
            data="+79052418161"
            href="tel:+79052418161"
          />
          <Contact
            title="Электронная почта"
            className="border-t-transparent"
            data="lumen@yandex.ru"
            href="mailto:lumen@yandex.ru"
          />
          <Contact
            title="Телеграм"
            className="border-t-transparent"
            data="@lumen"
            href="https://t.me/de4chikk"
          />
        </div>
      </Container>
    </footer>
  );
};
