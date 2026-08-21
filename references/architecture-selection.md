# Architecture selection

Choose architecture from requirements and the current environment, not from a preferred vendor.

## Inspect the environment

Check for:

- an existing application and its conventions;
- runtimes, package managers, and dependency constraints;
- available app/site builders and preview capabilities;
- connected databases, authentication, storage, and deployment services;
- offline, hosting, data residency, or browser-support constraints;
- the user's comfort level and intended lifetime of the MVP.

Do not replace a suitable existing stack merely because another stack is familiar.

## Choose the smallest safe option

| Situation | Usually sufficient | Upgrade trigger |
| --- | --- | --- |
| Disposable interaction demo | Static HTML and JavaScript with in-memory sample data | Users must keep real records |
| Local single-user MVP with non-sensitive data | Static HTML, JavaScript, Tailwind, and browser storage | Multiple devices, people, or shared records |
| Existing product or repository | Existing stack and its established patterns | Current architecture cannot support an approved requirement |
| Shared operational workflow | Application with a durable data store and server layer | Add authentication if identities or permissions matter |
| Multiple secure roles | Server-enforced authentication and authorization | Never substitute a client-side role switcher |
| External systems or secrets | Server-side integration layer | Never place credentials in browser code |
| Audit trail or regulated/sensitive data | Durable backend, access controls, history, and appropriate operational safeguards | Confirm organizational requirements before building |

Use browser storage only after explaining that it is tied to one browser profile, is easy to clear, does not provide shared access, and is not suitable for sensitive information.

## Fallback starter

Use `assets/starter/` when all of these are true:

- no suitable existing project or higher-level builder is available;
- the approved MVP can run in a browser without a backend;
- data can remain local or use safe sample data;
- roles are absent or explicitly simulated;
- external secrets and server-only logic are unnecessary.

The starter uses a Tailwind browser CDN for fast prototyping. Replace it with a local Tailwind build or another supported styling path when offline use, a strict content-security policy, reproducible production builds, or the delivery environment requires it.

## Explain the recommendation

Tell the user:

1. what will run in the browser and what, if anything, runs on a server;
2. where records will live;
3. how people will access it;
4. what security is real versus simulated;
5. why the choice is sufficient for the approved MVP;
6. what future need would require an upgrade.

Ask for approval as part of the Phase 1 blueprint. Do not install or scaffold the chosen architecture before approval.
