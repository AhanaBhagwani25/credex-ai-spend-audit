import SpendForm from "../components/form/spend-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold leading-tight">
          Stop Overpaying For AI Tools
        </h1>

        <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
          Audit your AI stack instantly and discover savings opportunities.
        </p>
      </section>

      <SpendForm />

    </main>
  );
}