'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
    const [text, setText] = useState('');
    const fullText = [
        "> Initializing Design System...",
        "> Loading Premium Assets...",
        "> Status: Building MSE Portfolio... Done.",
        "> Ready to Deploy."
    ];
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < fullText.length) {
            if (charIndex < fullText[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setText(prev => {
                        const lines = prev.split('\n');
                        lines[lines.length - 1] = fullText[lineIndex].substring(0, charIndex + 1);
                        return lines.join('\n');
                    });
                    setCharIndex(prev => prev + 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setLineIndex(prev => prev + 1);
                    setCharIndex(0);
                    setText(prev => prev + '\n');
                }, 500);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-[#0A0F1E] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-sm"
        >
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-electric-blue">&lt;</span>
                    <span>terminal</span>
                    <span className="text-neon-orange">&gt;</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-48 overflow-y-auto">
                <pre className="text-green-400 whitespace-pre-wrap font-mono leading-relaxed">
                    {text}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-green-400 align-middle ml-1"
                    />
                </pre>
            </div>
        </motion.div>
    );
}
