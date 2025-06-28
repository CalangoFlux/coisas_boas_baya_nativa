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
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            {/* Logo da Teia dos Povos */}
            <div className="mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-4 sm:mb-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-4">
                  <img src="/images/teia-povos-logo.png" alt="Teia dos Povos" className="h-24 sm:h-32 md:h-40 w-auto" />
                </div>
              </motion.div>

              {/* Padrão Geométrico Decorativo */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-full max-w-3xl sm:max-w-4xl h-1 sm:h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500 opacity-60 rounded-full"></div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 font-medium px-2">
              Rede de articulação dos povos originários, comunidades tradicionais e movimentos sociais do campo,
              fortalecendo territórios através da educação ancestral, agroecologia e resistência cultural.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-orange-200 shadow-sm">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                <span className="text-gray-800 font-semibold text-sm sm:text-base">Povos Originários</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-green-200 shadow-sm">
                <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="text-gray-800 font-semibold text-sm sm:text-base">Agroecologia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200 shadow-sm">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-gray-800 font-semibold text-sm sm:text-base">Educação Ancestral</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
                onClick={() => window.open("https://teiadospovos.org/", "_blank")}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Visitar Site Oficial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl bg-white/90 backdrop-blur-sm w-full sm:w-auto"
              >
                Conhecer a Rede
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-b from-white via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif px-2">
              Pilares da Teia
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Fortalecendo territórios através de ações integradas e colaborativas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                >
                  <pillar.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-serif">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif px-2">
              Iniciativas e Encontros
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Ações e eventos que fortalecem a articulação entre povos e territórios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-orange-600 bg-orange-100 px-2 sm:px-3 py-1 rounded-full shadow-lg w-fit">
                      {initiative.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {initiative.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-serif leading-tight">
                    {initiative.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {initiative.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 bg-transparent shadow-lg w-full sm:w-auto"
                    onClick={() => window.open(initiative.link, "_blank")}
                  >
                    Saiba Mais
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="max-w-6xl mx-auto">
          {/* Imagem de abertura - Sementes Crioulas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative h-32 sm:h-48 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/teia-sementes-crioulas.png"
                alt="Sementes crioulas da Teia dos Povos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  Preservação de Sementes Crioulas
                </h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90">
                  Guardiões da biodiversidade e soberania alimentar
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif">Nossa Missão</h2>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6">
                A Teia dos Povos é uma rede de articulação que conecta povos originários, comunidades tradicionais e
                movimentos sociais do campo em todo o Brasil.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Trabalhamos para fortalecer territórios através da educação ancestral, práticas agroecológicas e
                resistência cultural, promovendo a soberania alimentar e a preservação dos saberes tradicionais.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">Articulação de Povos</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Conectando comunidades em todo território nacional
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">Soberania Alimentar</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Fortalecendo sistemas alimentares tradicionais</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">Educação Ancestral</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Preservando e transmitindo saberes originários</p>
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
              <div className="bg-emerald-600/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Áreas de Atuação</h3>
                <div className="space-y-3 sm:space-y-4 text-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Formação e capacitação em agroecologia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Defesa de territórios e direitos originários</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Comunicação e articulação política</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Preservação de sementes crioulas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Fortalecimento da economia solidária</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Intercâmbio de saberes tradicionais</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Imagem de fechamento - Manifestação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative h-32 sm:h-48 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/teia-manifestacao-agua.png"
                alt="Manifestação pela defesa da água"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-white text-right">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  Resistência e Luta pelos Direitos
                </h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90">
                  Água não é mercadoria - Defesa dos bens comuns
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/teia-povos-background.png')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-red-900/80 to-orange-900/85"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif px-2">
              Faça Parte da Teia
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Conecte-se com povos e territórios de todo o Brasil. Juntos somos mais fortes na defesa de nossos direitos
              e na construção de um futuro sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
                onClick={() => window.open("https://teiadospovos.org/", "_blank")}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Acessar teiadospovos.org
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl bg-transparent backdrop-blur-sm w-full sm:w-auto"
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
