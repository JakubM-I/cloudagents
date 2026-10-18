# AGENTS.md

## Purpose

This repository is used to coordinate and compare work performed by multiple coding agents.

The shared workflow must be predictable, auditable, and easy to analyze later.

The canonical branch is:

`main`

All agent work must start from the latest `main`.

---

## Supported agents

Agent-specific task branches must use one of these prefixes:

- `codex/`
- `claude/`
- `cursor/`

Human-created branches are not subject to the agent workflow rules defined below.

---

## Source of truth

`main` is the canonical source of truth for the repository.

Before starting a new task:

1. fetch the latest repository state,
2. update from `main`,
3. create a new task-specific branch from the latest `main`.

Do not continue work from an old agent branch unless the task explicitly requires it.

Do not work directly on `main`.

---

## Task IDs

Every agent task must have a unique task ID.

Format:

`CA-<number>`

Examples:

- `CA-001`
- `CA-002`
- `CA-017`

The same task ID must be used consistently in:

- branch name,
- pull request,
- task log.

---

## Branch naming

Create one branch per task.

Required format:

`<agent>/CA-<number>-<slug>`

Examples:

- `codex/CA-001-api-client`
- `claude/CA-002-auth-research`
- `cursor/CA-003-dashboard-ui`

Rules:

- use lowercase for the slug,
- separate words with hyphens,
- keep the slug concise,
- do not reuse an existing task ID,
- do not work directly on `main`.

---

## Task workflow

For every agent task:

1. Start from the latest `main`.
2. Create a new task branch.
3. Perform only work related to the assigned task.
4. Validate the result appropriately.
5. Create or update the task log.
6. Commit the task-related changes.
7. Push the task branch.
8. Open a pull request to `main`.
9. Ensure the task ID appears in the PR title or body.
10. Do not merge directly into `main`.

The task is not considered complete until the pull request has been created.

---

## Pull requests

Every agent task must end with a pull request to `main`.

Recommended PR title format:

`[CA-001] Short task description`

The PR must include the task ID either in:

- the title,
- or the PR body.

The PR must reference the corresponding agent log:

`agent-logs/CA-001.md`

Do not bypass the repository validation workflow.

Do not merge directly into `main`.

---

## Commits

Commits should:

- contain only changes related to the current task,
- use clear and concise messages,
- avoid unrelated cleanup,
- avoid mixing multiple tasks in one branch.

Multiple commits are allowed during development.

The repository may squash commits when merging the PR.

---

## Agent task log

Every agent task must create:

`agent-logs/<TASK-ID>.md`

Example:

`agent-logs/CA-001.md`

Use the structure defined in:

`agent-logs/TEMPLATE.md`

The log is part of the task deliverable.

Do not omit it.

---

## Required task log content

The log must contain these sections:

- `## Summary`
- `## Actions`
- `## Decisions`
- `## Problems encountered`
- `## Assumptions`
- `## Validation`
- `## Unfinished work`
- `## Recommended follow-up`

If a section has nothing to report, write:

`None`

Do not remove the section.

---

## Logging guidelines

The task log should describe the work semantically, not merely repeat the Git diff.

Good examples:

- why a solution was chosen,
- which alternative was rejected,
- what assumptions were made,
- what limitations were discovered,
- what remains unfinished,
- what should be checked later.

Avoid vague statements such as:

- "updated files",
- "fixed issue",
- "made improvements".

Prefer concrete descriptions.

---

## Validation

Validation depends on the type of task.

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

Do not claim validation that was not actually performed.

The task log must clearly state what was and was not validated.

---

## Problems and blockers

If the task cannot be fully completed:

- do not hide the problem,
- do not invent a successful result,
- document the blocker,
- describe completed work,
- describe unfinished work,
- describe assumptions,
- recommend the next step.

A partially completed task may still create a PR if the result is useful and clearly documented.

---

## Conflicts and repository state

If the task branch is outdated or conflicts with `main`:

1. fetch the latest repository state,
2. inspect the conflict,
3. integrate the latest `main`,
4. resolve conflicts carefully,
5. re-run relevant validation,
6. update the task log if the conflict affected the implementation.

Do not overwrite unrelated changes from other tasks.

---

## Scope control

Stay within the assigned task.

Do not:

- refactor unrelated code,
- rename unrelated files,
- change repository structure without need,
- modify agent workflow files unless the task explicitly requires it,
- introduce unrelated dependencies.

If you discover a separate problem, document it under:

`## Recommended follow-up`

instead of silently expanding the task.

---

## Repository workflow files

Do not modify these files unless the task explicitly concerns repository workflow:

- `AGENTS.md`
- `CLAUDE.md`
- `.github/workflows/`
- `.github/pull_request_template.md`
- `agent-logs/TEMPLATE.md`

If such a change is necessary, explain it clearly in the task log.

---

## Completion criteria

An agent task is complete only when:

- the assigned work is finished or clearly documented as partial,
- validation has been performed as appropriate,
- `agent-logs/<TASK-ID>.md` exists,
- the log contains all required sections,
- changes are committed,
- the branch is pushed,
- a pull request to `main` exists,
- the task ID is present in the PR title or body.

After creating the PR, report:

- task ID,
- branch name,
- PR,
- validation performed,
- any blockers or unfinished work.

---

## Human work

Human-created branches are outside the mandatory agent logging workflow.

Human work may use any branch naming convention unless repository rules require otherwise.

Agent-specific validation applies only to branches beginning with:

- `codex/`
- `claude/`
- `cursor/`

---

## General rule

Prefer explicit, traceable work over hidden assumptions.

Every agent task should leave enough information for another person or agent to understand:

- what was requested,
- what was changed,
- why it was changed,
- how it was validated,
- what remains to be done.