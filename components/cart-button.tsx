"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface CartButtonProps {
  brand: string
  brandColor: string
  className?: string
}

export default function CartButton({ brand, brandColor, className = "" }: CartButtonProps) {
  const { getTotalItems, setIsOpen } = useCart(brand)
  const totalItems = getTotalItems()

  return (
    <Button onClick={() => setIsOpen(true)} className={`relative ${className}`} style={{ backgroundColor: brandColor }}>
      <ShoppingCart className="w-4 h-4 mr-2" />
      Carrinho
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  )
}
