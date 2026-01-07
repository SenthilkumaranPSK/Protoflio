import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const NavLinkContent = ({ item, index, isMobile = false }: { item: any, index: number, isMobile?: boolean }) => (
    <motion.span
      animate={{ opacity: 1, y: 0 }}
      className={isMobile
        ? "block py-4 text-muted-foreground hover:text-foreground transition-all duration-300 font-bold text-xl uppercase tracking-widest text-center"
        : "nav-link text-[10px] lg:text-[11px] font-black tracking-[0.2em] cursor-pointer uppercase"}
    >
      {item.name}
    </motion.span>
  );

  const NavLink = ({ item, index, isMobile = false }: { item: any, index: number, isMobile?: boolean }) => {
    const isInternalAnchor = item.href.startsWith('#');

    const handleClick = (e: React.MouseEvent) => {
      if (isMobile) setIsMobileMenuOpen(false);

      if (isInternalAnchor) {
        if (isHomePage) {
          e.preventDefault();
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    return (
      <Link
        to={isInternalAnchor && !isHomePage ? `/${item.href}` : item.href}
        className="group"
        onClick={handleClick}
      >
        <NavLinkContent item={item} index={index} isMobile={isMobile} />
      </Link>
    );
  };

  return (
    <motion.nav
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "hsl(var(--background) / 0.82)" : "hsl(var(--background) / 0.4)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
          borderColor: isScrolled ? "hsl(var(--border) / 1)" : "hsl(var(--border) / 0.2)",
          padding: isScrolled ? "10px 32px" : "14px 40px",
          width: isScrolled ? "auto" : "fit-content",
          borderRadius: "100px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center border shadow-2xl transition-all duration-300 pointer-events-auto"
      >
        <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, index) => (
              <NavLink key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Mobile Menu Button Container */}
          <div className="md:hidden flex items-center">
            <button
              className="text-foreground p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/60 z-[-1] flex flex-col items-center justify-center p-8 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {navItems.map((item, index) => (
                <NavLink key={item.name} item={item} index={index} isMobile />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;




