"use client"

import { motion } from "framer-motion"
import {
  Leaf,
  Users,
  Lightbulb,
  Target,
  Calendar,
  Mail,
  TreePine,
  Hammer,
  Palette,
  Mountain,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicosPage() {
  const vivencias = [
    {
      title: "Imersões em Bioconstrução",
      description: "Aprenda técnicas de construção natural usando adobe, bambu, palha e outros materiais locais",
      duration: "3-5 dias",
      participants: "8-15 pessoas",
      icon: Hammer,
      color: "from-amber-500 to-orange-600",
      includes: ["Prática hands-on", "Materiais inclusos", "Alimentação", "Certificado"],
    },
    {
      title: "Trilhas Agroflorestais",
      description: "Vivência prática em sistemas agroflorestais, design regenerativo e manejo sustentável",
      duration: "2-4 dias",
      participants: "10-20 pessoas",
      icon: TreePine,
      color: "from-green-500 to-emerald-600",
      includes: ["Caminhadas guiadas", "Plantio prático", "Colheita", "Material didático"],
    },
    {
      title: "Oficinas de Tinturas e Saberes Tradicionais",
      description: "Resgate de conhecimentos ancestrais sobre plantas medicinais e preparos naturais",
      duration: "1-2 dias",
      participants: "6-12 pessoas",
      icon: Palette,
      color: "from-purple-500 to-indigo-600",
      includes: ["Coleta de plantas", "Preparos práticos", "Receitas tradicionais", "Kit básico"],
    },
    {
      title: "Consultoria em Permacultura Territorial",
      description: "Diagnóstico e planejamento regenerativo personalizado para propriedades e comunidades",
      duration: "Personalizado",
      participants: "1-5 pessoas",
      icon: Mountain,
      color: "from-teal-500 to-cyan-600",
      includes: ["Diagnóstico completo", "Plano de ação", "Acompanhamento", "Relatório técnico"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
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
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6 font-serif">
              Serviços
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                Baya Nativa
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-emerald-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Transforme seu território com saberes da mata através de consultorias, vivências e assessorias em
              regeneração ambiental e cultural.
            </p>

            <div className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-semibold">Regeneração • Cultura • Território</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
              Oferecemos soluções integradas para regeneração territorial e cultural
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consultoria */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Consultoria Regenerativa</h3>
              <p className="text-emerald-700 leading-relaxed mb-6">
                Diagnósticos territoriais, planejamento regenerativo e estratégias de implementação para projetos
                sustentáveis.
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>• Análise de potencial regenerativo</li>
                <li>• Planejamento participativo</li>
                <li>• Monitoramento de impacto</li>
              </ul>
            </motion.div>

            {/* Vivências */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Vivências Imersivas</h3>
              <p className="text-emerald-700 leading-relaxed mb-6">
                Experiências transformadoras que conectam pessoas com saberes ancestrais e práticas regenerativas.
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>• Imersões na floresta</li>
                <li>• Oficinas de saberes tradicionais</li>
                <li>• Rituais de conexão</li>
              </ul>
            </motion.div>

            {/* Assessoria */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Assessoria Técnica</h3>
              <p className="text-emerald-700 leading-relaxed mb-6">
                Acompanhamento especializado para implementação de projetos regenerativos e sistemas agroflorestais.
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>• Sistemas agroflorestais</li>
                <li>• Manejo regenerativo</li>
                <li>• Capacitação técnica</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vivências e Consultorias Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-100 to-green-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 font-serif">
              Vivências e Consultorias
            </h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Experiências transformadoras e consultorias especializadas para regeneração territorial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {vivencias.map((vivencia, index) => (
              <motion.div
                key={vivencia.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${vivencia.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${vivencia.color} rounded-xl flex items-center justify-center`}
                    >
                      <vivencia.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900">{vivencia.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-emerald-600">
                        <span>⏱️ {vivencia.duration}</span>
                        <span>👥 {vivencia.participants}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-emerald-700 leading-relaxed mb-4">{vivencia.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-emerald-900 mb-2">Inclui:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-emerald-600">
                      {vivencia.includes.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
                    onClick={() => {
                      const subject = `Interesse em ${vivencia.title}`
                      const body = `Olá! Tenho interesse na vivência "${vivencia.title}". Gostaria de saber mais informações sobre datas, valores e como participar.`
                      window.location.href = `mailto:bayanativa@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Solicitar Informações
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Vivência Personalizada</h3>
              <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
                Cada território tem suas particularidades. Criamos vivências sob medida para atender às necessidades
                específicas da sua comunidade ou propriedade.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const subject = "Solicitação de Vivência Personalizada"
                  const body = `Olá! Gostaria de solicitar uma vivência personalizada para meu território/comunidade.

Informações básicas:
- Local: 
- Número aproximado de participantes: 
- Área de interesse: 
- Objetivos: 
- Período preferencial: 

Aguardo retorno para conversarmos sobre as possibilidades.`
                  window.location.href = `mailto:bayanativa@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Solicitar Vivência Personalizada
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos Conversar?</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Conte-nos sobre seu projeto e descubra como podemos transformar seu território juntos
            </p>
          </motion.div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Nome Completo</label>
                  <Input placeholder="Seu nome" className="border-emerald-200 focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="border-emerald-200 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Tipo de Projeto</label>
                <select className="w-full p-3 border border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none">
                  <option>Consultoria Regenerativa</option>
                  <option>Vivências Imersivas</option>
                  <option>Assessoria Técnica</option>
                  <option>Projeto Personalizado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Conte-nos sobre seu projeto</label>
                <Textarea
                  placeholder="Descreva seu território, objetivos e como podemos ajudar..."
                  rows={5}
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Conversa
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-emerald-100">
              <div className="grid grid-cols-1 gap-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">bayanativa@proton.me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
