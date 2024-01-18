---
title: "Window Functions"
---

Window functions in SQL provide a way to perform calculations across a set of rows that are related to the current row within the same result set. If you aren't familiar with window functions generally, look at documentation for other SQL databases or ask your favorite LLM, this is only a reference.

Examples reference a simple table with two integer fields and the fields below:

```sql
insert into t1 (a1, a2) values (1, 1), (1, 1), (1, 1), (1, 2)
```

Below is a list of our window functions in SQL:

| Name                                        | Description                                           |
|---------------------------------------------|-------------------------------------------------------|
| [first_value()](#first_value_function)      | Returns the first value in the window                 |
| [last_value()](#last_value_function)        | Returns the last value in the window                  |
| [rank()](#rank_function)                    | Assigns a rank to each row within the window          |
| [dense_rank()](#dense_rank_function)        | Assigns a dense rank to each row within the window    |
| [row_number()](#row_number_function)        | Assigns a unique number to each row within the window |
| [count()](#count_function)                  | Counts the number of rows within the window           |
| [count(distinct)](#count_distinct_function) | Counts the number of distinct rows within the window  |

### first_value(expression) over ([window specification]) {#first_value_function}

Returns the first value in the window.

- **Parameters:**
  - `expression` (any type): The column or expression whose first value you want to find.

- **Return Type:** Same as the type of `expression`

**Example:**

```sql
select first_value(a2) over (order by a2) from t1;
-- 1, 1, 1, 1
select first_value(a2) over (order by a2 desc) from t1;
-- 2, 2, 2, 2
```

### last_value(expression) over ([window specification]) {#last_value_function}

Returns the last value in the window.

- **Parameters:**
  - `expression` (any type): The column or expression whose last value you want to find.

- **Return Type:** Same as the type of `expression`

**Example:**

```sql
select last_value(a2) over (order by a2) from t1;
-- 2, 2, 2, 2
select last_value(a2) over (order by a2 desc) from t1;
-- 1, 1, 1, 1
```

### rank() OVER ([window specification]) {#rank_function}

Assigns a rank to each row within the window, leaving gaps for duplicate values.

- **Return Type:** Integer

**Example:**

```sql
select rank() over (partition by a1 order by a2) from t1;
-- 1, 1, 1, 4
```

### dense_rank() over ([window specification]) {#dense_rank_function}

Assigns a dense rank to each row within the window. Unlike `rank()`, it does not leave gaps between rank values when there are duplicates.

- **Return Type:** Integer

**Example:**

```sql
select dense_rank() over (partition by a1 order by a2) from t1;
-- 1, 1, 1, 2
```

### row_number() OVER ([window specification]) {#row_number_function}

Assigns a unique number to each row within the window.

- **Return Type:** Integer

**Example:**

```sql
select row_number() over (partition by a1 order by a2) from t1;
-- 1, 2, 3, 4
```

### count(expression) over ([window specification]) {#count_function}

Counts the number of rows within the window.

- **Parameters:**
  - `expression` (any type): The column or expression to count.

- **Return Type:** Integer

**Example:**

```sql
select count(a1) over (partition by a2) from t1;
-- 3, 3, 3, 1
```

### count(distinct expression) over ([window specification]) {#count_distinct_function}

Counts the number of distinct rows within the window.

- **Parameters:**
  - `expression` (any type): The column or expression to count distinct values for.

- **Return Type:** Integer

**Example:**

```sql
select count(distinct a1) over (partition by a2) from t1
-- 1, 1, 1, 1
```