import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">

            {/* Resume Viewer Container */}
            <main className="flex-grow pt-28 pb-12 px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto h-[calc(100vh-160px)] rounded-3xl overflow-hidden border border-border shadow-2xl bg-card/50 backdrop-blur-sm"
                >
                    <iframe
                        src="/resume.pdf#toolbar=0"
                        className="w-full h-full border-none"
                        title="Resume Viewer"
                    />
                </motion.div>

                <div className="mt-8 text-center sm:hidden px-4">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-2xl py-6 font-bold text-lg shadow-xl shadow-primary/20" asChild>
                        <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                            <Download size={20} />
                            Download Resume
                        </a>
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default ResumePage;
