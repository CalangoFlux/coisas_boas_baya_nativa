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
    <Button
      onClick={() => setIsOpen(true)}
      className={`relative bg-transparent border-2 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 p-3 ${className}`}
      style={{
        borderColor: brandColor,
        color: brandColor,
      }}
    >
      <ShoppingCart className="w-5 h-5" />
      {totalItems > 0 && (
        <span
          className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
          style={{ backgroundColor: brandColor }}
        >
          {totalItems}
        </span>
      )}
    </Button>
  )
}
