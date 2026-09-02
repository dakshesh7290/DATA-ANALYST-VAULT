# Data Modeling

> Structuring related tables and relationships so Power BI can calculate and filter correctly across an entire report.

## Overview

A data model defines how tables in Power BI relate to each other. Getting this right is arguably the most important step in building a reliable report — a poorly structured model produces subtly wrong numbers even when every individual formula is correct.

## Why It Matters for a Data Analyst

Visuals and DAX measures depend entirely on the underlying model. If relationships are set up incorrectly, filters won't propagate the way they should, and totals can be silently wrong without any visible error.

## Core Concepts

- **Relationships** — connections between tables based on a shared column (similar to a SQL join, but persistent within the model)
- **Star schema** — a modeling pattern with one central fact table surrounded by related dimension tables
- **Fact table** — contains measurable, quantitative data (sales amounts, transaction counts)
- **Dimension table** — contains descriptive attributes used to filter and group facts (customer details, product details, dates)
- **Cardinality** — describes the relationship type between two tables (one-to-many, many-to-many, one-to-one)
- **Filter direction** — determines which tables a filter applied to one table can propagate to

## Star Schema

In a star schema, a central fact table (e.g. `Sales`) connects to multiple dimension tables (`Customers`, `Products`, `Dates`) via one-to-many relationships. This structure is generally preferred because it's simpler to understand, performs well, and works cleanly with DAX's filter propagation logic.

```
        Customers
            |
Products — Sales — Dates
```

## Fact Tables vs Dimension Tables

| Aspect | Fact Table | Dimension Table |
|---|---|---|
| Contains | Measurable/quantitative data | Descriptive attributes |
| Typical size | Large, many rows | Smaller, fewer rows |
| Example | Sales transactions | Customer list, product list, date table |
| Role in relationships | The "many" side | The "one" side |

## How It Works

Relationships in Power BI determine how filtering one table affects related tables. In a well-built star schema, filtering the `Products` dimension table (e.g. selecting one category) automatically filters the connected `Sales` fact table to match — this is filter propagation, and it's what makes interactive dashboards work correctly.

## Real-World Data Analyst Use Cases

- Building a model connecting a sales fact table to customer, product, and date dimension tables
- Diagnosing why a total in a report doesn't match expectations, by checking relationship cardinality and filter direction
- Adding a dedicated date table to enable proper time-intelligence calculations in DAX

## Common Mistakes

- Building a "flat" model with one giant table instead of a proper star schema, making the model harder to maintain and often slower
- Creating many-to-many relationships unintentionally, causing incorrect or ambiguous aggregation
- Missing or incorrectly configured relationships, leading to visuals that don't filter as expected

## Best Practices

- Favor a star schema over a single flat table whenever the data supports it
- Use a dedicated date table for any time-based analysis, rather than relying on date columns embedded in fact tables
- Regularly check relationship cardinality and filter direction when a number in a report looks unexpected

## Interview Perspective

### Common Interview Questions
- What is a star schema, and why is it preferred in Power BI?
- What's the difference between a fact table and a dimension table?
- How does filter direction affect how a report behaves?

### What Interviewers Usually Test
Whether the candidate understands data modeling as the foundation of reliable reporting, not an optional technical detail.

### Common Traps
Assuming a single flat table is simpler and therefore better — it often creates more problems than it solves as complexity grows.

## Practical Application

Data modeling decisions made early in a Power BI project shape everything downstream — DAX measures, visuals, and performance all depend on getting the model right first.

## Revision Summary

- A star schema (fact table + surrounding dimension tables) is the preferred modeling pattern in Power BI.
- Relationship cardinality and filter direction determine how filtering one table affects others.
- Use a dedicated date table for reliable time-intelligence calculations.
- A poor data model produces silently wrong numbers, even with correct formulas.
