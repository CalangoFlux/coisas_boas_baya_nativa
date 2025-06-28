"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, Trash2, ShoppingCart, Calculator, Truck, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart, type ShippingOption } from "@/hooks/use-cart"

interface CartDrawerProps {
  brand: string
  brandColor: string
  accentColor?: string
}

export default function CartDrawer({ brand, brandColor, accentColor = brandColor }: CartDrawerProps) {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    shippingOptions,
    cep,
    setCep,
    calculateShipping,
    isCalculatingShipping,
  } = useCart(brand)

  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | undefined>()
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 5) {
      return numbers
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`
  }

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value)
    setCep(formatted)
  }

  const handleCalculateShipping = () => {
    const cleanCep = cep.replace(/\D/g, "")
    calculateShipping(cleanCep)
  }

  const handleSelectShipping = (option: ShippingOption) => {
    setSelectedShipping(option)
  }

  const generateWhatsAppMessage = () => {
    let message = `🛒 *Pedido ${brand}*\n\n`

    items.forEach((item) => {
      message += `• ${item.name} (${item.weight})\n`
      message += `  Qtd: ${item.quantity} x ${formatPrice(item.price)}\n`
      message += `  Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`
    })

    message += `💰 *Total dos produtos:* ${formatPrice(getTotalPrice())}\n`

    if (selectedShipping) {
      message += `🚚 *Frete ${selectedShipping.service}:* ${formatPrice(selectedShipping.price)}\n`
      message += `📅 *Prazo:* ${selectedShipping.days}\n`
      message += `💳 *Total final:* ${formatPrice(getTotalPrice() + selectedShipping.price)}\n`
    }

    if (cep) {
      message += `📍 *CEP de entrega:* ${cep}\n`
    }

    message += `\nGostaria de finalizar este pedido! 😊`

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/5521999999999?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="ml-auto w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between" style={{ backgroundColor: brandColor }}>
              <div className="flex items-center space-x-2 text-white">
                <ShoppingCart className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Carrinho {brand}</h2>
                {getTotalItems() > 0 && (
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {getTotalItems()} {getTotalItems() === 1 ? "item" : "itens"}
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Carrinho vazio</h3>
                  <p className="text-gray-500">Adicione produtos para começar suas compras</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {/* Items */}
                  {items.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.weight}</p>
                          <p className="text-sm font-medium" style={{ color: brandColor }}>
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="font-semibold" style={{ color: brandColor }}>
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Shipping Calculator */}
                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calcular Frete
                    </h3>

                    <div className="flex space-x-2 mb-3">
                      <Input
                        placeholder="00000-000"
                        value={cep}
                        onChange={handleCepChange}
                        maxLength={9}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleCalculateShipping}
                        disabled={cep.length !== 9 || isCalculatingShipping}
                        size="sm"
                        style={{ backgroundColor: brandColor }}
                        className="text-white hover:opacity-90"
                      >
                        {isCalculatingShipping ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          "Calcular"
                        )}
                      </Button>
                    </div>

                    {shippingOptions.length > 0 && (
                      <div className="space-y-2">
                        {shippingOptions.map((option) => (
                          <div
                            key={option.service}
                            className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedShipping?.service === option.service
                                ? "bg-blue-100 border-blue-300"
                                : "bg-white border-gray-200 hover:border-blue-200"
                            }`}
                            onClick={() => handleSelectShipping(option)}
                          >
                            <div className="flex items-center space-x-2">
                              <Truck className="w-4 h-4 text-gray-600" />
                              <div>
                                <p className="font-medium text-sm">{option.service}</p>
                                <p className="text-xs text-gray-600 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {option.days}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-sm">{formatPrice(option.price)}</p>
                              {selectedShipping?.service === option.service && (
                                <p className="text-xs text-blue-600">Selecionado</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Produtos:</span>
                    <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                  </div>
                  {selectedShipping && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Frete ({selectedShipping.service}):</span>
                      <span className="font-medium">{formatPrice(selectedShipping.price)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold" style={{ color: brandColor }}>
                      {formatPrice(getTotalPrice() + (selectedShipping?.price || 0))}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* Botão WhatsApp Principal */}
                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full text-white font-semibold py-3"
                    style={{ backgroundColor: brandColor }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Finalizar Pedido pelo WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                  >
                    Limpar Carrinho
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}
