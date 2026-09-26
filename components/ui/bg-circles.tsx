"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CircleConfig {
  id: number;
  size: number;
  top: string;
  left: string;
  moveX: number;
  moveY: number;
  duration: number;
  delay: number;
}

function generateCircles(count: number): CircleConfig[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 8, // 8px–28px
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    moveX: (Math.random() - 0.5) * 100, // drift range -50 to 50px
    moveY: (Math.random() - 0.5) * 100,
    duration: Math.random() * 10 + 2, // 10s–20s
    delay: 0,
  }));
}

function FloatingCircles({ count = 12 }: { count?: number }) {
  const [circles, setCircles] = useState<CircleConfig[] | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCircles(generateCircles(count));
  }, [count]);

  if (!circles) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 1,
      }}
      key={pathname}
      className="absolute top-0 left-0 inset-0 overflow-hidden pointer-events-none z-10"
    >
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full bg-[#88857e] opacity-30"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
          animate={{
            x: [0, circle.moveX, 0],
            y: [0, circle.moveY, 0],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}

export default FloatingCircles;
