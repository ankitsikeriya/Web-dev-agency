'use client';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                            <span className="text-electric-blue text-xl font-bold">&lt;</span>
                            <div className="w-4 h-4 bg-white rounded-full mx-0.5 relative">
                                <div className="absolute top-1 left-0.5 w-1 h-1 bg-electric-blue rounded-full"></div>
                                <div className="absolute top-1 right-0.5 w-1 h-1 bg-neon-orange rounded-full"></div>
                            </div>
                            <span className="text-neon-orange text-xl font-bold">&gt;</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xl tracking-wide">designedbydudes</span>
                            <span className="text-gray-400 text-[10px] tracking-wider uppercase">Crafting Modern Web Experiences</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
                            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                            <Link href="#contact" className="bg-neon-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(255,138,0,0.3)] hover:shadow-[0_0_25px_rgba(255,138,0,0.5)]">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0A0F1E] border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
                        <Link href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
                        <Link href="#contact" className="w-full text-left bg-neon-orange hover:bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium mt-4 block text-center">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
