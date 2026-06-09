"use client"

import { motion } from "framer-motion"

interface RFRLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  className?: string
}

export function RFRLogo({ size = "md", animated = true, className = "" }: RFRLogoProps) {
  const sizes = {
    sm: { width: 40, height: 40, text: "text-lg" },
    md: { width: 60, height: 60, text: "text-2xl" },
    lg: { width: 80, height: 80, text: "text-3xl" },
    xl: { width: 120, height: 120, text: "text-5xl" },
  }

  const { width, height } = sizes[size]

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }

  const Wrapper = animated ? motion.div : "div"
  const wrapperProps = animated
    ? {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
      }
    : {}

  return (
    <Wrapper {...wrapperProps} className={`flex items-center gap-3 ${className}`}>
      <div className="relative" style={{ width, height }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="railGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#f9fafb" />
            </linearGradient>
          </defs>

          {/* Main circle background */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

          {/* Inner circle */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Train track lines */}
          {animated ? (
            <>
              <motion.path
                d="M20 65 L80 65"
                stroke="url(#railGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                variants={pathVariants}
              />
              <motion.path
                d="M20 72 L80 72"
                stroke="url(#railGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                variants={pathVariants}
              />
              {/* Cross ties */}
              {[25, 35, 45, 55, 65, 75].map((x, i) => (
                <motion.rect
                  key={i}
                  x={x - 2}
                  y="63"
                  width="4"
                  height="11"
                  fill="rgba(255,255,255,0.6)"
                  variants={pathVariants}
                />
              ))}
            </>
          ) : (
            <>
              <path
                d="M20 65 L80 65"
                stroke="url(#railGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M20 72 L80 72"
                stroke="url(#railGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {[25, 35, 45, 55, 65, 75].map((x, i) => (
                <rect
                  key={i}
                  x={x - 2}
                  y="63"
                  width="4"
                  height="11"
                  fill="rgba(255,255,255,0.6)"
                />
              ))}
            </>
          )}

          {/* RFR Text */}
          <text
            x="50"
            y="48"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontWeight="bold"
            fontSize="24"
            fontFamily="system-ui, sans-serif"
          >
            RFR
          </text>
        </svg>
      </div>
    </Wrapper>
  )
}
