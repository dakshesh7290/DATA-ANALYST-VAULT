# Distributions

> The common patterns data tends to follow, and why understanding a variable's distribution shapes how it should be analyzed.

## Overview

A probability distribution describes how the values of a variable are spread out — which values are common, which are rare, and what shape the overall pattern takes. Recognizing common distributions helps an analyst choose appropriate statistical techniques and correctly interpret data.

## Why It Matters for a Data Analyst

Many statistical techniques assume data follows a particular distribution (often the normal distribution). Recognizing when this assumption holds — or doesn't — affects which techniques are valid to use.

## Common Distributions

### Normal Distribution
A symmetric, bell-shaped distribution where most values cluster around the mean, with progressively fewer values further away in either direction. Many natural and business measurements approximate a normal distribution, especially when many small independent factors combine.

### Binomial Distribution
Describes the number of successes in a fixed number of independent yes/no trials, each with the same probability of success (e.g. number of customers who convert out of 100 visitors, if each visitor's conversion probability is the same and independent).

### Bernoulli Distribution
The simplest case of a binomial distribution — a single trial with two possible outcomes (success/failure), such as a single coin flip or whether one customer converts.

### Poisson Distribution
Describes the number of events occurring in a fixed interval of time or space, when events happen independently at a constant average rate (e.g. number of customer support tickets received per hour).

### Uniform Distribution
Every outcome within a range is equally likely (e.g. a random number generator producing any value between 0 and 1 with equal probability).

### Exponential Distribution
Describes the time between independent events occurring at a constant average rate — closely related to the Poisson distribution (e.g. time between customer arrivals).

## Sampling Distributions

A sampling distribution describes how a statistic (like the mean) would vary if repeatedly calculated from different random samples of the same population. This concept underlies confidence intervals and hypothesis testing.

## The Central Limit Theorem

The Central Limit Theorem states that, for a sufficiently large sample size, the sampling distribution of the mean approaches a normal distribution — *regardless of the shape of the original data's distribution*. This is one of the most important results in statistics, because it justifies using normal-distribution-based methods (like many hypothesis tests) even when the underlying data isn't normally distributed, as long as the sample size is large enough.

## Real-World Data Analyst Use Cases

- Recognizing that conversion rate data follows a binomial pattern, informing how confidence intervals around it should be calculated
- Using the Poisson distribution to model call center volume or support ticket arrivals
- Relying on the Central Limit Theorem to justify using normal-based statistical tests on a large sample, even when individual data points are skewed

## Common Mistakes

- Assuming data is normally distributed without checking, when techniques that assume normality are only valid under that assumption
- Confusing the distribution of individual data points with the distribution of a sample statistic (like the mean) — the Central Limit Theorem applies to the latter, not necessarily the former
- Misapplying the Poisson distribution to events that aren't actually independent or don't occur at a roughly constant rate

## Best Practices

- Visualize a variable's distribution (histogram) before assuming it's normal
- Understand which distribution reasonably models the process generating the data — this shapes which statistical tests are appropriate
- Rely on the Central Limit Theorem for large samples, but be more cautious about normality assumptions with small samples

## Interview Perspective

### Common Interview Questions
- What does the Central Limit Theorem state, and why does it matter?
- What's the difference between a Binomial and a Poisson distribution?
- How would you check whether a dataset is normally distributed?

### What Interviewers Usually Test
Whether the candidate understands the *practical implication* of the Central Limit Theorem — that it justifies certain statistical methods even on non-normal data, given enough sample size.

### Common Traps
Confusing "the data itself is normally distributed" with "the sampling distribution of the mean is approximately normal" — these are different claims, and only the latter is guaranteed by the Central Limit Theorem for large samples.

## Practical Application

Understanding distributions is foundational to correctly applying HYPOTHESIS TESTING and interpreting A-B TESTING results.

## Revision Summary

- Common distributions: Normal, Binomial, Bernoulli, Poisson, Uniform, Exponential — each models a different kind of process.
- The Central Limit Theorem states the sampling distribution of the mean approaches normal for large samples, regardless of the original data's distribution.
- Don't assume normality without checking — many statistical techniques depend on this assumption.
- Sampling distributions (how a statistic varies across samples) underlie confidence intervals and hypothesis testing.
