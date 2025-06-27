"use client"

import { motion } from "framer-motion"
import { Coffee, Sparkles, Heart, ShoppingCart, Star, Award, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CacauFlorPage() {
  const products = [
    {
      name: "Chocolate 70%",
      description: "Chocolate artesanal com 70% de cacau, equilibrio perfeito entre amargor e doçura",
      price: "R$ 8,00",
      weight: "10g",
      image: "/images/cacau-flor-products-1.jpg",
      category: "Chocolate",
    },
    {
      name: "Chocolate 100%",
      description: "Chocolate puro, sem adição de açúcar. Para os verdadeiros apreciadores",
      price: "R$ 9,00",
      weight: "10g",
      image: "/images/cacau-flor-products-2.jpg",
      category: "Chocolate",
    },
    {
      name: "Licor Mel de Cacau",
      description: "Licor artesanal que combina a doçura do mel com a intensidade do cacau",
      price: "R$ 35,00",
      weight: "250ml",
      image: "/images/cacau-flor-products-4.jpg",
      category: "Licor",
    },
    {
      name: "Nibs de Cacau 100%",
      description: "Pedacinhos puros de cacau torrado, crocantes e intensos",
      price: "R$ 25,00",
      weight: "100g",
      image: "/images/cacau-flor-products-5.jpg",
      category: "Nibs",
    },
    {
      name: "Cupuaçu + Nibs",
      description: "Combinação exótica de cupuaçu cremoso com nibs crocantes",
      price: "R$ 12,00",
      weight: "10g",
      image: "/images/cacau-flor-products-3.jpg",
      category: "Especial",
    },
    {
      name: "Chocolate Gourmet",
      description: "Linha premium com ingredientes selecionados e processo artesanal refinado",
      price: "R$ 15,00",
      weight: "10g",
      image: "/images/cacau-flor-products-3.jpg",
      category: "Premium",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-rose-900/10"></div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-8xl font-bold text-slate-800 mb-4 font-serif tracking-tight">
                CHOCOLATERIA
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold text-rose-600 mb-6 font-serif">Cacau Flor</h2>
            </div>

            <p className="text-lg md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Feito artesanalmente com amor para amantes de chocolates sofisticados. Matéria-prima nobre transformada em
              verdadeiras obras de arte em beleza e sabor.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-slate-600" />
                <span className="text-slate-800 font-semibold">Artesanal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-rose-200 shadow-sm">
                <Heart className="w-5 h-5 text-rose-500" />
                <span className="text-slate-800 font-semibold">Feito com Amor</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-slate-800 font-semibold">Sofisticado</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
            >
              <Instagram className="w-6 h-6" />
              <span>@cacauflornibs</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-serif">Nossos Produtos</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Cada produto é uma experiência única de sabor e sofisticação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-rose-50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{product.weight}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 font-serif">{product.name}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-3 font-semibold transition-all duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">A Arte do Chocolate</h2>
              <p className="text-xl text-slate-200 leading-relaxed mb-6">
                A Chocolateria Cacau Flor nasceu da paixão por criar chocolates que são verdadeiras obras de arte. Cada
                produto é cuidadosamente elaborado com matéria-prima nobre e técnicas artesanais refinadas.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Nosso compromisso é oferecer uma experiência sensorial única, onde cada mordida revela camadas complexas
                de sabor e a dedicação de quem faz com amor.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Feito com Amor</h4>
                    <p className="text-slate-300">Cada produto carrega nossa paixão e dedicação</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Matéria-Prima Nobre</h4>
                    <p className="text-slate-300">Selecionamos apenas os melhores ingredientes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Processo Artesanal</h4>
                    <p className="text-slate-300">Técnicas tradicionais com toque contemporâneo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/cacau-flor-products-1.jpg"
                  alt="Chocolate artesanal"
                  className="rounded-2xl shadow-xl"
                />
                <img
                  src="/images/cacau-flor-products-2.jpg"
                  alt="Chocolate 100%"
                  className="rounded-2xl shadow-xl mt-8"
                />
                <img
                  src="/images/cacau-flor-products-3.jpg"
                  alt="Produtos Cacau Flor"
                  className="rounded-2xl shadow-xl -mt-8"
                />
                <img src="/images/cacau-flor-products-5.jpg" alt="Nibs de cacau" className="rounded-2xl shadow-xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-serif">Qualidade Premium</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Compromisso com a excelência em cada detalhe</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-serif">Cacau Selecionado</h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos apenas cacau de origem controlada, com notas de sabor únicas e características especiais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-serif">Processo Artesanal</h3>
              <p className="text-slate-600 leading-relaxed">
                Cada etapa é cuidadosamente executada à mão, preservando as características naturais do cacau
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-serif">Sabor Incomparável</h3>
              <p className="text-slate-600 leading-relaxed">
                Resultado de anos de aperfeiçoamento, nossos chocolates oferecem experiências sensoriais únicas
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-rose-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Desperte Seus Sentidos</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experimente a sofisticação do chocolate artesanal. Faça seu pedido e descubra por que somos a escolha dos
              verdadeiros apreciadores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir @cacauflornibs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ver Catálogo Completo
              </Button>
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-slate-200 text-lg font-medium mb-2">"Feito artesanalmente com amor"</p>
              <p className="text-slate-300 text-sm">Chocolateria Cacau Flor - Onde cada produto é uma obra de arte</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
