"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "../../lib/audit-engine";

export default function SpendForm() {
  const [teamSize, setTeamSize] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");

  const [selectedTool, setSelectedTool] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [useCase, setUseCase] = useState("");

  const [auditResult, setAuditResult] = useState<any>(null);

  // Load saved data
  useEffect(() => {
    const savedTeamSize = localStorage.getItem("teamSize");
    const savedSpend = localStorage.getItem("monthlySpend");

    const savedTool = localStorage.getItem("selectedTool");
    const savedPlan = localStorage.getItem("selectedPlan");
    const savedUseCase = localStorage.getItem("useCase");

    if (savedTeamSize) setTeamSize(savedTeamSize);
    if (savedSpend) setMonthlySpend(savedSpend);

    if (savedTool) setSelectedTool(savedTool);
    if (savedPlan) setSelectedPlan(savedPlan);
    if (savedUseCase) setUseCase(savedUseCase);
  }, []);

  // Save data
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

  // Generate Audit
  const handleGenerateAudit = () => {
    const result = generateAudit({
      tool: selectedTool,
      plan: selectedPlan,
      teamSize: Number(teamSize),
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

        {/* Button */}
        <button
          onClick={handleGenerateAudit}
          className="w-full bg-purple-500 hover:bg-purple-400 text-white py-4 rounded-xl font-semibold text-lg transition duration-200 shadow-lg shadow-purple-500/20 mt-6"
        >
          Generate Audit
        </button>

        {/* Audit Result */}
        {auditResult && (
          <div className="mt-8 p-6 rounded-2xl bg-zinc-900 border border-zinc-800">

            <h3 className="text-2xl font-bold text-white mb-4">
              Audit Result
            </h3>

            <div className="space-y-3">

              <p className="text-zinc-300">
                <span className="font-semibold text-white">
                  Recommendation:
                </span>{" "}
                {auditResult.recommendation}
              </p>

              <p className="text-zinc-300">
                <span className="font-semibold text-white">
                  Estimated Savings:
                </span>{" "}
                ${auditResult.savings}/month
              </p>

              <p className="text-zinc-400">
                {auditResult.reason}
              </p>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}