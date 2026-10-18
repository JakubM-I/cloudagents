# Codex Task Workflow

This file defines the mandatory workflow for Codex tasks in this repository.

Codex must read and follow `AGENTS.md` before starting any task.

---

## Before starting

1. Read `AGENTS.md`.
2. Read `agent-logs/TEMPLATE.md`.
3. Fetch the latest repository state.
4. Start from the latest `main`.
5. Create a new task branch.

Required branch format:

`codex/CA-<number>-<slug>`

Example:

`codex/CA-012-json-task-schema`

Do not work directly on `main`.

Do not reuse an old task branch unless explicitly instructed.

---

## During the task

- Work only within the assigned task scope.
- Keep unrelated changes out of the branch.
- Follow existing repository conventions.
- Validate the result appropriately for the task type.
- Do not claim that a check was performed if it was not actually performed.

The task may involve code, documentation, research, configuration, structured data, or other repository work. Validation should match the task.

---

## Task log

Before completion, create:

`agent-logs/<TASK-ID>.md`

Use:

`agent-logs/TEMPLATE.md`

Complete all required sections.

The task log is part of the task deliverable.

If a section has nothing to report, use:

`None`

Do not omit required sections.

---

## Commit

After completing the task and task log:

1. Review the changed files.
2. Ensure no unrelated changes are included.
3. Commit all task-related changes.
4. Use a clear commit message.

Example:

`[CA-012] Add JSON task schema`

Do not finish the task with uncommitted changes.

---

## Push

Push the task branch to the repository.

Example:

`codex/CA-012-json-task-schema`

Do not consider the task complete if the changes exist only in the Codex cloud workspace.

---

## Pull request

After pushing:

1. Open a pull request to `main`.
2. Include the task ID in the PR title or body.
3. Reference the task log.
4. Verify that the PR was created successfully.

Recommended PR title:

`[CA-012] Add JSON task schema`

The pull request body should include:

- task ID,
- short summary,
- validation performed,
- task log path.

---

## Completion requirements

Codex MUST NOT report a task as completed until all of the following are true:

- task work is finished, or partial work is clearly documented,
- `agent-logs/<TASK-ID>.md` exists,
- required validation was performed,
- changes were committed,
- the task branch was pushed,
- a pull request to `main` exists.

Creating or modifying files in the cloud workspace alone is NOT task completion.

---

## Failure handling

If any of these steps fail:

- commit,
- push,
- pull request creation,
- repository access,
- required validation,

do not report the task as completed.

Instead:

1. set the task log status to `partial` or `blocked`,
2. document the failure under `Problems encountered`,
3. describe unfinished work,
4. report the blocker clearly to the user.

Do not silently stop after modifying files.

---

## Repository synchronization

Before creating a new task branch, make sure the branch starts from the latest `main`.

If `main` changed during the task:

1. fetch the latest state,
2. inspect whether the task conflicts with the new changes,
3. integrate `main` if necessary,
4. resolve conflicts carefully,
5. repeat relevant validation.

Do not overwrite unrelated work.

---

## Final response

After successfully creating the pull request, report:

- Task ID
- Branch
- Commit
- Pull request
- Validation performed
- Blockers or unfinished work, if any

Do not describe the task as complete before the PR exists.