# Unions

> Stacking the results of two or more queries into a single result set, vertically rather than joining columns.

## Overview

While a `JOIN` combines tables side by side based on a matching key, `UNION` stacks the results of multiple queries on top of each other — combining rows, not columns. It's used when two datasets have the same structure and need to be treated as one.

## Why It Matters for a Data Analyst

Data is often split across similarly structured tables — this year's data and last year's data in separate tables, or regional tables that need to be combined for a company-wide view. `UNION` is how these are stitched together.

## Core Concepts

- **UNION** — combines result sets and removes duplicate rows
- **UNION ALL** — combines result sets and keeps all rows, including duplicates
- **Column compatibility** — all queries in a `UNION` must return the same number of columns, in a compatible order and data type

## Comparisons

| Aspect | UNION | UNION ALL |
|---|---|---|
| Removes duplicates | Yes | No |
| Performance | Slower (must check for duplicates) | Faster |
| Use when | You know or expect duplicates that should be removed | You want every row, or you know there are no duplicates |

## Examples

Combining two years of sales data:
```sql
SELECT order_id, order_date, amount, '2024' AS source_year
FROM sales_2024
UNION ALL
SELECT order_id, order_date, amount, '2025' AS source_year
FROM sales_2025;
```

Combining regional customer lists, removing accidental duplicates:
```sql
SELECT customer_id, customer_name FROM customers_east
UNION
SELECT customer_id, customer_name FROM customers_west;
```

## Real-World Data Analyst Use Cases

- Combining monthly sales tables into a single annual view
- Merging regional datasets that share the same structure into one company-wide table
- Combining current and historical/archived tables for a full time-series analysis

## Common Mistakes

- Using `UNION` by default when `UNION ALL` was intended, silently removing legitimate duplicate rows (e.g. two identical orders placed at different times)
- Mismatched column counts or incompatible data types between the queries being combined, causing an error
- Not adding a source indicator column, making it hard to trace which query a given row came from

## Best Practices

- Default to `UNION ALL` unless duplicate removal is specifically needed — it's faster and avoids silently dropping legitimate rows
- Add a labeling column (e.g. `source_table`) when combining data from different origins, to preserve traceability
- Confirm column order and types match exactly across all queries being combined

## Interview Perspective

### Common Interview Questions
- What's the difference between `UNION` and `UNION ALL`?
- When would combining tables with `UNION` be preferable to joining them?

### What Interviewers Usually Test
Whether the candidate understands that `UNION` and `JOIN` solve fundamentally different problems (stacking rows vs combining columns), not just SQL syntax.

### Common Traps
Confusing `UNION` (combining rows) with `JOIN` (combining columns) — a very common conceptual mix-up.

## Practical Application

`UNION`/`UNION ALL` come up whenever data with the same structure is split across multiple tables or sources and needs to be analyzed as a whole.

## Revision Summary

- `UNION` combines rows from multiple queries and removes duplicates; `UNION ALL` keeps all rows, including duplicates.
- Combined queries must have matching column counts, order, and compatible data types.
- Default to `UNION ALL` for performance unless duplicate removal is specifically required.
- `UNION` is fundamentally different from `JOIN` — one stacks rows, the other combines columns.
