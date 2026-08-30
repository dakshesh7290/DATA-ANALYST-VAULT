# NumPy

> The foundational library for fast, numerical array operations in Python — the engine underneath Pandas and most of the data analysis ecosystem.

## Overview

NumPy (Numerical Python) provides the array data structure and vectorized operations that make numerical computing in Python fast. While analysts often interact with Pandas more directly, Pandas itself is built on top of NumPy — understanding NumPy's core ideas makes Pandas easier to reason about.

## Why It Matters for a Data Analyst

Plain Python loops are slow for large numerical operations. NumPy performs these operations in optimized, compiled code, making calculations across large datasets dramatically faster — a difference that matters as dataset size grows.

## Core Concepts

- **Array (`ndarray`)** — NumPy's core data structure: a grid of values, all of the same type
- **Dimensions** — arrays can be 1D (a list of numbers), 2D (a table/matrix), or higher-dimensional
- **Indexing** — accessing specific elements by position
- **Slicing** — accessing a range of elements
- **Vectorization** — performing an operation on an entire array at once, without an explicit loop
- **Aggregations** — functions like `sum`, `mean`, `min`, `max` applied across an array or a specific dimension

## Why NumPy Matters for Analytics

A vectorized operation like `array * 2` applies to every element simultaneously using optimized underlying code, rather than looping through each value in Python — this is both faster and more concise.

## Examples

Creating an array:
```python
import numpy as np
sales = np.array([100, 250, 400, 90])
```

Vectorized operations:
```python
sales_with_tax = sales * 1.08
```

Indexing and slicing:
```python
first_sale = sales[0]
first_three = sales[:3]
```

Aggregations:
```python
total = sales.sum()
average = sales.mean()
```

A 2D array (matrix-like structure):
```python
matrix = np.array([[1, 2, 3], [4, 5, 6]])
row_totals = matrix.sum(axis=1)
```

## Real-World Data Analyst Use Cases

- Performing fast numerical calculations across an entire dataset (e.g. applying a tax rate to every sales figure)
- Calculating summary statistics (mean, standard deviation) across large arrays of values
- Underlying nearly every Pandas operation, since Pandas Series are built on NumPy arrays

## Common Mistakes

- Writing explicit Python loops over NumPy arrays instead of using vectorized operations, losing most of the performance benefit
- Mixing data types within an array unintentionally, which can cause NumPy to fall back to a slower, less efficient type
- Confusing `axis=0` (down columns) with `axis=1` (across rows) when aggregating a 2D array

## Best Practices

- Prefer vectorized operations over explicit loops whenever working with NumPy arrays
- Be explicit about which axis an aggregation should run along, and verify with a small test
- Use NumPy directly mainly for numerical computation; use Pandas for labeled, tabular data with mixed types

## Interview Perspective

### Common Interview Questions
- What is vectorization, and why does it matter for performance?
- What's the difference between a NumPy array and a Python list?
- How would you calculate the mean of each row in a 2D array?

### What Interviewers Usually Test
Whether the candidate understands *why* NumPy is faster than plain Python loops, not just that it exists.

### Common Traps
Getting `axis=0` and `axis=1` backwards when aggregating across rows vs columns.

## Practical Application

NumPy rarely appears directly in day-to-day analyst work compared to Pandas, but understanding it clarifies why certain Pandas operations behave the way they do, especially around performance and data types.

## Revision Summary

- NumPy arrays store same-typed data and support fast, vectorized operations.
- Vectorization avoids explicit Python loops, which is both faster and more concise.
- `axis=0` aggregates down columns; `axis=1` aggregates across rows — easy to mix up.
- Pandas is built on top of NumPy, so NumPy concepts underlie much of Pandas' behavior.
