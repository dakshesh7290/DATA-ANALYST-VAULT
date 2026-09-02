# Hypothesis Testing

> A formal framework for deciding whether an observed pattern in data reflects a real effect or could plausibly be due to chance.

## Overview

Hypothesis testing provides a structured way to answer questions like "is this difference real, or could it just be random variation?" It's the statistical backbone behind A/B testing and many other business experiments.

## Why It Matters for a Data Analyst

Without hypothesis testing, it's easy to mistake random noise for a meaningful pattern — declaring a marketing campaign "worked" based on a small, possibly coincidental difference. Hypothesis testing provides discipline against this mistake.

## Core Concepts

- **Null hypothesis (H₀)** — the default assumption that there is no effect or no difference
- **Alternative hypothesis (H₁)** — the claim being tested for, typically that there *is* an effect or difference
- **Significance level (α)** — the threshold probability (commonly 0.05) below which a result is considered statistically significant
- **p-value** — the probability of observing a result at least as extreme as the actual result, assuming the null hypothesis is true
- **Test statistic** — a calculated value summarizing how far the observed data is from what the null hypothesis would predict
- **Type I error** — incorrectly rejecting a true null hypothesis (a "false positive")
- **Type II error** — incorrectly failing to reject a false null hypothesis (a "false negative")
- **Statistical power** — the probability of correctly detecting an effect when one truly exists
- **Confidence interval** — a range of plausible values for a parameter, associated with a confidence level (e.g. 95%)

## How It Works

1. State the null and alternative hypotheses
2. Choose a significance level (commonly 0.05)
3. Collect data and calculate a test statistic
4. Calculate the p-value based on that test statistic
5. Compare the p-value to the significance level: if the p-value is smaller, reject the null hypothesis

## Interpreting the p-value

A p-value of 0.03 means: *if the null hypothesis were actually true*, there would be a 3% chance of observing a result this extreme (or more extreme) purely by chance. A smaller p-value provides stronger evidence against the null hypothesis — it does **not** mean "3% chance the null hypothesis is true," a very common misinterpretation.

## Type I vs Type II Error

| | Null hypothesis is actually true | Null hypothesis is actually false |
|---|---|---|
| Test says "reject null" | Type I error (false positive) | Correct decision |
| Test says "fail to reject null" | Correct decision | Type II error (false negative) |

## Real-World Data Analyst Use Cases

- Testing whether a new website design leads to a statistically significant increase in conversion rate
- Testing whether average order value genuinely differs between two customer segments
- Determining whether a change in a KPI is a real shift or within normal random variation

## Common Mistakes

- Misinterpreting the p-value as "the probability the null hypothesis is true"
- Treating statistical significance as automatically meaning practical/business significance — a tiny, practically meaningless effect can still be statistically significant with a large enough sample
- Running many tests and reporting only the significant ones, inflating the real Type I error rate (sometimes called "p-hacking")

## Best Practices

- Define the hypothesis and significance level *before* looking at the data, not after
- Always consider both statistical significance and practical significance
- Be cautious about running many simultaneous tests without adjusting for the increased chance of false positives

## Interview Perspective

### Common Interview Questions
- What does a p-value actually mean?
- What's the difference between a Type I and Type II error?
- Why can a result be statistically significant but not practically important?

### What Interviewers Usually Test
Whether the candidate can correctly interpret a p-value — this is one of the most commonly tested and most commonly misunderstood concepts in analytics interviews.

### Common Traps
Saying a p-value of 0.03 means "97% probability the effect is real" — this is a direct misinterpretation of what a p-value represents.

## Practical Application

Hypothesis testing is the statistical foundation for A-B TESTING and any comparison between groups where the analyst needs to distinguish a real effect from random variation.

## Revision Summary

- A p-value measures how surprising the observed data would be if the null hypothesis were true — not the probability the null hypothesis is true.
- Type I error = false positive; Type II error = false negative.
- Statistical significance doesn't guarantee practical significance — always consider effect size and business relevance.
- Define hypotheses and significance level before analyzing the data, not after.
