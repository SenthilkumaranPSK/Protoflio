import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import MouseGlow from './MouseGlow';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { EASE_BUTTER } from '@/lib/motion';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <MouseGlow />
            <Navigation />
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: EASE_BUTTER }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
