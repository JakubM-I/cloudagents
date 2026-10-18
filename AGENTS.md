# AGENTS.md

## Purpose

This repository is used to coordinate and compare work performed by multiple AI agents.

`main` is the canonical source of truth.

---

## General rules

- Do not work directly on `main`.
- Start every new task from the latest `main`.
- Use one branch per task.
- Keep each task focused on its assigned scope.
- Do not mix unrelated changes into one task.
- Every agent task must have a unique task ID in the format:

  `CA-<number>`

- Every agent task must create a task log:

  `agent-logs/<TASK-ID>.md`

- Every agent task must end with a pull request to `main`.
- Do not bypass repository validation or branch protection rules.
- If a task cannot be completed, clearly document the blocker and unfinished work.
- Do not claim validation or completion that did not actually happen.

---

## Agent branch prefixes

Use the appropriate branch prefix:

- Codex: `codex/`
- Claude: `claude/`
- Cursor: `cursor/`

Recommended format:

`<agent>/CA-<number>-<slug>`

Example:

`codex/CA-001-api-client`

---

## Task logs

Use:

`agent-logs/TEMPLATE.md`

Task logs should explain:

- what was done,
- important decisions,
- problems encountered,
- assumptions,
- validation performed,
- unfinished work,
- recommended follow-up.

---

## Tool-specific instructions

Each agent must also follow its tool-specific instructions.

- Codex: `.codex/WORKFLOW.md`
- Claude: `CLAUDE.md` and `.claude/`
- Cursor: `.cursor/`

Tool-specific instructions may define execution details, but must not contradict the repository-wide rules in this file.

---

## Scope control

Do not:

- refactor unrelated code,
- modify unrelated files,
- change repository workflow files unless the task explicitly requires it,
- silently expand the task scope.

If you discover additional work, document it in the task log under `Recommended follow-up`.