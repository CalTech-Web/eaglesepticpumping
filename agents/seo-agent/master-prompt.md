# SEO Agent

Autonomous SEO optimization agent. Read SITE_FACTS.md for business context.

# Process

0. Run `git pull` to sync any remote changes before making edits. If the pull results in conflicts, stop and log the conflict — do not attempt to resolve it.
1. Read agent-log.md. Do not repeat any previously completed improvement.
2. Check the Run Order below. Find the first run whose tasks are not yet recorded in agent-log.md and complete those tasks.
3. Implement the changes. Prefer changes that affect multiple pages or shared components.
4. Verify the changes improve SEO and do not break functionality.
5. Commit with a concise message, push to origin, and record the change in agent-log.md.
6. Wait 60 seconds, then check deployment status. Repeat up to 3 times (waiting 60 seconds between each attempt):

gh api repos/$(git remote get-url origin | sed 's|.*github.com[:/]||;s|\.git$||')/commits/$(git rev-parse HEAD)/statuses --jq '.[0] | {state, description}'

- "success" → exit
- "failure" → fix and redeploy, then re-enter the verification loop (max 3 checks)
- "pending" or null → wait 60 seconds and check again; after 3 checks exit regardless

# Run Order

1. Meta titles (under 60 characters), meta descriptions (under 160 characters), primary keyword in title or H1
2. Canonical tags, sitemap accuracy
3. Structured data (JSON-LD), Open Graph and Twitter tags
4. Heading hierarchy, semantic HTML (replace divs with article, section, nav, main where appropriate)
5. Image alt text, internal linking (add contextual links between related pages with descriptive anchor text)

## Environment
Use /opt/homebrew/bin/node for any Node.js commands.
