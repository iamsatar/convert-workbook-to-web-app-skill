---
name: convert-workbook-to-web-app
description: Convert Excel workbooks into web-native applications while preserving their business workflow, formulas, validation rules, roles, outputs, and reporting behavior. Use when a user asks to turn, rebuild, migrate, replace, or prototype an `.xlsx`, `.xlsm`, or other spreadsheet-based process as a web app. Analyze the workbook first, explain the proposed product and architecture in non-technical language, require explicit approval of a blueprint, and only then build and verify the app using the capabilities of the current agent environment.
---

# Convert Workbook to Web App

Turn a workbook into a workable web-native MVP through two distinct phases: blueprint first, implementation only after approval.

## Operating principles

- Treat the workbook as the source of business rules, not as the target interface.
- Preserve calculations and behavior while redesigning the experience as pages, forms, tables, dashboards, approvals, and role-appropriate views.
- Remain agent- and vendor-neutral. Inspect the current environment and use the tools, project, and delivery options actually available.
- Choose the smallest architecture that safely satisfies the workflow.
- Keep the conversation friendly to non-technical users. Explain decisions through their practical effect.
- Separate facts found in the workbook from inferences and unanswered questions.
- Never modify the source workbook.

## Phase 1: Analyze and propose

### 1. Ground the workbook

Resolve the workbook the user supplied. If it is missing or ambiguous, ask for the file before discussing architecture.

Work from a copy when recalculation, conversion, or cleanup is necessary. Never overwrite the original. If the workbook is encrypted, ask the user for an unlocked copy; do not bypass its protection.

### 2. Inspect the workbook

Inventory every relevant part of the workbook, including:

- visible, hidden, and very-hidden sheets;
- formulas, named ranges, structured references, hidden helper calculations, cached results, and circular or iterative calculations;
- likely input cells, output cells, labels, tables, validations, conditional formatting, merged regions, comments, and protected areas;
- charts, pivot tables, macros, Power Query, external links, data connections, imports, and exports;
- dates, currencies, percentages, rounding, units, locale assumptions, and error behavior;
- repeated manual steps, status transitions, approvals, handoffs, reports, and possible user roles.

Use `scripts/inspect_workbook.py` for `.xlsx` and `.xlsm` files when Python and `openpyxl` are available. Use its report as evidence, not as a substitute for inspecting representative sheets and understanding the process. Use another safe workbook reader when the format or environment requires it.

Do not claim that cached formula results are current. Workbook libraries often read formulas but do not calculate them.

### 3. Reconstruct the workflow

Describe, in plain language:

1. what the workbook helps people accomplish;
2. who supplies or changes information;
3. what the user does in sequence;
4. which values are calculated and what decisions they drive;
5. which reviews, approvals, exceptions, or handoffs occur;
6. what reports, exports, or final outcomes are produced.

Infer roles only when the workbook provides evidence. A sheet name such as `Manager Review` suggests a role but does not prove its permissions. Mark the role as inferred and confirm it.

### 4. Ask focused questions

Ask only questions that materially affect the product or architecture. Ask one important question at a time when practical. Do not ask the user to translate formulas or make technical choices the agent can resolve.

Prefer questions such as:

- “Will one person use this, or will several people work in it together?”
- “Does a manager need to approve this before it becomes final?”
- “Should past records remain editable?”
- “Does this contain information that only certain people may see?”
- “Where does this information come from today?”

Explain why a question matters in one sentence. Offer a recommendation when the user may not know the answer.

### 5. Prepare the approval blueprint

Read `references/blueprint.md` and produce its blueprint in user-facing language. Include a traceable mapping from workbook elements to proposed app behavior without overwhelming the user with cell addresses.

For macros, Power Query, external data connections, pivot tables, and other non-portable features:

1. detect and describe their apparent purpose;
2. explain what cannot be transferred directly;
3. propose a web-native replacement;
4. mark uncertain behavior for confirmation;
5. include the replacement in the approval decision.

### 6. Stop for approval

End Phase 1 by asking the user to approve the blueprint or request changes. Do not create the application, install a stack, change an existing project, or deploy anything before explicit approval.

Approval applies to the proposed scope and architecture. If new workbook behavior is discovered later and materially changes either, pause and obtain approval for the revision.

## Phase 2: Build after approval

### 1. Select the architecture

Read `references/architecture-selection.md`. Inspect the current environment for an existing project, available runtimes, package managers, app-building tools, persistence options, deployment paths, and user constraints.

Reuse an appropriate existing architecture when one exists. Otherwise choose the smallest workable option. The bundled HTML, JavaScript, and Tailwind starter is a fallback, not a forced stack.

### 2. Implement a web-native workflow

- Organize the app around user tasks rather than workbook tabs.
- Convert inputs into appropriate forms and controls with clear units, help text, and validation.
- Convert large records into searchable or filterable tables only when users need them.
- Convert outputs into concise summaries, reports, and charts that support decisions.
- Preserve important import and export workflows when they are part of the approved scope.
- Make states, approvals, errors, and ownership understandable without spreadsheet knowledge.

### 3. Translate calculations safely

Create named domain functions or calculation modules. Do not use `eval` or execute workbook formulas as arbitrary code.

Maintain a calculation catalog linking each important workbook formula or formula family to:

- its business meaning;
- source sheet and representative cells or named range;
- app function or service;
- inputs, output type, rounding, and error behavior;
- automated parity tests.

Read `references/formula-parity.md` before implementing or verifying calculations.

### 4. Implement persistence and roles honestly

- Use in-memory state only for a disposable demonstration.
- Use browser storage only for a local, single-browser MVP containing non-sensitive data.
- Use a durable shared store when records must survive across people, devices, or deployments.
- Use real server-enforced authentication and authorization for secure multi-user roles.
- A role switcher is acceptable for a clearly labeled prototype, but never present it as security.
- Keep secrets and privileged calculations out of browser code.

### 5. Use the fallback starter when appropriate

When no suitable project exists and a lightweight local MVP is sufficient, copy and adapt:

- `assets/starter/index.html`
- `assets/starter/app.js`

Replace the placeholder model, navigation, calculation functions, state, copy, and styling with workbook-derived behavior. Tailwind is the recommended styling utility for this fallback. If a CDN is unsuitable for the delivery environment, configure Tailwind locally or use an equivalent available build path.

### 6. Verify the result

Verify all approved behavior:

- run calculation-parity tests using trustworthy workbook outputs;
- test validation, empty states, error states, rounding, dates, and boundary values;
- test every role and workflow transition;
- test persistence, refresh behavior, import/export, and responsive layout;
- inspect the rendered UI when the environment supports visual review;
- distinguish passed, failed, and unverified behavior.

Do not claim complete parity when results depend on unavailable macros, stale cached values, missing source data, or an unavailable spreadsheet calculation engine.

## Deliver the MVP

Provide the runnable app and a short, non-technical handoff containing:

- what was built;
- how to run or open it;
- where its data is stored;
- which roles are real versus simulated;
- which workbook behaviors were verified;
- any remaining limitations or decisions.

Keep the detailed cell-level mapping with the project when useful, but lead the user with the working product and practical outcomes.
