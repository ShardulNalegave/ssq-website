import { Link } from '@tanstack/react-router'
import { Shield, Lock, Server, ArrowRight, Zap, Globe, Clock } from 'lucide-react'

export function HomePage() {
  return (
    <div className="pt-16 gradient-bg noise-texture">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Subtle accent gradient at top */}
        <div className="absolute inset-0 accent-gradient" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="brand-line mx-auto mb-6" />
            <p className="text-sm font-medium text-brand tracking-widest uppercase mb-6">
              Self-Hosted Servers
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto leading-tight animate-fade-in-delay-1 text-balance">
            Your Data, Your Way
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            We develop tailored server setups for people &amp; enterprises to free themselves
            from relying on big data companies, ensuring your data stays with you,
            without compromising on convenience.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <Link
              to="/servers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-brand text-white rounded-md w-full sm:w-auto"
            >
              Explore Servers
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground rounded-md w-full sm:w-auto"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 border-t border-border relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="brand-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Why SwiftSynQ
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Everything we build is self-hosted, open source, and designed around your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {/* Self Hosted */}
            <div className="bg-card p-10">
              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Self Hosted</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your server, your rules. Your data never leaves your home or office.
                No cloud subscriptions, no third-party access.
              </p>
            </div>

            {/* Open Source */}
            <div className="bg-card p-10">
              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Open Source</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on open-source software, with full transparency into what&apos;s running
                on your hardware and no vendor lock-in.
              </p>
            </div>

            {/* Customizable */}
            <div className="bg-card p-10">
              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Customizable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every server is tailored to your exact requirements: hardware, software,
                and configuration, built your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-card border-t border-border relative">
        <div className="absolute inset-0 accent-gradient opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="brand-line mb-4" />
              <p className="text-sm font-medium text-brand tracking-widest uppercase mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Tailored Server Setups for People &amp; Enterprises
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We develop tailored server setups for people and enterprises to free themselves
                from relying on big data companies, ensuring your data stays with you,
                without compromising on convenience or performance.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Software Highlights Grid */}
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-background p-8">
                <div className="text-2xl font-semibold text-foreground">Photos</div>
                <p className="mt-2 text-sm text-muted-foreground">Google Photos alternative: your memories, your server</p>
              </div>
              <div className="bg-background p-8">
                <div className="text-2xl font-semibold text-foreground">AI</div>
                <p className="mt-2 text-sm text-muted-foreground">Run LLMs with ease, without paying for API keys</p>
              </div>
              <div className="bg-background p-8">
                <div className="text-2xl font-semibold text-foreground">Media</div>
                <p className="mt-2 text-sm text-muted-foreground">Your own Netflix: stream movies &amp; series locally</p>
              </div>
              <div className="bg-background p-8">
                <div className="text-2xl font-semibold text-foreground">Files</div>
                <p className="mt-2 text-sm text-muted-foreground">NAS drive with Windows integration &amp; easy access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Why Choose SwiftSynQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-lg bg-card">
              <Zap className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Redundant Data Storage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your data is stored redundantly across multiple drives, keeping it safe even if hardware fails.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <Globe className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">WebGUI Dashboard</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manage everything through a clean web interface, accessible from any browser on your network.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <Clock className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">OTA Updates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your system stays up-to-date automatically with over-the-air software updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border relative">
        <div className="absolute inset-0 accent-gradient opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Ready to Take Back Control of Your Data?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your requirements and we&apos;ll put together a tailored server setup just for you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-brand text-white rounded-md"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
