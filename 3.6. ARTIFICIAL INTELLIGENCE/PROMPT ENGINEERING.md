# Prompt Engineering

> Structuring requests to AI tools deliberately to get more accurate, useful, and specific output.

## Overview

Prompt engineering is the practice of crafting inputs to AI tools in a way that produces better, more reliable output. For a Data Analyst, this isn't about deep technical AI knowledge — it's about applying the same clarity and specificity to an AI request that you'd apply to any other well-scoped analytical question.

## Why It Matters for a Data Analyst

Vague requests to an AI tool tend to produce vague, generic, or misaligned output. A well-structured prompt — with clear context, objective, and constraints — significantly improves the usefulness of the result, saving time on the review and correction that follows.

## Core Concepts

- **Context** — background information the AI needs to give a relevant answer (the dataset, the business situation, prior constraints)
- **Role** — framing the AI's perspective (e.g. "act as a data analyst reviewing this query for errors")
- **Objective** — a clear statement of what output is actually needed
- **Constraints** — specific limitations or requirements the output must satisfy (length, format, tools/technology to use)
- **Examples** — sample input/output pairs that clarify exactly what's expected
- **Output format** — specifying the structure of the desired response (a table, a list, a specific code style)
- **Iteration** — refining a prompt based on the AI's initial output, rather than expecting perfection on the first attempt
- **Verification** — checking the AI's output against the original objective and known facts

## Structured Prompt Example

A vague prompt:
> "Write me a SQL query for sales."

A well-structured prompt:
> "Act as a SQL expert. I have a table called `orders` with columns `order_id`, `customer_id`, `order_date`, `amount`, and `region`. Write a query that returns total sales by region for the year 2025, sorted from highest to lowest. Use standard ANSI SQL syntax."

The second version gives context (table structure), a clear objective (total sales by region), a specific constraint (year 2025, sorted), and a format expectation (standard SQL) — producing a far more directly usable result.

## Data Analyst Prompt Examples

**Data cleaning brainstorm:**
> "I have a customer dataset with fields for name, email, region, and signup_date. What are common data quality issues I should check for in a dataset like this before analysis?"

**Summarization:**
> "Summarize the following report into 3 bullet points suitable for a non-technical executive audience: [report text]"

**Code explanation:**
> "Explain what this Pandas code does, step by step, as if to someone new to Pandas: [code]"

**DAX starting point:**
> "Write a DAX measure that calculates year-over-year revenue growth percentage, given a `Sales` table with columns `Date` and `Amount`, and an existing date table named `Calendar`."

## Real-World Data Analyst Use Cases

- Getting a more accurate first-draft SQL query by clearly specifying table structure and desired output
- Getting a more useful data cleaning checklist by describing the specific dataset rather than asking generically
- Iterating on a prompt after an initial AI response misses an important constraint, refining rather than starting over

## Common Mistakes

- Providing too little context, leading to generic or misaligned output
- Not specifying the desired output format, leading to a response that needs significant reformatting
- Accepting the first AI response without iterating, even when it's clearly missing something specified in the original request

## Best Practices

- Include relevant context (data structure, business situation) rather than assuming the AI already knows it
- State the objective and any hard constraints explicitly and early in the prompt
- Iterate — treat the first response as a starting point to refine, not a final answer

## Interview Perspective

### Common Interview Questions
- How would you structure a prompt to get a more accurate SQL query from an AI tool?
- What context would you include when asking an AI tool to help clean a dataset?
- How do you verify that AI-generated output actually meets your original requirements?

### What Interviewers Usually Test
Whether the candidate approaches AI tool usage with the same structured thinking they'd apply to any well-scoped analytical request — not more, not less.

### Common Traps
Describing prompt engineering as a mysterious or purely technical skill, when it's fundamentally about clear communication — context, objective, and constraints.

## Practical Application

Effective prompting is a practical multiplier on everything covered in AI TOOLS USAGE — the same AI tool produces meaningfully better output when given a well-structured request.

## Revision Summary

- A good prompt includes context, a clear objective, constraints, and often a desired output format.
- Vague prompts tend to produce vague, generic output — specificity significantly improves usefulness.
- Prompt engineering is fundamentally clear communication, not a specialized technical skill.
- Iterate on prompts based on initial output rather than expecting a perfect result immediately.
