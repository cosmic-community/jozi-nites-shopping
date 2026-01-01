import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {testimonial.metadata?.image && (
          <img
            src={`${testimonial.metadata.image.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.title}
            width={60}
            height={60}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h3 className="font-semibold text-gray-900">
            {testimonial.title}
          </h3>
          {testimonial.metadata?.position && (
            <p className="text-sm text-gray-600">
              {testimonial.metadata.position}
            </p>
          )}
          {testimonial.metadata?.company && (
            <p className="text-sm text-gray-500">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
      
      {testimonial.metadata?.quote && (
        <p className="text-gray-700 italic">
          "{testimonial.metadata.quote}"
        </p>
      )}
    </div>
  )
}