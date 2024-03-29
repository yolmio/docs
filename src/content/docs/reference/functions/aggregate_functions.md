---
title: "Aggregate Functions"
---

Aggregates are functions that combine multiple rows into a single value. Aggregates are different from scalar functions and window functions because they change the cardinality of the result. As such, aggregates can only be used in the SELECT and HAVING clauses of a SQL query.


| Name                      | Description                                   |
|---------------------------|-----------------------------------------------|
| [avg](#avg)               | Return the average value of the argument      |
| [count](#count)           | Return a count of the number of rows returned |
| [min](#min)               | Return the minimum value of the argument      |
| [max](#max)               | Return the maximum value of the argument      |
| [sum](#sum)               | Return the sum of the argument                |
| [bool_and](#bool_and)     | Return true if all boolean values are true    |
| [bool_or](#bool_or)       | Return true if any boolean values are true    |
| [string_agg](#string_agg) | Concatenate values into a single string       |

### avg()

Returns the average value of `expr`.

- **Parameters:**
  - `expr` (numeric): The numeric expression for which the average should be calculated.

- **Return Type:** Numeric

If there are no matching rows, `AVG()` returns NULL. The function also returns NULL if `expr` is NULL.

**Example:**

```sql
SELECT avg(item_count) FROM detail;
```

### count()

Returns a count of the number of non-NULL values of `expr` in the rows retrieved by a SELECT statement.

- **Parameters:**
  - `expr` (any): The expression for which the count should be calculated.

- **Return Type:** BigInt

If there are no matching rows, `COUNT()` returns 0. `COUNT(NULL)` returns 0.

**Examples:**

```sql
SELECT count(*) FROM t;
SELECT count(some_nullable_field) FROM t;
```

### min()

Returns the minimum value of `expr`.

- **Parameters:**
  - `expr` (numeric or string): The expression for which the minimum value should be determined.

- **Return Type:** The data type of `expr`

If there are no matching rows, `MIN()` returns NULL.

**Example:**

```sql
SELECT min(salary) FROM employees;
```

### max()

Returns the maximum value of `expr`.

- **Parameters:**
  - `expr` (numeric or string): The expression for which the maximum value should be determined.

- **Return Type:** The data type of `expr`

If there are no matching rows, `MAX()` returns NULL.

**Example:**

```sql
SELECT max(score) FROM exam_results;
```

### sum()

Returns the sum of all values of `expr`.

- **Parameters:**
  - `expr` (numeric): The numeric expression for which the sum should be calculated.

- **Return Type:** Numeric

If there are no matching rows, `SUM()` returns NULL.

**Example:**

```sql
SELECT sum(total_sales) FROM sales;
```

### bool_and()

Returns true if all boolean values in `expr` are true, otherwise returns false.

- **Parameters:**
  - `expr` (boolean): The boolean expression to evaluate.

- **Return Type:** Boolean

If there are no matching rows, `BOOL_AND()` returns NULL.

**Example:**

```sql
SELECT bool_and(is_approved) FROM loan_applications;
```

### bool_or()

Returns true if any boolean values in `expr` are true, otherwise returns false.

- **Parameters:**
  - `expr` (boolean): The boolean expression to evaluate.

- **Return Type:** Boolean

If there are no matching rows, `BOOL_OR()` returns NULL.

**Example:**

```sql
SELECT bool_or(is_active) FROM user_accounts;
```

### string_agg()

Concatenates values into a single string, using the specified delimiter.

- **Parameters:**
  - `expr` (string): The string expression to concatenate.
  - `delimiter` (string): The delimiter to use between concatenated values.

- **Return Type:** String

If there are no matching rows, `STRING_AGG()` returns NULL.

**Example:**

```sql
SELECT string_agg(name, ', ') FROM students;
```
