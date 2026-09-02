# Data Analysis Expressions (DAX)

> The formula language behind Power BI's measures and calculated columns, and the filter/row context that governs how they behave.

## Overview

DAX (Data Analysis Expressions) is the formula language used in Power BI to create measures and calculated columns. While its syntax resembles Excel formulas, DAX behaves very differently — its results depend on the surrounding filter context, which is often the hardest concept for newcomers to grasp.

## Why It Matters for a Data Analyst

Nearly every meaningful number in a Power BI report — totals, ratios, year-over-year comparisons — is powered by a DAX measure. Understanding DAX, especially filter context, is what separates a functional report from a broken one.

## Core Concepts

- **Measure** — a calculation evaluated dynamically based on the current filter context (e.g. total sales, which recalculates depending on which slicers are applied)
- **Calculated column** — a value calculated once per row, at data refresh time, and stored in the model like a regular column
- **Row context** — the "current row" a calculation is aware of, relevant to calculated columns and certain functions
- **Filter context** — the combination of filters (slicers, visual selections, page filters) currently applied when a measure is evaluated

## Measure vs Calculated Column

| Aspect | Measure | Calculated Column |
|---|---|---|
| Evaluated | Dynamically, based on filter context | Once, at data refresh |
| Storage | Not stored — calculated on demand | Stored as part of the table |
| Responds to filters/slicers | Yes | No (fixed value per row) |
| Best for | Aggregations, ratios, dynamic calculations | Row-level categorization or flags |

## Core DAX Functions

| Function | Purpose |
|---|---|
| `SUM` | Adds a column's values |
| `SUMX` | Adds a row-by-row calculated expression across a table |
| `COUNT` / `DISTINCTCOUNT` | Counts rows or unique values |
| `CALCULATE` | Modifies the filter context for an expression |
| `FILTER` | Returns a filtered table, often used inside `CALCULATE` |
| `DIVIDE` | Safely divides two values, handling division by zero |
| `IF` / `SWITCH` | Conditional logic |
| `ALL` | Removes filters from a table or column |
| `REMOVEFILTERS` | Explicitly removes filters (a clearer alternative to `ALL` in this role) |
| `VALUES` | Returns the distinct values currently visible in a column, given filter context |
| `RELATED` | Retrieves a value from a related table, based on the model's relationships |

## Understanding Filter Context and Row Context

**Filter context** is the set of filters currently affecting a calculation — from slicers, visual-level filters, or page filters. A measure like `SUM(Sales[Amount])` recalculates automatically depending on what's currently filtered.

**Row context** exists when a calculation is evaluated one row at a time — this happens naturally inside a calculated column, and can be introduced into a measure using iterator functions like `SUMX`.

`CALCULATE` is central to DAX because it lets an analyst modify the filter context explicitly — for example, calculating "sales in the same period last year" by overriding the date filter that would otherwise apply.

## Examples

A basic measure:
```DAX
Total Sales = SUM(Sales[SalesAmount])
```

Using `CALCULATE` to modify filter context:
```DAX
Prior Year Sales = CALCULATE(
    SUM(Sales[SalesAmount]),
    SAMEPERIODLASTYEAR(DateTable[Date])
)
```

Safe division with `DIVIDE`:
```DAX
Profit Margin = DIVIDE(SUM(Sales[Profit]), SUM(Sales[SalesAmount]), 0)
```

## Time Intelligence Fundamentals

DAX includes built-in functions for common time-based comparisons, such as `SAMEPERIODLASTYEAR`, `DATEADD`, and `TOTALYTD` — these depend on having a properly marked date table in the model.

## Real-World Data Analyst Use Cases

- Building a "Total Sales" measure that automatically adjusts based on whatever region/date filters a stakeholder applies
- Calculating year-over-year growth using time intelligence functions
- Using `DIVIDE` instead of `/` to avoid errors when a denominator could be zero

## Common Mistakes

- Using a calculated column when a measure was actually needed, resulting in a value that doesn't respond to filters
- Dividing directly with `/` instead of `DIVIDE`, causing errors when the denominator is zero
- Misunderstanding how `CALCULATE` modifies filter context, leading to unexpected results in more advanced measures

## Best Practices

- Default to measures over calculated columns unless a fixed, per-row value is specifically needed
- Always use `DIVIDE` instead of `/` for any calculation where the denominator could be zero
- Build and test complex DAX measures incrementally, checking intermediate results along the way

## Interview Perspective

### Common Interview Questions
- What's the difference between a measure and a calculated column?
- Explain filter context and row context in DAX.
- How does `CALCULATE` work, and why is it central to DAX?

### What Interviewers Usually Test
Whether the candidate genuinely understands filter context — this is the concept that most clearly separates surface-level DAX knowledge from real fluency.

### Common Traps
Describing DAX as "just like Excel formulas" — the filter context behavior has no real Excel equivalent and is frequently misunderstood by candidates who've only worked with Excel.

## Practical Application

DAX measures are what make Power BI reports genuinely interactive — the same measure recalculates correctly no matter how a stakeholder filters or slices the report.

## Revision Summary

- Measures recalculate dynamically based on filter context; calculated columns are fixed per row at refresh time.
- `CALCULATE` modifies filter context and underlies most advanced DAX calculations.
- Always use `DIVIDE` instead of `/` to safely handle division by zero.
- Filter context is the concept that most distinguishes real DAX fluency from surface-level familiarity.
