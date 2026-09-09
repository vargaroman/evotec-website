"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function PageIntro({ children }: { children: ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const overlayVisible = showOverlay && !reduceMotion;

  return (
    <>
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
                className="rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: reduceMotion ? 0 : 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-1 flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
