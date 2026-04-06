# Agent Guide

This demo is organized around a simple operating model:

1. Intake
2. Analysis
3. Recommendation
4. Human approval
5. Safe execution only if a live environment is explicitly enabled

## Roles

### Brief agent

- Normalizes the stakeholder ask
- Captures objective, budget, window, audience, and constraints
- Produces a campaign record, not a live change

### Media agent

- Suggests targeting, spend splits, pacing adjustments, and creative rotation
- Never publishes or edits live accounts in this demo

### Metadata MCP stub

- Simulates the output of an integration layer
- Returns draft insights and checks
- Must remain read-only unless a future live connector is explicitly added

### Human approver

- Reviews the recommendation
- Decides whether any action is safe
- Owns the final go/no-go decision

## Guardrails

- No direct writes to ad platforms
- No hidden automation
- No unreviewed budget changes
- No pretending the stub is a live integration

## Recommended extension points

- Add a mock API route for brief submission
- Add a change log for review history
- Add a separate execution queue for approved actions
- Add a connector adapter only after live access is explicitly requested
