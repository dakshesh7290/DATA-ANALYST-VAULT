# Data Cleaning Using SQL

> Identifying and handling missing values, duplicates, and inconsistent data directly within SQL queries.

## Overview

Data cleaning isn't limited to Excel or Python — much of it can and should happen directly in SQL, especially when working with large datasets where pulling everything into another tool first would be inefficient. This note covers the SQL techniques used to identify and address common data quality issues.

## Why It Matters for a Data Analyst

Cleaning data at the query level, close to the source, is often more efficient than exporting first and cleaning later — and it keeps the cleaning logic transparent and reusable across future queries.

## Core Concepts

- **NULL handling** — identifying and deciding how to treat missing values
- **Duplicate detection** — identifying rows that are unintentionally repeated
- **Data type issues** — values stored in an unexpected or inconsistent type
- **Standardization** — making inconsistent text values (casing, spacing, naming) consistent

## Common Techniques

### Identifying NULLs
```sql
SELECT COUNT(*) AS missing_region
FROM customers
WHERE region IS NULL;
```

### Handling NULLs with COALESCE
```sql
SELECT customer_id, COALESCE(region, 'Unknown') AS region
FROM customers;
```

### Identifying duplicates
```sql
SELECT customer_id, COUNT(*) AS record_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;
```

### Removing duplicates (keeping one row per key, using a window function)
```sql
WITH ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY updated_at DESC) AS rn
    FROM customers
)
SELECT *
FROM ranked
WHERE rn = 1;
```

### Standardizing text
```sql
SELECT DISTINCT TRIM(UPPER(region)) AS standardized_region
FROM customers;
```

## Real-World Data Analyst Use Cases

- Identifying how many records are missing a required field before deciding how to handle them
- Removing duplicate customer records while keeping only the most recently updated version
- Standardizing inconsistent region or category names before aggregating

## Common Mistakes

- Deleting or filtering out `NULL` values without considering whether that biases the analysis
- Assuming duplicate detection based on a single column is sufficient, when the true definition of "duplicate" depends on multiple columns
- Not validating data types after importing data from an external source (e.g. a date field stored as text)

## Best Practices

- Always quantify a data quality issue before deciding how to handle it (how many rows are affected?)
- Use `COALESCE` to substitute meaningful defaults for `NULL` values rather than silently excluding them
- Use window functions like `ROW_NUMBER()` for controlled, deterministic duplicate removal, rather than arbitrary `DISTINCT`

## Interview Perspective

### Common Interview Questions
- How would you identify duplicate records in a table?
- How would you handle NULL values in a numeric column before aggregating it?
- What's the difference between using `DISTINCT` and using `ROW_NUMBER()` to remove duplicates?

### What Interviewers Usually Test
Whether the candidate treats data cleaning as a deliberate process with documented decisions, not just a mechanical step.

### Common Traps
Using plain `DISTINCT` to deduplicate when the actual requirement was to keep a *specific* row per duplicate group (e.g. the most recent) — `DISTINCT` doesn't offer that control.

## Practical Application

SQL-based cleaning is essential when working with large datasets directly from a database, where cleaning inside the query is far more efficient than exporting and cleaning elsewhere.

## Revision Summary

- `COALESCE` substitutes a default value for `NULL`, rather than leaving it or excluding it silently.
- Duplicate detection depends on correctly defining what makes a row a "duplicate" for the dataset.
- `ROW_NUMBER()` provides deterministic control over which row to keep when removing duplicates, unlike plain `DISTINCT`.
- Always quantify the scope of a data quality issue before deciding how to address it.
