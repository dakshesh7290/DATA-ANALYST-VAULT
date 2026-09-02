# Correlation vs Causation

> Why two variables moving together doesn't mean one causes the other — one of the most important distinctions in analytics.

## Overview

Correlation measures how strongly two variables move together. Causation means one variable actually influences the other. Confusing the two is one of the most common — and most costly — mistakes in data analysis, since it can lead to acting on a relationship that doesn't actually work the way it appears to.

## Why It Matters for a Data Analyst

Business decisions based on a mistaken causal claim can waste resources or actively hurt the business. Recognizing when a correlation might not indicate causation is a core analytical judgment skill, not just a statistical technicality.

## Core Concepts

- **Correlation** — a statistical measure of how two variables move together, typically ranging from -1 (perfectly inverse) to +1 (perfectly aligned)
- **Causation** — a relationship where a change in one variable directly produces a change in another
- **Confounding variable** — a third, often hidden variable that influences both variables being studied, creating an apparent (but non-causal) relationship
- **Reverse causation** — when the assumed direction of causality is actually backwards

## Why Correlation Isn't Enough

Two variables can be correlated for several reasons that have nothing to do with one causing the other:

1. **Coincidence** — with enough variables, some will correlate purely by chance
2. **Confounding variable** — a third factor drives both (e.g. ice cream sales and drowning incidents both rise in summer — heat is the confounder, not a causal link between the two)
3. **Reverse causation** — the assumed cause is actually the effect (e.g. assuming a customer's high spending causes loyalty program membership, when membership may actually have driven the higher spending)
4. **Genuine causation** — sometimes, the correlation does reflect real causation, but this requires additional evidence beyond correlation alone to establish

## A Practical Business Example

**Observation:** Stores that run more promotions have higher sales.

**Possible explanations:**
- Promotions cause higher sales (causation)
- Higher-traffic stores just happen to also run more promotions (confounding: store traffic drives both)
- Stores anticipating already-strong sales schedule more promotions to capitalize on the trend (reverse causation)

Correlation alone cannot distinguish between these — determining the real explanation typically requires controlled experimentation (see [[A-B TESTING]]) or careful analysis controlling for confounding variables.

## Establishing Causation

Correlation combined with additional evidence can support (though rarely fully prove) a causal claim:
- **Controlled experiments** (A/B tests) — randomization helps rule out confounding variables
- **Temporal ordering** — the cause must precede the effect
- **Plausible mechanism** — a reasonable explanation for *why* one would cause the other
- **Consistency across contexts** — the relationship holding across different samples or conditions strengthens the case

## Real-World Data Analyst Use Cases

- Cautioning a stakeholder against assuming a marketing channel "caused" a sales increase without a controlled test
- Identifying a plausible confounding variable before recommending a causal interpretation of a correlation
- Recommending an A/B test specifically because correlational analysis alone couldn't answer a causal question

## Common Mistakes

- Presenting a correlation as if it were established causation, especially in a stakeholder-facing report
- Failing to consider or mention plausible confounding variables when reporting a correlation
- Assuming causal direction without evidence, when reverse causation is equally or more plausible

## Best Practices

- Explicitly flag when a finding is correlational, not causal, especially in reports for non-technical audiences
- Actively look for plausible confounding variables before suggesting a causal explanation
- Recommend a controlled experiment when a causal answer is genuinely needed and correlational evidence alone isn't sufficient

## Interview Perspective

### Common Interview Questions
- Give an example of two variables that are correlated but not causally related.
- How would you determine if a correlation reflects a real causal relationship?
- Why might reverse causation be a plausible explanation for an observed correlation?

### What Interviewers Usually Test
Whether the candidate reflexively questions causal claims rather than accepting a correlation at face value — this is considered a core analytical instinct.

### Common Traps
Failing to propose a plausible confounding variable when asked to critique a correlational claim — interviewers often expect a concrete example, not just the abstract principle.

## Practical Application

This distinction comes up constantly in stakeholder communication — analysts are often the ones responsible for tempering an overconfident causal claim a stakeholder wants to make from correlational data.

## Revision Summary

- Correlation measures how variables move together; causation means one actually influences the other.
- Confounding variables and reverse causation are the two most common reasons a correlation isn't causal.
- Controlled experiments (A/B tests) are the strongest tool for establishing causation.
- Always flag correlational findings as correlational, especially in stakeholder communication.
