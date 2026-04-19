import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 mt-4 md:mt-8 rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] relative">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000"
        alt="Warm modern office workspace"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1A16]/80 via-[#1F1A16]/40 to-transparent" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-16">
        <h1 className="font-display font-light text-[#F5F0E8] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl mb-3 md:mb-4">
          Your competitors are online. Are you?
        </h1>
        <p className="text-[#F5F0E8]/80 text-sm sm:text-base md:text-lg max-w-xl mb-5 md:mb-8">
          Bespoke websites, SaaS and automation for businesses that want to grow. Quietly.
        </p>
        <Link
          href="#audit"
          className="inline-flex items-center justify-center w-full sm:w-auto bg-[#F5F0E8] text-[#1F1A16] rounded-sm px-6 py-3.5 sm:py-3 text-sm font-medium hover:bg-[#E8DFD2] transition-colors min-h-[44px]"
        >
          Book a free audit
        </Link>
      </div>
    </div>
  );
}
