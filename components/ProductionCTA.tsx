"use client";

import Image from "next/image";

export default function ProductionCTA() {
  return (
    <div className="w-full my-10 rounded-[4px] border border-gray-200/90 bg-white p-6 sm:p-8 text-center flex flex-col items-center shadow-2xs">
      {/* Heading (matches site sans font, reduced font size) */}
      <h3 className="text-lg sm:text-[19px] font-medium tracking-tight text-gray-950 mb-2 max-w-xl">
        A team dedicated to fixing how India gets into college
      </h3>

      {/* Subtext */}
      <p className="text-[13px] text-gray-600 leading-relaxed font-normal max-w-xl mb-3.5">
        We are an ambitious independent team bringing together experience in large-scale software, AI systems, and education policy to create verified data systems, domain-trained AI, and public-scale admission infrastructure.
      </p>

      {/* Leadership attribution with profile photos */}
      <p className="text-[13px] text-gray-900 font-medium mb-6 flex items-center justify-center flex-wrap gap-1">
        <span>Led by</span>
        <Image
          src="/images/Aashrut.jpeg"
          alt="Aashrut Sharma"
          width={40}
          height={40}
          unoptimized
          className="w-[1.3em] h-[1.3em] rounded-full object-cover inline-block align-middle mx-0.5 shadow-2xs border border-gray-200/90"
        />
        <span className="underline underline-offset-4 decoration-gray-300">Aashrut Sharma</span>
        <span className="mx-0.5">and</span>
        <Image
          src="/images/Unnati.png"
          alt="Unnati Vijay"
          width={40}
          height={40}
          unoptimized
          className="w-[1.3em] h-[1.3em] rounded-full object-cover inline-block align-middle mx-0.5 shadow-2xs border border-gray-200/90"
        />
        <span className="underline underline-offset-4 decoration-gray-300">Unnati Vijay</span>
      </p>

      {/* Inside Logo Box (Uniform rounded-[4px], simple border, all white background) */}
      <div className="w-full max-w-xl border border-gray-200/90 rounded-[4px] p-5 sm:p-6 bg-white relative shadow-2xs">
        <div className="text-[11px] font-mono text-gray-400 font-medium mb-4 text-center">
          team formerly from & affiliated
        </div>

        <div className="flex items-center justify-center gap-7 sm:gap-9 md:gap-10 flex-wrap text-gray-600">
          {/* Logo 1: IIT Delhi (Logo + Text) */}
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/indian-institute-of-technology-delhi-seeklogo.png"
              alt="IIT Delhi"
              width={140}
              height={140}
              unoptimized
              className="h-7 sm:h-8.5 w-auto object-contain grayscale"
            />
            <span className="font-sans font-medium text-gray-800 text-[12.5px] tracking-tight">IIT Delhi</span>
          </div>

          {/* Logo 2: Stanford (Logo only, larger) */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/stanford.png"
              alt="Stanford"
              width={220}
              height={80}
              unoptimized
              className="h-8 sm:h-10 w-auto object-contain grayscale"
            />
          </div>

          {/* Logo 3: BITS Pilani (Logo + Stacked Text: Dubai Campus) */}
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/BITS_Pilani-Logo.svg"
              alt="BITS Pilani"
              width={80}
              height={80}
              unoptimized
              className="h-6 sm:h-7 w-auto object-contain grayscale"
            />
            <div className="flex flex-col text-[10px] leading-[1.15] font-medium text-gray-700 tracking-tight text-left">
              <span>Dubai</span>
              <span>Campus</span>
            </div>
          </div>

          {/* Logo 4: Seneca (Logo only) */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/seneca-logo.png"
              alt="Seneca"
              width={180}
              height={55}
              unoptimized
              className="h-5 sm:h-6 w-auto object-contain grayscale"
            />
          </div>

          {/* Logo 5: NYU (Logo only) */}
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/images/Nyu_short_color.svg.webp"
              alt="NYU"
              width={160}
              height={50}
              unoptimized
              className="h-5 sm:h-6 w-auto object-contain grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
