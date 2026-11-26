"use client";

import React from "react";

interface FairholdAnimatedLogoProps {
  className?: string;
}

export default function FairholdAnimatedLogo({ className = "h-[26px] w-auto" }: FairholdAnimatedLogoProps) {
  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 6067 868"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain overflow-visible"
        aria-label="Fairhold Corporation"
      >
        <style>{`
          /* After a long interval, both elephants smoothly come a little closer, touch trunks, and return */
          @keyframes fairholdLeftStepGreet {
            0%, 65% {
              transform: translate(0px, 0px);
            }
            74% {
              transform: translate(16px, -2px);
            }
            82% {
              transform: translate(16px, -2px);
            }
            92% {
              transform: translate(0px, 0px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }

          @keyframes fairholdRightStepGreet {
            0%, 65% {
              transform: translate(0px, 0px);
            }
            74% {
              transform: translate(-16px, -2px);
            }
            82% {
              transform: translate(-16px, -2px);
            }
            92% {
              transform: translate(0px, 0px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }

          /* Tail swivels smoothly on continuous loop */
          @keyframes fairholdTailSwivel {
            0% {
              transform: rotate(0deg);
            }
            24% {
              transform: rotate(-7deg);
            }
            48% {
              transform: rotate(9deg);
            }
            72% {
              transform: rotate(-6deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          /* Left elephant ear moves a little */
          @keyframes fairholdLeftEarFlap {
            0%, 100% {
              transform: rotate(0deg);
            }
            30% {
              transform: rotate(-3deg);
            }
            70% {
              transform: rotate(2deg);
            }
          }

          /* Right elephant ear moves a little */
          @keyframes fairholdRightEarFlap {
            0%, 100% {
              transform: rotate(0deg);
            }
            35% {
              transform: rotate(3deg);
            }
            65% {
              transform: rotate(-2deg);
            }
          }

          .fairhold-left-elephant {
            animation: fairholdLeftStepGreet 10s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite;
          }

          .fairhold-right-elephant {
            animation: fairholdRightStepGreet 10s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite;
          }

          .fairhold-tail {
            animation: fairholdTailSwivel 2.8s ease-in-out infinite;
            transform-origin: 136px 240px;
          }

          .fairhold-left-ear {
            animation: fairholdLeftEarFlap 3.4s ease-in-out infinite;
            transform-origin: 300px 130px;
          }

          .fairhold-right-ear {
            animation: fairholdRightEarFlap 3.4s ease-in-out infinite;
            transform-origin: 620px 150px;
          }
        `}</style>

        {/* LEFT ELEPHANT GROUP */}
        <g className="fairhold-left-elephant">
          {/* Left Elephant Body */}
          <image
            href="/images/fairhold_left.png"
            x={88}
            y={108}
            width={366}
            height={532}
            preserveAspectRatio="none"
          />

          {/* Left Elephant Ear (Gently moves/flaps on loop) */}
          <g className="fairhold-left-ear">
            <image
              href="/images/fairhold_left_ear.png"
              x={240}
              y={120}
              width={120}
              height={140}
              preserveAspectRatio="none"
            />
          </g>

          {/* Left Elephant Tail (Original authentic tail swiveling smoothly on loop) */}
          <g className="fairhold-tail">
            <image
              href="/images/fairhold_tail.png"
              x={88}
              y={240}
              width={52}
              height={245}
              preserveAspectRatio="none"
            />
          </g>
        </g>

        {/* RIGHT ELEPHANT GROUP */}
        <g className="fairhold-right-elephant">
          {/* Right Elephant Body */}
          <image
            href="/images/fairhold_right.png"
            x={454}
            y={134}
            width={366}
            height={507}
            preserveAspectRatio="none"
          />

          {/* Right Elephant Ear (Gently moves/flaps on loop) */}
          <g className="fairhold-right-ear">
            <image
              href="/images/fairhold_right_ear.png"
              x={560}
              y={140}
              width={120}
              height={140}
              preserveAspectRatio="none"
            />
          </g>
        </g>

        {/* FAIRHOLD CORPORATION WORDMARK (Rock-solid, no wobble, 100% crisp) */}
        <image
          href="/images/fairhold_text.png"
          x={876}
          y={79}
          width={5191}
          height={707}
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  );
}
