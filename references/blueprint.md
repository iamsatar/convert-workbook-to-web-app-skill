# Workbook-to-web-app approval blueprint

Use this structure after workbook analysis and before implementation. Keep the main explanation short enough for a non-technical decision-maker. Put large cell-level inventories in an appendix or project artifact.

## 1. What this workbook does

Explain the business purpose in three to six sentences:

- the outcome it produces;
- the people involved;
- the main information it receives;
- the decisions or reports it produces.

Label statements as **Found in workbook**, **Inferred**, or **Needs confirmation** when the distinction matters.

## 2. Proposed MVP

State what the first working version will let a user accomplish. Separate:

- included in the MVP;
- deliberately postponed;
- excluded because it is obsolete, duplicated, or unsupported.

## 3. User journey and pages

Map tasks to web-native pages rather than copying worksheet tabs.

| User task | Proposed page or interaction | Workbook source | Notes |
| --- | --- | --- | --- |
| Enter or import information | Form, upload, or editable table | Sheet/table/range | Validation and units |
| Review calculated outcome | Summary or detail view | Formula/output area | Explain key numbers |
| Approve or finalize | Review step | Status cells or manual convention | Confirm role and lock behavior |

## 4. People and access

For each proposed role, explain what the person can view, create, change, approve, export, and administer. Mark inferred roles and distinguish a simulated prototype role from real secured access.

## 5. Information model

Describe the main records and their relationships in business language. Identify:

- required and optional fields;
- calculated fields;
- unique identifiers;
- lifecycle/status fields;
- reference data and lookup lists;
- history or audit requirements.

## 6. Calculation and rule mapping

Summarize formula families rather than listing thousands of copied cells.

| Business rule | Workbook evidence | Proposed app behavior | Verification |
| --- | --- | --- | --- |
| What is calculated | Named range or representative formulas | Named function/service | Workbook cases to compare |

Call out rounding, dates, currency, blank values, errors, thresholds, lookups, and circular calculations.

## 7. Excel-only features and replacements

For each macro, query, connection, pivot, external link, or other special feature, state:

- what it appears to do;
- whether its behavior is fully understood;
- the proposed web-native replacement;
- information still needed;
- whether it is inside the MVP.

## 8. Recommended architecture

Explain:

- the proposed app shape;
- where data will be stored;
- whether authentication is real or simulated;
- why this is the smallest safe option;
- what would cause the architecture to need an upgrade.

Avoid unexplained framework names. If a framework matters, describe its practical benefit.

## 9. Acceptance checks

List observable outcomes that determine whether the app works, including calculation parity, user journey completion, roles, persistence, import/export, and responsive behavior.

## 10. Decisions and approval

List only unresolved decisions that materially affect the MVP. End with a direct choice:

- approve this blueprint and begin implementation;
- request changes;
- pause the project.
