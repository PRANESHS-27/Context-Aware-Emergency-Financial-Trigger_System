import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-slate-900/50 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">CAEFTS</div>
            <div className="hidden md:flex gap-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
              <Link href="#architecture" className="text-gray-300 hover:text-white transition">Architecture</Link>
              <Link href="#use-cases" className="text-gray-300 hover:text-white transition">Use Cases</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-red-500/20 border border-red-500/50 rounded-full">
            <span className="text-red-400 text-sm font-medium">Patent-Pending Technology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Emergency Financial<br />
            <span className="text-blue-400">Trigger System</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Autonomous financial operations triggered by real-time emergency detection.
            When seconds count, our system acts automatically to protect your finances.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
              Get Started
            </Link>
            <Link href="#features" className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;5s</div>
              <div className="text-gray-400">Detection Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚨"
              title="Autonomous Detection"
              description="Real-time monitoring of wearables, location, and communication patterns with ML-based emergency classification."
            />
            <FeatureCard
              icon="💰"
              title="Smart Financial Triggers"
              description="Automatic fund transfers, insurance claims, emergency loans, and payment deferrals without manual input."
            />
            <FeatureCard
              icon="🧠"
              title="Context-Aware Engine"
              description="Evaluates emergency severity, location, and type to determine appropriate financial response."
            />
            <FeatureCard
              icon="🔒"
              title="Bank-Level Security"
              description="AES-256 encryption, OAuth 2.0, multi-factor verification, and immutable audit trails."
            />
            <FeatureCard
              icon="🏥"
              title="Medical Integration"
              description="Direct integration with healthcare providers for emergency payment authorization."
            />
            <FeatureCard
              icon="🌍"
              title="Disaster Response"
              description="Automatic claims and relief applications triggered by official disaster declarations."
            />
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">System Architecture</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            A robust, scalable architecture designed for mission-critical emergency response.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ArchitectureCard
              title="Detection Layer"
              items={["Wearable APIs", "Location Services", "Communication Monitoring", "External Feeds"]}
            />
            <ArchitectureCard
              title="Analysis Engine"
              items={["ML Classification", "Context Analysis", "Severity Scoring", "False Positive Filter"]}
            />
            <ArchitectureCard
              title="Execution Layer"
              items={["Banking APIs", "Insurance APIs", "Payment Processors", "Audit Logging"]}
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Emergency Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <UseCaseCard
              type="Medical Emergency"
              scenario="Cardiac event detected via wearable"
              actions={["Medical payment authorization", "Emergency contact transfer", "Insurance claim initiation"]}
            />
            <UseCaseCard
              type="Natural Disaster"
              scenario="Earthquake in user region"
              actions={["Payment deferral", "Insurance claim", "FEMA assistance application"]}
            />
            <UseCaseCard
              type="Travel Emergency"
              scenario="Stranded in foreign country"
              actions={["Cash advance", "Travel insurance claim", "Emergency fund transfer"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Emergency Financial Protection?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us to learn more about licensing and integration opportunities.
          </p>
          <Link href="#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Schedule a Demo
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
          <p className="text-gray-400 text-center mb-12">
            For licensing, partnerships, or inquiries
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2026 CAEFTS. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-white/10 hover:border-blue-500/50 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ArchitectureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 bg-slate-900/50 rounded-xl border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-gray-400">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseCard({ type, scenario, actions }: { type: string; scenario: string; actions: string[] }) {
  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-white/10">
      <div className="text-blue-400 font-semibold mb-2">{type}</div>
      <p className="text-gray-400 mb-4">{scenario}</p>
      <ul className="space-y-2">
        {actions.map((action) => (
          <li key={action} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-green-400">→</span>
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
}
