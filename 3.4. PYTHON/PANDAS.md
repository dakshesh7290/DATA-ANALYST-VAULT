# Pandas

> The core Python library for working with tabular data — the closest Python equivalent to a spreadsheet or SQL table, with far more flexibility.

## Overview

Pandas provides two primary data structures — the `Series` (a single labeled column) and the `DataFrame` (a labeled table) — along with a large set of operations for reading, cleaning, transforming, and analyzing tabular data. For most Data Analysts, Pandas is where the bulk of Python-based analysis actually happens.

## Why It Matters for a Data Analyst

Pandas combines the readability of a spreadsheet with the power and repeatability of code — operations can be applied consistently across huge datasets, saved as scripts, and rerun on new data without starting from scratch.

## Core Concepts

- **Series** — a single labeled column of data
- **DataFrame** — a labeled, two-dimensional table made up of Series
- **Index** — the labels identifying each row
- **dtype** — the data type of a column (numeric, text, datetime, etc.)

## Reading and Inspecting Data

```python
import pandas as pd
df = pd.read_csv("sales.csv")
df.head()          # first 5 rows
df.info()           # column types and non-null counts
df.describe()       # summary statistics for numeric columns
```

## Selecting and Filtering

```python
df["region"]                      # a single column (Series)
df[["region", "amount"]]          # multiple columns
df[df["amount"] > 500]            # filtered rows
```

## Missing Values

```python
df.isnull().sum()                 # count missing values per column
df.dropna()                       # remove rows with missing values
df.fillna(0)                      # fill missing values with a default
```

## Duplicates

```python
df.duplicated().sum()
df.drop_duplicates()
```

## GroupBy and Aggregation

```python
df.groupby("region")["amount"].sum()
df.groupby(["region", "category"]).agg({"amount": "sum", "order_id": "count"})
```

## Merge, Join, Concat

```python
pd.merge(orders_df, customers_df, on="customer_id", how="left")   # like a SQL JOIN
pd.concat([sales_2024_df, sales_2025_df])                          # like a SQL UNION
```

## Pivot Tables and Reshaping

```python
df.pivot_table(index="region", columns="category", values="amount", aggfunc="sum")
```

## Date/Time Handling

```python
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.to_period("M")
```

## String Operations

```python
df["region"] = df["region"].str.strip().str.upper()
```

## Apply/Map

```python
df["tier"] = df["amount"].apply(lambda x: "High" if x > 500 else "Standard")
```

## Exporting Data

```python
df.to_csv("cleaned_sales.csv", index=False)
```

## Real-World Data Analyst Use Cases

- Loading a raw CSV export, cleaning it, and producing a summarized output ready for reporting
- Merging multiple data sources (orders, customers, products) into a single analysis-ready table
- Reshaping survey data from wide to long format for easier analysis

## Common Mistakes

- Chaining too many operations without checking intermediate results, making it hard to debug when something goes wrong
- Forgetting that many Pandas operations return a new DataFrame rather than modifying in place, unless `inplace=True` is used (and even then, this is often discouraged in favor of reassignment)
- Not converting date columns to proper datetime type, breaking date-based filtering and sorting

## Best Practices

- Inspect data with `.head()`, `.info()`, and `.describe()` immediately after loading, before doing anything else
- Break complex transformations into clear, checkable steps rather than one long chained expression
- Explicitly convert data types (especially dates) early in the workflow

## Interview Perspective

### Common Interview Questions
- How would you merge two DataFrames on a shared key?
- How would you find and handle missing values in a DataFrame?
- What's the difference between `.apply()` and a vectorized operation?

### What Interviewers Usually Test
Practical fluency — often through a live coding exercise involving cleaning or summarizing a small dataset.

### Common Traps
Using `.apply()` with a custom function when a simpler, faster vectorized operation would achieve the same result.

## Practical Application

Pandas is typically where most of an analyst's Python-based work happens — cleaning, transforming, and summarizing data before visualization or export.

## Revision Summary

- `Series` is a single column; `DataFrame` is a full table made of Series.
- `merge` is Pandas' equivalent of a SQL join; `concat` is the equivalent of a union.
- Always inspect a newly loaded DataFrame with `.head()`, `.info()`, `.describe()` before proceeding.
- Convert date columns to proper datetime type explicitly — it's a common source of subtle bugs otherwise.
