"use client";

import { motion } from "framer-motion";

export function AgentSignal({ className }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* The Meridian Line - A permanent, breathing axis */}
      <div className="relative h-96 w-[1px] bg-deep-brown/10 overflow-visible">
        {/* The Core Thread */}
        <motion.div
          className="absolute inset-0 w-full bg-deep-brown/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            height: ["90%", "100%", "90%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
        
        {/* The Signal - Information traveling the rails */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px]"
          animate={{
            top: ["-20%", "120%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1
          }}
        />
      </div>

      {/* The Pulse - Subtle, non-human heartbeat */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Inner Glow */}
        <motion.div
          className="h-1 w-1 rounded-full bg-primary box-content border-2 border-transparent"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(212, 115, 94, 0)", /* Terracotta RGB */
              "0 0 0 4px rgba(212, 115, 94, 0.1)",
              "0 0 0 12px rgba(212, 115, 94, 0)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Outer Resonance */}
        <motion.div
          className="absolute inset-0 h-1 w-1 rounded-full"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 20, 40],
            opacity: [0.2, 0.05, 0],
            borderWidth: ["1px", "0px", "0px"]
          }}
          style={{ borderColor: "var(--color-primary)" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      </div>
    </div>
  );
}
