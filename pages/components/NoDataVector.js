"use client";

import { motion } from "framer-motion";

export default function NoDataVector({
  className = "w-56 h-56",
  text = "No Data Available",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: .6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.04,
      }}
      className="flex flex-col items-center justify-center text-center select-none"
    >
      <div className="relative">
        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.25, .45, .25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full blur-3xl bg-cyan-300"
        />

        <svg
          viewBox="0 0 220 220"
          className={className}
          fill="none"
        >
          {/* Background */}

          <motion.circle
            cx="110"
            cy="110"
            r="86"
            fill="#EEF8FB"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />

          <circle
            cx="110"
            cy="110"
            r="65"
            fill="#DDF3F7"
          />

          {/* Floating Card */}

          <motion.g
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <rect
              x="48"
              y="55"
              width="82"
              height="66"
              rx="8"
              fill="#94A3B8"
            />

            <rect
              x="58"
              y="66"
              width="34"
              height="5"
              rx="3"
              fill="#E2E8F0"
            />

            <rect
              x="58"
              y="78"
              width="16"
              height="26"
              rx="2"
              fill="#CBD5E1"
            />

            <rect
              x="79"
              y="84"
              width="16"
              height="20"
              rx="2"
              fill="#CBD5E1"
            />
          </motion.g>

          {/* Main Card */}

          <motion.g
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <rect
              x="88"
              y="78"
              width="72"
              height="72"
              rx="12"
              fill="white"
              stroke="#CBD5E1"
            />

            {/* Rotating Donut */}

            <motion.g
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "124px 114px",
              }}
            >
              <circle
                cx="124"
                cy="114"
                r="22"
                fill="#EEF2FF"
              />

              <path
                d="M124 114 L124 92 A22 22 0 0 1 145 114 Z"
                fill="#06B6D4"
              />

              <path
                d="M124 114 L102 114 A22 22 0 0 1 124 92 Z"
                fill="#6366F1"
              />

              <circle
                cx="124"
                cy="114"
                r="10"
                fill="white"
              />
            </motion.g>

            {/* dots */}

            <circle cx="99" cy="89" r="2" fill="#94A3B8" />
            <circle cx="105" cy="89" r="2" fill="#94A3B8" />
            <circle cx="111" cy="89" r="2" fill="#94A3B8" />
          </motion.g>

          {/* Search */}

          <motion.g
            animate={{
              x: [-3, 3, -3],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <circle
              cx="72"
              cy="135"
              r="13"
              fill="white"
              stroke="#94A3B8"
              strokeWidth="3"
            />

            <line
              x1="81"
              y1="145"
              x2="91"
              y2="155"
              stroke="#94A3B8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Floating Particles */}

          {[1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx={35 + i * 40}
              cy={40 + (i % 2) * 20}
              r="3"
              fill="#38BDF8"
              animate={{
                y: [-4, 6, -4],
                opacity: [.3, 1, .3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + i,
              }}
            />
          ))}
        </svg>
      </div>

      {text && (
        <motion.p
          animate={{
            opacity: [.5, 1, .5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-5 text-base font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}