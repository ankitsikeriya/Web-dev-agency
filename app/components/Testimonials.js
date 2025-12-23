'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content: "DesignedByDudes transformed our online presence. Their attention to detail and modern design approach helped us increase conversions by 200%.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Founder, InnovateLab",
            content: "The best web agency we've worked with. The team is professional, responsive, and incredibly talented. Highly recommended!",
            rating: 5
        },
        {
            name: "Emily Davis",
            role: "Marketing Director, GrowthCo",
            content: "Stunning visuals and seamless performance. Our new website perfectly captures our brand identity.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 px-4 relative bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-white">Client</span> <span className="text-neon-orange">Testimonials</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0A0F1E] border border-white/10 rounded-2xl p-8 relative hover:border-neon-orange/30 transition-all duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-neon-orange fill-neon-orange" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
