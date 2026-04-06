import { brief, campaigns as baseCampaigns, recommendations } from "./data.js";
import { buildStubPayload, getMetadataStubLog } from "./mcpStub.js";

const state = {
  campaigns: structuredClone(baseCampaigns),
};

const money = (n) => `$${n.toLocaleString("en-US")}`;

function render() {
  const campaignList = document.getElementById("campaignList");
  campaignList.innerHTML = "";
  state.campaigns.forEach((item) => {
    const node = document.getElementById("campaignTemplate").content.cloneNode(true);
    node.querySelector(".campaign-name").textContent = item.name;
    node.querySelector(".campaign-detail").textContent = item.detail;
    const status = node.querySelector(".campaign-status");
    status.textContent = item.status;
    status.className = `campaign-status ${item.cls}`;
    node.querySelector(".campaign-budget").textContent = item.budget;
    node.querySelector(".campaign-pacing").textContent = item.pacing;
    campaignList.appendChild(node);
  });

  const recWrap = document.getElementById("recommendations");
  recWrap.innerHTML = "";
  recommendations.forEach(([title, copy]) => {
    const node = document.getElementById("recTemplate").content.cloneNode(true);
    node.querySelector("strong").textContent = title;
    node.querySelector("p").textContent = copy;
    recWrap.appendChild(node);
  });

  const logWrap = document.getElementById("mcpLog");
  const stub = buildStubPayload();
  const logs = getMetadataStubLog();
  logWrap.innerHTML = [
    `brief.client = ${brief.client}`,
    `brief.objective = ${brief.objective}`,
    `stub.mode = ${stub.mode}`,
    ...logs.map((line, idx) => `${String(idx + 1).padStart(2, "0")} · ${line.tool} · ${line.status} · ${line.summary}`),
  ]
    .map((line) => `<div class="log-line">${line}</div>`)
    .join("");

  const pace = 95 + Math.round(Math.random() * 6);
  const ctr = (0.78 + Math.random() * 0.45).toFixed(2);
  const cpl = Math.round(118 + Math.random() * 55);
  const pipeline = Math.round(280 + Math.random() * 80);
  const risk = pace > 99 ? "Low" : pace > 96 ? "Moderate" : "Review";

  document.getElementById("paceValue").textContent = `${pace}%`;
  document.getElementById("paceBar").style.width = `${pace}%`;
  document.getElementById("ctrValue").textContent = `${ctr}%`;
  document.getElementById("cplValue").textContent = money(cpl);
  document.getElementById("pipelineValue").textContent = `$${pipeline}K`;
  document.getElementById("riskValue").textContent = risk;
  document.getElementById("queueMeta").textContent = `${state.campaigns.length} active`;
}

async function submitBrief() {
  const payload = {
    client: brief.client,
    objective: brief.objective,
    budget: brief.budget,
    window: brief.window,
  };

  await fetch("/api/brief", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function injectBrief() {
  state.campaigns = [
    {
      name: "New stakeholder brief",
      detail: `Budget ${brief.budget} over ${brief.window} for ${brief.objective.toLowerCase()}`,
      status: "Queued",
      budget: "$10K / month",
      pacing: "Awaiting setup",
      cls: "status-warn",
    },
    ...state.campaigns,
  ];
  render();
}

async function approveSafeAction() {
  await fetch("/api/approve", { method: "POST" });
}

document.getElementById("refreshBtn").addEventListener("click", render);
document.getElementById("briefBtn").addEventListener("click", async () => {
  injectBrief();
  await submitBrief();
});

document.getElementById("approveBtn").addEventListener("click", approveSafeAction);

render();
