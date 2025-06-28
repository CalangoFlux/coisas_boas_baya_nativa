import Link from "next/link"
import { Heart, Github, Code, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="relative">
                <img
                  src="/images/baya-nativa-logo.png"
                  alt="Baya Nativa"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Coisas Boas da Baya Nativa
                </span>
                <span className="text-xs text-emerald-300 leading-tight">Saberes, Sabores e Soluções da Floresta</span>
              </div>
            </div>
            <p className="text-emerald-200 leading-relaxed text-sm sm:text-base">
              Celebrando saberes, sabores e soluções da floresta viva através de práticas regenerativas e sabedoria
              ancestral.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white">Nossos Universos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/servicos" className="hover:text-emerald-300 transition-colors text-sm sm:text-base">
                Serviços Baya Nativa
              </Link>
              <Link href="/educacao" className="hover:text-emerald-300 transition-colors text-sm sm:text-base">
                Educação Regenerativa
              </Link>
              <Link href="/cacau-flor" className="hover:text-emerald-300 transition-colors text-sm sm:text-base">
                Cacau Flor
              </Link>
              <Link href="/namoa" className="hover:text-emerald-300 transition-colors text-sm sm:text-base">
                Namoa
              </Link>
              <Link href="/teia-dos-povos" className="hover:text-emerald-300 transition-colors text-sm sm:text-base">
                Teia dos Povos
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white">Conecte-se</h3>
            <div className="space-y-2">
              <p className="text-emerald-200 text-sm sm:text-base">
                Vamos conversar sobre regeneração e transformação positiva
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-300">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:bayanativa@proton.me"
                  className="text-sm sm:text-base hover:text-emerald-200 transition-colors"
                >
                  bayanativa@proton.me
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-300">
                <Heart className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Feito com amor pela natureza</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <p className="text-emerald-300 text-xs sm:text-sm">
              © Coisas Boas da Baya Nativa – Código livre sob Licença MIT.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <Code className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">
                Desenvolvido por{" "}
                <Link
                  href="https://github.com/CalangoFlux"
                  target="_blank"
                  className="font-semibold hover:text-emerald-200 transition-colors underline"
                >
                  CalangoFlux
                </Link>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/CalangoFlux/coisas_boas_baya_nativa"
              target="_blank"
              className="flex items-center space-x-2 text-emerald-300 hover:text-white transition-colors"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
