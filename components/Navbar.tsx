import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Vidhate Events"
            width={60}
            height={60}
          />

          <div>
            <h1 className="text-xl font-bold text-[#090932]">
              Vidhate Events
            </h1>

            <p className="text-sm text-gray-500">
              Creating Memorable Celebrations
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}