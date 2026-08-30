"use client";

import React, { ReactNode } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────
   Animation Variants
   ───────────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const customEase = [0.25, 0.1, 0.25, 1] as const;

/* ─────────────────────────────────────────────
   Reusable Scroll-Reveal Wrapper
   ───────────────────────────────────────────── */

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  id?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "h1" | "h2" | "h3" | "p";
}

export function Reveal({
  children,
  variants = fadeUp,
  className = "",
  id,
  threshold = 0.15,
  delay = 0,
  duration = 0.5,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag id={id} className={className}>{children}</Tag>;
  }

  return (
    <Component
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: customEase,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
   Stagger Container — children animate in sequence
   ───────────────────────────────────────────── */

interface StaggerProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  slow?: boolean;
  as?: "div" | "section" | "ul" | "article";
}

export function Stagger({
  children,
  className = "",
  threshold = 0.1,
  slow = false,
  as = "div",
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={slow ? staggerContainerSlow : staggerContainer}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ─────────────────────────────────────────────
   Stagger Item — must be a direct child of Stagger
   ───────────────────────────────────────────── */

interface StaggerItemProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  duration?: number;
}

export function StaggerItem({
  children,
  variants = fadeUp,
  className = "",
  duration = 0.45,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      transition={{ duration, ease: customEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
