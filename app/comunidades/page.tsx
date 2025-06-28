"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Globe, BookOpen, Sprout, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ComunidadesColetivosPage() {
  const communities = [
    {
      id: "teia-dos-povos",
      name: "Teia dos Povos",
      subtitle: "Rede de Povos Originários",
      description:
        "Rede de articulação dos povos originários, comunidades tradicionais e movimentos sociais do campo, fortalecendo territórios através da educação ancestral, agroecologia e resistência cultural.",
      href: "/teia-dos-povos",
      externalLink: "https://teiadospovos.org/",
      image: "/images/teia-povos-logo.png",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
      features: ["Educação Ancestral", "Agroecologia", "Articulação Política", "Defesa Territorial"],
      highlight: "Fortalecendo territórios e preservando culturas",
      icon: Users,
      stats: [
        { label: "Estados", value: "15+" },
        { label: "Comunidades", value: "200+" },
        { label: "Povos", value: "50+" },
      ],
    },
  ]

  const upcomingCommunities = [
    {
      name: "Rede de Educadores",
      description: "Comunidade de educadores comprometidos com práticas regenerativas",
      status: "Em formação",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Coletivo Agroecológico",
      description: "Produtores e consumidores unidos pela agroecologia",
      status: "Planejamento",
      icon: Sprout,
      color: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 font-serif leading-tight">
              Comunidades e
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600">
                Coletivos
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
              Redes de articulação que conectam povos, territórios e movimentos sociais em todo o Brasil, fortalecendo a
              resistência cultural e a soberania dos povos originários.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-gray-800 font-semibold">Povos Originários</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-red-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <Globe className="w-5 h-5 text-red-600" />
                <span className="text-gray-800 font-semibold">Articulação Nacional</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Heart className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-800 font-semibold">Resistência Cultural</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Communities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Nossas Redes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comunidades ativas que transformam territórios e fortalecem a cultura ancestral
            </p>
          </motion.div>

          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-16 flex justify-center"
            >
              <Link href={community.href}>
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src={community.image || "/placeholder.svg"}
                      alt={community.name}
                      className="h-32 w-auto mx-auto object-contain filter drop-shadow-lg"
                    />
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${community.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>Explorar Rede</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Communities */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Próximas Comunidades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Novas redes em formação para ampliar nossa articulação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingCommunities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${community.color} rounded-xl flex items-center justify-center`}
                  >
                    <community.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{community.name}</h3>
                    <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {community.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{community.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Nossa Missão</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Fortalecer territórios e preservar culturas através da articulação entre povos e comunidades
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Articulação</h3>
                <p className="text-orange-100">Conectando povos e territórios em rede colaborativa</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Educação</h3>
                <p className="text-orange-100">Preservando e transmitindo saberes ancestrais</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Resistência</h3>
                <p className="text-orange-100">Defendendo direitos e fortalecendo culturas</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <p className="text-2xl text-white font-medium italic mb-4">
                "Juntos somos mais fortes na defesa de nossos territórios e na construção de um futuro sustentável"
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
