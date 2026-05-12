"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "../../lib/audit-engine";

type AuditResult = {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
};

export default function SpendForm() {
  const [teamSize, setTeamSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("teamSize") || "";
    }
    return "";
  });
  const [monthlySpend, setMonthlySpend] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("monthlySpend") || "";
    }
    return "";
  });

  const [selectedTool, setSelectedTool] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("selectedTool") || "";
    }
    return "";
  });
  const [selectedPlan, setSelectedPlan] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("selectedPlan") || "";
    }
    return "";
  });
  const [useCase, setUseCase] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("useCase") || "";
    }
    return "";
  });

  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  // Load saved data - removed since we're initializing with localStorage

  // Save form data
  useEffect(() => {
    localStorage.setItem("teamSize", teamSize);
    localStorage.setItem("monthlySpend", monthlySpend);

    localStorage.setItem("selectedTool", selectedTool);
    localStorage.setItem("selectedPlan", selectedPlan);
    localStorage.setItem("useCase", useCase);
  }, [
    teamSize,
    monthlySpend,
    selectedTool,
    selectedPlan,
    useCase,
  ]);

  // Generate audit
  const handleGenerateAudit = () => {
    const result = generateAudit({
      tool: selectedTool,
      plan: selectedPlan,
      teamSize: Number(teamSize),
      monthlySpend: Number(monthlySpend),
    });

    setAuditResult(result);
  };

  return (
    <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Free AI Spend Audit
        </h2>

        <p className="text-zinc-400 mt-2">
          Discover hidden savings opportunities in your AI stack.
        </p>
      </div>

      <div className="space-y-5">

        {/* AI Tool */}
        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            AI Tool
          </label>

          <select
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500 transition"
          >
            <option value="">Select AI Tool</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Cursor">Cursor</option>
            <option value="Gemini">Gemini</option>
            <option value="GitHub Copilot">GitHub Copilot</option>
          </select>
        </div>

        {/* Plan */}
        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Current Plan
          </label>

          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500 transition"
          >
            <option value="">Select Plan</option>
            <option value="Free">Free</option>
            <option value="Pro">Pro</option>
            <option value="Team">Team</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Team Size */}
        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Team Size
          </label>

          <input
            type="number"
            placeholder="e.g. 10"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Monthly Spend */}
        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Monthly AI Spend
          </label>

          <input
            type="number"
            placeholder="e.g. 500"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500 transition"
          />
        </div>

        {/* Use Case */}
        <div>
          <label className="block text-sm text-zinc-400 mb-2">
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500 transition"
          >
            <option value="">Select Use Case</option>
            <option value="Coding">Coding</option>
            <option value="Writing">Writing</option>
            <option value="Research">Research</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateAudit}
          className="w-full bg-purple-500 hover:bg-purple-400 text-white py-4 rounded-xl font-semibold text-lg transition duration-200 shadow-lg shadow-purple-500/20 mt-6"
        >
          Generate Audit
        </button>

        {/* Audit Result */}
        {auditResult && (
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Audit Report
                </h3>

                <p className="text-zinc-400 mt-2">
                  AI spending optimization summary
                </p>
              </div>

              <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                {auditResult.savings > 0
                  ? "Savings Detected"
                  : "Already Optimized"}
              </div>
            </div>

            {/* Savings Cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 text-sm">
                  Monthly Savings
                </p>

                <h4 className="text-4xl font-bold text-white mt-2">
                  ${auditResult.savings}
                </h4>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 text-sm">
                  Annual Savings
                </p>

                <h4 className="text-4xl font-bold text-white mt-2">
                  ${auditResult.annualSavings}
                </h4>
              </div>

            </div>

            {/* Recommendation */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

              <h4 className="text-xl font-semibold text-white mb-4">
                Recommendation
              </h4>

              <p className="text-purple-300 text-lg font-medium">
                {auditResult.recommendation}
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {auditResult.reason}
              </p>

            </div>

            {/* High Savings Alert */}
            {auditResult.savings >= 50 && (
              <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5">

                <h4 className="text-purple-300 font-semibold text-lg">
                  Significant Savings Opportunity
                </h4>

                <p className="text-zinc-300 mt-2">
                  Your team may benefit from discounted AI infrastructure credits through Credex.
                </p>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}