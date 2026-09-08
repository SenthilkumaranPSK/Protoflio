import { motion } from 'framer-motion';
import { Download, ExternalLink, ArrowLeft, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/motion';

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
                
                {/* Header Action Bar */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/70"
                >
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="rounded-xl gap-1.5 text-muted-foreground hover:text-foreground" asChild>
                            <Link to="/">
                                <ArrowLeft size={16} />
                                Back
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                                    Resume
                                </h1>
                                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">
                                    <Sparkles size={10} />
                                    Latest
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Senthilkumaran P · B.Tech AI &amp; DS (May 2026 Grad · 7.85 CGPA)
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-xl border-border hover:bg-secondary gap-1.5 font-semibold text-xs"
                            asChild
                        >
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={14} />
                                Open in Tab
                            </a>
                        </Button>

                        <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl gap-1.5 text-xs shadow-md shadow-primary/20"
                            asChild
                        >
                            <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                                <Download size={14} />
                                Download PDF
                            </a>
                        </Button>
                    </div>
                </motion.div>

                {/* Resume Viewer Container */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-[calc(100vh-220px)] min-h-[500px] rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card/60 backdrop-blur-md card-glow"
                >
                    <iframe
                        src="/resume.pdf#toolbar=1"
                        className="w-full h-full border-none"
                        title="Senthilkumaran P — Resume"
                    />
                </motion.div>

                {/* Mobile Quick Download Bar */}
                <div className="mt-6 text-center sm:hidden">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-2xl py-6 font-bold text-base shadow-xl shadow-primary/25" asChild>
                        <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                            <Download size={18} />
                            Download Resume (PDF)
                        </a>
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ResumePage;
