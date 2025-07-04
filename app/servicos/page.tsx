"use client"

import { motion } from "framer-motion"
import {
  Users,
  Calendar,
  Mail,
  TreePine,
  Hammer,
  Palette,
  Mountain,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Heart,
  Globe,
  Zap,
  Compass,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicosPage() {
  const services = [
    {
      id: "consultoria",
      title: "Consultoria Regenerativa",
      subtitle: "Diagnóstico Territorial Ancestral",
      description:
        "Mapeamento profundo do potencial regenerativo através de metodologias que integram saberes científicos e ancestrais",
      icon: Compass,
      color: "from-amber-600 via-orange-500 to-red-500",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(205, 133, 63, 0.3) 0%, transparent 50%)",
      features: [
        "Análise sistêmica do território",
        "Mapeamento de potenciais regenerativos",
        "Planejamento participativo com comunidades",
        "Estratégias de implementação gradual",
        "Monitoramento de impacto contínuo",
      ],
      cta: "Transformar Território",
      ctaIcon: Mountain,
    },
    {
      id: "vivencias",
      title: "Vivências Imersivas",
      subtitle: "Reconexão com a Sabedoria Viva",
      description:
        "Experiências transformadoras que despertam a memória ancestral e fortalecem a conexão com os ciclos naturais",
      icon: TreePine,
      color: "from-emerald-600 via-green-500 to-teal-500",
      bgPattern:
        "radial-gradient(circle at 30% 70%, rgba(34, 139, 34, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0, 100, 0, 0.3) 0%, transparent 50%)",
      features: [
        "Imersões na floresta e territórios sagrados",
        "Oficinas de saberes tradicionais",
        "Rituais de conexão com a natureza",
        "Práticas de permacultura aplicada",
        "Círculos de partilha e cura",
      ],
      cta: "Vivenciar Transformação",
      ctaIcon: Heart,
    },
    {
      id: "assessoria",
      title: "Assessoria Técnica",
      subtitle: "Implementação Regenerativa",
      description:
        "Acompanhamento especializado para materializar projetos regenerativos com excelência técnica e sensibilidade cultural",
      icon: Zap,
      color: "from-blue-600 via-indigo-500 to-purple-500",
      bgPattern:
        "radial-gradient(circle at 40% 60%, rgba(65, 105, 225, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(138, 43, 226, 0.3) 0%, transparent 50%)",
      features: [
        "Sistemas agroflorestais complexos",
        "Tecnologias sociais apropriadas",
        "Manejo regenerativo de solos",
        "Capacitação técnica continuada",
        "Articulação de redes colaborativas",
      ],
      cta: "Implementar Soluções",
      ctaIcon: Zap,
    },
  ]

  const vivencias = [
    {
      title: "Imersões em Bioconstrução Ancestral",
      description:
        "Mergulhe nas técnicas milenares de construção com terra crua, bambu e fibras naturais. Aprenda desde a preparação do barro até técnicas avançadas de acabamento, integrando conhecimento tradicional com inovações sustentáveis contemporâneas.",
      duration: "3-7 dias",
      participants: "8-15 pessoas",
      icon: Hammer,
      color: "from-amber-500 to-orange-600",
      includes: [
        "Adobe e taipa de pilão",
        "Estruturas de bambu",
        "Alimentação orgânica",
        "Certificado de participação",
      ],
    },
    {
      title: "Trilhas Agroflorestais Sagradas",
      description:
        "Caminhadas meditativas em sistemas agroflorestais, aprendendo design regenerativo através da observação profunda da natureza e seus ciclos. Conecte-se com a inteligência viva dos ecossistemas.",
      duration: "2-5 dias",
      participants: "10-20 pessoas",
      icon: TreePine,
      color: "from-green-500 to-emerald-600",
      includes: ["Caminhadas guiadas", "Plantio ritualístico", "Colheita consciente", "Medicina da floresta"],
    },
    {
      title: "Laboratório de Tinturas e Medicina Ancestral",
      description:
        "Resgate profundo dos conhecimentos tradicionais sobre plantas medicinais e tinturas naturais. Aprenda desde a identificação e coleta até o preparo de extratos, óleos e tinturas para uso terapêutico e artístico.",
      duration: "1-3 dias",
      participants: "6-12 pessoas",
      icon: Palette,
      color: "from-purple-500 to-indigo-600",
      includes: ["Coleta e identificação", "Técnicas de extração", "Receitas tradicionais", "Kit medicina pessoal"],
    },
    {
      title: "Consultoria Territorial Regenerativa",
      description:
        "Diagnóstico e planejamento holístico para propriedades e comunidades, integrando dimensões ecológicas, sociais e espirituais através de metodologias participativas e design regenerativo.",
      duration: "Processo personalizado",
      participants: "1-8 pessoas",
      icon: Mountain,
      color: "from-teal-500 to-cyan-600",
      includes: ["Diagnóstico multidimensional", "Plano regenerativo", "Acompanhamento integral", "Rede de apoio"],
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
        linear-gradient(135deg, #f7f3e9 0%, #e8f5e8 25%, #e6f3ff 50%, #f0e6ff 75%, #fff2e6 100%),
        radial-gradient(circle at 10% 20%, rgba(218, 165, 32, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(34, 139, 34, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.05) 0%, transparent 30%)
      `,
      }}
    >
      {/* Padrões Geométricos de Fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-600 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-emerald-600 rounded-full"></div>
        <div
          className="absolute bottom-40 left-20 w-28 h-28 border-2 border-purple-600"
          style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        ></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 border-2 border-blue-600 transform rotate-12"></div>
      </div>

      <Header />

      {/* Hero Section - Layout Assimétrico */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Texto Principal - 7 colunas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-emerald-700 to-purple-700">
                    Serviços
                  </span>
                  <br />
                  <span className="text-gray-800 font-serif">Baya Nativa</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  Transformamos territórios através da fusão entre <strong>saberes ancestrais</strong> e
                  <strong> tecnologias regenerativas</strong>, criando soluções que honram o passado e constroem o
                  futuro.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Explorar Serviços
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold bg-transparent"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Conversa
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Elemento Visual - 5 colunas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                {/* Torus Principal */}
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="relative w-80 h-80"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Anel Externo do Torus */}
                  <motion.div
                    animate={{ rotateX: 360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border-8 border-amber-400 rounded-full opacity-60"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.3))",
                    }}
                  />

                  {/* Anel Médio do Torus */}
                  <motion.div
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-12 border-6 border-emerald-400 rounded-full opacity-70"
                    style={{
                      background:
                        "conic-gradient(from 90deg, rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.3), rgba(16, 185, 129, 0.3))",
                    }}
                  />

                  {/* Anel Interno do Torus */}
                  <motion.div
                    animate={{ rotateY: -360 }}
                    transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-24 border-4 border-purple-400 rounded-full opacity-80"
                    style={{
                      background:
                        "conic-gradient(from 180deg, rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.3), rgba(147, 51, 234, 0.3))",
                    }}
                  />

                  {/* Núcleo Central */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-32 bg-gradient-to-br from-amber-500 via-emerald-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Partículas Orbitais */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      rotate: { duration: 12 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3 + i * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                    className="absolute w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${120 + i * 20}px 0px`,
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Principais - Layout Hexagonal */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-purple-700 font-serif">
                Ecossistema de Transformação
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Três pilares integrados que formam nossa metodologia originário-pós contemporânea
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
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
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl transform rotate-12`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 font-serif">{service.title}</h3>
                        <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">{service.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${service.color} hover:shadow-xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300`}
                        onClick={() => {
                          const subject = `Interesse em ${service.title}`
                          const body = `Olá! Tenho interesse no serviço "${service.title}". Gostaria de saber mais informações sobre como podemos trabalhar juntos.`
                          window.location.href = `mailto:bayanativa@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                        }}
                      >
                        <service.ctaIcon className="w-5 h-5 mr-2" />
                        {service.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div
                    className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ background: service.bgPattern }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className={`w-32 h-32 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-2xl`}
                      >
                        <service.icon className="w-16 h-16 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vivências - Layout Padronizado */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-emerald-50/50 to-purple-50/50"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-700 font-serif">
                Vivências Transformadoras
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiências imersivas que despertam a memória ancestral e ativam potenciais regenerativos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vivencias.map((vivencia, index) => (
              <motion.div
                key={vivencia.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Container Principal - Formato Ovo Padronizado */}
                <div className="relative bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-[50px_30px_50px_30px/30px_50px_30px_50px] h-[580px]">
                  {/* Padrão de Fundo Sutil */}
                  <div
                    className="absolute inset-0 opacity-8"
                    style={{
                      background: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`,
                    }}
                  />

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header - Altura Fixa */}
                    <div className="text-center mb-6 flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-20 h-20 bg-gradient-to-br ${vivencia.color} rounded-full flex items-center justify-center shadow-xl mx-auto mb-4`}
                      >
                        <vivencia.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif leading-tight min-h-[3.5rem] flex items-center justify-center">
                        {vivencia.title}
                      </h3>

                      <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {vivencia.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                          <Users className="w-3 h-3" />
                          {vivencia.participants}
                        </span>
                      </div>
                    </div>

                    {/* Descrição - Área Flexível */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed text-center text-base mb-6 line-clamp-4">
                          {vivencia.description}
                        </p>

                        {/* Inclui - Layout Compacto e Consistente */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                          <h4 className="font-bold text-gray-800 flex items-center justify-center gap-2 mb-3 text-sm">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span>Inclui</span>
                          </h4>
                          <div className="space-y-2">
                            {vivencia.includes.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-700 bg-white/80 rounded-lg p-2"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${vivencia.color} rounded-full flex-shrink-0`}
                                />
                                <span className="font-medium text-xs leading-tight">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA - Posição Fixa no Bottom */}
                      <div className="text-center flex-shrink-0">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className={`bg-gradient-to-r ${vivencia.color} hover:shadow-xl text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full`}
                            onClick={() => {
                              const subject = `Interesse em ${vivencia.title}`
                              const body = `Olá! Tenho interesse na vivência "${vivencia.title}". Gostaria de saber mais informações sobre datas, valores e como participar.`
                              window.location.href = `mailto:bayanativa@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                            }}
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Despertar Potencial
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Central para Vivência Personalizada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="relative bg-gradient-to-r from-amber-600 via-emerald-600 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-bold mb-4 font-serif">Vivência Sob Medida</h3>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Cada território tem sua singularidade. Criamos experiências únicas que honram as especificidades do
                  seu espaço e comunidade.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
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
                    <Sun className="w-5 h-5 mr-2" />
                    Co-criar Experiência Única
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Contato - Design Fluido */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-purple-900"></div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Vamos Co-criar Transformação?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conte-nos sobre seu território, sonhos e desafios. Juntos, encontraremos o caminho regenerativo ideal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-800 mb-2">Nome Completo</label>
                  <Input
                    placeholder="Seu nome"
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl h-12 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-800 mb-2">Tipo de Transformação Desejada</label>
                <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-lg">
                  <option>Consultoria Regenerativa</option>
                  <option>Vivências Imersivas</option>
                  <option>Assessoria Técnica</option>
                  <option>Projeto Personalizado</option>
                  <option>Parceria Estratégica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Conte-nos sobre seu território e visão
                </label>
                <Textarea
                  placeholder="Descreva seu espaço, comunidade, sonhos e como podemos caminhar juntos nesta jornada regenerativa..."
                  rows={6}
                  className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl text-lg"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 shadow-xl"
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Iniciar Jornada Regenerativa
                  <Sparkles className="w-6 h-6 ml-3" />
                </Button>
              </motion.div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>bayanativa@proton.me</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Feito com amor regenerativo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
