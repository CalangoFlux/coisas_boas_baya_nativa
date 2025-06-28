"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, Heart, Leaf, Droplets, Coffee, TreePine, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProdutosDasFlorestasPage() {
  const stores = [
    {
      id: "cacau-flor",
      name: "Cacau Flor",
      subtitle: "Chocolateria Artesanal",
      description:
        "Chocolates sofisticados feitos com cacau nobre e técnicas artesanais refinadas. Cada produto é uma obra de arte em sabor e beleza.",
      href: "/cacau-flor",
      image: "/images/cacau-flor-logo-new.png",
      color: "from-amber-600 to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      features: ["Chocolate 70% e 100%", "Licor Mel de Cacau", "Nibs de Cacau Puro", "Linha Premium Gourmet"],
      highlight: "Feito artesanalmente com amor",
      icon: Coffee,
    },
    {
      id: "namoa",
      name: "Namoa",
      subtitle: "Produtos da Natureza",
      description:
        "Farmácia nativa, superalimentos e medicinas naturais da floresta amazônica. Conectando pequenos produtores e consumidores conscientes.",
      href: "/namoa",
      image: "/images/namoa-logo.png",
      color: "from-emerald-600 to-green-700",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      features: ["Farmácia Nativa", "Extratos Absolutos", "SuperAlimentos", "Óleos Fitoterápicos"],
      highlight: "Cuidando com amor da natureza",
      icon: TreePine,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-amber-500 rounded-full flex items-center justify-center shadow-xl">
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 font-serif leading-tight">
              Produtos das
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-amber-600 to-orange-600">
                Florestas
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
              Sabores e medicinas da natureza que conectam você com a sabedoria ancestral da floresta viva. Cada produto
              carrega histórias, tradições e o cuidado de quem faz com amor.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-green-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-800 font-semibold">Feito com Amor</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-gray-800 font-semibold">Artesanal</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Droplets className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-800 font-semibold">Medicina Natural</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Nossas Marcas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Duas marcas únicas, uma mesma essência: conectar você com o melhor da natureza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <img
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      className="h-40 w-auto mx-auto object-contain filter drop-shadow-lg"
                    />
                  </motion.div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={store.href}>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${store.color} hover:shadow-xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg`}
                    >
                      Acessar a Loja
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Nossos Valores</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Cada produto carrega nossa missão de conectar pessoas com a sabedoria ancestral da natureza
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Feito com Amor</h3>
                <p className="text-green-100">Cada produto é criado com dedicação e carinho genuíno</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sustentabilidade</h3>
                <p className="text-green-100">Respeitamos e preservamos os recursos naturais</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Qualidade</h3>
                <p className="text-green-100">Excelência em cada detalhe, do cultivo ao produto final</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <p className="text-2xl text-white font-medium italic mb-4">
                "Conectando você com o melhor da natureza através de produtos que nutrem corpo, mente e espírito"
              </p>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
