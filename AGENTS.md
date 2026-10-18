# Agent Workflow

## Source of truth
- `main` is the canonical branch.
- Always start work from the latest `main`.
- Never work directly on `main`.

## Branches
Create one branch per task.

Format:
<actor>/<task-id>-<slug>

Examples:
codex/CA-001-api-client
claude/CA-002-research-auth
cursor/CA-003-dashboard-ui
human/CA-004-dashboard-foundation

## Task workflow
1. Update local state from `main`.
2. Create a task branch.
3. Complete the task.
4. Validate the result as appropriate for the task.
5. Create/update the task report in `agent-logs/`.
6. Commit all task-related changes.
7. Push the branch.
8. Open a pull request to `main`.
9. Do not merge directly into `main`.

## Commits
- Keep commits related to one task only.
- Use clear commit messages.
- Do not mix unrelated changes.

## Task report
Each task must create:

agent-logs/<task-id>.md

Use `agent-logs/TEMPLATE.md`.

## Completion
A task is complete only when:
- implementation/work is finished,
- task report is complete,
- changes are committed,
- branch is pushed,
- PR to `main` exists.

## Problems
If the task cannot be completed:
- do not hide the problem,
- document it in the task report,
- describe unfinished work,
- describe any assumptions or blockers.