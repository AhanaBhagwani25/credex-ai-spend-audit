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

  // ChatGPT Logic
  if (tool === "ChatGPT" && plan === "Team" && teamSize <= 2) {
    recommendation = "Switch to ChatGPT Pro";
    savings = 20;
    reason =
      "Team plan is unnecessary for very small teams.";
  }

  // Claude Logic
  else if (tool === "Claude" && plan === "Team" && teamSize <= 2) {
    recommendation = "Switch to Claude Pro";
    savings = 20;
    reason =
      "Claude Team is optimized for larger collaborative teams.";
  }

  // Cursor Logic
  else if (tool === "Cursor" && plan === "Business" && teamSize <= 3) {
    recommendation = "Switch to Cursor Pro";
    savings = 20;
    reason =
      "Cursor Business features may be excessive for smaller teams.";
  }

  else {
    recommendation = "Current setup looks optimized";
    savings = 0;
    reason =
      "No major savings opportunities detected.";
  }

  return {
    recommendation,
    savings,
    reason,
  };
}