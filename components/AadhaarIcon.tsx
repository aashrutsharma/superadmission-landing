export default function AadhaarIcon({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Aadhaar"
      className={`inline-block h-[1.15em] w-[1.8em] align-[-0.22em] mx-1 bg-current ${className}`}
      style={{
        maskImage: "url('/images/aadhaar-dark.png')",
        WebkitMaskImage: "url('/images/aadhaar-dark.png')",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
