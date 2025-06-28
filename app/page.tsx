"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Leaf,
  Heart,
  Sparkles,
  ArrowRight,
  X,
  Mail,
  User,
  Phone,
  Building,
  MessageSquare,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Tooltip Component
const TooltipBadge = ({ children, tooltip }: { children: React.ReactNode; tooltip: string }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 sm:w-64 text-center z-10">
        {tooltip}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  )
}

// Partnership Form Modal
const PartnershipModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brandName: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio de email
    const emailBody = `
Nova solicitação de parceria:

Nome: ${formData.name}
Telefone: ${formData.phone}
Nome da Marca: ${formData.brandName}

Descrição:
${formData.description}
    `

    const mailtoLink = `mailto:bayanativa@proton.me?subject=Nova Solicitação de Parceria - ${formData.brandName}&body=${encodeURIComponent(emailBody)}`

    // Abrir cliente de email
    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({ name: "", phone: "", brandName: "", description: "" })
      }, 2000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative container-floating rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <img src="/images/baya-nativa-logo.png" alt="Baya Nativa" className="h-8 w-8 object-contain" />
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 font-serif">Seja Parceir@!</h2>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-emerald-50 btn-floating">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 container-floating">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Solicitação Enviada!</h3>
                <p className="text-emerald-700">
                  Seu cliente de email foi aberto com a mensagem. Finalize o envio para que possamos entrar em contato.
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-emerald-700 mb-6 text-center">
                  Faça parte da nossa rede de parceiros e conecte sua marca com valores regenerativos e transformação
                  positiva.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nome Completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="border-emerald-200 focus:border-emerald-500 container-floating"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald-900 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Melhor Número para Contato *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="border-emerald-200 focus:border-emerald-500 container-floating"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Nome da Marca/Projeto *
                    </label>
                    <Input
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      placeholder="Nome da sua marca ou projeto"
                      required
                      className="border-emerald-200 focus:border-emerald-500 container-floating"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-900 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Breve Descrição *
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre sua marca, valores, produtos/serviços e como gostaria de fazer parte da nossa rede de parceiros..."
                      rows={6}
                      maxLength={2000}
                      required
                      className="border-emerald-200 focus:border-emerald-500 container-floating"
                    />
                    <div className="text-right text-xs text-emerald-600 mt-1">
                      {formData.description.length}/2000 caracteres
                    </div>
                  </div>

                  <div className="container-floating p-4 rounded-xl">
                    <p className="text-sm text-emerald-700 text-center">
                      <Heart className="w-4 h-4 inline mr-1" />
                      Buscamos parceiros alinhados com valores regenerativos, sustentabilidade e impacto positivo.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 btn-floating"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default function HomePage() {
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false)

  const tooltips = {
    regenerativo:
      "Práticas que restauram e revitalizam ecossistemas, promovendo a regeneração natural dos solos, biodiversidade e ciclos da vida, indo além da sustentabilidade para criar impacto positivo.",
    originario:
      "Fusão entre saberes ancestrais dos povos originários e práticas contemporâneas, valorizando conhecimentos tradicionais em diálogo com inovações atuais para soluções integradas.",
    impacto:
      "Ações e iniciativas que geram transformações benéficas duradouras na sociedade, meio ambiente e economia, criando valor compartilhado para comunidades e ecossistemas.",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-3 sm:px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            {/* Logo Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img
                src="/images/baya-nativa-logo.png"
                alt="Baya Nativa"
                className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 object-contain animate-float-gentle"
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-bold text-emerald-900 mb-4 sm:mb-6 font-serif leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Coisas Boas da
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Baya Nativa
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-2xl text-emerald-700 max-w-3xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Um portal que celebra saberes, sabores e soluções da floresta viva.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
          >
            <TooltipBadge tooltip={tooltips.regenerativo}>
              <motion.div
                className="flex items-center gap-2 container-floating px-3 sm:px-4 py-2 rounded-full border border-emerald-200 cursor-help text-sm sm:text-base animate-float-gentle"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </motion.div>
                <span className="text-emerald-800 font-medium">Regenerativo</span>
              </motion.div>
            </TooltipBadge>

            <TooltipBadge tooltip={tooltips.originario}>
              <motion.div
                className="flex items-center gap-2 container-floating px-3 sm:px-4 py-2 rounded-full border border-emerald-200 cursor-help text-sm sm:text-base animate-float-slow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
                </motion.div>
                <span className="text-emerald-800 font-medium">Originário-Contemporâneo</span>
              </motion.div>
            </TooltipBadge>

            <TooltipBadge tooltip={tooltips.impacto}>
              <motion.div
                className="flex items-center gap-2 container-floating px-3 sm:px-4 py-2 rounded-full border border-emerald-200 cursor-help text-sm sm:text-base animate-float"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </motion.div>
                <span className="text-emerald-800 font-medium">Impacto Positivo</span>
              </motion.div>
            </TooltipBadge>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards - Nova Estrutura com Ícones Personalizados */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-3 sm:mb-4 px-2">
              Explore Nossos Universos
            </h2>
            <p className="text-base sm:text-lg text-emerald-700 max-w-2xl mx-auto px-2">
              Quatro dimensões integradas de transformação regenerativa e conexão com a natureza
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Serviços Baya Nativa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group animate-float-gentle"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/servicos">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-700/20"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <motion.img
                        src="/images/icons/localizacao.png"
                        alt="Localização"
                        className="w-8 h-8 object-contain brightness-0 invert"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Serviços Baya Nativa</h3>
                    <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                      Consultorias, vivências e assessorias em regeneração ambiental e cultural
                    </p>
                  </div>
                  <motion.div
                    className="relative z-10 flex items-center text-white font-semibold text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span>Transforme seu território</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>

            {/* Educação Regenerativa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group animate-float-slow"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/educacao">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <motion.img
                        src="/images/icons/aprendizagem.png"
                        alt="Aprendizagem"
                        className="w-8 h-8 object-contain brightness-0 invert"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Educação Regenerativa</h3>
                    <p className="text-amber-100 text-base sm:text-lg leading-relaxed">
                      Educação libertadora, permacultura e artivismo para infâncias livres
                    </p>
                  </div>
                  <motion.div
                    className="relative z-10 flex items-center text-white font-semibold text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span>Vamos aprender com a terra?</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>

            {/* Produtos das Florestas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="group animate-float"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-rose-600 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-rose-600/20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <motion.img
                      src="/images/icons/confianca.png"
                      alt="Confiança"
                      className="w-8 h-8 object-contain brightness-0 invert"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Produtos das Florestas</h3>
                  <p className="text-rose-100 text-base sm:text-lg leading-relaxed">
                    Sabores e medicinas da natureza: chocolates artesanais e farmácia nativa
                  </p>
                </div>
                <div className="relative z-10 space-y-2">
                  <Link href="/cacau-flor">
                    <motion.div
                      className="flex items-center text-white/90 hover:text-white text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>• Cacau Flor - Chocolateria artesanal</span>
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </motion.div>
                  </Link>
                  <Link href="/namoa">
                    <motion.div
                      className="flex items-center text-white/90 hover:text-white text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>• Namoa - Farmácia nativa</span>
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Comunidades e Coletivos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="group animate-float-gentle"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-purple-600 p-6 sm:p-8 h-64 sm:h-80 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-purple-600/20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <motion.img
                      src="/images/icons/mapa-mental.png"
                      alt="Mapa Mental"
                      className="w-8 h-8 object-contain brightness-0 invert"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Comunidades e Coletivos</h3>
                  <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
                    Redes de articulação dos povos originários e fortalecimento territorial
                  </p>
                </div>
                <div className="relative z-10 space-y-2">
                  <Link href="/teia-dos-povos">
                    <motion.div
                      className="flex items-center text-white/90 hover:text-white text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>• Teia dos Povos - Rede originária</span>
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Agenda Preview */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 font-serif">Próximas Vivências</h2>
            <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
              Participe de nossas atividades e conecte-se com a comunidade regenerativa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="mb-4"
              >
                <Calendar className="w-12 h-12 text-amber-600 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Em Breve</h3>
              <p className="text-emerald-700 text-lg mb-6">Fique por dentro!</p>
              <p className="text-amber-600 text-sm">
                Novas vivências e encontros serão anunciados em breve. Acompanhe nossa agenda para não perder nenhuma
                oportunidade de conexão.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/agenda">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-floating">
                <Calendar className="w-5 h-5 mr-2" />
                Ver Agenda Completa
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
              Conecte-se com a Floresta Viva
            </h2>
            <p className="text-base sm:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Junte-se a nós nesta jornada de regeneração, sabedoria ancestral e transformação positiva
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => setIsPartnershipModalOpen(true)}
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-xl btn-floating"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Seja Parceir@!
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Partnership Modal */}
      <PartnershipModal isOpen={isPartnershipModalOpen} onClose={() => setIsPartnershipModalOpen(false)} />
    </div>
  )
}
