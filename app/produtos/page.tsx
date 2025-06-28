"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Heart, Leaf, Droplets, Coffee, TreePine, Sparkles } from "lucide-react"
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
      image: "/images/baya-nativa-logo.png", // Usando logo da Baya Nativa como placeholder
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

          <div className="space-y-16">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Conteúdo */}
                <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${store.color} rounded-2xl flex items-center justify-center shadow-xl`}
                      >
                        <store.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 font-serif">{store.name}</h3>
                        <p className="text-lg text-gray-600 font-medium">{store.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">{store.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {store.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${store.color} rounded-full`}></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                      <p className="text-center text-lg font-medium text-gray-700 italic">"{store.highlight}"</p>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                      <Link href={store.href}>
                        <Button
                          size="lg"
                          className={`bg-gradient-to-r ${store.color} hover:shadow-xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300`}
                        >
                          <store.icon className="w-5 h-5 mr-2" />
                          Explorar {store.name}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Link href={store.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`relative h-80 rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${store.bgColor} border border-white/50`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${store.color} opacity-10`}></div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                              rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.5,
                            }}
                            className="mb-6"
                          >
                            <img
                              src={store.image || "/placeholder.svg"}
                              alt={store.name}
                              className="h-32 w-auto mx-auto object-contain filter drop-shadow-lg"
                            />
                          </motion.div>
                          <div
                            className={`inline-flex items-center gap-2 bg-gradient-to-r ${store.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}
                          >
                            <span>Visitar Loja</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
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
