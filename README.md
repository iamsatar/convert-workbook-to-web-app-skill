# Convert Workbook to Web App

An agent skill for turning Excel workbooks into web-native applications while preserving their business workflow, formulas, validations, user roles, reports, and decision logic.

The skill analyzes the workbook first, explains the proposed application in plain language, and waits for approval before building anything.

## What it does

- Inspects visible, hidden, and very-hidden worksheets.
- Inventories formulas, named ranges, validations, tables, charts, comments, protected areas, and likely inputs and outputs.
- Reconstructs the business workflow, roles, approvals, handoffs, and reporting needs.
- Groups repeated spreadsheet formulas into understandable business rules.
- Detects macros, Power Query, pivot tables, external links, and other Excel-specific features.
- Proposes web-native replacements for features that cannot be transferred directly.
- Produces an approval blueprint before implementation.
- Selects the smallest suitable architecture for the available agent environment.
- Verifies important calculations against trustworthy workbook results.

## How it works

### Phase 1: Analyze and propose

The agent studies the workbook and produces a non-technical blueprint covering:

1. the workbook's purpose;
2. the proposed MVP;
3. pages and user journeys;
4. roles and access;
5. the information model;
6. calculations and business rules;
7. replacements for Excel-only features;
8. the recommended architecture;
9. acceptance checks;
10. unresolved decisions.

The agent stops here and asks for approval.

### Phase 2: Build and verify

After approval, the agent:

1. inspects the available project and tools;
2. reuses a suitable existing architecture when one exists;
3. otherwise selects the smallest workable implementation;
4. converts workbook logic into named, testable application functions;
5. builds a web-native interface rather than copying worksheet tabs;
6. verifies calculations, validation, roles, persistence, and workflow behavior.

## Architecture behavior

The skill does not force a particular framework or vendor. It adapts to the environment in which it runs.

- **Existing application:** follow its architecture and conventions when suitable.
- **Lightweight local MVP:** use the included HTML, JavaScript, and Tailwind starter when browser-only storage is sufficient.
- **Shared workflow:** introduce a durable backend when multiple people or devices need the same records.
- **Secure roles:** use server-enforced authentication and authorization.
- **External systems or secrets:** keep integrations and credentials on the server.

Browser storage is only recommended for non-sensitive, single-browser prototypes.

## Installation

Review the repository's `SKILL.md` and bundled scripts before installing any third-party skill.

Repository:

```text
https://github.com/iamsatar/convert-workbook-to-web-app-skill
```

### Interoperable `.agents/skills` installation

Codex, GitHub Copilot, Gemini CLI, Cursor, Windsurf, and OpenCode all recognize `.agents/skills`. Use this location when you want one checked-in copy to work across several compatible agents.

Install for one project:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .agents/skills/convert-workbook-to-web-app
```

Install for your user account:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.agents/skills/convert-workbook-to-web-app"
```

Claude Code does not use the `.agents/skills` location directly; use its `.claude/skills` directory instead.

### OpenAI Codex

Codex discovers project skills from `.agents/skills/` and personal skills from `~/.agents/skills/`.

Project installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .agents/skills/convert-workbook-to-web-app
```

Personal installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.agents/skills/convert-workbook-to-web-app"
```

Invoke it with `$convert-workbook-to-web-app`, or open `/skills` in Codex CLI or the IDE extension to confirm it is available.

[OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills.md)

### Claude Code

Claude Code discovers project skills from `.claude/skills/` and personal skills from `~/.claude/skills/`.

Project installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .claude/skills/convert-workbook-to-web-app
```

Personal installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.claude/skills/convert-workbook-to-web-app"
```

Invoke it with `/convert-workbook-to-web-app`. Claude Code detects changes live when the skills directory already exists; if you created the top-level skills directory during a session, start a new session.

[Claude Code skill documentation](https://code.claude.com/docs/en/skills)

### GitHub Copilot

GitHub Copilot supports project skills in `.github/skills/`, `.claude/skills/`, or `.agents/skills/`. Personal skills can live in `~/.copilot/skills/` or `~/.agents/skills/`.

Project installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .github/skills/convert-workbook-to-web-app
```

Personal installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.copilot/skills/convert-workbook-to-web-app"
```

In Copilot CLI, run `/skills reload`, then `/skills info convert-workbook-to-web-app`. Invoke it explicitly as `/convert-workbook-to-web-app`, or let Copilot select it when the request matches its description.

[GitHub Copilot skill documentation](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)

### Gemini CLI

Gemini CLI can install a skill directly from a Git repository:

```bash
gemini skills install \
  https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  --scope user
```

Use `--scope workspace` instead for the current project. Gemini also discovers manual installations from `.gemini/skills/`, `~/.gemini/skills/`, `.agents/skills/`, and `~/.agents/skills/`.

Verify the installation with:

```bash
gemini skills list --all
```

In an interactive session, `/skills list` shows discovered skills and `/skills reload` refreshes them.

[Gemini CLI skill documentation](https://geminicli.com/docs/cli/skills/)

### Cursor

Cursor discovers project skills from `.cursor/skills/` or `.agents/skills/`, and personal skills from `~/.cursor/skills/` or `~/.agents/skills/`.

Project installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .cursor/skills/convert-workbook-to-web-app
```

Personal installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.cursor/skills/convert-workbook-to-web-app"
```

You can also open **Customize → Rules → Add Rule → Remote Rule (GitHub)** and enter the repository URL. Invoke the installed skill as `/convert-workbook-to-web-app`.

[Cursor skill documentation](https://cursor.com/docs/skills)

### Windsurf

Windsurf discovers workspace skills from `.windsurf/skills/` and global skills from `~/.codeium/windsurf/skills/`. It also recognizes `.agents/skills/` at workspace and user scope.

Workspace installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .windsurf/skills/convert-workbook-to-web-app
```

Global installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.codeium/windsurf/skills/convert-workbook-to-web-app"
```

Invoke it in Cascade with `@convert-workbook-to-web-app`, or let Cascade select it when the request matches its description.

[Windsurf skill documentation](https://docs.windsurf.com/windsurf/cascade/skills)

### OpenCode

OpenCode discovers project skills from `.opencode/skills/` and personal skills from `~/.config/opencode/skills/`. It also supports `.agents/skills/` and Claude-compatible skill locations.

Project installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  .opencode/skills/convert-workbook-to-web-app
```

Personal installation:

```bash
git clone https://github.com/iamsatar/convert-workbook-to-web-app-skill.git \
  "$HOME/.config/opencode/skills/convert-workbook-to-web-app"
```

OpenCode exposes discovered skills to its native `skill` tool and loads the full instructions when the agent selects the skill.

[OpenCode skill documentation](https://opencode.ai/docs/skills/)

### Updating an installation

Because these examples use Git, update an installed copy from inside its directory:

```bash
git pull --ff-only
```

If a host does not immediately show an updated skill, use its skill reload command or begin a new agent session.
## Usage

Provide the workbook and invoke the skill with a request such as:

```text
Use convert-workbook-to-web-app to turn this Excel workbook into a web app.
```

The agent should analyze the workbook and present the approval blueprint first. After reviewing it, respond with approval or requested changes.

Example approval:

```text
Approve the blueprint and build the MVP using the recommended architecture.
```

## Workbook inspector

The bundled inspector creates a JSON inventory of an OOXML Excel workbook.

### Requirements

- Python 3
- `openpyxl`

### Run it

```bash
python scripts/inspect_workbook.py path/to/workbook.xlsx \
  --output workbook-report.json
```

To include non-formula cell values:

```bash
python scripts/inspect_workbook.py path/to/workbook.xlsx \
  --include-values \
  --output workbook-report.json
```

Use `--include-values` carefully because the resulting report may contain sensitive workbook data.

The inspector supports `.xlsx`, `.xlsm`, `.xltx`, and `.xltm` files. It detects workbook structure and formulas but does not calculate formulas or execute macros.

## Repository structure

```text
.
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   ├── icon.svg
│   └── starter/
│       ├── app.js
│       └── index.html
├── references/
│   ├── architecture-selection.md
│   ├── blueprint.md
│   └── formula-parity.md
└── scripts/
    └── inspect_workbook.py
```

## Formula parity

A web app should not merely resemble the workbook. Its calculations should behave the same way.

The skill explicitly checks behaviors such as:

- blanks versus zero values;
- dates and month boundaries;
- currency and percentage rounding;
- exact and approximate lookups;
- missing matches and spreadsheet errors;
- dynamic arrays and named ranges;
- circular calculations;
- hidden helper sheets;
- external workbook dependencies.

Calculations are reported as **passed**, **failed**, or **unverified**. An unavailable or stale workbook result is never treated as a passing test.

## Safety and limitations

- The source workbook must not be overwritten.
- Cached formula values may be missing or stale.
- The inspector detects VBA but does not execute or interpret macro behavior.
- Power Query, pivots, connections, and external links require separate behavioral review.
- Roles inferred from worksheet names or comments must be confirmed with the user.
- Real multi-user permissions require server-side enforcement; a role switcher is only a prototype.
