type AuditInput = {
  tool: string;
  plan: string;
  teamSize: number;
  monthlySpend: number;
};

export function generateAudit({
  tool,
  plan,
  teamSize,
  monthlySpend,
}: AuditInput) {

  let recommendation = "";
  let savings = 0;
  let reason = "";

  // MASSIVE SPENDING ALERT
  if (monthlySpend >= 100000) {
    recommendation =
      "Enterprise AI spending review recommended";

    savings = Math.floor(monthlySpend * 0.18);

    reason =
      "Your AI infrastructure spending appears significantly above typical benchmarks. Centralized vendor optimization and plan consolidation may reduce costs substantially.";
  }

  // HIGH SPENDING ALERT
  else if (monthlySpend >= 10000) {
    recommendation =
      "Consider consolidating AI subscriptions";

    savings = Math.floor(monthlySpend * 0.12);

    reason =
      "Your organization may benefit from unified billing and usage optimization.";
  }

  // ChatGPT
  else if (tool === "ChatGPT") {

    if (plan === "Team" && teamSize <= 2) {
      recommendation = "Downgrade to ChatGPT Pro";
      savings = 20;

      reason =
        "Small teams usually do not need ChatGPT Team.";
    }

    else if (plan === "Enterprise" && teamSize <= 10) {
      recommendation = "Move to ChatGPT Team";
      savings = 100;

      reason =
        "Enterprise plan may be excessive for your company size.";
    }

    else {
      recommendation =
        "Your ChatGPT setup looks optimized";

      savings = 0;

      reason =
        "No major overspending detected.";
    }
  }

  // Claude
  else if (tool === "Claude") {

    if (plan === "Team" && teamSize <= 2) {
      recommendation = "Switch to Claude Pro";

      savings = 20;

      reason =
        "Claude Team is better suited for larger teams.";
    }

    else {
      recommendation =
        "Your Claude setup looks optimized";

      savings = 0;

      reason =
        "No major overspending detected.";
    }
  }

  // Cursor
  else if (tool === "Cursor") {

    if (plan === "Business" && teamSize <= 3) {
      recommendation = "Switch to Cursor Pro";

      savings = 25;

      reason =
        "Cursor Business is optimized for larger engineering teams.";
    }

    else {
      recommendation =
        "Your Cursor setup looks optimized";

      savings = 0;

      reason =
        "No major overspending detected.";
    }
  }

  // Copilot
  else if (tool === "GitHub Copilot") {

    if (plan === "Enterprise" && teamSize <= 5) {
      recommendation =
        "Move to Copilot Business";

      savings = 50;

      reason =
        "Enterprise features may not justify current costs.";
    }

    else {
      recommendation =
        "Your Copilot setup looks optimized";

      savings = 0;

      reason =
        "No major overspending detected.";
    }
  }

  // Default
  else {
    recommendation =
      "Your AI stack looks optimized";

    savings = 0;

    reason =
      "No major overspending detected.";
  }

  return {
    recommendation,
    savings,
    annualSavings: savings * 12,
    reason,
  };
}