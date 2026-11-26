"use client";

export default function RunsEverywhere() {
  return (
    <div className="w-full my-10">
      <div className="mb-5">
        <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
          Principles we’re building by
        </h2>
      </div>

      {/* 3 Principles Cards with matching blueprint aesthetic (title + desc + large dotted icon below) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Card 1: Admissions Based on Merit */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between min-h-[240px] shadow-2xs">
          <div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5 tracking-tight">
              Admissions Based on Merit
            </h3>
            <p className="text-[11.5px] sm:text-[12px] text-gray-500 leading-relaxed font-normal">
              A student’s admission should be decided by their results in competitive exams and hard work.
            </p>
          </div>

          {/* Dotted Merit Balance / Verified Medal Blueprint */}
          <div className="w-full flex justify-center items-center pt-6 pb-2 text-[#9e790d]">
            <svg width="78" height="78" viewBox="0 0 96 96" fill="none">
              {/* Outer dotted rosette / medal circle */}
              <circle
                cx="48"
                cy="44"
                r="24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
              />
              {/* Inner dotted core */}
              <circle
                cx="48"
                cy="44"
                r="15"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2 2"
                opacity="0.6"
              />
              {/* Characteristic indicator dots */}
              <circle cx="44" cy="44" r="2.5" fill="currentColor" />
              <circle cx="52" cy="44" r="2.5" fill="currentColor" opacity="0.6" />
              {/* Dotted ribbon tails */}
              <path
                d="M38 64L32 84L48 76L64 84L58 64"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Card 2: Inclusive Design */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between min-h-[240px] shadow-2xs">
          <div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5 tracking-tight">
              Inclusive Design
            </h3>
            <p className="text-[11.5px] sm:text-[12px] text-gray-500 leading-relaxed font-normal">
              With regional language support, accessible UI, and domain-trained AI guidance for all, we aim to give every student an equitable opportunity to succeed.
            </p>
          </div>

          {/* Dotted Accessible Network / Globe Compass Blueprint */}
          <div className="w-full flex justify-center items-center pt-6 pb-2 text-[#9e790d]">
            <svg width="78" height="78" viewBox="0 0 96 96" fill="none">
              {/* Dotted globe sphere */}
              <circle
                cx="48"
                cy="48"
                r="26"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
              />
              {/* Dotted latitude and longitude curves */}
              <ellipse
                cx="48"
                cy="48"
                rx="14"
                ry="26"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2.5 2.5"
                opacity="0.7"
              />
              <line
                x1="22"
                y1="48"
                x2="74"
                y2="48"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="2 2"
                opacity="0.7"
              />
              {/* Characteristic indicator dots */}
              <circle cx="44" cy="48" r="2.5" fill="currentColor" />
              <circle cx="52" cy="48" r="2.5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Card 3: Building for Efficiency */}
        <div className="border border-gray-200/90 rounded-[4px] p-5 bg-white flex flex-col justify-between min-h-[240px] shadow-2xs">
          <div>
            <h3 className="text-[13.5px] font-medium text-gray-950 mb-1.5 tracking-tight">
              Building for Efficiency
            </h3>
            <p className="text-[11.5px] sm:text-[12px] text-gray-500 leading-relaxed font-normal">
              By cutting out unnecessary manual steps and repetitive checks, we make admissions simpler and more efficient for everyone involved.
            </p>
          </div>

          {/* Dotted High-Efficiency Streamlined Pipeline / Engine Blueprint */}
          <div className="w-full flex justify-center items-center pt-6 pb-2 text-[#9e790d]">
            <svg width="78" height="78" viewBox="0 0 96 96" fill="none">
              {/* Dotted chassis / fast track loops */}
              <rect
                x="22"
                y="32"
                width="52"
                height="32"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
              />
              {/* Dotted direct throughput vector */}
              <line
                x1="14"
                y1="48"
                x2="82"
                y2="48"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2.5 2.5"
              />
              {/* Accelerated forward marker */}
              <polygon points="74,44 82,48 74,52" fill="currentColor" />
              {/* Characteristic indicator dots */}
              <circle cx="44" cy="48" r="2.5" fill="currentColor" />
              <circle cx="52" cy="48" r="2.5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
