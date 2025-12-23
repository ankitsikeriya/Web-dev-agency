'use client';
import { motion } from 'framer-motion';

import Terminal from './Terminal';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Your Vision,</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-orange glow-text">
                            Our Code.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
                        We craft high-end digital experiences that merge aesthetic brilliance with technical precision.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button className="px-8 py-4 bg-electric-blue text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,209,255,0.4)] hover:shadow-[0_0_30px_rgba(0,209,255,0.6)] transform hover:-translate-y-1">
                            Start Your Project
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                            View Our Work
                        </button>
                    </div>

                    <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center mt-12 text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Real-time Execution</h3>
                            <p className="text-gray-400 mb-6">
                                Watch your ideas come to life with our rapid development and deployment cycles. We build systems that are robust, scalable, and secure by default.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500 font-mono">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    System Online
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                                    v2.0.5 Stable
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-neon-orange rounded-full"></span>
                                    High Availability
                                </li>
                            </ul>
                        </div>
                        <Terminal />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
