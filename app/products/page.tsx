"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { products } from "@/lib/products"

const categories = ["All", "Dry Fruits", "Spices"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hindiName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-6 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 md:py-2 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3 md:mb-6">
              Our Products
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-6 text-balance">
              Premium Dry Fruits & Spices
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed px-2">
              Discover our extensive range of carefully sourced dry fruits and authentic Indian spices.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-3 md:py-8 bg-card border-y border-border sticky top-[56px] md:top-[72px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 md:gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary/50",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6 md:py-16">
        <div className="container mx-auto px-3 md:px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 md:py-20">
              <p className="text-muted-foreground text-sm md:text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2">
                      <span className="px-1.5 md:px-2 py-0.5 bg-primary text-primary-foreground text-[9px] md:text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 md:p-4">
                    <h3 className="font-serif text-xs md:text-base font-semibold text-foreground line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] md:text-sm text-muted-foreground">{product.hindiName}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 md:mb-4">
            Need Custom Orders?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4 md:mb-8 text-xs md:text-base px-2">
            We offer bulk orders with competitive pricing. Contact us to discuss your requirements.
          </p>
          <Link
            href="https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20bulk%20orders"
            target="_blank"
            className="inline-flex items-center gap-2 bg-card text-foreground px-5 md:px-8 py-2.5 md:py-4 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 text-sm md:text-base"
          >
            Get Bulk Quote
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
