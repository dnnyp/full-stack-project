#!/bin/bash

curl "http://localhost:4741/rosters" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "roster": {
      "name": "'"${NAME}"'",
      "season": "'"${SEASON}"'",
      "league_size": "'"${LEAGUE}"'",
      "scoring_format": "'"${SCORING}"'"
    }
  }'

echo
