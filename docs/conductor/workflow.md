# Manual Conductor Workflow

This file defines the lifecycle of human-controlled implementation work.

It is the process layer.

It does not duplicate:

- approval details from `approval_matrix.md`
- autonomy details from `autonomy_levels.md`
- security rules from `security_policy.md`

## Default Operating Mode

The default mode is `L2` approved bounded implementation.

That means:

- inspect and planning may happen first
- file edits begin only after human approval of the task boundaries
- deploy, merge, secret handling, and destructive actions stay manual unless
  explicitly approved

## Lifecycle

1. Draft the task.
2. Inspect the repository or generated workspace.
3. Propose a bounded plan.
4. Get human approval for L2 implementation.
5. Implement only inside approved paths.
6. Run the agreed checks.
7. Update the run log.
8. Hand off for review, publish, or the next owner.

## Required Companion Docs

Every L2+ task should use:

- `task_template.md`
- `run_log_template.md`
- `approval_matrix.md`
- `autonomy_levels.md`
- `security_policy.md`

## Status Values

- `draft`
- `planned`
- `approved`
- `in_progress`
- `verifying`
- `blocked`
- `done`

## Rule

If approval boundaries are unclear, the task must stop before implementation.
