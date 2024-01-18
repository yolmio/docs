---
title: "Transaction Log"
description: "Describes what the transaction log is and what you can use it for"
sidebar:
  order: 1
---

Most databases have a transaction log.

In Yolm DB the transaction log _is_ the database.

Data always gets appended, except for compaction. Not only does this make synchronization easier, it allows us to provide additional capabilities:

- Built-in support for undo.

  This for example provides the ability to restore deleted records.

- Transactional queries.

  This allow you to query the transaction log directly and answer questions such as "How many tasks were completed per week for the last 3 months?", "What contacts got deleted?".
