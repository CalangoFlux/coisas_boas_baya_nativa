"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Leaf, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { name: "Serviços Baya Nativa", href: "/servicos" },
    { name: "Educação Regenerativa", href: "/educacao" },
    { name: "Cacau Flor", href: "/cacau-flor" },
    { name: "Namoa", href: "/namoa" },
    { name: "Teia dos Povos", href: "/teia-dos-povos" },
  ]

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-emerald-100/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-emerald-100/60 rounded-full group-hover:bg-emerald-200/60 transition-colors">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xl font-bold text-emerald-900 hidden sm:block">Baya Nativa</span>
            <span className="text-lg font-bold text-emerald-900 sm:hidden">Baya</span>
          </Link>

          {/* Desktop Navigation - Collapsible Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={menuRef}>
              <Button
                variant="ghost"
                className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-medium hover:bg-emerald-50/30"
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              >
                <span>Nossos Universos</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isDesktopMenuOpen ? "rotate-180" : ""}`}
                />
              </Button>

              <AnimatePresence>
                {isDesktopMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100/30 py-2"
                  >
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50/30 transition-colors duration-200 font-medium rounded-lg mx-2"
                        onClick={() => setIsDesktopMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-emerald-50/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-emerald-700" />
            ) : (
              <Menu className="w-6 h-6 text-emerald-700" />
            )}
          </Button>
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
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200 px-3 py-2 hover:bg-emerald-50/30 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
