---
title: "Date/Time Types"
---

Yolm has 3 types to represent dates/times:

- `Date`
- `Time`
- `Timestamp`

`Date` and `Time` don't contain any timezone information, and store exactly what is expected.

`Timestamp` is stored without timezone information, we always store timestamps in UTC. We don't preserve any information about the timezone it was created in. When you read any timestamp we automatically change the timezone to whatever the client's timezone is.
