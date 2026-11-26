"use client";

import Image from "next/image";

export default function EnterpriseSecurity() {
  return (
    <div className="w-full my-10">
      <div className="mb-5">
        <h2 className="text-xl font-medium tracking-tight text-gray-950 mb-2">
          Compliance and Security
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed font-normal mb-6">
          All of this is being built with privacy, security and compliance in mind. Our implementation plans account for the DPDP Act, IT Act, 2000 and India Stack privacy protocols, with ISO/IEC 27001 as a security target. They also include user consent, data governance and operational safeguards.
        </p>

        {/* Monochrome Compliance & Standards Logos (Prominent, crisp, optimal size above the separator line) */}
        <div className="flex flex-wrap items-center gap-7 sm:gap-10 pb-6">
          {/* Emblem of India + DPDP Act */}
          <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/Emblem_of_India.svg"
              alt="Emblem of India"
              width={34}
              height={52}
              unoptimized
              className="h-8 sm:h-9 w-auto object-contain grayscale"
            />
            <span className="text-[12px] font-mono font-medium text-gray-700 tracking-tight">
              DPDP Act
            </span>
          </div>

          {/* ISO 27001 */}
          <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/iso 27001.png"
              alt="ISO/IEC 27001"
              width={160}
              height={70}
              unoptimized
              className="h-9 sm:h-10.5 w-auto object-contain grayscale"
            />
          </div>

          {/* SOC 2 */}
          <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/soc2 svg.svg"
              alt="SOC 2 Type II"
              width={40}
              height={40}
              unoptimized
              className="h-9 sm:h-10.5 w-auto object-contain grayscale"
            />
          </div>

          {/* India Stack */}
          <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/indiastack.svg"
              alt="India Stack"
              width={160}
              height={45}
              unoptimized
              className="h-6 sm:h-6.5 w-auto object-contain grayscale"
            />
          </div>
        </div>

        {/* Separator line between Compliance and Team Dedicated */}
        <div className="border-t border-gray-100 w-full" />
      </div>
    </div>
  );
}
