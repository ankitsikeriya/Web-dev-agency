'use client';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
    const starterFeatures = [
        "5 Pages Website (Full Responsive Design)",
        "Free Domain Name (.com/.in/.co.in)",
        "Unlimited Images & Videos",
        "SEO Ready Website With 25 to 40 Keywords",
        "Free Logo Design",
        "Google Map/ Business Listing",
        "100% Responsive Website",
        "Admin Panel Available (Full Access)",
        "Payment Gateway Integration",
        "Cloudflare Security",
        "Social Media Pages Integration",
        "Call and WhatsApp Button Integration",
        "Inquiry Form With Email Notification",
        "Live Chat Software",
        "Every 48 Hours Auto Back-up",
        "24/7 Phone/Email/Chat Support"
    ];

    const proFeatures = [
        "10 Pages Website (Full Responsive Design)",
        "Free Domain Name (.com/.in/.co.in)",
        "Unlimited Images & Videos",
        "SEO Ready Website With 50 to 60 Keywords",
        "Free Logo Design",
        "Google Map/ Business Listing",
        "100% Responsive Website",
        "Admin Panel Available (Full Access)",
        "Payment Gateway Integration",
        "Cloudflare Security",
        "Social Media Pages Integration",
        "Call and WhatsApp Button Integration",
        "Inquiry Form With Email Notification",
        "Live Chat Software",
        "Every 48 Hours Auto Back-up",
        "24/7 Phone/Email/Chat Support"
    ];

    return (
        <section id="pricing" className="py-20 px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-white">Our Pricing</span> <span className="text-neon-orange">Plans</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transparent pricing for every stage of your business growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Starter Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">STARTER PACKAGE</h3>
                        <div className="text-4xl font-bold text-neon-orange mb-6">Rs 4999</div>

                        <ul className="space-y-3 mb-8">
                            {starterFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-electric-blue flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-transparent border border-electric-blue text-electric-blue font-bold rounded-xl hover:bg-electric-blue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,209,255,0.1)] hover:shadow-[0_0_25px_rgba(0,209,255,0.4)]">
                            BOOK FOR FREE NOW
                        </button>
                    </motion.div>

                    {/* Professional Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border-2 border-neon-orange/50 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-[0_8px_32px_0_rgba(255,138,0,0.15)]"
                    >
                        <div className="absolute top-0 right-0 bg-neon-orange text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
                            BEST VALUE
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">PROFESSIONAL PACKAGE</h3>
                        <div className="text-4xl font-bold text-neon-orange mb-6">Rs 7999</div>

                        <ul className="space-y-3 mb-8">
                            {proFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-neon-orange flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-neon-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,138,0,0.3)] hover:shadow-[0_0_30px_rgba(255,138,0,0.5)]">
                            BOOK FOR FREE NOW
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
