import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="mx-10 mt-8 rounded-xl overflow-hidden aspect-[21/9] relative">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000"
        alt="Warm modern office workspace"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1A16]/70 via-[#1F1A16]/30 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-16">
        <h1 className="font-display font-light text-[#F5F0E8] text-5xl lg:text-6xl leading-[1.05] max-w-2xl mb-4">
          Your competitors are online. Are you?
        </h1>
        <p className="text-[#F5F0E8]/80 text-lg max-w-xl mb-8">
          Bespoke websites, SaaS and automation for businesses that want to grow. Quietly.
        </p>
        <Link
          href="#audit"
          className="inline-flex items-center bg-[#F5F0E8] text-[#1F1A16] rounded-sm px-6 py-3 text-sm font-medium hover:bg-[#E8DFD2] transition-colors"
        >
          Book a free audit
        </Link>
      </div>
    </div>
  );
}
