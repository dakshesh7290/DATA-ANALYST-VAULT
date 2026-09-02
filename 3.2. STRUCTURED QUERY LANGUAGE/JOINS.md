# Joins

> Combining rows from two or more tables based on a related column — the SQL equivalent of Excel's lookup functions, applied at scale.

## Overview

Relational databases split data across multiple tables to avoid redundancy (a customers table, an orders table, a products table). Joins let an analyst combine these tables back together for analysis, based on a shared key like `customer_id`.

## Why It Matters for a Data Analyst

Almost no real analysis uses just one table. Understanding exactly how each join type behaves — especially what happens to unmatched rows — is essential to avoid silently wrong results.

## Core Concepts

- **Join key** — the column(s) used to match rows between tables
- **Left table / right table** — the tables on each side of the `JOIN` keyword, relevant for directional joins
- **Matched vs unmatched rows** — how each join type handles rows without a corresponding match in the other table

## Join Types

| Join Type | Behavior |
|---|---|
| `INNER JOIN` | Returns only rows with a match in both tables |
| `LEFT JOIN` | Returns all rows from the left table, with matching data from the right table (or `NULL` if no match) |
| `RIGHT JOIN` | Returns all rows from the right table, with matching data from the left table (or `NULL` if no match) |
| `FULL OUTER JOIN` | Returns all rows from both tables, matching where possible, with `NULL` where there's no match on either side |
| `CROSS JOIN` | Returns every possible combination of rows from both tables (a Cartesian product) |
| `SELF JOIN` | A table joined to itself, typically to compare rows within the same table |

## A Mental Model

Think of two tables as two circles in a Venn diagram:
- `INNER JOIN` = only the overlap
- `LEFT JOIN` = the entire left circle, overlap included
- `FULL OUTER JOIN` = both circles entirely

## Examples

Finding customers with no orders (a classic `LEFT JOIN` use case):
```sql
SELECT c.customer_id, c.customer_name
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

A self join comparing employees to their managers:
```sql
SELECT e.employee_name, m.employee_name AS manager_name
FROM employees AS e
LEFT JOIN employees AS m ON e.manager_id = m.employee_id;
```

## Real-World Data Analyst Use Cases

- Combining a sales table with a product table to analyze revenue by category
- Identifying customers who have never placed an order using a `LEFT JOIN` with a `NULL` check
- Comparing each employee's performance to their manager's using a self join

## Common Mistakes

- Using `INNER JOIN` when a `LEFT JOIN` was needed, silently dropping unmatched rows (e.g. customers with no orders disappear entirely)
- Joining on the wrong column, or a column that isn't actually unique, causing row duplication
- Forgetting that `CROSS JOIN` produces a result set the size of both tables multiplied together — easy to accidentally generate an enormous result

## Best Practices

- Always ask: "should unmatched rows be kept or dropped?" before choosing a join type
- Verify row counts before and after a join to catch unexpected duplication
- Use explicit `JOIN ... ON` syntax rather than old-style comma joins in the `WHERE` clause, for clarity

## Interview Perspective

### Common Interview Questions
- What's the difference between `INNER JOIN` and `LEFT JOIN`?
- How would you find customers who have never placed an order?
- What happens if you join on a non-unique key?

### What Interviewers Usually Test
Whether the candidate can reason about which rows survive a given join type, not just recite definitions.

### Common Traps
Assuming a `LEFT JOIN` will never duplicate rows — it will, if the right table has multiple matching rows for a single left-table row.

## Practical Application

Joins are used in nearly every real SQL query beyond the simplest single-table lookups — they are the backbone of combining relational data for analysis.

## Revision Summary

- `INNER JOIN` keeps only matched rows; `LEFT`/`RIGHT JOIN` keep all rows from one side; `FULL OUTER JOIN` keeps all rows from both.
- `LEFT JOIN` + `WHERE ... IS NULL` is the standard pattern for finding unmatched records.
- Joining on a non-unique key can silently duplicate rows — always verify row counts after a join.
- `CROSS JOIN` produces a Cartesian product and should be used deliberately, not accidentally.
