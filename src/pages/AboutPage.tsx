import { Link } from '@tanstack/react-router'
import { ArrowRight, Users, Award } from 'lucide-react'
import { ProgressiveImage } from '@/components/ProgressiveImage'

export function AboutPage() {
  return (
    <div className="pt-16 gradient-bg noise-texture">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border accent-gradient">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="brand-line mb-6" />
            <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Tailored Server Setups for People &amp; Enterprises
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              At SwiftSynQ, we believe your data should stay with you, not locked away
              in someone else&apos;s cloud. We build servers that put that control back
              in your hands, without sacrificing an ounce of convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait placeholder */}
            <div className="aspect-[3/4] max-w-sm w-full mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <ProgressiveImage src="/images/compressed/rohit.jpeg" placeholder="/images/placeholders/rohit.jpeg" alt="Rohit Phatak" className="w-full h-full" />
            </div>

            {/* Bio */}
            <div>
              <div className="brand-line mb-6" />
              <p className="text-sm font-medium text-brand tracking-widest uppercase mb-4">
                The Person Behind SwiftSynQ
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Rohit Phatak
              </h2>
              <p className="mt-2 text-brand font-medium">Founder</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Founder of Swiftsynq, Rohit builds custom server infrastructure engineered
                for exact workloads and real-world performance needs. He focuses on delivering
                scalable, reliable systems tailored to what businesses actually need.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With certifications as a Red Hat Certified Engineer (RHCE) and Red Hat
                Certified System Administrator (RHCSA), he brings deep expertise in Linux
                systems, automation, and enterprise server architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 border-b border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="brand-line mb-6" />
              <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Why We Exist
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Most people have quietly handed over control of their personal data without
                  ever meaning to. A photo here, a document there, synced to servers they
                  don&apos;t own and can&apos;t see. SwiftSynQ was built to change that.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We set up servers in your home or office so you can host your own photos,
                  files, media, AI, and more, on hardware that&apos;s yours, running software
                  you can trust, with no monthly fees and no one else looking in.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower anyone with the freedom to control and safeguard
                  their personal information, without compromising on performance.
                </p>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <ProgressiveImage src="/images/compressed/proxmox.jpg" placeholder="/images/placeholders/proxmox.jpg" alt="Server management dashboard" className="w-full h-full" imgClassName="object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-10">
              <h3 className="text-xl font-semibold text-foreground mb-3">Self Hosted</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data never leaves your home or office. No third-party access,
                no cloud subscriptions, no privacy trade-offs.
              </p>
            </div>

            <div className="bg-background p-10">
              <h3 className="text-xl font-semibold text-foreground mb-3">Open Source</h3>
              <p className="text-muted-foreground leading-relaxed">
                We build on open-source software, giving you full transparency into
                what&apos;s running on your hardware, with no vendor lock-in.
              </p>
            </div>

            <div className="bg-background p-10">
              <h3 className="text-xl font-semibold text-foreground mb-3">Low Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our setups are designed to be easy to maintain, so you can focus on
                your work, not your infrastructure.
              </p>
            </div>

            <div className="bg-background p-10">
              <h3 className="text-xl font-semibold text-foreground mb-3">Customizable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every server is tailored to your exact requirements: hardware, software,
                and configuration. Nothing more, nothing less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="brand-line mb-4" />
              <p className="text-sm font-medium text-brand tracking-widest uppercase mb-4">
                Why Work With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                From Home to Headquarters
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you&apos;re a family wanting to keep your photos private, a small office
                needing simple file access, or a company running AI workloads. SwiftSynQ
                builds a setup that fits you, not the other way around.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our servers support all your devices, are always accessible via a WebGUI
                dashboard, and receive OTA updates, keeping things simple and low-maintenance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-52 overflow-hidden rounded-lg">
                <ProgressiveImage src="/images/compressed/dns.jpg" placeholder="/images/placeholders/dns.jpg" alt="WebGUI dashboard" className="w-full h-full" imgClassName="object-top" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg bg-card">
                  <Users className="w-8 h-8 text-brand mb-3" />
                  <h3 className="font-semibold text-foreground">Supports All Devices</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Access your server from any device, anywhere on your network
                  </p>
                </div>

                <div className="p-6 border border-border rounded-lg bg-card">
                  <Award className="w-8 h-8 text-brand mb-3" />
                  <h3 className="font-semibold text-foreground">On Prem Support</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Local, on-premises setup and support. Your data never leaves your site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card relative">
        <div className="absolute inset-0 accent-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Ready to Take Back Your Data?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your setup and we&apos;ll put together a tailored server that keeps
            your data with you, without sacrificing convenience.
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
