#!/usr/bin/env bash
# Eagle Septic Agent Runner
# Usage: ./run-agent.sh [agent] [model] [loops]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
MODEL="${2:-sonnet}"
LOOPS="${3:-10}"
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
ENGINE="$HOME/Projects/claude-lab/ENGINE/run.sh"
AGENTS_DIR="$PROJECT_ROOT/agents"

# Check if ENGINE exists
if [ ! -f "$ENGINE" ]; then
    echo -e "${RED}❌ ENGINE not found at: $ENGINE${NC}"
    echo "Please verify the ENGINE path is correct."
    exit 1
fi

# Help function
show_help() {
    echo -e "${BLUE}Eagle Septic Agent Runner${NC}"
    echo ""
    echo "Usage: ./run-agent.sh [agent] [model] [loops]"
    echo ""
    echo "Agents:"
    echo "  seo       - SEO improvements: meta, content, internal links, blog posts (default: sonnet, 10 loops)"
    echo "  visual    - Visual/UX improvements: layout, CTAs, spacing, mobile (default: sonnet, 5 loops)"
    echo ""
    echo "Models:"
    echo "  opus      - Best quality, slower"
    echo "  sonnet    - Good balance (default)"
    echo "  haiku     - Fast, lower quality"
    echo ""
    echo "Examples:"
    echo "  ./run-agent.sh seo                # SEO agent, sonnet, 10 loops"
    echo "  ./run-agent.sh seo sonnet 10      # Explicit: sonnet, 10 loops"
    echo "  ./run-agent.sh seo opus 5         # High quality, fewer loops"
    echo "  ./run-agent.sh visual             # Visual agent, sonnet, 5 loops"
    echo "  ./run-agent.sh visual sonnet 3    # Visual agent, 3 loops"
    echo ""
}

# Run agent function
run_agent() {
    local agent_name=$1
    local agent_dir=$2
    local emoji=$3
    local model=$4
    local loops=$5

    echo ""
    echo -e "${GREEN}$emoji Running $agent_name${NC}"
    echo -e "${YELLOW}Model: $model | Loops: $loops${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    WORK="$agent_dir" MODEL="$model" MAX_LOOPS="$loops" STOP_ON_COMPLETE=true bash "$ENGINE"

    echo ""
    echo -e "${GREEN}✅ $agent_name complete!${NC}"
    echo -e "Output: ${BLUE}$agent_dir/output/${NC}"
    echo ""
}

# Main logic
case "${1:-help}" in
    seo)
        run_agent "SEO Agent" "$AGENTS_DIR/seo-agent" "🔍" "$MODEL" "${LOOPS:-10}"
        ;;

    visual)
        run_agent "Visual Agent" "$AGENTS_DIR/visual-agent" "🎨" "$MODEL" "${LOOPS:-5}"
        ;;

    help|--help|-h)
        show_help
        ;;

    *)
        echo -e "${RED}❌ Unknown agent: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac
