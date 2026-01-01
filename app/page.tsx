import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { getProducts, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const products = await getProducts()
  const testimonials = await getTestimonials()
  
  return (
    <main className="min-h-screen">
      <Hero />
      <Products products={products} />
      <Testimonials testimonials={testimonials} />
      <ContactForm />
      <Footer />
    </main>
  )
}