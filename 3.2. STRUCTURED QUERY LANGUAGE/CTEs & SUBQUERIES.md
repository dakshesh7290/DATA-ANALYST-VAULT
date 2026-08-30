# CTEs & Subqueries

> Breaking complex queries into readable, logical steps using Common Table Expressions and subqueries.

## Overview

As analytical questions get more complex, a single flat query often becomes hard to read or even impossible to express directly. Subqueries and Common Table Expressions (CTEs) let an analyst break a complex query into smaller, named, logical steps — improving both readability and, in many cases, maintainability.

## Why It Matters for a Data Analyst

Real business questions often require intermediate calculations before the final answer ("first calculate each customer's total spend, then find customers above the average"). CTEs and subqueries are how these multi-step calculations are expressed in a single query.

## Core Concepts

- **Subquery** — a query nested inside another query, used in place of a table, column, or filter value
- **CTE (Common Table Expression)** — a named, temporary result set defined with `WITH`, usable like a table within the main query
- **Correlated subquery** — a subquery that references a column from the outer query, re-evaluated for each outer row

## How It Works

A subquery can appear in several places: in the `SELECT` list (returning a single value), in the `FROM` clause (acting as a table), or in the `WHERE` clause (as a filter condition). A CTE, defined with `WITH name AS (...)`, is evaluated once and can be referenced by name later in the query — often clearer than an equivalent nested subquery.

## Examples

Subquery in `WHERE` — customers who spent above the average:
```sql
SELECT customer_id, SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > (SELECT AVG(amount) FROM orders);
```

The same logic expressed with a CTE for clarity:
```sql
WITH customer_totals AS (
    SELECT customer_id, SUM(amount) AS total_spent
    FROM orders
    GROUP BY customer_id
)
SELECT *
FROM customer_totals
WHERE total_spent > (SELECT AVG(total_spent) FROM customer_totals);
```

A correlated subquery — each customer's most recent order date:
```sql
SELECT o.customer_id, o.order_date
FROM orders AS o
WHERE o.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders AS o2
    WHERE o2.customer_id = o.customer_id
);
```

## Real-World Data Analyst Use Cases

- Calculating an intermediate metric (customer lifetime value) before filtering or ranking on it
- Breaking a multi-step analysis (clean → aggregate → filter → rank) into clearly named CTEs
- Comparing each row to a group-level statistic (e.g. flagging orders above the customer's own average order value)

## Common Mistakes

- Nesting subqueries several levels deep, producing a query that's technically correct but very difficult to read or debug
- Using a correlated subquery where a `JOIN` or window function would be more efficient and often clearer
- Forgetting that a CTE is not indexed or materialized like a real table in most databases — it doesn't inherently improve performance, just readability

## Best Practices

- Prefer CTEs over deeply nested subqueries for readability, especially in multi-step analysis
- Name CTEs descriptively (`customer_totals`, not `cte1`)
- Consider whether a window function could replace a correlated subquery more efficiently

## Interview Perspective

### Common Interview Questions
- What's the difference between a CTE and a subquery?
- How would you find customers who spent more than the average customer?
- What is a correlated subquery, and how does it differ from a regular subquery?

### What Interviewers Usually Test
Whether the candidate can break a multi-step business question into a logically ordered query, using CTEs or subqueries appropriately.

### Common Traps
Assuming a CTE automatically improves query performance — in most databases, it primarily improves readability, not speed, unless the database specifically materializes it.

## Practical Application

CTEs are especially valuable in exploratory or reporting queries where readability matters — they let another analyst (or the same analyst, months later) follow the logic step by step.

## Revision Summary

- Subqueries nest a query inside another; CTEs define a named, reusable result set with `WITH`.
- Correlated subqueries reference the outer query and re-run per outer row — often replaceable with a window function.
- CTEs primarily improve readability, not necessarily performance.
- Prefer CTEs over deeply nested subqueries for multi-step analysis.
