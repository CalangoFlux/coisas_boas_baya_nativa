"use client"

import type React from "react"
import Link from "next/link"

import { motion } from "framer-motion"
import { Coffee, Heart, ShoppingCart, Star, Award, Instagram, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import CartDrawer from "@/components/cart-drawer"
import CartButton from "@/components/cart-button"

export default function CacauFlorPage() {
  const { addItem } = useCart("Cacau Flor")

  const parsePrice = (priceString: string) => {
    // Pega o primeiro preço se houver múltiplos valores
    const firstPrice = priceString.split("/")[0]
    return Number.parseFloat(firstPrice.replace("R$ ", "").replace(",", "."))
  }

  const products = [
    {
      id: "chocolate-70",
      name: "Chocolate 70%",
      description: "Chocolate artesanal com 70% de cacau, equilibrio perfeito entre amargor e doçura",
      price: 8.0,
      priceDisplay: "R$ 8,00",
      weight: "10g",
      image: "/images/cacau-flor-products-1.jpg",
      category: "Chocolate",
    },
    {
      id: "chocolate-100",
      name: "Chocolate 100%",
      description: "Chocolate puro, sem adição de açúcar. Para os verdadeiros apreciadores",
      price: 9.0,
      priceDisplay: "R$ 9,00",
      weight: "10g",
      image: "/images/cacau-flor-products-2.jpg",
      category: "Chocolate",
    },
    {
      id: "licor-mel-cacau",
      name: "Licor Mel de Cacau",
      description: "Licor artesanal que combina a doçura do mel com a intensidade do cacau",
      price: 35.0,
      priceDisplay: "R$ 35,00",
      weight: "250ml",
      image: "/images/cacau-flor-products-4.jpg",
      category: "Licor",
    },
    {
      id: "nibs-cacau",
      name: "Nibs de Cacau 100%",
      description: "Pedacinhos puros de cacau torrado, crocantes e intensos",
      price: 25.0,
      priceDisplay: "R$ 25,00",
      weight: "100g",
      image: "/images/cacau-flor-products-5.jpg",
      category: "Nibs",
    },
    {
      id: "cupuacu-nibs",
      name: "Cupuaçu + Nibs",
      description: "Combinação exótica de cupuaçu cremoso com nibs crocantes",
      price: 12.0,
      priceDisplay: "R$ 12,00",
      weight: "10g",
      image: "/images/cacau-flor-products-3.jpg",
      category: "Especial",
    },
    {
      id: "chocolate-gourmet",
      name: "Chocolate Gourmet",
      description: "Linha premium com ingredientes selecionados e processo artesanal refinado",
      price: 15.0,
      priceDisplay: "R$ 15,00",
      weight: "10g",
      image: "/images/cacau-flor-products-3.jpg",
      category: "Premium",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f2edda" }}>
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        
        .font-sarlotte {
          font-family: 'Playfair Display', serif;
        }
        
        .font-arboria {
          font-family: 'Inter', sans-serif;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
          }
        }

        .icon-float {
          animation: float 3s ease-in-out infinite;
        }

        .icon-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .icon-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <Header />

      {/* Cart Button - Fixed Top Right */}
      <div className="fixed top-20 right-4 z-40">
        <CartButton brand="Cacau Flor" brandColor="#3b2f2f" className="text-white shadow-lg" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden">
        {/* Background com a nova imagem */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/cacau-flor-background.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#f2edda]/60 to-[#f2edda]/40"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Nova Logo da Cacau Flor */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-8"
              >
                <img
                  src="/images/cacau-flor-logo-new.png"
                  alt="CacauFlor Chocolateria"
                  className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto max-w-[90vw] object-contain"
                />
              </motion.div>
            </div>

            <p
              className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 font-medium font-arboria"
              style={{ color: "#3b2f2f" }}
            >
              Criada para amantes de chocolates feitos artesanalmente, a CacauFlor nasceu para trazer ainda mais
              sofisticação e desejo ao produto. Feitos com matéria-prima nobre, os produtos são verdadeiras obras de
              arte em beleza e sabor.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 shadow-sm"
                style={{ borderColor: "#3b2f2f" }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Award className="w-5 h-5" style={{ color: "#3b2f2f", opacity: 0.8 }} />
                </motion.div>
                <span className="font-semibold font-arboria" style={{ color: "#3b2f2f" }}>
                  Artesanal
                </span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 shadow-sm"
                style={{ borderColor: "#b22121" }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Heart className="w-5 h-5" style={{ color: "#b22121", opacity: 0.8 }} />
                </motion.div>
                <span className="font-semibold font-arboria" style={{ color: "#3b2f2f" }}>
                  Feito com Amor
                </span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border-2 shadow-sm"
                style={{ borderColor: "#3b2f2f" }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.7, 0.95, 0.7],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: "#3b2f2f", opacity: 0.8 }} />
                </motion.div>
                <span className="font-semibold font-arboria" style={{ color: "#3b2f2f" }}>
                  Sofisticado
                </span>
              </div>
            </div>

            {/* Instagram Button - Centralizado com cor trocada */}
            <div className="flex justify-center mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="https://www.instagram.com/cacauflornibs?igsh=MnB6YjhjcTIybzNr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="inline-flex items-center gap-3 bg-transparent border-2 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-arboria"
                    style={
                      {
                        borderColor: "#e47428",
                        color: "#e47428",
                        "--tw-text-opacity": "1",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e47428"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#e47428"
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -4, 0],
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Instagram className="w-6 h-6" style={{ opacity: 0.9 }} />
                    </motion.div>
                    <span>@cacauflornibs</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Movida para antes dos produtos */}
      <section className="py-16 px-4" style={{ backgroundColor: "#3b2f2f" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sarlotte">A Arte do Chocolate</h2>
            <p className="text-xl leading-relaxed mb-6 max-w-4xl mx-auto font-arboria" style={{ color: "#f2edda" }}>
              A Chocolateria CacauFlor nasceu da paixão por criar chocolates que são verdadeiras obras de arte. Cada
              produto é cuidadosamente elaborado com matéria-prima nobre e técnicas artesanais refinadas.
            </p>
            <p
              className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-arboria"
              style={{ color: "#f2edda", opacity: 0.9 }}
            >
              Nosso compromisso é oferecer uma experiência sensorial única, onde cada mordida revela camadas complexas
              de sabor e a dedicação de quem faz com amor.
            </p>

            {/* Tagline da marca com efeito chocolate simplificado */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-3xl mx-auto">
              <p
                className="text-center text-2xl md:text-3xl font-bold tracking-wider font-arboria"
                style={{
                  color: "#f2edda",
                  textShadow: "2px 2px 4px #3b2f2f, 4px 4px 8px rgba(0,0,0,0.3)",
                  filter: "drop-shadow(0 2px 4px rgba(228, 116, 40, 0.3))",
                }}
              >
                Feito artesanalmente com amor
              </p>
              <div
                className="w-24 h-1 mx-auto mt-4 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #e47428 0%, #b22121 50%, #e47428 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#b22121" }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
                </motion.div>
                <h4 className="font-semibold text-white text-lg mb-2 font-sarlotte">Feito com Amor</h4>
                <p className="font-arboria" style={{ color: "#f2edda" }}>
                  Cada produto carrega nossa paixão e dedicação
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e47428" }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 0.95, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Award className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
                </motion.div>
                <h4 className="font-semibold text-white text-lg mb-2 font-sarlotte">Matéria-Prima Nobre</h4>
                <p className="font-arboria" style={{ color: "#f2edda" }}>
                  Selecionamos apenas os melhores ingredientes
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#b22121" }}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.8, 1, 0.8],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Sparkles className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
                </motion.div>
                <h4 className="font-semibold text-white text-lg mb-2 font-sarlotte">Processo Artesanal</h4>
                <p className="font-arboria" style={{ color: "#f2edda" }}>
                  Técnicas tradicionais com toque contemporâneo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid - Containers reduzidos */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sarlotte" style={{ color: "#3b2f2f" }}>
              Nossos Produtos
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-medium font-arboria" style={{ color: "#3b2f2f" }}>
              Cada produto é uma experiência única de sabor e sofisticação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: "#3b2f2f" }}
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: "#f2edda" }}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-semibold text-white px-2 py-1 rounded-full font-arboria"
                      style={{ backgroundColor: "#e47428" }}
                    >
                      {product.category}
                    </span>
                    <span className="text-xs font-medium font-arboria" style={{ color: "#3b2f2f" }}>
                      {product.weight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-sarlotte" style={{ color: "#3b2f2f" }}>
                    {product.name}
                  </h3>
                  <p className="mb-3 leading-relaxed text-xs font-arboria" style={{ color: "#3b2f2f" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold font-sarlotte" style={{ color: "#3b2f2f" }}>
                      {product.priceDisplay}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: i * 0.2,
                          }}
                        >
                          <Star className="w-3 h-3 fill-current" style={{ color: "#e47428", opacity: 0.8 }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        weight: product.weight,
                        image: product.image,
                        category: product.category,
                      })
                    }
                    className="w-full text-white rounded-lg py-2 text-sm font-semibold transition-all duration-300 hover:opacity-90 font-arboria"
                    style={{ backgroundColor: "#3b2f2f" }}
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Adicionar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f2edda" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sarlotte" style={{ color: "#3b2f2f" }}>
              Qualidade Premium
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-arboria" style={{ color: "#3b2f2f" }}>
              Compromisso com a excelência em cada detalhe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2"
              style={{ borderColor: "#3b2f2f" }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#3b2f2f" }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 0.95, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Coffee className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 font-sarlotte" style={{ color: "#3b2f2f" }}>
                Cacau Selecionado
              </h3>
              <p className="leading-relaxed font-arboria" style={{ color: "#3b2f2f" }}>
                Utilizamos apenas cacau de origem controlada, com notas de sabor únicas e características especiais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2"
              style={{ borderColor: "#e47428" }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#e47428" }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Heart className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 font-sarlotte" style={{ color: "#3b2f2f" }}>
                Processo Artesanal
              </h3>
              <p className="leading-relaxed font-arboria" style={{ color: "#3b2f2f" }}>
                Cada etapa é cuidadosamente executada à mão, preservando as características naturais do cacau
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2"
              style={{ borderColor: "#b22121" }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#b22121" }}
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.7, 0.9, 0.7],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Award className="w-8 h-8 text-white" style={{ opacity: 0.9 }} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 font-sarlotte" style={{ color: "#3b2f2f" }}>
                Sabor Incomparável
              </h3>
              <p className="leading-relaxed font-arboria" style={{ color: "#3b2f2f" }}>
                Resultado de anos de aperfeiçoamento, nossos chocolates oferecem experiências sensoriais únicas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#b22121" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sarlotte">Desperte Seus Sentidos</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-arboria" style={{ color: "#f2edda" }}>
              Experimente a sofisticação do chocolate artesanal. Faça seu pedido e descubra por que somos a escolha dos
              verdadeiros apreciadores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.instagram.com/cacauflornibs?igsh=MnB6YjhjcTIybzNr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:opacity-90 font-arboria"
                  style={{ backgroundColor: "#3b2f2f" }}
                >
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    <Instagram className="w-5 h-5 mr-2" style={{ opacity: 0.9 }} />
                  </motion.div>
                  Seguir @cacauflornibs
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl bg-transparent font-arboria"
                style={{ "--tw-text-opacity": "1", color: "white" } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                  e.currentTarget.style.color = "#b22121"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "white"
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="inline-block"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" style={{ opacity: 0.9 }} />
                </motion.div>
                Ver Catálogo Completo
              </Button>
            </div>

            {/* Tagline */}
            <div
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/cacauflor-estampa.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay para melhorar legibilidade do texto */}
              <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

              <div className="relative z-10">
                <p className="text-white text-lg font-medium mb-2 font-arboria">"Feito artesanalmente com amor"</p>
                <p className="text-sm font-arboria" style={{ color: "#f2edda" }}>
                  CacauFlor Chocolateria - Onde cada produto é uma obra de arte
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CartDrawer brand="Cacau Flor" brandColor="#3b2f2f" accentColor="#e47428" />

      <Footer />
    </div>
  )
}
