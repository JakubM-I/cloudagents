# Claude Task Workflow

This file defines the mandatory workflow for Claude tasks in this repository.

Claude must read and follow `AGENTS.md` before starting any task.

---

## Repository synchronization

Before starting task work:

1. locate the repository root,
2. synchronize with the latest `origin/main`,
3. verify the current repository state,
4. read `AGENTS.md`,
5. read the remaining Claude workflow instructions,
6. only then start task work.

Use:

`git fetch origin`

and ensure the task starts from the latest `origin/main`.

Do not assume that the initial cloud workspace contains the latest repository state.

---

## Repository root

All task work must remain inside the Git repository.

Determine the repository root when necessary using:

`git rev-parse --show-toplevel`

Do not create task deliverables outside the repository unless explicitly instructed.

---

## Project output

When the task creates a new standalone project, prototype, experiment, page, tool, schema, or similar deliverable, create:

`projects/<TASK-ID>-<slug>/`

Choose a short descriptive slug automatically.

Example:

`projects/CA-012-json-parser/`

The user does not need to specify the directory.

If the task modifies an existing project or artifact, work in the existing project directory instead of creating a new task directory.

Repository-level work such as changes to documentation, workflows, configuration, agent instructions, or task logs should remain in the appropriate repository-level location.

---

## Branch

Use a dedicated branch for each task.

The branch must use the Claude prefix:

`claude/`

When custom branch naming is available, the preferred format is:

`claude/CA-<number>-<slug>`

Example:

`claude/CA-012-json-parser`

If the Claude environment generates the branch name automatically, keep the generated branch as long as it uses the `claude/` prefix.

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
- Do not claim that validation was performed if it was not actually performed.

The task may involve code, documentation, research, configuration, structured data, or other repository work.

Validation should match the task.

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
5. verify that the pull request exists,
6. enable auto-merge for the pull request using squash merge.

Use:

`gh pr merge --auto --squash`

Do not manually merge the pull request.

Repository validation and branch protection rules must determine whether the pull request is allowed to merge.

If GitHub publishing requires explicit user approval:

1. request the approval,
2. continue after approval is granted,
3. do not treat waiting for approval as a task failure.

If auto-merge cannot be enabled, document and report the reason clearly.

---

## Commit

Before committing:

1. review the changed files,
2. ensure no unrelated changes are included,
3. ensure the task log is included.

Commit all task-related changes.

Use a clear commit message.

Example:

`[CA-012] Add JSON parser`

Do not finish the task with uncommitted changes.

---

## Push

Push the task branch to the repository.

Do not consider the task complete if the changes exist only in the Claude cloud workspace.

---

## Pull request

After pushing:

1. create a pull request to `main`,
2. include the task ID in the PR title or body,
3. reference the corresponding task log,
4. verify that the pull request was created successfully,
5. enable auto-merge using squash merge.

Recommended title:

`[CA-012] Add JSON parser`

The pull request body should include:

- task ID,
- short summary,
- validation performed,
- task log path.

Use:

`gh pr merge --auto --squash`

Do not manually merge the pull request.

---

## Completion requirements

Claude MUST NOT report the task as completed until all of the following are true:

- the requested work is finished, or clearly documented as partial,
- `agent-logs/<TASK-ID>.md` exists,
- appropriate validation was performed,
- task changes were committed,
- the task branch was pushed,
- a pull request to `main` exists,
- auto-merge has been enabled for the pull request.

If auto-merge cannot be enabled for a documented external reason, report that clearly instead of claiming full completion.

Creating or modifying files only in the working environment is NOT task completion.

---

## Failure handling

If repository access, validation, commit, push, pull request creation, or auto-merge setup fails for reasons other than waiting for explicit publishing approval:

- do not claim successful completion,
- set the task status to `partial` or `blocked`,
- document the problem in the task log,
- describe unfinished work,
- clearly report the blocker.

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

After successfully creating the pull request and enabling auto-merge, report:

- Task ID
- Branch
- Commit
- Pull request
- Auto-merge status
- Validation performed
- Blockers or unfinished work, if any

Do not describe the task as complete before the pull request exists and auto-merge has been enabled.