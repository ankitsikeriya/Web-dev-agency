'use client';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Globe, Smartphone, Search } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "High-performance websites built with Next.js and React.",
            icon: <Code className="w-8 h-8 text-electric-blue" />,
            colSpan: "md:col-span-2",
            bg: "bg-gradient-to-br from-white/5 to-white/0"
        }, 
        {
            title: "UI/UX Design",
            description: "Intuitive interfaces that delight users.",
            icon: <Palette className="w-8 h-8 text-neon-orange" />,
            colSpan: "md:col-span-1" ,
            bg: "bg-white/5"
        },
        {
            title: "SEO Optimization",
            description: "Rank higher and drive organic traffic.",
            icon: <Search className="w-8 h-8 text-green-400" />,
            colSpan: "md:col-span-1",
            bg: "bg-white/5" 
        }, 
        {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications.",
            icon: <Smartphone className="w-8 h-8 text-purple-400" />,
            colSpan: "md:col-span-2", 
            bg: "bg-gradient-to-bl from-white/5 to-white/0"
        },
    ];
 
    return (
        <section id="services" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Our</span> <span className="text-electric-blue">Services</span>
                    </h2> 
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.colSpan} ${service.bg} backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-electric-blue/30 transition-all duration-300 group hover:transform hover:-translate-y-1`}
                        >
                            <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
