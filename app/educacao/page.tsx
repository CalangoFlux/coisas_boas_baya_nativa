"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Sprout, Heart, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EducacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-15"></div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 font-serif">
              Educação
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-700">
                Regenerativa
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-amber-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Vamos aprender com a terra? Educação libertadora, indígena, permacultura e artivismo para infâncias
              livres.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-medium">Educação Libertadora</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <Sprout className="w-5 h-5 text-green-600" />
                <span className="text-amber-800 font-medium">Permacultura</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <Heart className="w-5 h-5 text-rose-500" />
                <span className="text-amber-800 font-medium">Infâncias Livres</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Nossos Programas</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Experiências educativas que conectam crianças e adultos com a sabedoria da natureza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Escola da Floresta */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Escola da Floresta</h3>
              <p className="text-amber-700 leading-relaxed mb-6">
                Programa educativo imersivo onde crianças aprendem através do contato direto com a natureza,
                desenvolvendo autonomia e conexão com o meio ambiente.
              </p>
              <ul className="space-y-3 text-amber-600 mb-6">
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Pedagogia da natureza</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Aprendizado experiencial</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Desenvolvimento integral</span>
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Formação de Educadores */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Formação de Educadores</h3>
              <p className="text-amber-700 leading-relaxed mb-6">
                Capacitação para educadores que desejam integrar práticas regenerativas e saberes ancestrais em suas
                metodologias pedagógicas.
              </p>
              <ul className="space-y-3 text-amber-600 mb-6">
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Metodologias ativas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Saberes indígenas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="w-4 h-4 mt-1 text-amber-500" />
                  <span>Educação regenerativa</span>
                </li>
              </ul>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Participar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Projetos em Andamento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Projetos em Andamento</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">Círculos de Leitura</h4>
                <p className="text-sm text-amber-700">Encontros semanais para compartilhar histórias e saberes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-green-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">Horta Pedagógica</h4>
                <p className="text-sm text-amber-700">Aprendizado através do cultivo e cuidado com plantas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">Arte e Natureza</h4>
                <p className="text-sm text-amber-700">Expressão artística inspirada nos elementos naturais</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Junte-se à Nossa Comunidade</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Seja facilitador, apoiador ou educador. Vamos construir juntos uma educação mais conectada com a vida.
            </p>
          </motion.div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Nome Completo</label>
                  <Input placeholder="Seu nome" className="border-amber-200 focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" className="border-amber-200 focus:border-amber-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Como gostaria de participar?</label>
                <select className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none">
                  <option>Facilitador/Educador</option>
                  <option>Apoiador/Voluntário</option>
                  <option>Família Interessada</option>
                  <option>Parceiro Institucional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Conte-nos sobre seu interesse</label>
                <Textarea
                  placeholder="Compartilhe sua experiência, motivações e como gostaria de contribuir..."
                  rows={4}
                  className="border-amber-200 focus:border-amber-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Fazer Parte da Comunidade
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
