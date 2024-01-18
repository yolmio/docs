---

title: "Table Functions"
---

Table functions in SQL are unique in that they are used as sources for queries rather than within expressions. These functions allow you to generate series, perform string and regular expression operations, and more. Below is a list of our table functions in SQL:

| Name                                           | Description                                                |
|------------------------------------------------|------------------------------------------------------------|
| [series.int()](#series_int_function)           | Generate a series of integers                              |
| [series.bigint()](#series_bigint_function)     | Generate a series of big integers                          |
| [series.daily()](#series_daily_function)       | Generate series of dates, incremented by an amount of days |
| [series.ordering()](#series_ordering_function) | Generate an ordering series                                |
| [string.split()](#string_split_function)       | Split a string into substrings                             |
| [regex.split()](#regex_split_function)         | Split a string using a regular expression                  |
| [regex.matches()](#regex_matches_function)     | Match a regular expression against a string                |

### series.int(start, end, step) {#series_int_function}

Generate a series of integers.

- **Parameters:**
  - `start` (integer): The starting integer of the series.
  - `end` (integer): The ending integer of the series.
  - `step` (optional, integer): The step size between each integer. Defaults to 1

- **Return Type:** Table with column `value` (int)

**Example:**

```sql
select value from series.int(1, 5); -- 1, 2, 3, 4, 5
select value from series.int(1, 5, 2); -- 1, 3, 5
```

### series.bigint(start, end, step) {#series_bigint_function}

Generate a series of big integers.

- **Parameters:**
  - `start` (bigint): The starting bigint of the series.
  - `end` (bigint): The ending bigint of the series.
  - `step` (optional, bigint): The step size between each integer. Defaults to 1

- **Return Type:** Table with columns `value` (bigint), `ordinal` (integer)

**Example:**

```sql
select value from series.bigint(1, 5); -- 1, 2, 3, 4, 5
select value from series.bigint(1, 5, 2); -- 1, 3, 5
```

### series.daily(start, amount, step) {#series_daily_function}

Generate a series of dates or timestamps that starts at `start` and increments by `step` days `amount` times.

- **Parameters:**
  - `start` (date, timestamp): The start date of the series.
  - `amount` (int): How often to increment with `step`
  - `step` (int): How many days to increment each time. Defaults to 1

- **Return Type:** Table with column `value` (date or timestamp, same as `start`)

**Example:**

```sql
select value from series.daily(date '2023-09-20', 4);
-- 2023-09-20
-- 2023-09-21
-- 2023-09-22
-- 2023-09-23
-- 2023-09-24
select value from series.daily(date '2023-09-20', 4, 2);
-- 2023-09-20
-- 2023-09-22
-- 2023-09-24
-- 2023-09-26
-- 2023-09-28
```

### series.ordering(start, n) {#series_ordering_function}

Generate a series starting at `start` and `n` following orderings where each value is greater than the `start`

- **Parameters:**
  - `start` (ordering): The ordering to start with.
  - `n` (integer): The number of elements after

- **Return Type:** Table with column `value` (ordering)

**Example:**

```sql
select value from series.ordering(ordereing.new(), 5);
```

### string.split(input, delimiter) {#string_split_function}

Split a string into substrings.

- **Parameters:**
  - `input` (string): The string to split.
  - `delimiter` (string): The string delimiter.

- **Return Type:** Table with columns `value` (string), `ordinal` (integer)

**Example:**

```sql
select value, ordinal from string.split('a,b,c', ',');
-- a, 0
-- b, 1
-- c, 2
```

### regex.split(input, pattern) {#regex_split_function}

Split a string using a regular expression. We use the rust regex crate, so for documentation on the syntax look here: https://docs.rs/regex/latest/regex/#syntax

- **Parameters:**
  - `input` (string): The string to split.
  - `pattern` (string): The regular expression to use for splitting.

- **Return Type:** Table with columns `value` (string), `ordinal` (integer)

**Example:**

```sql
select value, ordinal from regex.split('a b c', '\s');
-- a, 0
-- b, 1
-- c, 2
```

### regex.matches(input, pattern) {#regex_matches_function}

Match a regular expression against a string.

- **Parameters:**
  - `input` (string): The string to match.
  - `pattern` (string): The regular expression to match against.

- **Return Type:** Table with columns `value` (string), `ordinal` (integer)

**Example:**

```sql
select value, ordinal from regex.matches('a1 b2 c3', '[a-z]');
-- a, 0
-- b, 1
-- c, 2
```
 