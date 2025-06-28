"use client"

import { useState, useEffect } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  weight: string
  image: string
  category: string
  quantity: number
  brand: string
}

export interface ShippingOption {
  service: string
  price: number
  days: string
}

export const useCart = (brand: string) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [cep, setCep] = useState("")
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(`cart-${brand}`)
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [brand])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(`cart-${brand}`, JSON.stringify(items))
  }, [items, brand])

  const addItem = (product: Omit<CartItem, "quantity" | "brand">) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...currentItems, { ...product, quantity: 1, brand }]
    })
  }

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    setShippingOptions([])
    setCep("")
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalWeight = () => {
    return items.reduce((total, item) => {
      // Convert weight string to grams
      const weight = Number.parseFloat(item.weight.replace(/[^\d.]/g, ""))
      const unit = item.weight.toLowerCase()

      let weightInGrams = weight
      if (unit.includes("kg")) {
        weightInGrams = weight * 1000
      } else if (unit.includes("ml")) {
        weightInGrams = weight // Assume 1ml = 1g for liquids
      }

      return total + weightInGrams * item.quantity
    }, 0)
  }

  const calculateShipping = async (destinationCep: string) => {
    if (!destinationCep || destinationCep.length !== 8) return

    setIsCalculatingShipping(true)

    try {
      // Simulated shipping calculation (replace with real API)
      const totalWeight = getTotalWeight()
      const weightInKg = Math.max(0.1, totalWeight / 1000) // Minimum 100g

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock shipping options based on weight and distance
      const basePrice = Math.ceil(weightInKg * 15)
      const options: ShippingOption[] = [
        {
          service: "PAC",
          price: basePrice,
          days: "8 a 12 dias úteis",
        },
        {
          service: "SEDEX",
          price: Math.ceil(basePrice * 1.8),
          days: "2 a 4 dias úteis",
        },
      ]

      setShippingOptions(options)
    } catch (error) {
      console.error("Erro ao calcular frete:", error)
      setShippingOptions([])
    } finally {
      setIsCalculatingShipping(false)
    }
  }

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getTotalWeight,
    shippingOptions,
    cep,
    setCep,
    calculateShipping,
    isCalculatingShipping,
  }
}
