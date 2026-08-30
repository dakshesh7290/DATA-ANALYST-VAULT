# Window Functions

> Calculating values across a set of related rows without collapsing them into a single summary row — rankings, running totals, and row-to-row comparisons.

## Overview

`GROUP BY` collapses rows into summaries, losing row-level detail. Window functions calculate values across a related set of rows (a "window") while keeping every individual row in the result — enabling rankings, running totals, and comparisons between a row and its neighbors, all without losing granularity.

## Why It Matters for a Data Analyst

Many real questions require both row-level detail and a calculation that depends on other rows — "each order's amount, alongside that customer's running total" or "each product's sales rank within its category." Window functions are the SQL-native way to answer these without complex self-joins or subqueries.

## Core Concepts

- **OVER()** — marks a function as a window function and defines its window
- **PARTITION BY** — divides rows into groups (partitions) the window function operates within, similar to `GROUP BY` but without collapsing rows
- **ORDER BY (within OVER)** — defines the order rows are processed in, relevant for ranking and running calculations
- **Frame** — the specific subset of rows within a partition that a function considers (e.g. "all rows so far" for a running total)

## Common Window Functions

| Function | Purpose |
|---|---|
| `ROW_NUMBER()` | Assigns a unique sequential number to each row within its partition |
| `RANK()` | Assigns a rank, with ties sharing the same rank and a gap afterward |
| `DENSE_RANK()` | Assigns a rank, with ties sharing the same rank and no gap afterward |
| `LAG()` | Returns a value from a previous row within the partition |
| `LEAD()` | Returns a value from a following row within the partition |
| `SUM() OVER(...)` | Running total or partitioned sum, depending on the frame |

## RANK vs DENSE_RANK

| Value | RANK() | DENSE_RANK() |
|---|---|---|
| 100 | 1 | 1 |
| 100 | 1 | 1 |
| 90 | 3 | 2 |
| 80 | 4 | 3 |

`RANK()` skips a rank number after a tie; `DENSE_RANK()` does not.

## Examples

Ranking products by sales within each category:
```sql
SELECT product_name, category, sales,
       RANK() OVER (PARTITION BY category ORDER BY sales DESC) AS category_rank
FROM products;
```

Running total of sales by date:
```sql
SELECT order_date, amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
```

Comparing each order to the customer's previous order:
```sql
SELECT customer_id, order_date, amount,
       LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS previous_order_amount
FROM orders;
```

## Real-World Data Analyst Use Cases

- Ranking sales reps by performance within each region
- Calculating a running total of monthly revenue for a trend chart
- Comparing each month's revenue to the previous month's using `LAG()`, to calculate month-over-month change

## Common Mistakes

- Confusing `PARTITION BY` with `GROUP BY` — `PARTITION BY` does not collapse rows, while `GROUP BY` does
- Forgetting `ORDER BY` inside `OVER()` when it's needed for ranking or running calculations, producing incorrect or undefined ordering
- Using `RANK()` when `DENSE_RANK()` (or vice versa) was actually intended, especially when ties are common

## Best Practices

- Use `PARTITION BY` whenever a calculation should reset for each group (e.g. rank restarting at 1 for each category)
- Be deliberate about `RANK()` vs `DENSE_RANK()` vs `ROW_NUMBER()` based on how ties should be handled
- Combine window functions with CTEs for readability when a query has several dependent calculations

## Interview Perspective

### Common Interview Questions
- What's the difference between `RANK()` and `DENSE_RANK()`?
- How would you calculate a running total in SQL?
- What's the difference between `PARTITION BY` and `GROUP BY`?

### What Interviewers Usually Test
Whether the candidate understands that window functions preserve row-level detail, unlike `GROUP BY` — a common conceptual gap.

### Common Traps
Using `GROUP BY` when the goal actually required row-level detail alongside an aggregate value — window functions solve exactly this case.

## Practical Application

Window functions are heavily used in reporting and EDA — rankings, running totals, and period-over-period comparisons are among the most common analytical requests.

## Revision Summary

- Window functions calculate across related rows without collapsing them, unlike `GROUP BY`.
- `PARTITION BY` groups rows for the window function; `ORDER BY` inside `OVER()` controls processing order.
- `RANK()` leaves gaps after ties; `DENSE_RANK()` does not.
- `LAG()`/`LEAD()` access neighboring rows — useful for period-over-period comparisons.
