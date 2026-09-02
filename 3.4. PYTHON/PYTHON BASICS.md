# Python Basics

> The foundational Python every Data Analyst needs: variables, data types, control flow, and functions — focused on analyst use, not general software engineering.

## Overview

Python has become one of the most widely used languages for data analysis, valued for its readability and its ecosystem of analysis libraries (NumPy, Pandas, Matplotlib). This note covers the language fundamentals a Data Analyst needs before moving into those libraries — not a full software engineering curriculum.

## Why It Matters for a Data Analyst

Python lets an analyst go beyond what Excel or even SQL can comfortably handle — complex multi-step transformations, automation, and integration with APIs or files, all in a single reusable script.

## Core Concepts

- **Variables** — named references to values (`sales = 1000`)
- **Data types** — integers, floats, strings, booleans, and the more complex types below
- **Lists** — ordered, changeable collections (`[1, 2, 3]`)
- **Tuples** — ordered, unchangeable collections (`(1, 2, 3)`)
- **Sets** — unordered collections of unique values (`{1, 2, 3}`)
- **Dictionaries** — key-value pairs (`{"region": "East", "sales": 1000}`)
- **Conditions** — `if`/`elif`/`else` for branching logic
- **Loops** — `for` and `while` for repeating actions
- **Functions** — reusable, named blocks of code
- **List comprehensions** — a concise way to build a list from an existing iterable
- **Error handling** — `try`/`except` for gracefully handling unexpected issues
- **Modules** — reusable code organized into importable files/packages

## Examples

Basic variables and conditions:
```python
sales = 1200
if sales > 1000:
    tier = "High"
else:
    tier = "Standard"
```

A loop over a list:
```python
regions = ["East", "West", "North", "South"]
for region in regions:
    print(f"Processing {region}")
```

A dictionary representing a record:
```python
order = {"order_id": 101, "amount": 250.0, "region": "East"}
print(order["amount"])
```

A function:
```python
def classify_order(amount):
    if amount > 500:
        return "High"
    elif amount > 100:
        return "Medium"
    return "Low"
```

A list comprehension:
```python
amounts = [120, 450, 900, 60]
high_value = [a for a in amounts if a > 400]
```

Basic error handling:
```python
try:
    value = int("not a number")
except ValueError:
    value = None
```

## Real-World Data Analyst Use Cases

- Writing a small script to classify records into categories based on business rules
- Looping through a list of files to process each one the same way
- Using dictionaries to represent and manipulate individual records before loading them into Pandas

## Common Mistakes

- Confusing lists (mutable) with tuples (immutable), then trying to modify a tuple
- Using loops for operations Pandas/NumPy can do far more efficiently in vectorized form (see [[NUMPY]], [[PANDAS]])
- Not handling exceptions where external input (files, APIs) could realistically fail

## Best Practices

- Use list comprehensions for simple, readable transformations rather than verbose loops
- Reach for Pandas/NumPy operations instead of manual loops once working with tabular data
- Write small, well-named functions for logic that's used more than once

## Interview Perspective

### Common Interview Questions
- What's the difference between a list and a tuple?
- How would you handle an error that occurs while reading a file?
- Write a function that classifies a number into categories based on thresholds.

### What Interviewers Usually Test
Basic fluency and reasoning, not memorized syntax — often through simple live coding exercises.

### Common Traps
Overcomplicating a simple task with unnecessary object-oriented structure, when a straightforward function or script would do.

## Practical Application

Python Basics is the foundation for everything else in this section — [[NUMPY]], [[PANDAS]], and [[AUTOMATION]] all assume comfort with these fundamentals.

## Revision Summary

- Core data structures: lists (mutable), tuples (immutable), sets (unique values), dictionaries (key-value pairs).
- Functions and list comprehensions keep code reusable and readable.
- `try`/`except` handles errors gracefully, especially important for external input like files or APIs.
- For tabular data, prefer Pandas/NumPy operations over manual Python loops once the dataset is more than trivially small.
