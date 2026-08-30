# Matplotlib

> Python's foundational charting library, used to turn Pandas data into visual output for exploration and reporting.

## Overview

Matplotlib is the most widely used Python library for creating static charts. While newer libraries offer more polished defaults, Matplotlib remains foundational — many other visualization libraries (including Pandas' own `.plot()` method) are built on top of it, and it offers fine-grained control when needed.

## Why It Matters for a Data Analyst

Visualizing data during EDA is often faster and more revealing than scanning numbers in a table. Matplotlib lets an analyst quickly plot data directly from Pandas without switching tools.

## Core Concepts

- **Figure** — the overall canvas/container for a plot
- **Axes** — the actual plotting area within a figure (a figure can contain multiple axes/subplots)
- **Plot types** — different chart types suited to different kinds of data
- **Labels, titles, legends** — elements that make a chart interpretable on its own

## Basic Charts

Line chart (good for trends over time):
```python
import matplotlib.pyplot as plt
plt.plot(df["month"], df["sales"])
plt.title("Monthly Sales Trend")
plt.xlabel("Month")
plt.ylabel("Sales")
plt.show()
```

Bar chart (good for comparing categories):
```python
plt.bar(df["region"], df["total_sales"])
```

Histogram (good for understanding a distribution):
```python
plt.hist(df["order_amount"], bins=20)
```

Scatter plot (good for relationships between two numeric variables):
```python
plt.scatter(df["marketing_spend"], df["revenue"])
```

Box plot (good for spotting outliers and spread):
```python
plt.boxplot(df["order_amount"])
```

## Labels, Titles, and Legends

```python
plt.plot(df["month"], df["region_a_sales"], label="Region A")
plt.plot(df["month"], df["region_b_sales"], label="Region B")
plt.legend()
plt.title("Sales by Region")
plt.xlabel("Month")
plt.ylabel("Sales")
```

## Subplots

```python
fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].plot(df["month"], df["sales"])
axes[1].hist(df["order_amount"])
```

## Choosing the Appropriate Chart

| Data/Question | Recommended Chart |
|---|---|
| Trend over time | Line chart |
| Comparing categories | Bar chart |
| Understanding a distribution | Histogram or box plot |
| Relationship between two numeric variables | Scatter plot |
| Spotting outliers | Box plot |

## Real-World Data Analyst Use Cases

- Quickly plotting a sales trend during EDA to spot seasonality
- Visualizing the distribution of order amounts to identify outliers before deeper analysis
- Building a comparison chart across regions or categories for a report

## Common Mistakes

- Using a chart type that doesn't fit the data (e.g. a pie chart for a trend over time, or a line chart for unordered categories)
- Forgetting axis labels and titles, producing a chart that isn't interpretable without additional explanation
- Plotting too many categories/lines on one chart, making it unreadable

## Best Practices

- Always label axes and add a title — a chart should be understandable without needing the surrounding code
- Choose chart type based on the question being asked, not habit
- Keep charts focused — split into subplots or multiple charts rather than overloading one

## Interview Perspective

### Common Interview Questions
- What chart would you use to show a trend over time versus a comparison between categories?
- How would you visualize the distribution of a numeric column?
- What's the difference between a histogram and a bar chart?

### What Interviewers Usually Test
Judgment about matching chart type to the underlying question, not memorized Matplotlib syntax.

### Common Traps
Confusing histograms (showing distribution of one numeric variable) with bar charts (comparing distinct categories) — they look similar but serve different purposes.

## Practical Application

Matplotlib is most heavily used during EDA, where quick, iterative visualization helps an analyst understand data before committing to a specific analysis direction.

## Revision Summary

- Matplotlib is Python's foundational static charting library, underlying many other visualization tools.
- Match chart type to the question: line for trends, bar for category comparison, histogram/box plot for distributions, scatter for relationships.
- Always label axes and titles so a chart is interpretable on its own.
- Histograms and bar charts look similar but serve fundamentally different purposes.
