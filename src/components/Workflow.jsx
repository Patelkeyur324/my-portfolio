import { processSteps } from "../constants";
import { motion } from "framer-motion";

const Workflow = ({ id }) => {
    return (
        <div id={id} className="mt-24 border-b border-neutral-800 pb-24">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.span
                    className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full px-4 py-1 text-sm font-medium uppercase tracking-widest mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Process
                </motion.span>
                <div className="overflow-hidden">
                    <motion.h2
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        How I{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
                            approach work
                        </span>
                    </motion.h2>
                </div>
                <motion.p
                    className="mt-5 max-w-xl mx-auto text-neutral-400 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    A repeatable process I've refined across projects — from first idea
                    to shipped product.
                </motion.p>
            </div>

            {/* Steps */}
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 hidden sm:block" />

                <div className="flex flex-col gap-12">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col sm:flex-row items-start gap-6 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                                }`}
                        >
                            {/* Step content */}
                            <motion.div
                                className={`flex-1 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-orange-500/30 transition-all duration-300 ${index % 2 === 0
                                        ? "sm:text-right sm:items-end"
                                        : "sm:text-left sm:items-start"
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    opacity: { duration: 1.2, ease: "easeOut" },
                                    x: { duration: 0.8, ease: "easeOut" }
                                }}
                                viewport={{ once: false, amount: 0.05 }}
                            >
                                <span className="text-5xl font-black text-neutral-800 leading-none">
                                    {step.step}
                                </span>
                                <h3 className="text-xl font-semibold mt-2 mb-2 text-neutral-100">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>

                            {/* Center dot */}
                            <div className="hidden sm:flex w-5 h-5 rounded-full bg-orange-500 border-4 border-neutral-950 z-10 flex-shrink-0 mt-8" />

                            {/* Spacer for opposite side */}
                            <div className="flex-1 hidden sm:block" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;