"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useId, useRef, useState } from "react";

export interface AnimatedGridPatternProps {
  /**
   * The width of the grid cells.
   * @default 30
   */
  width?: number;
  /**
   * The height of the grid cells.
   * @default 30
   */
  height?: number;
  /**
   * The x-offset of the grid.
   * @default 0
   */
  x?: number;
  /**
   * The y-offset of the grid.
   * @default 0
   */
  y?: number;
  /**
   * The stroke width of the grid lines.
   * @default 1
   */
  strokeWidth?: number;
  /**
   * The className of the grid.
   */
  className?: string;
}

export const AnimatedGridPattern = ({
  width = 30,
  height = 30,
  x = 0,
  y = 0,
  strokeWidth = 1,
  className,
}: AnimatedGridPatternProps) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/50 stroke-white/50",
        className,
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        <rect strokeWidth="0" width={width + 1} height={height + 1} />
        <rect
          strokeWidth={strokeWidth}
          width={width + 1}
          height={height + 1}
          x={-strokeWidth / 2}
          y={-strokeWidth / 2}
        />
      </svg>
    </svg>
  );
};

export default AnimatedGridPattern; 