# Statistics for EDA

> How statistical thinking sharpens exploratory data analysis, turning simple observation into rigorous, well-supported insight.

## Overview

Exploratory Data Analysis benefits significantly from statistical thinking layered on top of basic summarization — knowing not just *what* a pattern looks like, but how confident to be that it's real, and how to describe it precisely.

## Why It Matters for a Data Analyst

Without statistical grounding, EDA can produce misleading conclusions — a "difference" between two groups that's just random variation, or an average that hides an important skew. Statistical thinking during EDA catches these issues before they reach a stakeholder.

## How Descriptive Statistics Improve EDA

Using mean, median, standard deviation, and percentiles together (rather than relying on a single number) gives a fuller, more accurate picture of a variable during exploration.

## How Distribution Awareness Improves EDA

Recognizing what distribution a variable roughly follows informs which further statistical techniques are appropriate, and helps an analyst spot when data doesn't match an expected pattern — itself often a useful finding.

## How Correlation Analysis Improves EDA

Calculating correlation between variables during EDA can surface relationships worth investigating further — but should always be paired with the discipline covered in CORRELATION VS CAUSATION, since a correlation found during EDA is not evidence of a causal relationship on its own.

## How Hypothesis Testing Improves EDA

When EDA surfaces an apparent difference between two groups (e.g. average order value between two customer segments), a quick hypothesis test can clarify whether that difference is likely to be real or could plausibly be due to random variation in the sample.

## A Statistically-Grounded EDA Checklist

- Report multiple descriptive statistics (mean, median, spread), not just one
- Visualize distributions rather than relying on summary numbers alone
- Note whether a variable appears to follow a familiar distribution, or looks unusual in some way
- Treat any observed correlation as a hypothesis to investigate further, not a conclusion
- Use a quick hypothesis test to sanity-check whether an apparent group difference could plausibly be random noise
- Be explicit about sample size — small samples deserve more caution in interpretation

## Real-World Data Analyst Use Cases

- Noticing during EDA that two regions have different average order values, then running a quick test to check whether the difference is statistically meaningful before reporting it as a finding
- Recognizing a skewed distribution during EDA and choosing median over mean when summarizing it for stakeholders
- Flagging a correlation discovered during EDA as something requiring further investigation, rather than presenting it as an established relationship

## Common Mistakes

- Treating any visually apparent difference or pattern found during EDA as automatically meaningful, without any statistical check
- Reporting findings from a very small sample with the same confidence as findings from a large one
- Presenting a correlation discovered during EDA as if it were already understood to be causal

## Best Practices

- Apply basic statistical rigor even during "informal" exploratory work — it's cheap to do and prevents costly mistakes later
- Distinguish clearly, in both thinking and communication, between "this looks like a pattern" and "this is a statistically supported pattern"
- Flag findings based on small samples as preliminary, not conclusive

## Interview Perspective

### Common Interview Questions
- How would you know if a difference you noticed during EDA is a real effect or just noise?
- Why might you use a hypothesis test even during early, informal exploration of a dataset?
- What statistical caution would you apply before reporting a pattern found during EDA?

### What Interviewers Usually Test
Whether the candidate treats EDA as a rigorous process informed by statistical thinking, rather than purely visual or intuitive pattern-spotting.

### Common Traps
Describing an EDA finding with full confidence ("Region A clearly performs better") without acknowledging that a statistical check would be needed to confirm the difference isn't just random variation.

## Practical Application

This topic ties together the entire Statistics section with the WORKFLOW note's exploration and analysis stages — statistical thinking is what elevates EDA from casual observation to defensible insight.

## Revision Summary

- Statistical thinking during EDA distinguishes real patterns from random noise before they're reported as findings.
- Use multiple descriptive statistics and visualizations together, not a single summary number.
- Treat correlations found during EDA as hypotheses to test further, not conclusions.
- Small-sample findings deserve more caution and should be flagged as preliminary.
