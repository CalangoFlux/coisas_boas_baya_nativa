"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { name: "Serviços Baya Nativa", href: "/servicos" },
    { name: "Educação Regenerativa", href: "/educacao" },
    { name: "Cacau Flor", href: "/cacau-flor" },
    { name: "Namoa", href: "/namoa" },
    { name: "Teia dos Povos", href: "/teia-dos-povos" },
    { name: "Agenda", href: "/agenda" },
  ]

  // Handle scroll for retractable header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update scrolled state
      setIsScrolled(currentScrollY > 20)

      // Handle header visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false)
        setIsDesktopMenuOpen(false)
        setIsMobileMenuOpen(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.60)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-emerald-200/50 shadow-lg" : "border-emerald-100/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img
                src="/images/baya-nativa-logo.png"
                alt="Baya Nativa"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
            <motion.div className="flex flex-col" whileHover={{ scale: 1.02 }}>
              <span className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight hidden sm:block">
                Baya Nativa
              </span>
              <span className="text-xs text-emerald-600 leading-tight hidden lg:block">Coisas Boas da Floresta</span>
            </motion.div>
            <motion.span className="text-lg font-bold text-emerald-900 sm:hidden" whileHover={{ scale: 1.02 }}>
              Baya
            </motion.span>
          </Link>

          {/* Desktop Navigation - Collapsible Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={menuRef}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-medium hover:bg-emerald-50/30 transition-all duration-200"
                  onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                >
                  <span>Nossos Universos</span>
                  <motion.div animate={{ rotate: isDesktopMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <AnimatePresence>
                {isDesktopMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100/30 py-2 overflow-hidden"
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50/30 transition-colors duration-200 font-medium rounded-lg mx-2"
                          onClick={() => setIsDesktopMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-emerald-50/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-emerald-700" />
                ) : (
                  <Menu className="w-6 h-6 text-emerald-700" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-emerald-100/30 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200 px-3 py-2 hover:bg-emerald-50/30 rounded-lg block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
