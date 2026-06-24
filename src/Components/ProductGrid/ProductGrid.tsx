import './ProductGrid.css'
import { ProductCard, type Product } from '../ProductCard/ProductCardComponent'

interface ProductGridProps {
  products: Product[]
  onViewDetails: (product: Product) => void
}

export const ProductGrid = ({ products, onViewDetails }: ProductGridProps) => {
  if (products.length === 0) {
    return <div className="product-grid__empty">No products found.</div>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}
