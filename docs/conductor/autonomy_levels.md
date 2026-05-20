# Autonomy Levels

Autonomy increases gradually. The default level is `L2`.

## L0: Read Only

- inspect files
- search and summarize
- no edits

## L1: Plan Only

- inspect
- propose changes and checks
- no edits

## L2: Approved Bounded Implementation

- edit approved paths only after human approval
- run approved checks
- update docs and logs tied to the task

## L3: PR Preparation

- all L2 actions
- branch and draft PR preparation after approval

## L4: CI Fix

- inspect failing CI
- apply bounded fixes to the same approved task scope

## L5: Controlled Deploy

- run an explicitly approved deploy flow
- report deploy health or rollback status

## Always Denied Unless Explicitly Approved

- secrets exposure
- destructive history actions
- undeclared infra changes
