# A/B Testing

> Running controlled experiments to determine whether a change genuinely causes an improvement, rather than relying on correlation alone.

## Overview

A/B testing is a controlled experiment comparing two versions (A and B) of something — a webpage, an email, a pricing strategy — to determine which performs better on a defined metric. Because participants are randomly assigned to each version, A/B testing can establish causation in a way plain correlational analysis cannot.

## Why It Matters for a Data Analyst

A/B testing is one of the most direct ways an analyst can move from "we think this change helps" to "we have evidence this change causes an improvement" — a much stronger basis for a business decision.

## Core Concepts

- **Control** — the existing, unchanged version (A)
- **Treatment** — the new version being tested (B)
- **Randomization** — randomly assigning participants to control or treatment, which is what allows the test to support a causal conclusion
- **Sample size** — the number of participants needed for the test to reliably detect a meaningful effect
- **Metric** — the specific outcome being measured (conversion rate, click-through rate, revenue per user)
- **Statistical significance** — whether the observed difference is unlikely to be due to chance alone 
- **Practical significance** — whether the observed difference is large enough to actually matter for the business

## How It Works

1. Define the metric and the hypothesis (e.g. "the new checkout page increases conversion rate")
2. Calculate the required sample size in advance, based on the minimum effect size worth detecting
3. Randomly assign users to control (A) or treatment (B)
4. Run the test for a predetermined duration
5. Analyze results using an appropriate hypothesis test
6. Decide based on both statistical and practical significance

## Sample Size

Running a test with too small a sample risks failing to detect a real effect (low statistical power) or reaching an unreliable conclusion. Sample size should generally be calculated in advance based on the smallest effect size considered meaningful, not decided arbitrarily.

## Experiment Duration

A test needs to run long enough to capture natural variation (e.g. weekday vs weekend behavior) and to reach the required sample size — stopping early because early results look favorable is a common and serious mistake (see below).

## Common Pitfalls

- **Peeking and stopping early** — checking results repeatedly and stopping as soon as they look significant inflates the false positive rate substantially; the test should run for its predetermined duration or sample size
- **Underpowered tests** — running a test with too small a sample to reliably detect the effect size of interest
- **Multiple comparisons** — testing many metrics simultaneously increases the chance that at least one shows a "significant" result purely by chance
- **Novelty effects** — a new version may perform differently simply because it's new, not because it's genuinely better, an effect that can fade over time
- **Not accounting for external events** — a holiday, promotion, or unrelated site change occurring during the test can distort results

## Real-World Data Analyst Use Cases

- Testing whether a redesigned product page increases the add-to-cart rate
- Testing two different email subject lines for open rate
- Testing a new pricing structure's effect on conversion, with revenue as a secondary metric

## Common Mistakes

- Ending a test as soon as it reaches statistical significance, rather than the pre-planned duration or sample size
- Declaring a "winner" based on statistical significance alone, without considering whether the effect size is practically meaningful
- Running a test without properly randomizing participants, undermining its ability to support causal conclusions

## Best Practices

- Determine sample size and test duration before starting, and stick to the plan
- Report both statistical significance and effect size/practical significance
- Watch for and control for external events that could bias results during the test window

## Interview Perspective

### Common Interview Questions
- Why is randomization important in an A/B test?
- What's wrong with stopping a test as soon as it looks statistically significant?
- What's the difference between statistical and practical significance in the context of an A/B test?

### What Interviewers Usually Test
Whether the candidate understands the discipline required to run a valid test — not just the basic mechanics of comparing two numbers.

### Common Traps
Suggesting a test be stopped early once it "looks good" — this is one of the most common real-world A/B testing mistakes and a frequent interview trap.

## Practical Application

A/B testing directly applies [[HYPOTHESIS TESTING]] concepts to a business context, and is often the strongest available tool for establishing that a change actually causes an improvement, addressing the limitations discussed in [[CORRELATION VS CAUSATION]].

## Revision Summary

- A/B testing uses randomization to support causal conclusions, unlike plain correlational analysis.
- Sample size and test duration should be planned in advance, not adjusted based on early results.
- Statistical significance and practical significance are both necessary — a statistically significant but tiny effect may not matter for the business.
- Common pitfalls include peeking/stopping early, underpowered tests, and uncontrolled external events during the test window.
