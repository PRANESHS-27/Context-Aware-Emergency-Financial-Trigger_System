"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
            <span className="text-red-400 text-sm font-medium">🔥 Patent-Pending Technology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Emergency Financial<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Trigger System</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 px-4">
            Autonomous financial operations triggered by real-time emergency detection.
            When seconds count, our system acts automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition shadow-lg shadow-blue-600/25">
              Open Dashboard
            </Link>
            <Link href="/demo" className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-lg font-semibold transition">
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem value="<5s" label="Detection Time" />
            <StatItem value="99%" label="Accuracy Rate" />
            <StatItem value="24/7" label="Monitoring" />
            <StatItem value="99.99%" label="Uptime SLA" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Key Features</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Advanced emergency detection with autonomous financial response
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🚨"
              title="Autonomous Detection"
              description="Real-time monitoring of wearables, location, and communication patterns with ML-based classification."
            />
            <FeatureCard
              icon="💰"
              title="Smart Financial Triggers"
              description="Automatic fund transfers, insurance claims, and payment deferrals without manual input."
            />
            <FeatureCard
              icon="🧠"
              title="Context-Aware Engine"
              description="Evaluates emergency severity, location, and type for appropriate financial response."
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

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard number="01" title="Monitor" description="Continuous data from wearables, location, and external feeds" />
            <StepCard number="02" title="Detect" description="ML classification identifies emergency conditions" />
            <StepCard number="03" title="Analyze" description="Context engine determines appropriate response" />
            <StepCard number="04" title="Execute" description="Autonomous financial actions triggered instantly" />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Emergency Scenarios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              type="Medical Emergency"
              icon="🏥"
              scenario="Cardiac event detected via wearable"
              actions={["Medical payment authorization", "Emergency contact transfer", "Insurance claim initiation"]}
              color="red"
            />
            <UseCaseCard
              type="Natural Disaster"
              icon="🌪️"
              scenario="Earthquake in user region"
              actions={["Payment deferral", "Insurance claim", "FEMA assistance application"]}
              color="orange"
            />
            <UseCaseCard
              type="Travel Emergency"
              icon="✈️"
              scenario="Stranded in foreign country"
              actions={["Cash advance", "Travel insurance claim", "Emergency fund transfer"]}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Deploy Emergency Protection?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us to learn more about licensing and integration opportunities.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Schedule a Demo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm sm:text-base">© 2026 CAEFTS. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-sm sm:text-base text-gray-400">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-white/10 hover:border-blue-500/50 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <div className="text-5xl sm:text-6xl font-bold text-blue-500/20 mb-4">{number}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  );
}

function UseCaseCard({ type, icon, scenario, actions, color }: { type: string; icon: string; scenario: string; actions: string[]; color: string }) {
  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <div className={`text-sm font-semibold text-${color}-400`}>{type}</div>
      </div>
      <p className="text-sm sm:text-base text-gray-400 mb-4">{scenario}</p>
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
