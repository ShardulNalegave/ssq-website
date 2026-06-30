import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/constants'

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    serverModel: '',
    requirements: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Server Enquiry${formState.serverModel ? ` - ${formState.serverModel.toUpperCase()}` : ''}${formState.company ? ` - ${formState.company}` : ''}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        formState.company ? `Company: ${formState.company}` : '',
        formState.serverModel ? `Interested Model: ${formState.serverModel}` : '',
        '',
        'Requirements:',
        formState.requirements,
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-16 gradient-bg noise-texture">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border accent-gradient">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="brand-line mb-6" />
            <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Whether you know exactly what you need or just want to explore your options,
              we&apos;re here to help. Fill out the form and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-muted-foreground text-sm"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <a
                      href="tel:+918007997380"
                      className="text-muted-foreground text-sm"
                    >
                      +91 80079 97380
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>We review your requirements and reach out within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>We schedule a call to discuss your needs in detail.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>We provide a detailed proposal with specifications and pricing.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brand" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Message Received
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your requirements 
                    and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-muted-foreground">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-muted-foreground">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="serverModel" className="block text-sm font-medium text-foreground mb-2">
                        Interested Server Model
                      </label>
                      <select
                        id="serverModel"
                        name="serverModel"
                        value={formState.serverModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50"
                      >
                        <option value="">Select a model</option>
                        <option value="neo">Neo: For SOHO &amp; Small Offices</option>
                        <option value="evo">Evo: For Families &amp; Enthusiasts</option>
                        <option value="pro">Pro: For Corporates &amp; AI Professionals</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                      Requirements <span className="text-muted-foreground">*</span>
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      required
                      rows={6}
                      value={formState.requirements}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 resize-none"
                      placeholder="Tell us about your requirements. What do you want to host? Photos, media, AI, files? Are you setting this up at home, office, or for a team?"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-brand text-white rounded-md w-full md:w-auto"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
