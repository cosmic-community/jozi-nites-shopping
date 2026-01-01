import { Product } from '@/types'
import ProductCard from './ProductCard'

interface ProductsProps {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  if (!products || products.length === 0) {
    return (
      <section id="products" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">No products available at the moment.</p>
        </div>
      </section>
    )
  }
  
  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Browse our selection of premium products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}