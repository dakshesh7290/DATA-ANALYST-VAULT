# Exploratory Data Analysis Using SQL

> A structured methodology for understanding a new dataset directly in SQL, before committing to a deeper analysis.

## Overview

Before answering a specific business question, an analyst usually needs to first understand the dataset itself — what it contains, how reliable it is, and what patterns exist at a high level. This process is called Exploratory Data Analysis (EDA), and much of it can be done efficiently directly in SQL, especially for large datasets.

## Why It Matters for a Data Analyst

Diving straight into detailed analysis without first understanding the dataset risks building conclusions on flawed assumptions — a column that isn't what it appears to be, a date range that doesn't cover what's expected, or a field with unexpectedly high missing values.

## A Structured SQL EDA Methodology

### 1. Understand the Dataset
Check table structure, row counts, and column names/types.
```sql
SELECT COUNT(*) AS total_rows FROM orders;
```

### 2. Check Data Quality
Look for missing values, obviously invalid values, and unexpected duplicates.
```sql
SELECT COUNT(*) - COUNT(region) AS missing_region
FROM customers;
```

### 3. Understand Distributions
Look at the range and spread of key numeric columns.
```sql
SELECT MIN(amount), MAX(amount), AVG(amount)
FROM orders;
```

### 4. Analyze Categorical Variables
Understand what categories exist and how frequently each occurs.
```sql
SELECT region, COUNT(*) AS record_count
FROM customers
GROUP BY region
ORDER BY record_count DESC;
```

### 5. Analyze Numerical Variables
Look deeper at numeric fields — not just min/max/average, but distribution shape, using percentile functions where available.

### 6. Analyze Time Trends
Check how key metrics move over time, and confirm the date range actually covers what's expected.
```sql
SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount) AS monthly_sales
FROM orders
GROUP BY month
ORDER BY month;
```

### 7. Identify Anomalies
Look for outliers or values that don't make business sense (e.g. negative order amounts, dates in the future).

### 8. Segment Data
Break the dataset into meaningful business segments and compare them (e.g. by region, by customer tier).

### 9. Identify Relationships
Look for patterns between variables — e.g. does order size vary meaningfully by region or by customer tenure?

### 10. Generate Business Questions
Use everything discovered so far to form specific, answerable questions for deeper analysis.

## Real-World Data Analyst Use Cases

- Understanding a newly received dataset before committing to a specific analysis plan
- Catching a data quality issue (e.g. a large chunk of missing dates) before it silently skews results
- Identifying which segment or time period deserves deeper investigation

## Common Mistakes

- Skipping EDA and jumping directly to a specific analysis, missing an underlying data quality problem
- Treating EDA as a one-time step rather than something to revisit as new questions emerge
- Not documenting findings from EDA, losing useful context for later stages of the analysis

## Best Practices

- Always run basic quality checks (row counts, NULL counts, date range) before deeper analysis
- Look at both the "shape" of the data (distributions) and specific edge cases (outliers, anomalies)
- Let EDA findings actively shape the direction of the deeper analysis, rather than treating it as a formality

## Interview Perspective

### Common Interview Questions
- Walk me through how you'd explore a new dataset you've never seen before.
- How would you check for data quality issues using SQL?
- What would you look for before trusting a dataset for analysis?

### What Interviewers Usually Test
Whether the candidate has a genuine, structured process for understanding new data, rather than jumping straight to conclusions.

### Common Traps
Describing EDA purely in terms of a single technique (e.g. "I'd check for NULLs") rather than a structured, multi-step process.

## Practical Application

SQL-based EDA is often the very first technical step in any real analysis — it shapes every decision that follows, including what to clean, what to focus on, and what questions are even answerable with the available data.

## Revision Summary

- SQL-based EDA follows a structured path: understand structure → check quality → distributions → categorical/numerical analysis → time trends → anomalies → segmentation → relationships → business questions.
- EDA should shape the direction of deeper analysis, not just be a formality before it.
- Data quality issues are often only caught during EDA — skipping it risks building on flawed assumptions.
- EDA findings should be documented, not just observed and forgotten.
