import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import MouseGlow from './MouseGlow';
import Footer from './Footer';
import BackToTop from './BackToTop';
import AmbientBackground from './AmbientBackground';
import CustomCursor from './CustomCursor';
import { EASE_BUTTER } from '@/lib/motion';
import { LenisProvider, useLenis } from '@/hooks/use-lenis';

const ScrollManager = () => {
    const location = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                const timer = setTimeout(() => {
                    if (lenis) {
                        try {
                            lenis.scrollTo(el, { offset: -70 });
                        } catch {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 150);
                return () => clearTimeout(timer);
            }
        }
    }, [location.pathname, location.hash, lenis]);

    return null;
};

const Layout = () => {
    const location = useLocation();

    return (
        <LenisProvider>
            <ScrollManager />
            <div className="relative min-h-screen bg-background text-foreground">
                <AmbientBackground />
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
                <CustomCursor />
            </div>
        </LenisProvider>
    );
};

export default Layout;
