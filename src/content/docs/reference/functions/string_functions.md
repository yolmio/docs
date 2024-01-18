---
title: "String Functions and Operators"
---

String functions and operators in SQL are used to manipulate and perform operations on text data. These functions are essential for working with strings in your SQL queries. Below is a list of our string functions and operators:

| Name                                                     | Description                                                                    |
|----------------------------------------------------------|--------------------------------------------------------------------------------|
| [char_length()](#char_length_function)                   | Returns the number of characters in a string.                                  |
| [character_length()](#char_length_function)              | Returns the number of characters in a string (synonym for char_length()).      |
| [octet_length()](#octet_length_function)                 | Returns the number of bytes in a string.                                       |
| [upper()](#upper_function)                               | Converts a string to uppercase.                                                |
| [lower()](#lower_function)                               | Converts a string to lowercase.                                                |
| [reverse()](#reverse_function)                           | Reverses the characters in a string.                                           |
| [left()](#left_function)                                 | Returns the leftmost characters from a string.                                 |
| [right()](#right_function)                               | Returns the rightmost characters from a string.                                |
| [repeat()](#repeat_function)                             | Repeats a string a specified number of times.                                  |
| [lpad()](#lpad_function)                                 | Pads a string on the left with a specified character to a specified length.    |
| [rpad()](#rpad_function)                                 | Pads a string on the right with a specified character to a specified length.   |
| [trim()](#trim_function)                                 | Removes leading and trailing characters from a string.                         |
| [substring()](#substring_function)                       | Extracts a substring from a string based on the specified position and length. |
| [position()](#position_function)                         | Returns the position of a substring within a string.                           |
| [expr like pattern](#like_operator)                      | Checks if a string matches a specified pattern.                                |
| [regex.is_match()](#regex_is_match_function)             | Checks if a regular expression matches a string.                               |
| [regex.replace()](#regex_replace_function)               | Replaces the first occurrence of a regular expression match in a string.       |
| [regex.replace_all()](#regex_replace_all_function)       | Replaces all occurrences of a regular expression match in a string.            |
| [uri.encode_component()](#uri_encode_component_function) | Encodes a string as a URI component.                                           |
| [uri.is_match()](#uri_is_match_function)                 | Checks if a string is a valid URI.                                             |
| [literal.bool()](#literal_bool)                          | Returns a boolean literal as a string.                                         |
| [literal.timestamp()](#literal_timestamp)                | Returns a timestamp literal as a string.                                       |
| [literal.date()](#literal_date)                          | Returns a date literal as a string.                                            |
| [literal.number()](#literal_number)                      | Returns a numeric literal as a string.                                         |
| [literal.string()](#literal_string)                      | Returns a string literal as a string.                                          |
| [format.date()](#format_date_function)                   | Formats a date as a string using a specified format.                           |
| [format.decimal()](#format_decimal_function)             | Formats a decimal number as a string using a specified format.                 |
| [format.currency()](#format_currency_function)           | Formats a decimal number as currency using a specified format.                 |
| [format.percent()](#format_percent_function)             | Formats a decimal number as a percentage using a specified format.             |
| 'a' \|\| 'b'                                             | Concatenates two string together                                               |

### char_length(string), character_length(string) {#char_length_function}

Returns the number of characters in a string.

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** Integer

**Example:**

```sql
select char_length('Hello, World!'); -- Returns 13
select character_length('Hello, World!'); -- Returns 13
```

### octet_length(string) {#octet_length_function}

Returns the number of bytes in a string.

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** Integer

**Example:**

```sql
select octet_length('Hello, World!'); -- Returns 13
```

### upper(string) {#upper_function}

Converts a string to uppercase.

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** String

**Example:**

```sql
select upper('Hello, World!'); -- Returns 'HELLO, WORLD!'
```

### lower(string) {#lower_function}

Converts a string to lowercase.

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** String

**Example:**

```sql
select lower('Hello, World!'); -- Returns 'hello, world!'
```

### reverse(string) {#reverse_function}

Reverses the characters in a string.

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** String

**Example:**

```sql
select reverse('Hello, World!'); -- Returns '!dlroW ,olleH'
```

### left(string, length) {#left_function}

Returns the leftmost characters from a string.

- **Parameters:**
  - `string` (string): The input string.
  - `length` (integer): The number of characters to return from the left.

- **Return Type:** String

**Example:**

```sql
select left('Hello, World!', 5); -- Returns 'Hello'
```

### right(string, length) {#right_function}

Returns the rightmost characters from a string.

- **Parameters:**
  - `string` (string): The input string.
  - `length` (integer): The number of characters to return from the right.

- **Return Type:** String

**Example:**

```sql
select right('Hello, World!', 6); -- Returns 'World!'
```

### repeat(string, count) {#repeat_function}

Repeats a string a specified number of times.

- **Parameters:**
  - `string` (string): The input string.
  - `count` (integer): The number of times to repeat the string.

- **Return Type:** String

**Example:**

```sql
select repeat('abc', 3); -- Returns 'abcabcabc'
```

### lpad(string, length, padding) {#lpad_function}

Pads a string on the left with a specified character to a specified length.

- **Parameters:**
  - `string` (string): The input string.
  - `length` (integer): The desired length of the padded string.
  - `padding` (string, optional): The character used for padding.

- **Return Type:** String

**Example:**

```sql
select lpad('123', 5, '0'); -- Returns '00123'
```

### rpad(string, length, padding) {#rpad_function}

Pads a string on the right with a specified character to a specified length.

- **Parameters:**
  - `string` (string): The input string.
  - `length` (integer): The desired length of the padded string.
  - `padding` (string, optional): The character used for padding. If not specified a space " " is used.

- **Return Type:** String

**Example:**

```sql
select rpad('123', 5, '0'); -- Returns '12300'
select rpad('123', 5, ' '); -- Returns '123  '
```

### trim([both | leading | trailing] [expr from] string) {#trim_function}

Removes leading and trailing characters from a string.

- **Parameters:**
  - `[both | leading | trailing]` (optional): Specify whether to trim from both ends, only the leading end, or only the trailing end. Default is BOTH.
  - `[expr from]` (optional): Specify the characters to remove. Defaults to empty space " "
  - `string` (string): String to trim

- **Return Type:** String

**Examples:**

```sql
select trim('   Hello, World!   '); -- Returns 'Hello, World!'
select trim(leading ' ' from '   Hello, World!   '); -- Returns 'Hello, World!   '
select trim(trailing ' ' from '   Hello, World!   '); -- Returns '   Hello, World!'
select trim(both ' ' from '   Hello, World!   '); -- Returns 'Hello, World!'
select trim(both 'a' from 'aaaHello, World!aaa'); -- Returns 'Hello, World!'
```

### substring(string [from start] [for length]) {#substring_function}

Extracts a substring from a string based on the specified position and length.

- **Parameters:**
  - `string` (string): The input string.
  - `[from start]` (optional): The starting position of the substring (1-based index).
  - `[for length]` (optional): The length of the substring to extract.

- **Return Type:** String

**Examples:**

```sql
select substring('Hello, World!', 8, 5); -- Returns 'World'
select substring('Hello, World!' from 8 for 5); -- Returns 'World'
```

### position(substring in string) {#position_function}

Returns the position of a substring within a string.

- **Parameters:**
  - `substring` (string): The substring to search for.
  - `string` (string): The input string.

- **Return Type:** Integer

**Example:**

```sql
select position('World' in 'Hello, World!'); -- Returns 8
```

### expr like pattern [escape character] {#like_operator}

Checks if a string matches a specified pattern.

- **Parameters:**
  - `expr` (string): The input string.
  - `pattern` (string): The pattern to match.
  - `escape` (optional, string): The character to use to specify escape

- **Return Type:** Boolean

The like pattern has only three kinds of characters:

- `%` which matches any number of any character
- `_` which matches one of any character
- any other character, which matches that specific character

There is also an escape clause which allows you to match one of the special characters (`%`, `_`) exactly, see the example below for how this is used.

The best way to learn this is if you are not familiar with SQL beforehand to look at the examples below.

If you come from other databases, you might wonder where `ilike` is. We don't have `ilike` instead the like operator follows the collation of the string you pass in, allowing for case insensitve pattern matching.

**Example:**

```sql
select 'apple' like 'a%'; -- Returns true
select 'apple' like 'a%e'; -- Returns true
select 'apple' like 'a_e'; -- Returns false
select 'ape' like 'a_e'; -- Returns true
select 'sale' like '_a%e'; -- Returns true
select 'salie' like '_a%e'; -- Returns true
select 'salient' like '_a%e'; -- Returns false
select 'salient' like '_a%e'; -- Returns false
select '10%' like '10\%' escape '\'; -- Returns true
select '100%' like '10\%' escape '\'; -- Returns false
```

### regex.is_match(string, pattern) {#regex_is_match_function}

Checks if a regular expression matches a string. We use the rust regex crate, so for documentation on the syntax look here: https://docs.rs/regex/latest/regex/#syntax

- **Parameters:**
  - `string` (string): The input string.
  - `pattern` (string): The regular expression pattern to match.

- **Return Type:** Boolean

**Example:**

```sql
select regex.is_match('123-456-7890', '\\d{3}-\\d{3}-\\d{4}'); -- Returns true
```

### regex.replace(string, pattern, replacement) {#regex_replace_function}

Replaces the first occurrence of a regular expression match in a string. We use the rust regex crate, so for documentation on the syntax look here: https://docs.rs/regex/latest/regex/#syntax

- **Parameters:**
  - `string` (string): The input string.
  - `pattern` (string): The regular expression pattern to search for.
  - `replacement` (string): The replacement string.

- **Return Type:** String

**Example:**

```sql
select regex.replace('Hello, World!', 'o', '0'); -- Returns 'Hell0, World!'
```

### regex.replace_all(string, pattern, replacement) {#regex_replace_all_function}

Replaces all occurrences of a regular expression match in a string. We use the rust regex crate, so for documentation on the syntax look here: https://docs.rs/regex/latest/regex/#syntax


- **Parameters:**
  - `string` (string): The input string.
  - `pattern` (string): The regular expression pattern to search for.
  - `replacement` (string): The replacement string.

- **Return Type:** String

**Example:**

```sql
select regex.replace_all('Hello, World!', 'o', '0'); -- Returns 'Hell0, W0rld!'
```

### uri.encode_component(string) {#uri_encode_component_function}

Encodes a string as a URI component. [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

- **Parameters:**
  - `string` (string): The input string.

- **Return Type:** String

**Example:**

```sql
select uri.encode_component('hello world'); -- Returns 'hello%20world'
```

### uri.is_match(string, path) {#uri_is_match_function}

Checks if a string matches a route path. Normally used in the ui to see if a route is currently active.

- **Parameters:**
  - `string` (string): The input string.
  - `path` (path): The path to match the string against

- **Return Type:** Boolean

This uses the same syntax as we have for routes in the ui. This is mostly used to show if a navbar link is active.

**Example:**

```sql
select uri.is_match('/cats/1', '/cats/{record_id:id}'); -- Returns true
```

### literal.bool(value) {#literal_bool}

Returns a boolean literal as a string that can be used in dynamic queries/modifies.

- **Parameters:**
  - `value` (boolean): The boolean value.

- **Return Type:** String

**Example:**

```sql
select literal.bool(true); -- Returns 'true'
```

### literal.timestamp(value) {#literal_timestamp}

Returns a timestamp literal as a string that can be used in dynamic queries/modifies.

- **Parameters:**
  - `value` (timestamp): The timestamp value.

- **Return Type:** String

**Example:**

```sql
select literal.timestamp(timestamp '2023-09-18T12:00:00+00:00'); -- Returns 'TIMESTAMP ''2023-09-18 12:00:00 +00:00'''
```

### literal.date(value) {#literal_date}

Returns a date literal as a string that can be used in dynamic queries/modifies.

- **Parameters:**
  - `value` (date): The date value.

- **Return Type:** String

**Example:**

```sql
select literal.date(date '2023-09-18'); -- Returns 'DATE ''2023-09-18'''
```

### literal.number(value) {#literal_number}

Returns a numeric literal as a string that can be used in dynamic queries/modifies.

- **Parameters:**
  - `value` (numeric): The numeric value.

- **Return Type:** String

**Example:**

```sql
select literal.number(42.5); -- Returns '42.5'
```

### literal.string(value) {#literal_string}

Returns an escaped string literal as a string that can be used in dynamic queries/modifies.

- **Parameters:**
  - `value` (string): The string value.

- **Return Type:** String

**Example:**

```sql
select literal.string('Hello, '' World!'); -- Returns 'Hello, '' World!'
```

### format.date(date, format) {#format_date_function}

Formats a date as a string using a specified format. We use the rust library chrono for date formatting, for documentation on the formatting look here: https://docs.rs/chrono/latest/chrono/format/strftime/index.html#specifiers

- **Parameters:**
  - `date` (date): The date to format.
  - `format` (string): The format string.

- **Return Type:** String

**Example:**

```sql
select format.date(date '2023-09-18', '%e %b %Y'); -- Returns '18 Sep 2023'
```

### format.decimal(number) {#format_decimal_function}

Formats a decimal number as a string using a specified format.

- **Parameters:**
  - `number` (numeric): The decimal number to format.
  - `locale` (locale): Only en_us supported right now
  - `minimum_fraction_digits` (0-20): Minimum fractions digits to use. Default is 0.
  - `maximum_fraction_digits` (0-20): Maximum fractions digits to use. Default is the largest between minimum_fraction_digits and 3
  - `minimum_integer_digits` (1-21): The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified length) when formatted. Default is 1
  - `maximum_significant_digits` (1-21): The maximum number of significant digits to use. Default is 1

- **Return Type:** String

**Example:**

```sql
select format.decimal(5678.123, maximum_fraction_digits => 2); -- Returns 5,678.123
select format.decimal(5678.123, maximum_significant_digits => 2); -- Returns 5,678.12
select format.decimal(5678.123, minimum_integer_digits => 8, maximum_fraction_digits => 2); -- Returns 5,700
select format.decimal(5678, minimum_fraction_digits => 2, maximum_fraction_digits => 2); -- Returns 00,005,678.12
select format.decimal(5678.00000000, minimum_fraction_digits => 2, maximum_fraction_digits => 2); -- Returns 5,678.00
select format.decimal(5678.00000000, maximum_fraction_digits => 2); -- Returns 5,678
select format.decimal(5678.128, maximum_fraction_digits => 2); -- Returns 5,678.13
```

### format.currency(number, currency) {#format_currency_function}

Formats a decimal number as currency using a specified format.

- **Parameters:**
  - `number` (numeric): The decimal number to format as currency.
  - `currency` (string): Only usd is supported right now
  - `locale` (locale): Only en_us supported right now
  - `minimum_fraction_digits` (0-20): Minimum fractions digits to use. Default is 2.
  - `maximum_fraction_digits` (0-20): Maximum fractions digits to use. Default is the largest between minimum_fraction_digits and 2
  - `minimum_integer_digits` (1-21): The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified length) when formatted. Default is 1
  - `maximum_significant_digits` (1-21): The maximum number of significant digits to use. Default is 1

- **Return Type:** String

**Example:**

```sql
select format.currency(55.10, 'usd'); -- Returns $55.10
select format.currency(55.10, 'usd', maximum_fraction_digits => 0) -- Returns $55
```

### format.percent(number) {#format_percent_function}

Formats a decimal number as a percentage.

- **Parameters:**
  - `number` (numeric): The decimal number to format as a percentage.
  - `locale` (locale): Only en_us supported right now
  - `minimum_fraction_digits` (0-20): Minimum fractions digits to use. Default is 0.
  - `maximum_fraction_digits` (0-20): Maximum fractions digits to use. Default is the largest between minimum_fraction_digits and 0
  - `minimum_integer_digits` (1-21): The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified length) when formatted. Default is 1
  - `maximum_significant_digits` (1-21): The maximum number of significant digits to use. Default is 1

- **Return Type:** String

**Example:**

```sql
select format.percent(0.551); -- returns 55%
select format.percent(0.551, maximum_fraction_digits => 0); -- returns 55%
select format.percent(0.5515, maximum_fraction_digits => 1); -- returns 55.2%
```
