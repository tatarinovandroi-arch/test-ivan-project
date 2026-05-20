# Approval Matrix

This file defines what needs human approval before an agent acts.

| Action | Default Level | Human Approval Required |
| --- | --- | --- |
| Read files and search the repo | L0 | No |
| Produce a plan | L1 | No |
| Edit approved files | L2 | Yes |
| Add dependencies | L2 | Yes |
| Change runtime configuration | L2 | Yes |
| Run local checks | L2 | Yes unless already approved |
| Create a branch or draft PR | L3 | Yes |
| Inspect or fix CI | L4 | Yes |
| Deploy | L5 | Always |
| Read or transmit secrets | Denied | Never |
| Destructive delete or history rewrite | Denied by default | Explicit one-off approval |

## Approval Must Name

- task id
- autonomy level
- allowed paths
- denied paths
- allowed commands
- required checks
- rollback plan when runtime behavior changes
