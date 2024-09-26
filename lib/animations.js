// lib/animations.js
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Header text animation (h1)
export const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Small text animation (p)
export const smallTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Normal section animation (div)
export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Card animation with delay
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.2, // 0.2 second delay multiplied by the custom index
    },
  }),
};

export const AnimatedElement = ({
  variants,
  className,
  children,
  custom,
  as = "div",
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
      custom={custom}
    >
      {children}
    </MotionComponent>
  );
};

export const AnimatedHeader = (props) => (
  <AnimatedElement {...props} variants={headerVariants} as="h1" />
);

export const AnimatedSmallText = (props) => (
  <AnimatedElement {...props} variants={smallTextVariants} as="p" />
);

export const AnimatedSection = (props) => (
  <AnimatedElement {...props} variants={sectionVariants} />
);

export const AnimatedCard = (props) => (
  <AnimatedElement {...props} variants={cardVariants} style={{}} />
);
