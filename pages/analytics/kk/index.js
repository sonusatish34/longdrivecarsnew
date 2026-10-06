// components/vectors/NoDataVector.jsx
import React from 'react';

export default function NoDataVector({ className = "w-44 h-44", text = "No data available" }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Background Circle */}
        <circle cx="100" cy="100" r="80" fill="#F1F5F9" />
        <circle cx="100" cy="100" r="60" fill="#E2E8F0" opacity="0.5" />

        {/* Back Dashboard Card */}
        <rect x="45" y="50" width="80" height="65" rx="6" fill="#94A3B8" />
        <rect x="52" y="60" width="30" height="4" rx="2" fill="#E2E8F0" />
        <rect x="52" y="70" width="15" height="30" rx="2" fill="#CBD5E1" />
        <rect x="72" y="80" width="15" height="20" rx="2" fill="#CBD5E1" />

        {/* Front Pie/Donut Chart Card */}
        <g filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.08))">
          <rect x="85" y="75" width="70" height="70" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <circle cx="120" cy="112" r="20" fill="#EEF2FF" />
          {/* Donut chart segment */}
          <path
            d="M 120 112 L 120 92 A 20 20 0 0 1 140 112 Z"
            fill="#6366F1"
          />
          <path
            d="M 120 112 L 100 112 A 20 20 0 0 1 120 92 Z"
            fill="#818CF8"
          />
          <circle cx="120" cy="112" r="9" fill="#FFFFFF" />
          {/* Card Dots */}
          <circle cx="95" cy="85" r="1.5" fill="#94A3B8" />
          <circle cx="100" cy="85" r="1.5" fill="#94A3B8" />
          <circle cx="105" cy="85" r="1.5" fill="#94A3B8" />
        </g>

        {/* Magnifying Glass / Search overlay */}
        <circle cx="70" cy="130" r="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="3" />
        <line x1="79" y1="139" x2="88" y2="148" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {text && (
        <p className="mt-3 text-sm font-semibold text-slate-500">
          {text}
        </p>
      )}
    </div>
  );
}