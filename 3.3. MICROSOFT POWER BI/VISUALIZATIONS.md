# Visualizations

> Choosing the right chart type for the data and question at hand, and applying visualization best practices.

## Overview

Power BI offers a wide range of visual types, but choosing the right one for a given question matters more than the range of options available. A well-chosen chart makes a pattern immediately obvious; a poorly chosen one obscures it, no matter how visually polished it looks.

## Why It Matters for a Data Analyst

Visualization is often the final translation step between analysis and stakeholder understanding — the choice of chart directly shapes whether a stakeholder correctly grasps what the data is showing.

## Core Concepts

- **Chart type** — the visual format used to represent data (bar, line, scatter, etc.)
- **Categorical vs continuous data** — the type of data being visualized often determines the appropriate chart type
- **Visual formatting** — colors, labels, axis scaling, and other presentation details that affect readability

## Choosing the Right Visual

| Question Type | Suggested Visual |
|---|---|
| Trend over time | Line chart |
| Comparison across categories | Bar or column chart |
| Part-to-whole breakdown | Stacked bar chart (use pie/donut sparingly, only for few categories) |
| Relationship between two numeric variables | Scatter plot |
| Single key metric | Card |
| Geographic distribution | Map |
| Distribution/spread of values | Histogram or box-and-whisker |

## Visualizations Best Practices

- Match the chart type to the question being asked, not to visual appeal alone
- Avoid pie charts for more than a handful of categories — bar charts are almost always clearer beyond 3–4 slices
- Use consistent color coding for the same category across all visuals in a report
- Label axes and values clearly rather than relying on the viewer to interpret an unlabeled chart
- Avoid unnecessary 3D effects or excessive formatting that don't add clarity

## Real-World Data Analyst Use Cases

- Choosing a line chart over a bar chart to show a trend over 12 months
- Using a scatter plot to explore the relationship between marketing spend and revenue
- Replacing an overcrowded pie chart with a bar chart for a category breakdown with 8+ segments

## Common Mistakes

- Using a pie chart for data with many categories, making it nearly impossible to compare slices accurately
- Choosing a visual for its visual appeal rather than its clarity for the specific question
- Failing to sort bar charts meaningfully (e.g. alphabetically instead of by value), making patterns harder to see

## Best Practices

- Default to simple, well-understood chart types (bar, line) unless a more specific visual genuinely fits better
- Sort categorical visuals by value, not alphabetically, unless there's a specific reason not to
- Keep formatting consistent across an entire report, not just within a single page

## Interview Perspective

### Common Interview Questions
- When would you use a line chart versus a bar chart?
- Why are pie charts often discouraged for categories with many segments?
- How would you visualize the relationship between two numeric variables?

### What Interviewers Usually Test
Whether the candidate can justify a visualization choice based on the underlying question, not just describe what a chart looks like.

### Common Traps
Defaulting to whichever chart type is visually impressive rather than the one that communicates most clearly.

## Practical Application

Visualization choices directly affect how quickly and accurately a stakeholder understands an analysis — this is often where technically sound analysis either lands clearly or gets lost in poor presentation.

## Revision Summary

- Chart choice should be driven by the question being answered, not visual appeal.
- Line charts suit trends over time; bar charts suit category comparisons; scatter plots suit relationships between numeric variables.
- Pie charts should be used sparingly, only for a small number of categories.
- Consistent formatting and sorting improve clarity across an entire report.
