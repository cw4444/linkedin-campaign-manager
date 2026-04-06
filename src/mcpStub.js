const audienceSets = [
  "Revenue operations leaders",
  "Demand generation managers",
  "B2B SaaS marketers",
  "Talent acquisition decision makers",
];

export function getMetadataStubLog() {
  return [
    {
      tool: "metadata.audience_audit",
      status: "ok",
      summary: `Simulated match found in ${audienceSets.length} audience clusters.`,
    },
    {
      tool: "metadata.pacing_check",
      status: "ok",
      summary: "Two campaigns are under-delivering and one is at creative fatigue risk.",
    },
    {
      tool: "metadata.optimization_plan",
      status: "draft",
      summary: "Generated a budget shift and audience tightening proposal for approval.",
    },
  ];
}

export function buildStubPayload() {
  return {
    source: "Metadata.io MCP stub",
    mode: "read-only",
    audienceSets,
    actions: [
      "Surface the next safe optimization",
      "Prepare a stakeholder memo",
      "Wait for human approval before any write path",
    ],
  };
}
