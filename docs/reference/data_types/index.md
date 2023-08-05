---
sidebar_position: 3
title: "Data Types"
---

Yolm supports a variety of data types:

| Type                                 | Description                                                  |
|--------------------------------------|--------------------------------------------------------------|
| TinyUint                             | unsigned single byte integer                                 |
| SmallUint                            | unsigned two byte integer                                    |
| Uint                                 | unsigned four byte integer                                   |
| BigUint                              | unsigned eight byte integer                                  |
| TinyInt                              | signed single byte integer                                   |
| SmallInt                             | signed two byte integer                                      |
| Int                                  | signed four byte integer                                     |
| BigInt                               | signed eight byte integer                                    |
| Real                                 | single precision floating-point number (4 bytes)             |
| Double                               | double precision floating-point number (8 bytes)             |
| Decimal { precision, scale, signed } | exact decimal with configurable precision, scale and sign    |
| Ordering                             | opaque type used to efficiently indicate order within a list |
| String                               | variable length utf8 string                                  |
| Uuid                                 | universally unique identifier                                |
| Date                                 | calendar date (year, month, day)                             |
| Time                                 | time of day (no timezone)                                    |
| Timestamp                            | time and date (stored as UTC converted to local timezone)    |
| ForeignKey                           | BigUint that allows us to optimize                           |
| Tx                                   | BigUint id of a transaction that acts like a ForeignKey      |
| Enum                                 | User defined listing of values                               |
| Bool                                 | true or false                                                |

Custom data types are not supported.
