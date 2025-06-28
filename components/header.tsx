"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    {
      name: "Serviços Baya Nativa",
      href: "/servicos",
      description: "Consultorias, vivências e assessorias regenerativas",
    },
    {
      name: "Educação Regenerativa",
      href: "/educacao",
      description: "Educação libertadora e permacultura",
    },
    {
      name: "Produtos das Florestas",
      href: "/produtos",
      description: "Sabores e medicinas da natureza",
      submenu: [
        { name: "Cacau Flor", href: "/cacau-flor", description: "Chocolateria artesanal sofisticada" },
        { name: "Namoa", href: "/namoa", description: "Farmácia nativa e superalimentos" },
      ],
    },
    {
      name: "Comunidades e Coletivos",
      href: "/comunidades",
      description: "Redes de articulação e fortalecimento",
      submenu: [{ name: "Teia dos Povos", href: "/teia-dos-povos", description: "Rede de povos originários" }],
    },
    { name: "Agenda", href: "/agenda", description: "Eventos e vivências" },
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
        setOpenSubmenu(null)
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
        setOpenSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName)
  }

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
              <span className="text-lg sm:text-xl font-bold text-emerald-900 leading-tight">Baya Nativa</span>
              <span className="text-xs text-emerald-600 leading-tight hidden lg:block">Coisas Boas da Floresta</span>
            </motion.div>
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-emerald-100/30 py-2 overflow-hidden"
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        {item.submenu ? (
                          <div className="relative">
                            <button
                              className="w-full text-left px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50/30 transition-colors duration-200 font-medium rounded-lg mx-2 flex items-center justify-between"
                              onClick={() => handleSubmenuToggle(item.name)}
                            >
                              <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-xs text-emerald-600">{item.description}</div>
                              </div>
                              <motion.div
                                animate={{ rotate: openSubmenu === item.name ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="w-4 h-4" />
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {openSubmenu === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 border-l-2 border-emerald-200 overflow-hidden"
                                >
                                  {item.submenu.map((subItem, subIndex) => (
                                    <motion.div
                                      key={subItem.name}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="block px-4 py-2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50/20 transition-colors duration-200 rounded-lg mx-2"
                                        onClick={() => {
                                          setIsDesktopMenuOpen(false)
                                          setOpenSubmenu(null)
                                        }}
                                      >
                                        <div className="font-medium">{subItem.name}</div>
                                        <div className="text-xs text-emerald-500">{subItem.description}</div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50/30 transition-colors duration-200 font-medium rounded-lg mx-2"
                            onClick={() => setIsDesktopMenuOpen(false)}
                          >
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-emerald-600">{item.description}</div>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button - Área de toque maior */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-emerald-50/30 p-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
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

        {/* Mobile Navigation - Melhorado para idosos */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-emerald-100/30 overflow-hidden"
            >
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          className="w-full text-left text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200 px-4 py-4 hover:bg-emerald-50/30 rounded-lg flex items-center justify-between min-h-[56px] active:bg-emerald-100/50"
                          onClick={() => handleSubmenuToggle(item.name)}
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-base leading-relaxed">{item.name}</div>
                            <div className="text-sm text-emerald-600 leading-relaxed">{item.description}</div>
                          </div>
                          <motion.div
                            animate={{ rotate: openSubmenu === item.name ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-3 flex-shrink-0"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 border-l-2 border-emerald-200 overflow-hidden"
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="block text-emerald-600 hover:text-emerald-800 transition-colors duration-200 px-4 py-4 hover:bg-emerald-50/20 rounded-lg min-h-[52px] flex items-center active:bg-emerald-100/40"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false)
                                      setOpenSubmenu(null)
                                    }}
                                  >
                                    <div className="flex-1">
                                      <div className="font-medium text-base leading-relaxed">{subItem.name}</div>
                                      <div className="text-sm text-emerald-500 leading-relaxed">
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200 px-4 py-4 hover:bg-emerald-50/30 rounded-lg block min-h-[56px] flex items-center active:bg-emerald-100/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-base leading-relaxed">{item.name}</div>
                          <div className="text-sm text-emerald-600 leading-relaxed">{item.description}</div>
                        </div>
                      </Link>
                    )}
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
