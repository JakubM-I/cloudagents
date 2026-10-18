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

## Mandatory agent task completion

For every agent task, creating or modifying files is not enough to complete the task.

Before reporting the task as completed, the agent MUST:

1. create or update `agent-logs/<TASK-ID>.md`,
2. review the task-related changes,
3. commit all task-related changes,
4. push the task branch,
5. open a pull request to `main`,
6. ensure the task ID appears in the PR title or body,
7. verify that the pull request was created successfully.

Creating or modifying files only in the local or cloud workspace is NOT task completion.

Do not report the task as completed until the pull request exists.

If commit, push, pull request creation, repository access, or required validation fails:

- do not claim successful completion,
- set the task status to `partial` or `blocked`,
- document the problem in the task log,
- clearly report the blocker.

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

The task log is part of the task deliverable and must be committed together with the task changes.

---

## Pull requests

Every agent task must end with a pull request to `main`.

Recommended PR title format:

`[CA-001] Short task description`

The PR must contain the task ID in either:

- the title,
- or the PR body.

Do not merge directly into `main`.

---

## Validation

Validation depends on the task type.

Examples may include:

- tests,
- build,
- lint,
- static analysis,
- manual inspection,
- documentation review,
- API verification,
- consistency checks,
- research verification.

Do not claim that a validation step was performed if it was not actually performed.

Clearly document performed and skipped validation in the task log.

---

## Tool-specific instructions

Agents must also follow their tool-specific instructions when present:

- Codex: `.codex/WORKFLOW.md`
- Claude: `CLAUDE.md` and `.claude/`
- Cursor: `.cursor/`

Tool-specific instructions may add execution details, but they must not contradict the repository-wide rules in this file.

The mandatory completion requirements defined in this file always apply.

---

## Scope control

Do not:

- refactor unrelated code,
- modify unrelated files,
- change repository workflow files unless the task explicitly requires it,
- silently expand the task scope.

If you discover additional work, document it in the task log under:

`Recommended follow-up`

instead of expanding the task without instruction.

---

## Problems and blockers

If the task cannot be fully completed:

- do not hide the problem,
- do not invent a successful result,
- document the blocker,
- describe completed work,
- describe unfinished work,
- describe relevant assumptions,
- recommend the next step.

A partially completed task may still create a pull request if the result is useful and clearly documented.

---

## General rule

Prefer explicit, traceable work over hidden assumptions.

Every agent task should leave enough information for another person or agent to understand:

- what was requested,
- what was changed,
- why it was changed,
- how it was validated,
- what remains to be done,
- where the resulting pull request can be found.