# Eagle Septic Pumping Site Files

Site-specific content, scripts, and data for eaglesepticpumping.com.

## Autonomous Agents

### SEO Agent
Improves meta data, internal links, content quality, heading structure, and blog posts.

```bash
cd eaglesepticpumping/agents && ./run-agent.sh seo
```

### Visual Agent
Audits and fixes layout, CTAs, spacing, mobile UX, and contrast by taking live screenshots and editing source files.

```bash
cd eaglesepticpumping/agents && ./run-agent.sh visual
```

---

**Options:**
```bash
./run-agent.sh seo                  # SEO agent, sonnet, 10 loops
./run-agent.sh seo sonnet 10        # Explicit model + loops
./run-agent.sh seo opus 5           # High quality, fewer loops
./run-agent.sh visual               # Visual agent, sonnet, 5 loops
./run-agent.sh visual sonnet 3      # Visual agent, 3 loops
```

**Or run directly via ENGINE:**
```bash
WORK=/Users/brandonhopkins/Projects/seo/eaglesepticpumping/agents/seo-agent MODEL="sonnet" MAX_LOOPS=10 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/seo/eaglesepticpumping/agents/visual-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
```

**Watch logs:**
```bash
tail -f agents/seo-agent/output/agent-log.md
tail -f agents/visual-agent/output/agent-log.md
```

**Stop an agent:**
```bash
touch agents/seo-agent/output/STOP
touch agents/visual-agent/output/STOP
```

---

## Models

| Model | Quality | Speed | Use when |
|-------|---------|-------|----------|
| `opus` | Best | Slowest | Complex content creation, hub pages |
| `sonnet` | Good | Medium | Standard fixes (default) |
| `haiku` | Basic | Fastest | Bulk simple fixes, audit passes |

## Loops

Each loop is one full agent run (pick task, execute, commit). More loops = more improvements per session.

- `3–5` — Quick targeted session
- `10` — Standard session (default for SEO)
- `5` — Default for Visual (screenshot-heavy, slower per loop)
- `20+` — Extended bulk session
