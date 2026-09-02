# AI Tools Usage

> Practical ways Data Analysts use AI tools day to day, and the discipline required to use them responsibly.

## Overview

AI tools (LLM-based assistants, AI features built into BI tools, coding copilots) have become part of the standard analyst toolkit. This note covers practical, realistic ways analysts use these tools, along with the verification habits needed to use them safely.

## Why It Matters for a Data Analyst

Used well, AI tools can meaningfully speed up routine work — drafting queries, summarizing findings, catching errors. Used carelessly, they can introduce subtle errors into an analysis that look plausible but are wrong.

## Practical Use Cases

### SQL Assistance
Drafting a query from a plain-language description, or debugging an error message.

### Python Assistance
Getting a starting point for a Pandas transformation, or explaining an unfamiliar piece of code.

### Excel Formulas
Generating a complex nested formula from a description of the desired logic.

### DAX
Getting a starting DAX measure for a specific calculation, since DAX syntax can be unintuitive at first.

### Data Cleaning Ideas
Brainstorming what data quality checks might be relevant for an unfamiliar dataset.

### Documentation
Drafting clear documentation or comments explaining what a query or script does.

### Summarization
Condensing a long report or dataset's findings into a concise summary for stakeholders.

### Research
Quickly getting oriented on an unfamiliar business domain or technical concept before diving deeper.

### Brainstorming
Generating a first pass of possible explanations for an observed pattern, to investigate further.

### Data Interpretation
Getting a second perspective on what a set of results might mean, while still applying independent judgment.

### Presentation Preparation
Drafting talking points or a structure for presenting findings to stakeholders.

### Debugging
Getting help understanding why a piece of code or a formula isn't behaving as expected.

### Automation
Getting a starting script for a repetitive task, to then review and adapt.

## Validating AI Output

AI output should always be validated, not assumed correct — especially for:
- **Factual claims** — AI tools can produce plausible-sounding but incorrect information
- **Code correctness** — generated code should be tested, not assumed to work as intended
- **Data-specific logic** — AI tools don't inherently know the specific quirks of a company's data unless explicitly told, and may generate reasonable-looking but contextually wrong logic

## Real-World Data Analyst Use Cases

- Using an AI tool to draft a first version of a complex SQL query, then reviewing and testing it before use
- Getting a starting point for a DAX measure, then adjusting it based on knowledge of the specific data model
- Using AI to summarize a dense report for a time-constrained stakeholder meeting

## Common Mistakes

- Copying AI-generated code or formulas directly into production work without testing
- Trusting an AI-generated data interpretation without independently checking it against the actual data
- Using AI tools for tasks requiring specific, proprietary business context the AI wasn't given, and not correcting for that gap

## Best Practices

- Treat AI output as a first draft, always to be reviewed, tested, or fact-checked before relying on it
- Provide AI tools with as much relevant context as possible to get more useful, more specific output
- Be especially cautious validating AI output for anything that will be presented to stakeholders or used in a decision

## Interview Perspective

### Common Interview Questions
- How do you use AI tools in your analytical workflow?
- How would you verify that AI-generated SQL is actually correct?
- What are the risks of relying too heavily on AI-generated analysis?

### What Interviewers Usually Test
Whether the candidate uses AI tools thoughtfully, with appropriate verification, rather than either avoiding them entirely or trusting them uncritically.

### Common Traps
Describing AI tool usage without mentioning any verification step — a sign of over-reliance that most interviewers will probe further.

## Practical Application

AI tool usage has become a genuinely expected skill in many analyst roles — not because it replaces analytical judgment, but because it accelerates routine parts of the work when used with appropriate scrutiny.

## Revision Summary

- AI tools are useful across SQL, Python, Excel, DAX, documentation, summarization, and more.
- AI output should always be validated — treat it as a draft, not a finished, trustworthy answer.
- Providing more context to an AI tool generally produces more useful, specific output.
- Interviewers often specifically probe whether a candidate verifies AI output, not just whether they use AI tools.
