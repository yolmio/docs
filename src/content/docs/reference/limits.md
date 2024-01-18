---
title: "Database Limits"
sidebar:
  order: 2
---

Yolm is optimized for read heavy applications where the database fits into memory.

## Browser Version

With a browser version of the database the following limits apply:

- 1 GB of database size
- 3 writes per second

## Server Version (Testing)

When the server version is released, the expected limits will be

- Up to 250 GB database size
- Up to 100 writes per second per application.

The above is per application instance, e.g.

if you have a real estate application with 100 separate customers the above limits apply to each customer
