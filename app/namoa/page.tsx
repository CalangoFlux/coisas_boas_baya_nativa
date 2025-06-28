"use client"

import { motion } from "framer-motion"
import { Leaf, Droplets, Sun, Heart, Star, Mail, MapPin, Sparkles, TreePine, Flower } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import CartDrawer from "@/components/cart-drawer"
import CartButton from "@/components/cart-button"

export default function NamoaPage() {
  const { addItem } = useCart("Namoa")

  const productCategories = [
    {
      name: "Farmácia Nativa",
      description: "Medicinas naturais da floresta amazônica para cuidado e proteção da saúde",
      icon: TreePine,
      color: "from-green-500 to-emerald-600",
      products: [
        {
          name: "Andiroba",
          size: "20ml",
          price: "R$ 25,00",
          description: "Antiséptico, antiinflamatório, cicatrizante",
        },
        { name: "Copaíba", size: "10ml", price: "R$ 22,00", description: "Antibiótico natural, gastroprotetor" },
        {
          name: "Copaíba Preta",
          size: "10ml/20ml",
          price: "R$ 22,00/R$ 35,00",
          description: "Depurativo sanguíneo, expectorante",
        },
        {
          name: "Sangue de Dragão",
          size: "15ml/20ml",
          price: "R$ 28,00/R$ 35,00",
          description: "Cicatrizante natural, imunoestimulante",
        },
        {
          name: "Própolis Verde sem álcool",
          size: "20ml",
          price: "R$ 30,00",
          description: "Antibiótico natural, antioxidante",
        },
      ],
    },
    {
      name: "Extratos Absolutos",
      description: "Óleos essenciais puros para aromaterapia e uso terapêutico",
      icon: Droplets,
      color: "from-purple-500 to-indigo-600",
      products: [
        { name: "Palo Santo", size: "15ml", price: "R$ 35,00", description: "Limpeza energética, antidepressivo" },
        { name: "Tea Tree", size: "10ml", price: "R$ 25,00", description: "Antibiótico, antimicótico, cicatrizante" },
        { name: "Muña", size: "10ml", price: "R$ 28,00", description: "Expectorante, bactericida, fungicida" },
        { name: "Molle", size: "10ml", price: "R$ 28,00", description: "Analgésico, antisséptico, cicatrizante" },
      ],
    },
    {
      name: "SuperAlimentos",
      description: "Alimentos funcionais para nutrição saudável e energética",
      icon: Sun,
      color: "from-amber-500 to-orange-600",
      products: [
        {
          name: "Ghee - Manteiga Clarificada",
          size: "200g",
          price: "R$ 35,00",
          description: "Purificador dos canais energéticos",
        },
        {
          name: "Massa de Cacau Orgânico 100%",
          size: "200g",
          price: "R$ 45,00",
          description: "Cacau gourmet agroecológico",
        },
        {
          name: "Pasta de Amendoim",
          size: "230g",
          price: "R$ 18,00",
          description: "Rica em potássio, fósforo, vitamina E",
        },
        {
          name: "Mel Silvestre",
          size: "530g/840g",
          price: "R$ 25,00/R$ 35,00",
          description: "Superalimento energético e mineral",
        },
        { name: "Pólen", size: "100g", price: "R$ 40,00", description: "Alimento completo, 20x mais caroteno" },
      ],
    },
    {
      name: "Óleos Fitoterápicos",
      description: "Combinações terapêuticas de extratos com óleos veiculares",
      icon: Leaf,
      color: "from-teal-500 to-cyan-600",
      products: [
        { name: "Tea Tree + Abacate", size: "30ml", price: "R$ 28,00", description: "Cicatrizante, previne quelóides" },
        { name: "Palo Santo + Amêndoa Doce", size: "30ml", price: "R$ 32,00", description: "Relaxante, hidratante" },
        { name: "Capim Limão + Gergelim", size: "30ml", price: "R$ 25,00", description: "Antisséptico, regenerador" },
        {
          name: "Litsea Cubeba + Semente de Uva",
          size: "30ml",
          price: "R$ 30,00",
          description: "Antioxidante, revitalizante",
        },
      ],
    },
  ]

  const incenseProducts = [
    { name: "Palo Santo (Madeira)", size: "50g", price: "R$ 15,00" },
    { name: "Nagchampa", size: "15 varetas", price: "R$ 12,00" },
    { name: "Resinas Naturais", size: "20g", price: "R$ 18,00" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-8xl font-bold text-emerald-900 mb-4 font-serif tracking-tight">NAMOA</h1>
              <h2 className="text-xl md:text-3xl font-medium text-emerald-700 mb-6">Produtos da Natureza</h2>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-base md:text-xl text-emerald-800 leading-relaxed mb-6 font-medium">
                <strong>NAMOA</strong>, em Tupi-Guarani, significa <em>"de gente de longe"</em>. Compreendendo que todos
                somos filhos das estrelas, compostos pela mesma matéria cósmica, celebremos sermos parentes.
              </p>
              <p className="text-base md:text-xl text-emerald-700 leading-relaxed">
                Conectando pequenos produtores e consumidores conscientes, reunimos e partilhamos produtos que cuidam de
                você, cuidando do que partilhamos. Uma Rede Potencializadora-Geradora da Sagrada Medicina Natural.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 shadow-sm">
                <TreePine className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-semibold">Farmácia Nativa</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-sm">
                <Sun className="w-5 h-5 text-amber-500" />
                <span className="text-emerald-800 font-semibold">SuperAlimentos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-sm">
                <Droplets className="w-5 h-5 text-purple-500" />
                <span className="text-emerald-800 font-semibold">Medicina Natural</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-3 bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                <Heart className="w-6 h-6" />
                <span>Cuidando com Amor</span>
              </motion.div>

              <CartButton brand="Namoa" brandColor="#10b981" className="text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Nossa Farmácia Nativa</h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Medicinas naturais da floresta, SuperAlimentos e produtos que nutrem corpo, mente e espírito
            </p>
          </motion.div>

          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900 font-serif">{category.name}</h3>
                    <p className="text-emerald-700">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div
                      key={product.name}
                      className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-emerald-900 text-lg">{product.name}</h4>
                        <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                          {product.size}
                        </span>
                      </div>
                      <p className="text-emerald-700 text-sm mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-emerald-800">{product.price}</span>
                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                          onClick={() =>
                            addItem({
                              id: `namoa-${category.name}-${productIndex}`,
                              name: product.name,
                              price: Number.parseFloat(product.price.replace("R$ ", "").replace(",", ".")),
                              weight: product.size,
                              image: "/placeholder.svg",
                              category: category.name,
                            })
                          }
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incense Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Incensos Naturais</h2>
            <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
              Para purificação energética, meditação e sacralização de espaços
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {incenseProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{product.name}</h3>
                <p className="text-emerald-600 mb-4">{product.size}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-emerald-800">{product.price}</span>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                    onClick={() =>
                      addItem({
                        id: `namoa-incense-${index}`,
                        name: product.name,
                        price: Number.parseFloat(product.price.replace("R$ ", "").replace(",", ".")),
                        weight: product.size,
                        image: "/placeholder.svg",
                        category: "Incensos Naturais",
                      })
                    }
                  >
                    Adicionar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">A Teia da Vida</h2>
              <p className="text-xl text-emerald-100 leading-relaxed mb-6">
                Namoa Produtos da Natureza nasce a partir do germinar da semente do cuidar. Ao nos cuidar, cuidamos
                também do outro, cuidamos do ambiente, cuidamos do planeta, cuidamos de toda uma rede sistêmica.
              </p>
              <p className="text-lg text-emerald-200 leading-relaxed mb-8">
                Materializada através do aprofundar em estudos fitoterápicos, apícolas, aromaterapia e saúde integral,
                com influências da Ecologia Profunda, Ayurveda e Medicina Tradicional Chinesa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Saberes Ancestrais</h4>
                    <p className="text-emerald-200">Medicina tradicional e conhecimento indígena</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Cuidado Integral</h4>
                    <p className="text-emerald-200">Corpo, mente e espírito em harmonia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Rede Potencializadora</h4>
                    <p className="text-emerald-200">Conectando produtores e consumidores conscientes</p>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Nossos Serviços</h3>
                <div className="space-y-4 text-emerald-100">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Oficinas de Alimentação Viva</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Cursos de Saúde Integral</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Feitura de Óleos Fitoterápicos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Sabonetes e Sabão Artesanal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Hortas e Minhocários Residenciais</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Conecte-se Conosco</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Estamos em Niterói-RJ, mas Namoa está onde você está. Enviamos para todo o Brasil.
            </p>
          </motion.div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Nome Completo</label>
                  <Input placeholder="Seu nome" className="border-emerald-200 focus:border-emerald-500 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="border-emerald-200 focus:border-emerald-500 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Categoria de Interesse</label>
                <select className="w-full p-3 border border-emerald-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                  <option>Farmácia Nativa</option>
                  <option>Extratos Absolutos</option>
                  <option>SuperAlimentos</option>
                  <option>Óleos Fitoterápicos</option>
                  <option>Incensos Naturais</option>
                  <option>Oficinas e Cursos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Sua mensagem</label>
                <Textarea
                  placeholder="Conte-nos sobre seus interesses, necessidades ou dúvidas sobre nossos produtos naturais..."
                  rows={4}
                  className="border-emerald-200 focus:border-emerald-500 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-emerald-100">
              <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700 text-sm">bayanativa@proton.me</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700 text-sm">Niterói-RJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-900 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className="text-xl text-emerald-200 mb-4 italic">
              "Escolhidos com carinho e comprometimento, unidos a um sentimento de reconexão, cuidado e gratidão."
            </p>
            <p className="text-emerald-300 font-medium">Sua participação é um presente! 🌿</p>
          </motion.div>
        </div>
      </section>

      <CartDrawer brand="Namoa" brandColor="#10b981" accentColor="#059669" />

      <Footer />
    </div>
  )
}
