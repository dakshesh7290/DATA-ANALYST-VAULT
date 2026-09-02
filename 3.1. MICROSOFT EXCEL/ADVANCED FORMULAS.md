# Advanced Formulas

> Formulas that go beyond basic aggregation — multi-condition logic, text manipulation, and nested functions used in real analyst work.

## Overview

Once the basics (`SUM`, `IF`, `COUNTIF`) are second nature, most real analyst work requires combining multiple conditions, handling text data, and nesting functions together to answer more specific questions. This note covers the formulas that come up most often once analysis moves past the simplest cases.

## Why It Matters for a Data Analyst

Business questions are rarely single-condition. "What were sales for the East region in Q3, excluding returns" requires combining several conditions — this is where `SUMIFS`/`COUNTIFS` and nested logic become essential.

## Core Concepts

- **Multi-condition aggregation** — `SUMIFS`, `COUNTIFS`, `AVERAGEIFS` extend the single-condition versions to handle multiple criteria at once
- **Nested `IF`** — chaining conditions together, now often replaced by `IFS` or `SWITCH` for readability
- **Text functions** — `LEFT`, `RIGHT`, `MID`, `TRIM`, `SUBSTITUTE`, `TEXTJOIN` for cleaning and combining text
- **Array-aware formulas** — functions like `SUMPRODUCT` that operate across multiple ranges simultaneously

## How It Works

`SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)` evaluates all conditions together (an implicit AND), summing only the rows where every condition is true.

## Examples

Sum sales for the East region in Q3, excluding returned orders:
```
=SUMIFS(SalesAmount, Region, "East", Quarter, "Q3", Status, "<>Returned")
```

Using `IFS` instead of nested `IF` for a tiered discount:
```
=IFS(Amount>1000, "Gold", Amount>500, "Silver", TRUE, "Standard")
```

Cleaning inconsistent text before analysis:
```
=TRIM(SUBSTITUTE(A2, "  ", " "))
```

## Real-World Data Analyst Use Cases

- Calculating regional sales totals broken down by multiple filters simultaneously
- Categorizing records into tiers or segments based on several thresholds
- Cleaning inconsistent text fields (extra spaces, inconsistent casing) before joining or comparing data

## Common Mistakes

- Using nested `IF` statements that become unreadable past 3–4 levels, instead of `IFS`, `SWITCH`, or a lookup table
- Forgetting that `SUMIFS` criteria are combined with AND, not OR — a common source of unexpectedly low totals
- Not trimming whitespace before comparing text values, causing matches to silently fail

## Best Practices

- Prefer `IFS`/`SWITCH` over deeply nested `IF` for readability
- Break complex formulas into helper columns when a single formula becomes hard to audit
- Use `SUMPRODUCT` when conditions need OR logic across criteria that `SUMIFS` can't express directly

## Interview Perspective

### Common Interview Questions
- How would you sum values matching two different conditions?
- What's the difference between `SUMIFS` and `SUMPRODUCT`?
- How would you clean a text column with inconsistent spacing before comparing values?

### What Interviewers Usually Test
Whether the candidate can translate a multi-condition business question directly into a formula, not just recite syntax.

### Common Traps
Assuming `SUMIFS` supports OR logic between criteria on the same range — it doesn't, without additional techniques like adding multiple `SUMIFS` calls together.

## Practical Application

Advanced formulas are what separates "can use Excel" from "can actually answer real business questions in Excel" — they show up constantly in ad hoc analysis and report-building.

## Revision Summary

- `SUMIFS`/`COUNTIFS`/`AVERAGEIFS` combine multiple conditions with AND logic.
- `IFS`/`SWITCH` are more readable alternatives to deeply nested `IF`.
- Text functions (`TRIM`, `SUBSTITUTE`) are essential for cleaning data before comparison or joining.
- `SUMPRODUCT` handles cases `SUMIFS` can't, including OR-style logic.
