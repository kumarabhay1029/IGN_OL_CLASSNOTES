#!/usr/bin/env bash
# Trigger the add-note workflow via repository_dispatch.
# Usage:
#   GITHUB_TOKEN=ghp_xxx ./scripts/publish-note.sh "MCS_202" "Sorting Algorithms" "A. Kumar" -f note.md
#   GITHUB_TOKEN=ghp_xxx ./scripts/publish-note.sh "MCS_202" "Sorting Algorithms" "A. Kumar" -c $'Line1\nLine2'

set -euo pipefail

OWNER="kumarabhay1029"
REPO="IGN_OL_CLASSNOTES"
API_URL="https://api.github.com/repos/${OWNER}/${REPO}/dispatches"

if [ -z "${GITHUB_TOKEN:-}" ]; then
  echo "Error: GITHUB_TOKEN must be set."
  exit 1
fi

if [ $# -lt 4 ]; then
  echo "Usage: $0 <course_code> <topic> <author> (-f <file> | -c <content>)"
  exit 1
fi

COURSE="$1"; TOPIC="$2"; AUTHOR="$3"; shift 3
MODE=""; CONTENT=""

while [ $# -gt 0 ]; do
  case "$1" in
    -f)
      MODE="file"
      FPATH="$2"
      [ -f "$FPATH" ] || { echo "File not found: $FPATH"; exit 1; }
      CONTENT=$(sed 's/"/\\"/g' "$FPATH" | awk '{printf "%s\\n", $0}')
      shift 2
      ;;
    -c)
      MODE="content"
      CONTENT=$(printf "%s" "$2" | sed -e 's/"/\\"/g' -e ':a;N;$!ba;s/\n/\\n/g')
      shift 2
      ;;
    *)
      echo "Unknown option: $1"; exit 1
      ;;
  esac
done

[ -n "$MODE" ] || { echo "Provide -f <file> or -c <content>."; exit 1; }

read -r -d '' PAYLOAD <<EOF
{
  "event_type": "add-note",
  "client_payload": {
    "course_code": "$COURSE",
    "topic": "$TOPIC",
    "author": "$AUTHOR",
    "content": "$CONTENT"
  }
}
EOF

curl -s -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  --data "$PAYLOAD" \
  "$API_URL" \
  -o /dev/null -w "HTTP status: %{http_code}\n"
