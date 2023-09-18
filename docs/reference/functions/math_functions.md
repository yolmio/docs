---
title: "Math Functions and operators"
---

Math functions in SQL are used to perform various mathematical operations on numeric data. These functions are essential for performing calculations, transformations, and computations in your SQL queries. Below is a list of our math functions in SQL:

| Name                               | Description                                               |
|------------------------------------|-----------------------------------------------------------|
| [abs()](#abs_function)             | Return the absolute value of a number                     |
| [ceil()](#ceil_function)           | Round a number up to the nearest integer                  |
| [floor()](#floor_function)         | Round a number down to the nearest integer                |
| [trunc()](#trunc_function)         | Truncate a number to a specified number of decimal places |
| [exp()](#exp_function)             | Calculate the exponential value of a number               |
| [ln()](#ln_function)               | Calculate the natural logarithm of a number               |
| [log10()](#log10_function)         | Calculate the base 10 logarithm of a number               |
| [sqrt()](#sqrt_function)           | Calculate the square root of a number                     |
| [log()](#log_function)             | Calculate the logarithm of a number with a specified base |
| [power()](#power_function)         | Raise a number to a specified power                       |
| [round()](#round_function)         | Round a number to a specified number of decimal places    |
| [factorial()](#factorial_function) | Calculate the factorial of a number                       |
| [pi()](#pi_function)               | Return the mathematical constant pi (π)                   |
| [radians()](#radians_function)     | Convert degrees to radians                                |
| [degrees()](#degrees_function)     | Convert radians to degrees                                |
| [cbrt()](#cbrt_function)           | Calculate the cube root of a number                       |
| [acos()](#acos_function)           | Calculate the arc cosine of a number                      |
| [asin()](#asin_function)           | Calculate the arc sine of a number                        |
| [atan()](#atan_function)           | Calculate the arc tangent of a number                     |
| [cos()](#cos_function)             | Calculate the cosine of a number                          |
| [sin()](#sin_function)             | Calculate the sine of a number                            |
| [tan()](#tan_function)             | Calculate the tangent of a number                         |
| number + number                    | addition                                                  |
| number - number                    | minus                                                     |
| number * number                    | multiply                                                  |
| number / number                    | divide                                                    |
| number % number                    | modulo                                                    |

### abs(number) {#abs_function}

Returns the absolute value of a number.

- **Parameters:**
  - `number` (numeric): The number for which to find the absolute value.

- **Return Type:** Numeric

**Example:**

```sql
select abs(-5.67); -- Returns 5.67
```

### ceil(number) {#ceil_function}

Rounds a number up to the nearest integer.

- **Parameters:**
  - `number` (numeric): The number to round up.

- **Return Type:** numeric

**Example:**

```sql
select ceil(3.14); -- Returns 4
```

### floor(number) {#floor_function}

Rounds a number down to the nearest integer.

- **Parameters:**
  - `number` (numeric): The number to round down.

- **Return Type:** Integer

**Example:**

```sql
select floor(3.14); -- Returns 3
```

### trunc(number), trunc(number, decimals) {#trunc_function}

Truncates a number to a specified number of decimal places.

- **Parameters:**
  - `number` (numeric): The number to truncate.
  - `decimals` (integer): The number of decimal places to keep. This parameter is optional and if not provided no decimal places are kept.

- **Return Type:** Numeric

**Example:**

```sql
select trunc(3.14159265, 2); -- Returns 3.14
```

### exp(number) {#exp_function}

Calculates the exponential value of a number. (e raised to the given power)

- **Parameters:**
  - `number` (numeric): The number for which to calculate the exponential value.

- **Return Type:** Numeric

**Example:**

```sql
select exp(2); -- Returns 7.38905609893065
```

### ln(number) {#ln_function}

Calculates the natural logarithm of a number.

- **Parameters:**
  - `number` (numeric): The number for which to calculate the natural logarithm.

- **Return Type:** Numeric

**Example:**

```sql
select ln(10); -- Returns 2.302585092994046
```

### log10(number) {#log10_function}

Calculates the base 10 logarithm of a number.

- **Parameters:**
  - `number` (numeric): The number for which to calculate the base 10 logarithm.

- **Return Type:** Numeric

**Example:**

```sql
select log10(100); -- Returns 2
```

### sqrt(number) {#sqrt_function}

Calculates the square root of a number.

- **Parameters:**
  - `number` (numeric): The number for which to calculate the square root.

- **Return Type:** Numeric

**Example:**

```sql
select sqrt(25); -- Returns 5
```

### log(base, number) {#log_function}

Calculates the logarithm of a number with a specified base.

- **Parameters:**
  - `base` (numeric): The base of the logarithm.
  - `number` (numeric): The number for which to calculate the logarithm.

- **Return Type:** Numeric

**Example:**

```sql
select log(2, 8); -- Returns 3
```

### power(base, exponent) {#power_function}

Raises a number to a specified power.

- **Parameters:**
  - `base` (numeric): The base number.
  - `exponent` (numeric): The exponent to which to raise the base.

- **Return Type:** Numeric

**Example:**

```sql
select power(2, 3); -- Returns 8
```

### round(number, decimals) {#round_function}

Rounds a number to a specified number of decimal places.

- **Parameters:**
  - `number` (numeric): The number to round.
  - `decimals` (integer): The number of decimal places to round to.

- **Return Type:** Numeric

**Example:**

```sql
select round(3.14159265, 2); -- Returns 3.14
```

### factorial(number) {#factorial_function}

Calculates the factorial of a number.

- **Parameters:**
  - `number` (integer): The number for which to calculate the factorial.

- **Return Type:** Max precision decimal

**Example:**

```sql
select factorial(5); -- Returns 120
```

### pi() {#pi_function}

Returns the mathematical constant pi (π).

- **Return Type:** Double

**Example:**

```sql
select pi(); -- Returns 3.14159265358979
```

### radians(degrees) {#radians_function}

Converts degrees to radians.

- **Parameters:**
  - `degrees` (double): The angle in degrees to convert to radians.

- **Return Type:** Double

**Example:**

```sql
select radians(180); -- Returns 3.14159265358979
```

### degrees(radians) {#degrees_function}

Converts radians to degrees.

- **Parameters:**
  - `radians` (double): The angle in radians to convert to degrees.

- **Return Type:** Double

**Example:**

```sql
select degrees(3.14159265); -- Returns 180
```

### cbrt(number) {#cbrt_function}

Calculates the cube root of a number.

- **Parameters:**
  - `number` (double): The number for which to calculate the cube root.

- **Return Type:** Double

**Example:**

```sql
select cbrt(8); -- Returns 2
```

### acos(number) {#acos_function}

Calculates the arc cosine of a number.

- **Parameters:**
  - `number` (double): The number for which to calculate the arc cosine.

- **Return Type:** Double

**Example:**

```sql
select acos(0.5); -- Returns 1.047197551196598 (approximately 60 degrees)
```

### asin(number) {#asin_function}

Calculates the arc sine of a number.

- **Parameters:**
  - `number` (double): The number for which to calculate the arc sine.

- **Return Type:** Double

**Example:**

```sql
select asin(0.5); -- Returns 0.523598775598299 (approximately 30 degrees)
```

### atan(number) {#atan_function}

Calculates the arc tangent of a number.

- **Parameters:**
  - `number` (double): The number for which to calculate the arc tangent.

- **Return Type:** Double

**Example:**

```sql
select atan(1); -- Returns 0.785398163397448 (approximately 45 degrees)
```

### cos(number) {#cos_function}

Calculates the cosine of a number.

- **Parameters:**
  - `number` (double): The angle in radians for which to calculate the cosine.

- **Return Type:** Double

**Example:**

```sql
select cos(0); -- Returns 1
```

### sin(number) {#sin_function}

Calculates the sine of a number.

- **Parameters:**
  - `number` (double): The angle in radians for which to calculate the sine.

- **Return Type:** Double

**Example:**

```sql
select sin(0); -- Returns 0
```

### tan(number) {#tan_function}

Calculates the tangent of a number.

- **Parameters:**
  - `number` (double): The angle in radians for which to calculate the tangent.

- **Return Type:** Double

**Example:**

```sql
select tan(0); -- Returns 0
```
