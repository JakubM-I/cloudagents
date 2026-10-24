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

## Repository root

All repository work must be created inside the repository.

For Codex Cloud, the repository root is:

`/workspace/cloudagents`

Other agent environments may use a different absolute path.

When necessary, determine the repository root using:

`git rev-parse --show-toplevel`

Do not create task deliverables directly in `/workspace`, `/workspace/scratch`, or other directories outside the repository unless explicitly instructed.

---

## Repository language

Repository content must be written in English unless the task explicitly requires another language.

This includes:

- task logs,
- documentation,
- structured data descriptions,
- pull request titles and descriptions,
- repository comments and notes.

The language of the user prompt does not change this rule.

---

## Project output structure

Standalone task deliverables must be stored inside:

`projects/`

When a task creates a new standalone project, prototype, experiment, page, tool, schema, or similar deliverable, create a dedicated directory using:

`projects/<TASK-ID>-<slug>/`

Example:

`projects/CA-004-json-task-viewer/`

The agent should choose a short, descriptive slug automatically.

The user does not need to provide the output directory explicitly.

If the task modifies an existing project or artifact, update the existing project directory instead of creating a new directory for the task.

Do not place standalone task deliverables:

- directly in the repository root,
- directly in `/workspace`,
- outside the Git repository,

unless explicitly instructed.

Repository-level files such as documentation, workflows, agent instructions, shared configuration, and task logs may remain in their appropriate root-level locations.

---

## Agent branch prefixes

Agent branches must use the appropriate prefix:

- Codex: `codex/`
- Claude: `claude/`
- Cursor: `cursor/`

When the environment allows custom branch naming, the preferred format is:

`<agent>/CA-<number>-<slug>`

Example:

`codex/CA-001-api-client`

However, some agent environments may generate branch names automatically.

Automatically generated branch names are allowed as long as the correct agent prefix is preserved.

Examples:

`claude/intelligent-clarke-iuicds`

`codex/CA-001-api-client`

The branch name identifies the agent, not the task.

The task itself is identified by its unique task ID:

`CA-<number>`

The task ID must be present in:

- the pull request title or body,
- the corresponding task log.

Do not work directly on `main`.

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

If publishing to GitHub requires explicit user approval, request that approval and continue the workflow after it is granted.

Waiting for publishing approval is not a task failure.

If commit, push, pull request creation, repository access, or required validation fails for another reason:

- do not claim successful completion,
- set the task status to `partial` or `blocked`,
- document the problem in the task log,
- clearly report the blocker.

---

## Task logs

Use:

`agent-logs/templates/TASK_LOG_TEMPLATE.md`

Every task log must be stored directly inside:

`agent-logs/`

Example:

`agent-logs/CA-004.md`

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

The pull request should reference the corresponding task log.

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
- Claude: `CLAUDE.md` and `.claude/WORKFLOW.md`
- Cursor: `.cursor/WORKFLOW.md`

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