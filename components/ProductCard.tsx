import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price / 100)
  }
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {product.metadata?.image && (
          <img
            src={`${product.metadata.image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.title}
        </h3>
        
        {product.metadata?.description && (
          <div 
            className="text-gray-600 mb-4 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: product.metadata.description }}
          />
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.metadata?.price || 0)}
          </span>
          
          {product.metadata?.quantity !== undefined && (
            <span className="text-sm text-gray-500">
              {product.metadata.quantity > 0 
                ? `${product.metadata.quantity} in stock` 
                : 'Out of stock'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}