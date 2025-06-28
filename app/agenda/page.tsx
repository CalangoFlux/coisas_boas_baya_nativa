"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Clock, Users, Filter, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AgendaPage() {
  const [selectedMonth, setSelectedMonth] = useState(2) // March = 2 (0-indexed)
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const categories = [
    { id: "todos", name: "Todos", color: "bg-gray-500" },
    { id: "vivencia", name: "Vivências", color: "bg-emerald-500" },
    { id: "oficina", name: "Oficinas", color: "bg-amber-500" },
    { id: "curso", name: "Cursos", color: "bg-blue-500" },
    { id: "encontro", name: "Encontros", color: "bg-purple-500" },
    { id: "consultoria", name: "Consultorias", color: "bg-teal-500" },
  ]

  const events = [
    {
      id: 1,
      title: "Imersão em Agrofloresta",
      date: "2025-03-15",
      endDate: "2025-03-17",
      time: "08:00",
      duration: "3 dias",
      location: "Vale do Ribeira, SP",
      category: "vivencia",
      participants: 20,
      maxParticipants: 25,
      price: "R$ 450,00",
      description:
        "Vivência prática em sistemas agroflorestais, aprendendo técnicas de manejo regenerativo e design de sistemas produtivos sustentáveis.",
      facilitator: "João Silva",
      includes: ["Alimentação", "Hospedagem", "Material didático", "Certificado"],
      requirements: ["Roupas confortáveis", "Botas de borracha", "Chapéu"],
    },
    {
      id: 2,
      title: "Oficina de Bioconstrução",
      date: "2025-03-22",
      endDate: "2025-03-24",
      time: "09:00",
      duration: "3 dias",
      location: "Serra da Mantiqueira, MG",
      category: "oficina",
      participants: 15,
      maxParticipants: 18,
      price: "R$ 380,00",
      description:
        "Aprenda técnicas de construção natural usando adobe, bambu e outros materiais locais. Prática hands-on com construção real.",
      facilitator: "Maria Santos",
      includes: ["Alimentação", "Material de construção", "Ferramentas", "Certificado"],
      requirements: ["Roupas velhas", "Luvas de trabalho", "Disposição para trabalho físico"],
    },
    {
      id: 3,
      title: "Roda de Saberes Tradicionais",
      date: "2025-03-30",
      time: "14:00",
      duration: "4 horas",
      location: "Sul da Bahia, BA",
      category: "encontro",
      participants: 8,
      maxParticipants: 30,
      price: "Gratuito",
      description:
        "Encontro para compartilhamento de conhecimentos ancestrais sobre plantas medicinais e práticas de cura tradicional.",
      facilitator: "Pajé Raoni",
      includes: ["Lanche comunitário", "Círculo de cura", "Troca de sementes"],
      requirements: ["Mente aberta", "Respeito às tradições"],
    },
    {
      id: 4,
      title: "Curso de Permacultura - Módulo I",
      date: "2025-04-05",
      endDate: "2025-04-12",
      time: "08:00",
      duration: "8 dias",
      location: "Zona da Mata Mineira, MG",
      category: "curso",
      participants: 12,
      maxParticipants: 20,
      price: "R$ 850,00",
      description:
        "Primeiro módulo do curso completo de permacultura, cobrindo princípios éticos, design e técnicas básicas.",
      facilitator: "Ana Costa",
      includes: ["Hospedagem", "Alimentação", "Material didático", "Certificação PDC"],
      requirements: ["Ensino médio completo", "Interesse em sustentabilidade"],
    },
    {
      id: 5,
      title: "Consultoria em Design Regenerativo",
      date: "2025-04-18",
      time: "10:00",
      duration: "2 dias",
      location: "Alta Montana, Sul de Minas, MG",
      category: "consultoria",
      participants: 1,
      maxParticipants: 5,
      price: "R$ 1.200,00",
      description: "Consultoria personalizada para desenvolvimento de projetos regenerativos em propriedades rurais.",
      facilitator: "Equipe Baya Nativa",
      includes: ["Diagnóstico completo", "Plano de ação", "Relatório técnico", "Acompanhamento"],
      requirements: ["Propriedade rural", "Interesse em regeneração"],
    },
  ]

  const filteredEvents =
    selectedCategory === "todos" ? events : events.filter((event) => event.category === selectedCategory)

  const getEventsByDate = (date: string) => {
    return filteredEvents.filter((event) => {
      const eventDate = new Date(event.date)
      const checkDate = new Date(date)
      const eventEndDate = event.endDate ? new Date(event.endDate) : eventDate

      return checkDate >= eventDate && checkDate <= eventEndDate
    })
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (selectedMonth === 0) {
        setSelectedMonth(11)
        setSelectedYear(selectedYear - 1)
      } else {
        setSelectedMonth(selectedMonth - 1)
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0)
        setSelectedYear(selectedYear + 1)
      } else {
        setSelectedMonth(selectedMonth + 1)
      }
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const dayEvents = getEventsByDate(dateString)

      days.push(
        <motion.div
          key={day}
          className="h-24 border border-gray-200 p-1 cursor-pointer hover:bg-emerald-50 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <div className="font-semibold text-sm text-gray-700 mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded text-white truncate cursor-pointer ${
                  categories.find((cat) => cat.id === event.category)?.color || "bg-gray-500"
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && <div className="text-xs text-gray-500">+{dayEvents.length - 2} mais</div>}
          </div>
        </motion.div>,
      )
    }

    return days
  }

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
              Agenda
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-700">
                Regenerativa
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-amber-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Vivências, cursos e encontros para transformar territórios e conectar comunidades
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-medium">Eventos Mensais</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <Users className="w-5 h-5 text-emerald-600" />
                <span className="text-amber-800 font-medium">Comunidade Ativa</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-amber-800 font-medium">Todo o Brasil</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Calendar Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <h2 className="text-2xl font-bold text-amber-900 font-serif">
                  {months[selectedMonth]} {selectedYear}
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-amber-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
              {/* Header */}
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                <div
                  key={day}
                  className="bg-amber-100 p-3 text-center font-semibold text-amber-800 border-b border-gray-200"
                >
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {renderCalendar()}
            </div>
          </div>

          {/* Events List */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 font-serif">Próximos Eventos</h3>
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100 cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedEvent(event)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span
                            className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${
                              categories.find((cat) => cat.id === event.category)?.color || "bg-gray-500"
                            }`}
                          >
                            {categories.find((cat) => cat.id === event.category)?.name}
                          </span>
                          <span className="text-sm text-amber-600 font-medium">{event.price}</span>
                        </div>
                        <h4 className="text-xl font-bold text-amber-900 mb-2">{event.title}</h4>
                        <p className="text-amber-700 text-sm leading-relaxed mb-3">{event.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-amber-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {new Date(event.date).toLocaleDateString("pt-BR")} - {event.duration}
                        </span>
                      </div>
                      <div className="flex items-center text-amber-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-amber-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>
                          {event.participants}/{event.maxParticipants} participantes
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-amber-100 flex justify-between items-center">
                      <span className="text-sm text-amber-700">
                        Facilitador: <strong>{event.facilitator}</strong>
                      </span>
                      <Button
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedEvent(event)
                        }}
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Legend */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
                <h4 className="text-lg font-bold text-amber-900 mb-4">Tipos de Evento</h4>
                <div className="space-y-3">
                  {categories
                    .filter((cat) => cat.id !== "todos")
                    .map((category) => (
                      <div key={category.id} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                        <span className="text-amber-700">{category.name}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
                <h4 className="text-lg font-bold text-amber-900 mb-4">Solicitar Evento Personalizado</h4>
                <p className="text-amber-700 text-sm mb-4">
                  Quer levar uma vivência para seu território? Entre em contato conosco!
                </p>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() =>
                    (window.location.href = "mailto:bayanativa@proton.me?subject=Solicitação de Evento Personalizado")
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${
                        categories.find((cat) => cat.id === selectedEvent.category)?.color || "bg-gray-500"
                      }`}
                    >
                      {categories.find((cat) => cat.id === selectedEvent.category)?.name}
                    </span>
                    <span className="text-lg font-bold text-amber-600">{selectedEvent.price}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEvent(null)}
                    className="hover:bg-amber-50"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 font-serif">{selectedEvent.title}</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-amber-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Data</div>
                      <div className="text-sm">
                        {new Date(selectedEvent.date).toLocaleDateString("pt-BR")} - {selectedEvent.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-600">
                    <Clock className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Horário</div>
                      <div className="text-sm">{selectedEvent.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-600">
                    <MapPin className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Local</div>
                      <div className="text-sm">{selectedEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-600">
                    <Users className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">Vagas</div>
                      <div className="text-sm">
                        {selectedEvent.participants}/{selectedEvent.maxParticipants} ocupadas
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">Descrição</h3>
                  <p className="text-amber-700 leading-relaxed">{selectedEvent.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-amber-900 mb-3">Facilitador</h3>
                  <p className="text-amber-700">{selectedEvent.facilitator}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-3">Inclui</h3>
                    <ul className="space-y-2">
                      {selectedEvent.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-amber-700">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-3">Levar</h3>
                    <ul className="space-y-2">
                      {selectedEvent.requirements.map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-amber-700">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-xl mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-amber-600 mb-1">Vagas Disponíveis</div>
                      <div className="text-lg font-bold text-amber-900">
                        {selectedEvent.maxParticipants - selectedEvent.participants} de {selectedEvent.maxParticipants}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-amber-700" />
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => {
                    const subject = `Inscrição - ${selectedEvent.title}`
                    const body = `Olá! Gostaria de me inscrever no evento "${selectedEvent.title}" que acontecerá em ${selectedEvent.location} no dia ${new Date(selectedEvent.date).toLocaleDateString("pt-BR")}.`
                    window.location.href = `mailto:bayanativa@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Inscrever-se
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
