"use client";

import { useEffect, useState } from "react";

export default function SpendForm() {
  const [teamSize, setTeamSize] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");

  const [selectedTool, setSelectedTool] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [useCase, setUseCase] = useState("");

  // Load saved data from localStorage
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

  // Save data whenever values change
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

  return (
    <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">
        AI Spend Audit
      </h2>

      <div className="space-y-5">

        {/* AI Tool Selection */}
        <select
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
        >
          <option value="">Select AI Tool</option>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Claude">Claude</option>
          <option value="Cursor">Cursor</option>
          <option value="Gemini">Gemini</option>
          <option value="GitHub Copilot">GitHub Copilot</option>
        </select>

        {/* Plan Selection */}
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
        >
          <option value="">Select Plan</option>
          <option value="Free">Free</option>
          <option value="Pro">Pro</option>
          <option value="Team">Team</option>
          <option value="Enterprise">Enterprise</option>
        </select>

        {/* Team Size */}
        <input
          type="number"
          placeholder="Team Size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
        />

        {/* Monthly Spend */}
        <input
          type="number"
          placeholder="Monthly AI Spend ($)"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(e.target.value)}
          className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
        />

        {/* Use Case */}
        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full p-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
        >
          <option value="">Primary Use Case</option>
          <option value="Coding">Coding</option>
          <option value="Writing">Writing</option>
          <option value="Research">Research</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Mixed">Mixed</option>
        </select>

        {/* Submit Button */}
        <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition">
          Generate Audit
        </button>

      </div>
    </div>
  );
}