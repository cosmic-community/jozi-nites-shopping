// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products'
  metadata: {
    image: {
      url: string
      imgix_url: string
    }
    gallery?: Array<{
      url: string
      imgix_url: string
    }>
    price: number
    quantity?: number
    description?: string
    stripe_product_id?: string
    recurring?: {
      is_recurring: boolean
      interval?: {
        key: string
        value: string
      }
      interval_count?: number
    }
  }
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    company?: string
    position?: string
    image?: {
      url: string
      imgix_url: string
    }
    quote?: string
  }
}

// Form Submission interface
export interface FormSubmission extends CosmicObject {
  type: 'form-submissions'
  metadata: {
    email: string
    company: string
    message: string
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
}

// Contact form data
export interface ContactFormData {
  email: string
  company: string
  message: string
}