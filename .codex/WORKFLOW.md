# Codex Task Workflow

This file defines the mandatory workflow for Codex tasks in this repository.

Codex must read and follow `AGENTS.md` before starting any task.

---

## Mandatory repository synchronization

Before reading repository instructions or starting task work:

1. Change directory to:

   `/workspace/cloudagents`

2. Synchronize the repository with the latest `origin/main`:

   `git fetch origin`

   `git checkout -B main origin/main`

3. Verify the repository state:

   `git status`

   `git log -1 --oneline`

Only after synchronization:

1. read `AGENTS.md`,
2. read the remaining Codex workflow instructions,
3. create or use the dedicated task branch,
4. start task work.

The task must start from the latest available `origin/main`.

---

## Repository root

All task work must remain inside:

`/workspace/cloudagents`

Do not create deliverable files directly in:

- `/workspace`
- `/workspace/scratch`
- other directories outside the repository

unless explicitly instructed.

---

## Project output

When the task creates a new standalone project, prototype, experiment, page, tool, schema, or similar deliverable, create:

`projects/<TASK-ID>-<slug>/`

Choose a short descriptive slug automatically.

Example:

`projects/CA-012-json-task-viewer/`

The user does not need to specify the directory.

If the task modifies an existing project or artifact, work in the existing project directory instead of creating a new task directory.

Repository-level work such as changes to documentation, workflows, configuration, agent instructions, or task logs should remain in the appropriate repository-level location.

---

## Branch

Use a dedicated branch for each task.

The branch must use the Codex prefix:

`codex/`

When custom branch naming is available, the preferred format is:

`codex/CA-<number>-<slug>`

Example:

`codex/CA-012-json-task-schema`

If the Codex environment generates a branch name automatically, keep the generated branch as long as it uses the `codex/` prefix.

The branch name does not need to contain the task ID.

The task ID must instead be included in:

- the pull request title or body,
- the corresponding task log.

Do not work directly on `main`.

---

## During the task

- Work only within the assigned task scope.
- Keep all task deliverables inside the repository.
- Follow the project output rules defined in `AGENTS.md`.
- Follow the repository language rules defined in `AGENTS.md`.
- Keep unrelated changes out of the branch.
- Follow existing repository conventions.
- Validate the result appropriately for the task type.
- Do not claim that a check was performed if it was not actually performed.

The task may involve code, documentation, research, configuration, structured data, or other repository work.

Validation should match the type of task.

---

## Task log

Before completion, create:

`agent-logs/<TASK-ID>.md`

Use:

`agent-logs/templates/TASK_LOG_TEMPLATE.md`

Complete all required sections.

The task log is part of the task deliverable.

If a section has nothing to report, use:

`None`

Do not omit required sections.

---

## GitHub publishing

When the task is ready to publish:

1. commit all task-related changes,
2. push the task branch,
3. create a pull request to `main`,
4. ensure the task ID is present in the PR title or body,
5. verify that the pull request exists.

Do not manually merge the pull request.

If GitHub publishing requires explicit user approval:

1. request the approval,
2. continue the publishing workflow after approval is granted,
3. do not stop and ask for additional instructions unless another blocker occurs.

Waiting for publishing approval is not a task failure or blocker.

---

## Commit

Before committing:

1. review the changed files,
2. ensure no unrelated changes are included,
3. ensure the task log is included.

Commit all task-related changes.

Use a clear commit message.

Example:

`[CA-012] Add JSON task schema`

Do not finish the task with uncommitted changes.

---

## Push

Push the task branch to the repository.

Do not consider the task complete if the changes exist only in the Codex cloud workspace.

If push requires explicit user approval, request approval and continue after it is granted.

---

## Pull request

After pushing:

1. open a pull request to `main`,
2. include the task ID in the PR title or body,
3. reference the task log,
4. verify that the pull request was created successfully.

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

Creating or modifying files only in the cloud workspace is NOT task completion.

---

## Failure handling

If any required step fails for reasons other than waiting for explicit publishing approval, do not report the task as completed.

Instead:

1. set the task log status to `partial` or `blocked`,
2. document the failure under `Problems encountered`,
3. describe unfinished work,
4. report the blocker clearly to the user.

Do not silently stop after modifying files.

---

## Repository changes during a task

If `main` changes during the task:

1. fetch the latest repository state,
2. inspect whether the task conflicts with the new changes,
3. integrate the latest `main` if necessary,
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

Do not describe the task as complete before the pull request exists.