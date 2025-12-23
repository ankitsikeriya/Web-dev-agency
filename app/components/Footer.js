import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050810] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-electric-blue text-xl font-bold">&lt;</span>
                            <span className="text-white font-bold text-2xl">designedbydudes</span>
                            <span className="text-neon-orange text-xl font-bold">&gt;</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Crafting modern web experiences that drive growth and engagement. Your vision, our code.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-neon-orange transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-neon-orange transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-neon-orange transition-colors">Portfolio</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-neon-orange transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={16} className="text-electric-blue" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={16} className="text-electric-blue" />
                                <span>hello@designedbydudes.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin size={16} className="text-electric-blue" />
                                <span>123 Tech Park, Cyber City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 DesignedByDudes. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
