"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Users,
  Sprout,
  Heart,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Lightbulb,
  Rocket,
  Code,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EducacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
      {/* Padrões de fundo dinâmicos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-60 right-20 w-32 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-36 h-22 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-18 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-bold mb-6 font-serif"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
                Educação
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                Regenerativa
              </span>
            </motion.h1>

            {/* Container oval principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto max-w-4xl mb-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251, 146, 60, 0.9) 0%, rgba(251, 113, 133, 0.9) 50%, rgba(168, 85, 247, 0.9) 100%)",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                padding: "3rem 2rem",
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <p className="text-lg md:text-2xl text-white leading-relaxed font-medium">
                Vamos aprender com a terra? Educação libertadora, originária, permacultura e artivismo para
                <span className="font-bold text-yellow-200"> infâncias livres</span> e
                <span className="font-bold text-pink-200"> futuros regenerativos</span>.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #f59e0b, #f97316)",
                  borderRadius: "50px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Educação Libertadora</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #10b981, #059669)",
                  borderRadius: "50px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <Sprout className="w-5 h-5" />
                <span>Permacultura</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                style={{
                  background: "linear-gradient(45deg, #ec4899, #be185d)",
                  borderRadius: "50px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Heart className="w-5 h-5" />
                <span>Infâncias Livres</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 font-serif">
              Nossos Programas
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Experiências educativas que conectam crianças e adultos com a sabedoria da natureza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Escola da Floresta */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Container oval */}
              <div
                className="relative p-8 text-white shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
                  borderRadius: "60% 40% 70% 30% / 40% 50% 50% 60%",
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "3px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 25px 50px rgba(5, 150, 105, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm"
                >
                  <Sprout className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 text-center font-serif">Escola da Floresta</h3>
                <p className="text-lg leading-relaxed mb-6 text-center">
                  Programa educativo imersivo onde crianças aprendem através do contato direto com a natureza,
                  desenvolvendo autonomia e conexão com o meio ambiente.
                </p>

                <div className="space-y-4 mb-6">
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Lightbulb className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">EcoPedagogia</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">Processos de Aprendizagem Disruptivo</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Globe className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold">Desenvolvimento Integral</span>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-all duration-300">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Formação de Educadores */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Container oval */}
              <div
                className="relative p-8 text-white shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)",
                  borderRadius: "40% 60% 30% 70% / 50% 40% 60% 50%",
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "3px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm"
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 text-center font-serif">Formação de Educadores</h3>
                <p className="text-lg leading-relaxed mb-6 text-center">
                  Capacitação para educadores que desejam integrar práticas regenerativas e saberes ancestrais em suas
                  metodologias pedagógicas.
                </p>

                <div className="space-y-4 mb-6">
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Rocket className="w-5 h-5 text-yellow-200" />
                    <span className="font-semibold">Metodologias ativas</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Star className="w-5 h-5 text-yellow-200" />
                    <span className="font-semibold">Saberes originários</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Heart className="w-5 h-5 text-yellow-200" />
                    <span className="font-semibold">Educação regenerativa</span>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-all duration-300">
                    Participar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Projetos em Andamento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            {/* Container oval grande */}
            <div
              className="relative p-8 text-gray-800 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(251, 191, 36, 0.9) 0%, rgba(251, 146, 60, 0.9) 50%, rgba(251, 113, 133, 0.9) 100%)",
                borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
                border: "3px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 25px 50px rgba(251, 146, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-3xl font-bold mb-8 text-center text-white font-serif">Projetos em Andamento</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div className="text-center" whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                  <div
                    className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: "linear-gradient(45deg, #8b5cf6, #a855f7)",
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    }}
                  >
                    <Code className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Letramento Web3</h4>
                  <p className="text-sm text-white/90">Educação digital para o futuro descentralizado</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                  <div
                    className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: "linear-gradient(45deg, #10b981, #059669)",
                      borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                    }}
                  >
                    <Sprout className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Horta Pedagógica</h4>
                  <p className="text-sm text-white/90">Aprendizado através do cultivo e cuidado com plantas</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                  <div
                    className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: "linear-gradient(45deg, #ec4899, #be185d)",
                      borderRadius: "50% 50% 50% 50% / 70% 30% 30% 70%",
                    }}
                  >
                    <Palette className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Arte e Natureza</h4>
                  <p className="text-sm text-white/90">Expressão artística inspirada nos elementos naturais</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Junte-se à Nossa Comunidade</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Seja facilitador, apoiador ou educador. Vamos construir juntos uma educação mais conectada com a vida.
            </p>
          </motion.div>

          {/* Container oval do formulário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
              padding: "3rem 2rem",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Nome Completo</label>
                  <Input
                    placeholder="Seu nome"
                    className="border-2 border-orange-200 focus:border-orange-500 rounded-full h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="border-2 border-orange-200 focus:border-orange-500 rounded-full h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Como gostaria de participar?</label>
                <select className="w-full p-3 border-2 border-orange-200 rounded-full focus:border-orange-500 focus:outline-none h-12">
                  <option>Facilitador/Educador</option>
                  <option>Apoiador/Voluntário</option>
                  <option>Família Interessada</option>
                  <option>Parceiro Institucional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Conte-nos sobre seu interesse</label>
                <Textarea
                  placeholder="Compartilhe sua experiência, motivações e como gostaria de contribuir..."
                  rows={4}
                  className="border-2 border-orange-200 focus:border-orange-500 rounded-3xl"
                />
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 text-white shadow-xl"
                  style={{
                    background: "linear-gradient(45deg, #f59e0b, #ec4899, #8b5cf6)",
                    border: "none",
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Fazer Parte da Comunidade
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
