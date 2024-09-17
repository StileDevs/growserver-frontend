import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  });
  const navbarVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 }
  };
  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  };

  useEffect(() => setMounted(true), []);
  return (
    <motion.nav
      className="fixed w-full bg-background border-b z-50"
      variants={navbarVariants}
      animate={isNavbarVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              GrowServer
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary">
              Features
            </a>
            <a href="#cta" className="text-muted-foreground hover:text-primary">
              Contact
            </a>
            <Button size="sm">Get Started</Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted &&
                (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted &&
                (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </Button>
            <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        className="md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
          <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary">
            About
          </a>
          <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary">
            Features
          </a>
          <a href="#cta" className="block px-3 py-2 text-muted-foreground hover:text-primary">
            Contact
          </a>
          <Button size="sm" className="w-full mt-2">
            Get Started
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
