import SpendForm from "../components/form/spend-form";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-20">
          <h1 className="text-2xl font-bold tracking-tight">
            Credex Audit
          </h1>

          <button className="border border-zinc-700 px-5 py-2 rounded-full hover:bg-zinc-900 transition">
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 mb-6">
              AI Infrastructure Cost Optimization
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Stop
              <span className="text-purple-400"> Overpaying </span>
              For AI Tools
            </h1>

            <p className="text-zinc-400 text-lg mt-8 max-w-xl leading-relaxed">
              Audit your AI stack instantly and discover hidden savings opportunities across ChatGPT, Claude, Cursor, Copilot, Gemini, and more.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-black px-7 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition">
                Generate Free Audit
              </button>

              <button className="border border-zinc-700 px-7 py-4 rounded-xl hover:bg-zinc-900 transition">
                View Example Report
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <h3 className="text-3xl font-bold">$12k+</h3>
                <p className="text-zinc-500 text-sm mt-1">Average annual savings</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">5 min</h3>
                <p className="text-zinc-500 text-sm mt-1">Audit completion time</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-zinc-500 text-sm mt-1">AI tools supported</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <SpendForm />
          </div>
        </div>
      </section>
    </main>
  );
}