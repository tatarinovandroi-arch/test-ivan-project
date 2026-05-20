# Conductor Security Policy

This file defines the hard safety boundary for humans and agents.

## Secrets

Never commit, print, summarize, or transmit:

- `.env`
- real API keys
- private keys
- production tokens
- database passwords
- webhook secrets

Document required variables in `.env.example` with safe placeholders only.

## Deploy

Deploy is manual by default.

Agents must not:

- deploy without explicit approval
- assume SSH users or server paths
- copy secret files by default
- hardcode production domains
- run ad hoc commands on production hosts

## Destructive Actions

Denied by default:

- recursive deletion
- force reset
- force push
- history rewrite
- destructive database operations without a rollback plan

## Scope Control

If a task needs a new path, command, dependency, or runtime requirement outside
the approved plan, stop and ask for approval.

## Logging

L2+ work must record:

- what changed
- why it changed
- commands run
- checks run or skipped
- remaining risks
