"use client";

export default function RunsEverywhere() {
  return (
    <div className="w-full my-12">
      <div className="mb-6">
        <h2 className="text-xl font-medium tracking-tight text-gray-950 mb-2">
          Principles we’re building by
        </h2>
      </div>

      {/* 3 Principles with separator lines in between (leaving card box format) */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/90 py-1">
        {/* Item 1: Admissions Based on Merit */}
        <div className="py-6 md:py-2 md:px-7 first:pt-0 md:first:pl-0 md:last:pr-0 flex flex-col justify-between min-h-[250px]">
          <div>
            <h3 className="text-[15px] font-medium text-gray-950 mb-2 tracking-tight">
              Admissions Based on Merit
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-normal">
              A student’s admission should be decided by their results in competitive exams and hard work.
            </p>
          </div>

          {/* Animated Merit Balance Scale Vector */}
          <div className="w-full flex justify-center items-center pt-8 pb-3 text-[#9e790d]">
            <svg
              width="88"
              height="88"
              viewBox="0 0 96 96"
              fill="none"
              className="overflow-visible select-none pointer-events-none"
            >
              {/* Central Pillar & Pedestal */}
              <line
                x1="48"
                y1="22"
                x2="48"
                y2="76"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
              />
              <path
                d="M36 78h24M42 82h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="48" cy="22" r="3" fill="currentColor" />

              {/* Gently Tilting Balance Beam */}
              <g
                style={{
                  transformOrigin: "48px 22px",
                  animation: "meritBalance 4.8s ease-in-out infinite",
                }}
              >
                {/* Horizontal Beam */}
                <line
                  x1="22"
                  y1="22"
                  x2="74"
                  y2="22"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="22" cy="22" r="2" fill="currentColor" />
                <circle cx="74" cy="22" r="2" fill="currentColor" />

                {/* Left Pan Strings & Pan */}
                <g style={{ animation: "meritPanLeft 4.8s ease-in-out infinite" }}>
                  <path
                    d="M22 23L13 46M22 23L31 46"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.8"
                  />
                  <path
                    d="M10 46Q22 53 34 46Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  {/* Calibrated Merit Tokens */}
                  <circle cx="22" cy="44" r="2.5" fill="currentColor" />
                </g>

                {/* Right Pan Strings & Pan */}
                <g style={{ animation: "meritPanRight 4.8s ease-in-out infinite" }}>
                  <path
                    d="M74 23L65 46M74 23L83 46"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.8"
                  />
                  <path
                    d="M62 46Q74 53 86 46Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  {/* Calibrated Merit Tokens */}
                  <circle cx="74" cy="44" r="2.5" fill="currentColor" />
                </g>
              </g>

              {/* Fulcrum indicator diamond */}
              <polygon
                points="48,16 52,22 48,28 44,22"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>

        {/* Item 2: Inclusive Design */}
        <div className="py-6 md:py-2 md:px-7 md:first:pl-0 md:last:pr-0 flex flex-col justify-between min-h-[250px]">
          <div>
            <h3 className="text-[15px] font-medium text-gray-950 mb-2 tracking-tight">
              Inclusive Design
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-normal">
              With regional language support, accessible UI, and domain-trained AI guidance for all, we aim to give every student an equitable opportunity to succeed.
            </p>
          </div>

          {/* Animated Inclusive Global Mesh Vector */}
          <div className="w-full flex justify-center items-center pt-8 pb-3 text-[#9e790d]">
            <svg
              width="88"
              height="88"
              viewBox="0 0 96 96"
              fill="none"
              className="overflow-visible select-none pointer-events-none"
            >
              {/* Central Base Coordinates Globe */}
              <circle
                cx="48"
                cy="48"
                r="26"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="2.5 2.5"
                opacity="0.5"
              />
              <line
                x1="22"
                y1="48"
                x2="74"
                y2="48"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.6"
              />

              {/* Continuously Rotating Orbital Latitude Ring */}
              <g
                style={{
                  transformOrigin: "48px 48px",
                  animation: "globeOrbit 16s linear infinite",
                }}
              >
                <ellipse
                  cx="48"
                  cy="48"
                  rx="26"
                  ry="12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeDasharray="3 2"
                  opacity="0.85"
                />
                <circle cx="74" cy="48" r="2.5" fill="currentColor" />
                <circle cx="22" cy="48" r="2.5" fill="currentColor" />
              </g>

              {/* Counter Orbital Ring for 3D depth */}
              <g
                style={{
                  transformOrigin: "48px 48px",
                  animation: "globeOrbit 22s linear infinite reverse",
                }}
              >
                <ellipse
                  cx="48"
                  cy="48"
                  rx="12"
                  ry="26"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.6"
                />
              </g>

              {/* Pulsing Regional Inclusion Hub Nodes */}
              <g
                style={{
                  transformOrigin: "48px 48px",
                  animation: "nodePulse 2.8s ease-in-out infinite",
                }}
              >
                <circle cx="48" cy="48" r="4.5" fill="currentColor" />
                <circle cx="48" cy="32" r="2" fill="currentColor" opacity="0.8" />
                <circle cx="48" cy="64" r="2" fill="currentColor" opacity="0.8" />
                <circle cx="34" cy="48" r="2" fill="currentColor" opacity="0.8" />
                <circle cx="62" cy="48" r="2" fill="currentColor" opacity="0.8" />
              </g>
            </svg>
          </div>
        </div>

        {/* Item 3: Building for Efficiency */}
        <div className="py-6 md:py-2 md:px-7 last:pb-0 md:first:pl-0 md:last:pr-0 flex flex-col justify-between min-h-[250px]">
          <div>
            <h3 className="text-[15px] font-medium text-gray-950 mb-2 tracking-tight">
              Building for Efficiency
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed font-normal">
              By cutting out unnecessary manual steps and repetitive checks, we make admissions simpler and more efficient for everyone involved.
            </p>
          </div>

          {/* Animated High-Velocity Streamlined Pipeline Engine Vector */}
          <div className="w-full flex justify-center items-center pt-8 pb-3 text-[#9e790d]">
            <svg
              width="88"
              height="88"
              viewBox="0 0 96 96"
              fill="none"
              className="overflow-visible select-none pointer-events-none"
            >
              {/* Outer Streamlined Conduit Body */}
              <rect
                x="18"
                y="33"
                width="60"
                height="30"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 2"
                opacity="0.5"
              />

              {/* Continuous Flowing Stream Track */}
              <line
                x1="12"
                y1="48"
                x2="80"
                y2="48"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                style={{ animation: "streamFlow 1.6s linear infinite" }}
              />

              {/* Accelerated Pulse Travelling Through Conduit */}
              <g
                style={{
                  transformOrigin: "48px 48px",
                  animation: "particleFlow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                }}
              >
                <circle cx="36" cy="48" r="3.5" fill="currentColor" />
                <circle cx="28" cy="48" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="22" cy="48" r="1.2" fill="currentColor" opacity="0.25" />
              </g>

              {/* Instant Output Acceleration Arrow */}
              <polygon points="76,43 85,48 76,53" fill="currentColor" />

              {/* Parallel Synchronized Guide rails */}
              <line
                x1="26"
                y1="39"
                x2="66"
                y2="39"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.4"
              />
              <line
                x1="26"
                y1="57"
                x2="66"
                y2="57"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
