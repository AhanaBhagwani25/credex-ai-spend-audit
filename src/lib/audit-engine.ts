type AuditInput = {
  tool: string;
  plan: string;
  teamSize: number;
};

export function generateAudit({
  tool,
  plan,
  teamSize,
}: AuditInput) {

  let recommendation = "";
  let savings = 0;
  let reason = "";

  // ChatGPT
  if (tool === "ChatGPT" && plan === "Team" && teamSize <= 2) {
    recommendation = "Downgrade to ChatGPT Pro";
    savings = 20;
    reason =
      "Team plan is expensive for smaller teams.";
  }

  // Claude
  else if (
    tool === "Claude" &&
    plan === "Team" &&
    teamSize <= 2
  ) {
    recommendation = "Switch to Claude Pro";
    savings = 20;
    reason =
      "Claude Team features may be unnecessary for your usage.";
  }

  // Cursor
  else if (
    tool === "Cursor" &&
    plan === "Business" &&
    teamSize <= 3
  ) {
    recommendation = "Switch to Cursor Pro";
    savings = 20;
    reason =
      "Cursor Business is optimized for larger engineering teams.";
  }

  // Copilot
  else if (
    tool === "GitHub Copilot" &&
    plan === "Enterprise" &&
    teamSize <= 5
  ) {
    recommendation = "Move to Copilot Business";
    savings = 50;
    reason =
      "Enterprise features may not justify current spending.";
  }

  else {
    recommendation = "Your setup already looks optimized";
    savings = 0;
    reason =
      "No major overspending detected in your AI stack.";
  }

  return {
    recommendation,
    savings,
    annualSavings: savings * 12,
    reason,
  };
}