import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, Cpu, Shield, Server, ImageIcon } from 'lucide-react'

const serverModels = [
  {
    name: 'Neo',
    tagline: 'For SOHO & Small Offices',
    description: 'A tailored self-hosted server setup designed for small offices and SOHO environments. Host your photos and files locally, free from big data companies, without sacrificing convenience.',
    icon: Server,
    image: '/images/case.jpg',
    features: [
      'Self Hosted',
      'Open Source',
      'Low Maintenance',
      'Customizable',
      'Redundant Data Storage',
      'On Prem Support',
      'WebGUI Dashboard',
      'OTA Updates',
      'Supports All Devices',
      '4 Storage Bays, Expandable',
      'Immich: Photos Backup & Sync (Google Photos alternative)',
      'NAS Drive: Easy File Access & Storage (Windows SMB)',
    ],
    useCases: ['SOHO', 'Small Offices'],
  },
  {
    name: 'Evo',
    tagline: 'For Families & Enthusiasts',
    description: 'A feature-rich self-hosted server for families and tech enthusiasts. Go beyond file storage with your own private media server and self-hosted AI, all without cloud subscriptions.',
    icon: Cpu,
    image: '/images/ryzen.jpg',
    features: [
      'Self Hosted',
      'Open Source',
      'Low Maintenance',
      'Customizable',
      'Redundant Data Storage',
      'On Prem Support',
      'WebGUI Dashboard',
      'OTA Updates',
      'Supports All Devices',
      '4 Storage Bays, Expandable',
      'Immich: Photos Backup & Sync (Google Photos alternative)',
      'NAS Drive: Easy File Access & Storage (Windows SMB)',
      'Media Server: Your own Netflix, stream movies & series',
      'Selfhosted AI: Run LLMs with ease, without paying for API keys',
    ],
    useCases: ['Families', 'Enthusiasts'],
  },
  {
    name: 'Pro',
    tagline: 'For Corporates & AI Professionals',
    description: 'Our most capable server for corporates and AI professionals. A complete private cloud: AI inference, document collaboration, music, remote access, and more, entirely in your control.',
    icon: Shield,
    image: '/images/geforce_gtx.jpg',
    features: [
      'Self Hosted',
      'Open Source',
      'Low Maintenance',
      'Customizable',
      'Redundant Data Storage',
      'On Prem Support',
      'WebGUI Dashboard',
      'OTA Updates',
      'Supports All Devices',
      '6 Storage Bays, Expandable',
      'Immich: Photos Backup & Sync (Google Photos alternative)',
      'NAS Drive: Easy File Access & Storage (Windows SMB)',
      'Media Server: Your own Netflix, stream movies & series',
      'Selfhosted AI: Run LLMs with ease, without paying for API keys',
      'Office Suite: Versatile and collaborative office suite',
      'Music: Your own Spotify, lossless audio',
      'Backup & Sync: Auto-backup files, sync across devices',
      'Password Manager: Secure, private, only accessible to you',
      'Remote Access: Access your server from around the globe',
    ],
    useCases: ['Corporates', 'AI Professionals'],
  },
]

function ServerImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="relative w-full h-full server-image-placeholder rounded-lg flex flex-col items-center justify-center">
      <ImageIcon className="w-12 h-12 text-muted-foreground/30 mb-3" />
      <span className="text-xs text-muted-foreground/40 uppercase tracking-wider">{name} Server Image</span>
    </div>
  )
}

export function ServersPage() {
  return (
    <div className="pt-16 gradient-bg noise-texture">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border overflow-hidden">
        <img src="/images/ryzen.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 accent-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="brand-line mb-6" />
            <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
              Server Models
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Three Tiers, Infinite Possibilities
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Our server lineup is designed to scale with your business. Each model 
              serves as a starting point, and every specification can be customized to
              match your exact requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Server Models - New Layout with Portrait Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {serverModels.map((server, index) => (
              <div 
                key={server.name}
                className={`${index !== 0 ? 'pt-16 border-t border-border' : ''}`}
              >
                {/* Server Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center">
                    <server.icon className="w-7 h-7 text-brand" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-foreground">{server.name}</h2>
                    <p className="text-sm text-brand">{server.tagline}</p>
                  </div>
                </div>

                {/* Main Grid: Image + Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Portrait Image - Takes left 4 columns */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[3/4] w-full sticky top-24">
                      {server.image ? (
                        <img
                          src={server.image}
                          alt={`${server.name} Server`}
                          className="w-full h-full object-cover object-center rounded-lg"
                        />
                      ) : (
                        <ServerImagePlaceholder name={server.name} />
                      )}
                    </div>
                  </div>

                  {/* Content - Takes right 8 columns */}
                  <div className="lg:col-span-8 space-y-8">
                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {server.description}
                    </p>

                    {/* Use Cases */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {server.useCases.map((useCase) => (
                          <span 
                            key={useCase}
                            className="px-3 py-1.5 text-sm bg-brand/5 text-foreground border border-brand/10 rounded-full"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Grid */}
                    <div className="bg-card border border-border rounded-lg p-8">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand" />
                        Features &amp; Software
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {server.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-brand flex-shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand"
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <section className="py-24 bg-card border-t border-border relative">
        <div className="absolute inset-0 accent-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="brand-line mb-6" />
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Every Server is Custom Built
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The features listed above represent what each tier includes as a starting
                point. Every server we build is tailored to your specific needs. Want to
                add or change something? We&apos;ll work with you to design the exact setup
                you need.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Pricing is not listed because it varies based on your requirements.
                Get in touch and we&apos;ll put together a setup matched to what you need.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src="/images/io_stats.jpg" alt="Server monitoring dashboard" className="w-full h-full object-cover object-center" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src="/images/music_album_covers.jpg" alt="Self-hosted music library" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Ready to Get Your Own Server?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your needs and we&apos;ll put together the right setup, whether
            it&apos;s for home, office, or enterprise.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-brand text-white rounded-md"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
