"use client";

import Image from "next/image";

export default function ProductionCTA() {
  return (
    <div className="w-full my-10 rounded-[6px] border border-blue-100 bg-[#f8faff] p-6 sm:p-8 text-center flex flex-col items-center shadow-2xs">
      {/* Heading (matches site sans font, reduced font size) */}
      <h3 className="text-lg sm:text-[19px] font-medium tracking-tight text-gray-950 mb-2 max-w-xl">
        A team dedicated to fixing how India gets into college
      </h3>

      {/* Subtext */}
      <p className="text-[13px] text-gray-600 leading-relaxed font-normal max-w-xl mb-3">
        We are an ambitious independent team bringing together experience in large-scale software, AI systems, and education policy to create verified data systems, domain-trained AI, and public-scale admission infrastructure.
      </p>

      {/* Leadership attribution */}
      <p className="text-[13px] text-gray-900 font-medium mb-6">
        Led by <span className="underline underline-offset-4 decoration-gray-300">Aashrut Sharma</span> and <span className="underline underline-offset-4 decoration-gray-300">Unnati Vijay</span>
      </p>

      {/* Minimal Dotted/Dashed Logo Box (Matching Image 4) */}
      <div className="w-full max-w-xl border border-dashed border-gray-300/80 rounded-[4px] p-4 sm:p-5 bg-white/70 relative">
        <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-medium mb-3.5">
          TEAM FORMERLY FROM & AFFILIATED
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 flex-wrap text-gray-600">
          {/* Logo 1: IIT Bombay */}
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/Indian_Institute_of_Technology_Bombay_Logo.svg.svg"
              alt="IIT Bombay"
              width={18}
              height={18}
              className="h-4 w-auto object-contain grayscale"
            />
            <span className="font-sans font-medium text-gray-700 text-xs tracking-tight">IIT Bombay</span>
          </div>

          <span className="text-gray-300 text-[10px] select-none">•</span>

          {/* Logo 2: BITS Pilani */}
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/BITS_Pilani-Logo.svg"
              alt="BITS Pilani"
              width={18}
              height={18}
              className="h-4 w-auto object-contain grayscale"
            />
            <span className="font-sans font-medium text-gray-700 text-xs tracking-tight">BITS Pilani</span>
          </div>

          <span className="text-gray-300 text-[10px] select-none">•</span>

          {/* Logo 3: India Stack */}
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/indiastack.svg"
              alt="India Stack"
              width={18}
              height={18}
              className="h-4 w-auto object-contain grayscale"
            />
            <span className="font-sans font-medium text-gray-700 text-xs tracking-tight">India Stack</span>
          </div>

          <span className="text-gray-300 text-[10px] select-none">•</span>

          {/* Logo 4: DigiLocker */}
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/New Digilocker Icon.svg"
              alt="DigiLocker"
              width={18}
              height={18}
              className="h-4 w-auto object-contain grayscale"
            />
            <span className="font-sans font-medium text-gray-700 text-xs tracking-tight">DigiLocker</span>
          </div>
        </div>
      </div>
    </div>
  );
}
