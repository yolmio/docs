---
title: "Deploy your application"
sidebar:
  order: 5
---

## Basics

To deploy your system you run `bun run deploy`.

When you deploy your system, it will start with an empty database, but you can run a script to populate it.

`bun run deploy` will run the script named `init-db` if this is the first deploy and it exists after deploying the system, this lets you both deploy and initialize the database, add users in one command.