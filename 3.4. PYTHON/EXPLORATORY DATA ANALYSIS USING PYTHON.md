# Exploratory Data Analysis Using Python

> A complete methodology for moving from a raw dataset to clear insights, using Pandas and Matplotlib together.

## Overview

Exploratory Data Analysis (EDA) in Python follows the same underlying goals as SQL-based EDA — understanding a dataset before drawing conclusions from it — but takes advantage of Python's flexibility for deeper, more iterative exploration and visualization.

## Why It Matters for a Data Analyst

Python's combination of Pandas (manipulation) and Matplotlib (visualization) makes it especially well suited to iterative, exploratory work — quickly testing an idea, visualizing the result, and refining the next question based on what's found.

## A Complete Python EDA Methodology

### 1. Load and Inspect
```python
df = pd.read_csv("orders.csv")
df.head()
df.info()
df.describe()
df.shape
```

### 2. Check Data Quality
```python
df.isnull().sum()
df.duplicated().sum()
df.dtypes
```

### 3. Clean the Data
Handle missing values, duplicates, and incorrect types identified above.

### 4. Understand Distributions
```python
df["order_amount"].describe()
df["order_amount"].hist(bins=30)
```

### 5. Analyze Categorical Variables
```python
df["region"].value_counts()
df["region"].value_counts().plot(kind="bar")
```

### 6. Analyze Numerical Variables
```python
df[["order_amount", "quantity"]].describe()
df.boxplot(column="order_amount")
```

### 7. Analyze Relationships
```python
df.plot.scatter(x="marketing_spend", y="revenue")
df.corr(numeric_only=True)
```

### 8. Analyze Time Trends
```python
df["order_date"] = pd.to_datetime(df["order_date"])
monthly = df.groupby(df["order_date"].dt.to_period("M"))["amount"].sum()
monthly.plot(kind="line")
```

### 9. Identify Anomalies
```python
df[df["order_amount"] < 0]                     # invalid negative amounts
df[df["order_amount"] > df["order_amount"].quantile(0.99)]  # extreme outliers
```

### 10. Segment and Compare
```python
df.groupby("customer_segment")["order_amount"].mean()
```

### 11. Summarize Findings
Document what was learned, what data quality issues were found and how they were handled, and what specific business questions the analysis suggests exploring next.

## Real-World Data Analyst Use Cases

- Getting oriented on a new dataset before deciding what analysis to pursue
- Identifying data quality issues (missing dates, negative amounts) before they distort downstream analysis
- Discovering an unexpected pattern (a seasonal spike, an outlier segment) that becomes the actual focus of the analysis

## Common Mistakes

- Treating EDA as a single pass rather than an iterative process — new findings often prompt new questions
- Not visualizing distributions, relying only on summary statistics that can hide important patterns (e.g. bimodal distributions)
- Skipping outlier/anomaly checks and letting extreme values silently distort later aggregate calculations

## Best Practices

- Combine numeric summaries (`.describe()`) with visualizations (`.hist()`, `.boxplot()`) — each reveals things the other misses
- Document findings as you go, not just at the end
- Let EDA findings genuinely shape the direction of the deeper analysis that follows

## Interview Perspective

### Common Interview Questions
- Walk me through your process for exploring a new dataset in Python.
- How would you identify outliers in a numeric column?
- What visualizations would you use to understand a dataset's structure?

### What Interviewers Usually Test
Whether the candidate has a genuine, repeatable process, and can explain *why* each step matters, not just *what* code to run.

### Common Traps
Relying solely on `.describe()` without visualizing — summary statistics alone can mask important patterns like bimodal distributions or clustered outliers.

## Practical Application

Python-based EDA is often where an analyst discovers the actual interesting question in a dataset, rather than the one originally assumed — this exploratory, iterative quality is Python's particular strength over more rigid tools.

## Revision Summary

- Python EDA combines Pandas (inspection, cleaning, aggregation) with Matplotlib (visualization) iteratively.
- The process: load/inspect → check quality → clean → distributions → categorical/numerical analysis → relationships → time trends → anomalies → segmentation → summarize.
- Numeric summaries and visualizations should be used together — each reveals patterns the other can miss.
- EDA is iterative; findings should shape the next question, not just confirm assumptions.
