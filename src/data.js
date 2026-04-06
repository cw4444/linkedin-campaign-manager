export const campaigns = [
  { name: "Exec ABM Q2", detail: "First-party data + matched audiences", status: "Healthy", budget: "$32K / month", pacing: "101% to plan", cls: "status-good" },
  { name: "Comms Launch", detail: "Global stakeholder awareness", status: "Watch", budget: "$12K / month", pacing: "94% to plan", cls: "status-warn" },
  { name: "Hiring Push", detail: "Talent lead gen for priority roles", status: "Healthy", budget: "$18K / month", pacing: "99% to plan", cls: "status-good" },
  { name: "Product Story", detail: "Mid-funnel content syndication", status: "Needs shift", budget: "$25K / month", pacing: "89% to plan", cls: "status-risk" },
  { name: "Retargeting", detail: "Creative rotation and frequency cap", status: "Healthy", budget: "$8K / month", pacing: "103% to plan", cls: "status-good" },
];

export const recommendations = [
  ["Shift 15% budget", "Move spend from Product Story into Exec ABM until CTR recovers above 1.1%."],
  ["Refresh creative", "Variant C is fatiguing. Rotate a tighter proof-point headline and new CTA."],
  ["Tighten audience", "Exclude recent converters and expand to job titles in revenue ops."],
  ["Draft stakeholder note", "Summarize pacing, risks, and the one action requiring approval."],
];

export const brief = {
  client: "Internal marketing and comms",
  objective: "Drive qualified engagement and stakeholder alignment",
  budget: "$50K",
  window: "4 weeks",
  guardrails: ["No live writes", "Human approval required", "Read-only demo"],
};
