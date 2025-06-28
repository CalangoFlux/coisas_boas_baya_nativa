"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Sprout, Globe, Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeiaDosPovosPage() {
  const initiatives = [
    {
      title: "O caminhar se faz compartilhando",
      date: "23 de junho de 2025",
      description: "Encontro de saberes e práticas ancestrais para fortalecimento dos territórios",
      image: "/images/caminhar-compartilhando.png",
      category: "Encontro",
      link: "https://teiadospovos.org/",
    },
    {
      title: "Carta pela Educação Ancestral e Antirracista",
      date: "19 de junho de 2025",
      description: "KILOMBO MANZO: Por um PNE que enraíze os saberes dos povos originários",
      image: "/images/educacao-ancestral-antirracista.png",
      category: "Educação",
      link: "https://teiadospovos.org/educacao/carta-educacao-ancestral",
    },
    {
      title: "I Pré-jornada de agroecologia no Território Originário Maxakali",
      date: "16 de junho de 2025",
      description: "Fortalecendo práticas agroecológicas nos territórios originários",
      image: "/images/pre-jornada-maxakali.png",
      category: "Agroecologia",
      link: "https://teiadospovos.org/agroecologia/pre-jornada-maxakali",
    },
    {
      title: "VII Jornada de Agroecologia da Bahia",
      date: "Julho de 2025",
      description: "Encontro estadual de agroecologia com participação dos povos originários",
      image: "/images/jornada-agroecologia-bahia.png",
      category: "Agroecologia",
      link: "https://teiadospovos.org/agroecologia/jornada-bahia-2025",
    },
  ]

  const pillars = [
    {
      title: "Educação Ancestral",
      description: "Fortalecimento dos sistemas educacionais originários e tradicionais",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Agroecologia",
      description: "Práticas sustentáveis de manejo da terra e soberania alimentar",
      icon: Sprout,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Articulação",
      description: "Rede de comunicação e fortalecimento entre povos e territórios",
      icon: Users,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Resistência",
      description: "Defesa dos direitos territoriais e preservação cultural",
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Logo da Teia dos Povos */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <img src="/images/teia-povos-logo.png" alt="Teia dos Povos" className="h-32 md:h-40 w-auto" />
                </div>
              </motion.div>

              {/* Padrão Geométrico Decorativo */}
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-4xl h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500 opacity-60 rounded-full bg-white/90 backdrop-blur-sm"></div>
              </div>
            </div>

            <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
              Rede de articulação dos povos originários, comunidades tradicionais e movimentos sociais do campo,
              fortalecendo territórios através da educação ancestral, agroecologia e resistência cultural.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-sm">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-gray-800 font-semibold">Povos Originários</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-green-200 shadow-sm">
                <Sprout className="w-5 h-5 text-green-600" />
                <span className="text-gray-800 font-semibold">Agroecologia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-sm">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-semibold">Educação Ancestral</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={() => window.open("https://teiadospovos.org/", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visitar Site Oficial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl bg-white/90 backdrop-blur-sm"
              >
                Conhecer a Rede
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Pilares da Teia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fortalecendo territórios através de ações integradas e colaborativas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4 bg-white/90 backdrop-blur-sm`}
                >
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Iniciativas e Encontros</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ações e eventos que fortalecem a articulação entre povos e territórios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full shadow-lg">
                      {initiative.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {initiative.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif leading-tight">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{initiative.description}</p>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent shadow-lg"
                    onClick={() => window.open(initiative.link, "_blank")}
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Nossa Missão</h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                A Teia dos Povos é uma rede de articulação que conecta povos originários, comunidades tradicionais e
                movimentos sociais do campo em todo o Brasil.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Trabalhamos para fortalecer territórios através da educação ancestral, práticas agroecológicas e
                resistência cultural, promovendo a soberania alimentar e a preservação dos saberes tradicionais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Articulação de Povos</h4>
                    <p className="text-gray-300">Conectando comunidades em todo território nacional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Soberania Alimentar</h4>
                    <p className="text-gray-300">Fortalecendo sistemas alimentares tradicionais</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Educação Ancestral</h4>
                    <p className="text-gray-300">Preservando e transmitindo saberes originários</p>
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
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Formação originária"
                  className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm"
                />
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Encontro de povos"
                  className="rounded-2xl shadow-xl mt-8 bg-white/90 backdrop-blur-sm"
                />
              </div>
              <div className="bg-emerald-600/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Áreas de Atuação</h3>
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Formação e capacitação em agroecologia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Defesa de territórios e direitos originários</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Comunicação e articulação política</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Preservação de sementes crioulas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Fortalecimento da economia solidária</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Intercâmbio de saberes tradicionais</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Faça Parte da Teia</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Conecte-se com povos e territórios de todo o Brasil. Juntos somos mais fortes na defesa de nossos direitos
              e na construção de um futuro sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={() => window.open("https://teiadospovos.org/", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Acessar teiadospovos.org
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-xl bg-transparent"
              >
                Conhecer Iniciativas
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
