import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = navItems
  .map((item) => item.href)
  .filter((href) => href.startsWith('#'))
  .map((href) => href.slice(1));

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomePage]);

  const NavLinkContent = ({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) => {
    const isActive = item.href === `#${activeSection}` || (item.href === '/' && isHomePage && !activeSection);
    return (
      <motion.span
        animate={{ opacity: 1, y: 0 }}
        className={isMobile
          ? `block py-4 transition-all duration-300 font-bold text-xl uppercase tracking-widest text-center ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`
          : `nav-link text-[10px] lg:text-[11px] font-black tracking-[0.2em] cursor-pointer uppercase ${isActive ? 'active text-primary' : ''}`}
      >
        {item.name}
      </motion.span>
    );
  };

  const NavLink = ({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) => {
    const isInternalAnchor = item.href.startsWith('#');

    const handleClick = (e: React.MouseEvent) => {
      if (isMobile) setIsMobileMenuOpen(false);

      if (isInternalAnchor) {
        if (isHomePage) {
          e.preventDefault();
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (item.href === '/' && isHomePage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    return (
      <Link
        to={isInternalAnchor && !isHomePage ? `/${item.href}` : item.href}
        className="group"
        onClick={handleClick}
      >
        <NavLinkContent item={item} isMobile={isMobile} />
      </Link>
    );
  };

  return (
    <motion.nav
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 pointer-events-none"
      />
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
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
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
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} isMobile />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;




