---
title: "Numeric Types"
---

Unlike most other databases, we support unsigned integers.

Here is a table of the ranges of all numeric types:

| Type      | Range                                                   |
|-----------|---------------------------------------------------------|
| TinyUint  | 0 to 255                                                |
| SmallUint | 0 to 65,535                                             |
| Uint      | 0 to 4,294,967,295                                      |
| BigUint   | 0 to 18,446,744,073,709,551,615                         |
| TinyInt   | -128 to 127                                             |
| SmallInt  | -32,768 to 32,767                                       |
| Int       | -2,147,483,648 to 2,147,483,647                         |
| BigInt    | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| Real      | 6 decimal digits precision                              |
| Double    | 15 decimal digits precision                             |
| Decimal   | currently limited to max precision of 28                |

`Real` and `Double` are floating point numbers and are not recomended for financial calculations or anything you want exact. Floating point types can do math faster than the `Decimal` type, but they are not as exact. For example: 0.1 + 0.2 results in 0.30000000000000004 because of how floats are represented, you can read more [in this stack overflow thread](https://stackoverflow.com/questions/21895756/why-are-floating-point-numbers-inaccurate). 

## Decimal

In specifying a decimal type you specify `precision`, `scale` and `signed`

If `signed` is true, you can store negative numbers.

`precision` defines the number of digits on both sides of the decimal point.

`scale` defines the number of digits on the right side of the decimal point.

Example precision and scales:

| Precision | Scale | Max Value   |
|-----------|-------|-------------|
| 5         | 1     | 9999.9      |
| 5         | 2     | 999.99      |
| 10        | 5     | 99999.99999 |
| 5         | 5     | 0.99999     |