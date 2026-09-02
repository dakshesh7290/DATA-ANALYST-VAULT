# Top 100 Questions

> A structured collection of 100 Data Analyst interview questions across the categories most commonly tested, with what each question is really assessing and a concise strong answer.

## Overview

These questions are organized by category and cover beginner through advanced difficulty. For each, focus on understanding *why* the question is asked, not just memorizing the answer — interviewers are almost always testing reasoning, not recall.

---

## SQL (12)

**1. What's the difference between `WHERE` and `HAVING`?**
*Tests:* Understanding of query execution order. *Answer:* `WHERE` filters rows before aggregation; `HAVING` filters groups after aggregation, and can reference aggregate functions.

**2. What's the difference between `INNER JOIN` and `LEFT JOIN`?**
*Tests:* Join behavior with unmatched rows. *Answer:* `INNER JOIN` returns only matched rows; `LEFT JOIN` returns all left-table rows plus matches from the right, with `NULL` where unmatched.

**3. How would you find duplicate records in a table?**
*Tests:* Practical data quality skill. *Answer:* `GROUP BY` the key column(s) with `HAVING COUNT(*) > 1`.

**4. What's the difference between `UNION` and `UNION ALL`?**
*Tests:* Precision about deduplication behavior. *Answer:* `UNION` removes duplicates; `UNION ALL` keeps all rows and is faster.

**5. What's a correlated subquery?**
*Tests:* Understanding of subquery execution. *Answer:* A subquery that references the outer query and re-evaluates for each outer row.

**6. What's the difference between `RANK()` and `DENSE_RANK()`?**
*Tests:* Window function precision. *Answer:* `RANK()` leaves a gap after ties; `DENSE_RANK()` does not.

**7. How would you find the second-highest value in a column?**
*Tests:* Practical SQL problem-solving. *Answer:* Use `DENSE_RANK()` or `OFFSET`/`LIMIT` after sorting descending, or a subquery excluding the max.

**8. What's the difference between a CTE and a subquery?**
*Tests:* Readability/structure understanding. *Answer:* A CTE is a named, reusable result set defined with `WITH`; a subquery is nested inline. CTEs primarily improve readability.

**9. How do you handle NULL values in a WHERE clause?**
*Tests:* NULL-handling correctness. *Answer:* Use `IS NULL`/`IS NOT NULL`; `= NULL` never evaluates true.

**10. What's a self join, and when would you use one?**
*Tests:* Applying joins creatively. *Answer:* Joining a table to itself, e.g. comparing employees to their managers within the same table.

**11. How would you calculate a running total in SQL?**
*Tests:* Window function fluency. *Answer:* `SUM(amount) OVER (ORDER BY date)`.

**12. What steps would you take to optimize a slow query?**
*Tests:* Practical performance reasoning. *Answer:* Filter early, select only needed columns, check indexes, review the execution plan, avoid unnecessary subqueries.

## Excel (10)

**13. What's the difference between `VLOOKUP` and `INDEX/MATCH`?**
*Tests:* Lookup fluency. *Answer:* `VLOOKUP` only looks rightward and breaks on column insertion; `INDEX/MATCH` works in any direction and is more robust.

**14. How would you sum values matching two conditions?**
*Tests:* Conditional aggregation. *Answer:* `SUMIFS(sum_range, range1, criteria1, range2, criteria2)`.

**15. What's the difference between a relative and absolute cell reference?**
*Tests:* Formula fundamentals. *Answer:* Relative references shift when copied; absolute references (`$A$1`) stay fixed.

**16. How would you remove duplicate rows in Excel?**
*Tests:* Basic data cleaning. *Answer:* Data tab → Remove Duplicates, after confirming what "duplicate" means for the dataset.

**17. What's the benefit of using Power Query over manual cleaning?**
*Tests:* Understanding of repeatability. *Answer:* Power Query steps are saved and reapplied automatically on refresh, unlike one-off manual edits.

**18. How would you build a dashboard showing sales by region and month?**
*Tests:* Practical dashboard design. *Answer:* PivotTable summarizing by region/month, connected chart, and slicers for interactivity.

**19. What's the difference between a PivotTable and formulas like SUMIF for summarizing data?**
*Tests:* Tool selection judgment. *Answer:* PivotTables handle multi-dimensional summaries faster and more flexibly; formulas are better for precise, auditable single calculations.

**20. How would you highlight all rows where a value is below target?**
*Tests:* Conditional formatting fluency. *Answer:* A formula-based Conditional Formatting rule (e.g. `=$D2<target`) applied to the row range.

**21. What's the difference between a formula and a Macro/VBA automation?**
*Tests:* Automation judgment. *Answer:* Formulas recalculate live; Macros/VBA automate multi-step procedural tasks that must be triggered to run.

**22. How would you clean inconsistent text data (extra spaces, inconsistent casing)?**
*Tests:* Text-cleaning fluency. *Answer:* `TRIM`, `PROPER`/`UPPER`, and `SUBSTITUTE` functions, or equivalent Power Query steps.

## Power BI (8)

**23. What's the difference between Power BI Desktop and Power BI Service?**
*Tests:* Basic platform understanding. *Answer:* Desktop builds reports; Service publishes, shares, and schedules refreshes for them.

**24. What's the difference between a measure and a calculated column in DAX?**
*Tests:* DAX fundamentals. *Answer:* A measure is calculated dynamically based on filter context; a calculated column is computed row-by-row and stored in the table.

**25. What's a star schema, and why is it commonly used?**
*Tests:* Data modeling knowledge. *Answer:* A central fact table linked to denormalized dimension tables — simpler queries and better BI tool performance than a snowflake schema.

**26. What's the difference between Import and DirectQuery modes?**
*Tests:* Practical trade-off awareness. *Answer:* Import loads data locally for speed; DirectQuery queries the source live for freshness, at a performance cost.

**27. Explain filter context and row context in DAX.**
*Tests:* Deeper DAX understanding. *Answer:* Filter context is the set of filters applied to a calculation (from slicers, rows/columns); row context is the current row being evaluated, relevant to calculated columns and iterator functions.

**28. How would you set up Row-Level Security in Power BI?**
*Tests:* Practical security knowledge. *Answer:* Define roles with DAX filter rules in Desktop, then assign users/groups to roles after publishing.

**29. What's the purpose of Power Query in Power BI?**
*Tests:* Workflow understanding. *Answer:* Cleaning and transforming data before it enters the data model, via a repeatable, refreshable set of steps.

**30. How would you design an effective dashboard?**
*Tests:* Design judgment. *Answer:* Define KPIs with stakeholders first, lead with the most important metric, avoid overcrowding, keep to one screen where possible.

## Python (10)

**31. What's the difference between a list and a tuple?**
*Tests:* Basic Python fluency. *Answer:* Lists are mutable; tuples are immutable.

**32. How would you merge two DataFrames in Pandas?**
*Tests:* Core Pandas skill. *Answer:* `pd.merge(df1, df2, on="key", how="left")`.

**33. How would you handle missing values in a DataFrame?**
*Tests:* Data cleaning fluency. *Answer:* `df.isnull().sum()` to identify, then `dropna()` or `fillna()` depending on context.

**34. What's the difference between `.apply()` and a vectorized operation?**
*Tests:* Performance awareness. *Answer:* Vectorized operations run on the whole array at once and are faster; `.apply()` runs a function row-by-row and is slower.

**35. What is vectorization, and why does it matter?**
*Tests:* NumPy/Pandas understanding. *Answer:* Performing operations on entire arrays at once using optimized code, avoiding slow explicit Python loops.

**36. How would you find and remove duplicate rows in Pandas?**
*Tests:* Basic cleaning fluency. *Answer:* `df.duplicated().sum()` then `df.drop_duplicates()`.

**37. How would you group and aggregate data in Pandas?**
*Tests:* Core analysis skill. *Answer:* `df.groupby("column")["value"].agg(...)`.

**38. How would you plot a trend over time in Python?**
*Tests:* Visualization fluency. *Answer:* A line chart in Matplotlib, typically after grouping by a time period.

**39. How would you extract data from an API and load it into a DataFrame?**
*Tests:* Practical data acquisition skill. *Answer:* `requests.get()` to call the endpoint, check the response status, then `pd.json_normalize(response.json())`.

**40. When would you automate a task with a Python script versus doing it manually?**
*Tests:* Judgment about automation value. *Answer:* When the task is genuinely repetitive and the setup cost is outweighed by the time saved over repeated runs.

## Statistics (12)

**41. What's the difference between mean and median, and when would you use each?**
*Tests:* Descriptive statistics judgment. *Answer:* Mean is sensitive to outliers; median is robust. Use median for skewed data.

**42. What does a p-value actually mean?**
*Tests:* Correct statistical interpretation. *Answer:* The probability of observing a result this extreme (or more) if the null hypothesis were true — not the probability the null hypothesis is true.

**43. What's the difference between Type I and Type II error?**
*Tests:* Hypothesis testing fundamentals. *Answer:* Type I is a false positive (rejecting a true null); Type II is a false negative (failing to reject a false null).

**44. Explain the Central Limit Theorem.**
*Tests:* Distribution understanding. *Answer:* The sampling distribution of the mean approaches normal as sample size grows, regardless of the original data's distribution.

**45. Give an example of correlation without causation.**
*Tests:* Critical thinking. *Answer:* Ice cream sales and drowning incidents both rise in summer — heat is a confounding variable, not a causal link between them.

**46. What's the difference between correlation and regression?**
*Tests:* Conceptual distinction. *Answer:* Correlation measures the strength/direction of association; regression estimates the specific relationship and can be used to predict values.

**47. What does R² tell you in a regression model?**
*Tests:* Regression interpretation. *Answer:* The proportion of variance in the outcome explained by the model.

**48. Why might you stop an A/B test early if it looks significant?**
*Tests:* Awareness of a common mistake. *Answer:* You shouldn't — stopping early inflates the false positive rate; tests should run for their predetermined duration/sample size.

**49. What's the difference between statistical and practical significance?**
*Tests:* Business judgment. *Answer:* Statistical significance means an effect is unlikely due to chance; practical significance means the effect size is large enough to matter for the business.

**50. What is a confounding variable?**
*Tests:* Causal reasoning. *Answer:* A third variable that influences both variables being studied, creating an apparent but non-causal relationship.

**51. What's the difference between descriptive and inferential statistics?**
*Tests:* Foundational distinction. *Answer:* Descriptive statistics summarize the data at hand; inferential statistics draw conclusions about a broader population from a sample.

**52. Why is randomization important in an A/B test?**
*Tests:* Experimental design understanding. *Answer:* It helps ensure the control and treatment groups are comparable, ruling out confounding variables and supporting a causal conclusion.

## Data Analysis (10)

**53. Walk me through how you'd approach a new dataset you've never seen before.**
*Tests:* Structured EDA process. *Answer:* Check structure and row counts, assess data quality, examine distributions, analyze categorical/numerical variables, check time trends, spot anomalies.

**54. How would you identify outliers in a dataset?**
*Tests:* Practical statistical technique. *Answer:* IQR method (values beyond 1.5× IQR from Q1/Q3), or visual inspection via box plot/histogram.

**55. How would you decide which chart type to use for a given dataset?**
*Tests:* Visualization judgment. *Answer:* Match chart type to the question: line for trends, bar for category comparison, histogram/box plot for distributions, scatter for relationships.

**56. How would you explain a complex analysis to a non-technical stakeholder?**
*Tests:* Communication skill. *Answer:* Lead with the conclusion/recommendation, use plain language, support with a clear visual, avoid unnecessary methodology detail.

**57. What would you do if your analysis and a stakeholder's intuition disagreed?**
*Tests:* Communication and confidence balance. *Answer:* Present the data clearly, walk through the methodology, remain open to a data quality explanation, but don't abandon a well-supported finding without cause.

**58. How do you decide which KPIs matter for a given business question?**
*Tests:* Business framing skill. *Answer:* Start from the actual business question and stakeholder goals, not from what data happens to be available.

**59. What steps would you take before trusting a new dataset for analysis?**
*Tests:* Data validation instinct. *Answer:* Check row counts, missing values, date range coverage, and whether fields mean what their names suggest.

**60. How would you measure whether a business recommendation actually worked?**
*Tests:* Monitoring/iteration mindset. *Answer:* Define the success metric in advance, monitor it after implementation, and compare to the expected/baseline trend.

**61. What's the difference between an insight and an observation?**
*Tests:* Analytical depth. *Answer:* An observation states what the data shows; an insight explains what it means for the business and why it matters.

**62. How would you prioritize which analysis to do first with limited time?**
*Tests:* Business judgment. *Answer:* Prioritize based on business impact and urgency, not just analytical interest or ease.

## Data Cleaning (8)

**63. How would you identify missing values in a dataset?**
*Tests:* Basic data quality skill. *Answer:* `COUNTBLANK`/`ISNULL` in Excel, `isnull().sum()` in Pandas, `IS NULL` counts in SQL.

**64. How would you decide whether to remove or impute missing data?**
*Tests:* Judgment, not just mechanics. *Answer:* Depends on how much data is missing, whether it's missing at random, and whether removal would bias the remaining data.

**65. What's the difference between a duplicate and a legitimate repeated record?**
*Tests:* Precision in defining "duplicate." *Answer:* Depends on the business context — e.g. two identical orders placed separately by the same customer aren't necessarily duplicates.

**66. How would you standardize inconsistent categorical text data?**
*Tests:* Practical cleaning skill. *Answer:* Trim whitespace, standardize casing, and map known variants to a single canonical value.

**67. What data type issues commonly cause problems after importing data?**
*Tests:* Practical awareness. *Answer:* Numbers stored as text, dates stored inconsistently, or unexpected leading/trailing characters.

**68. How would you validate that a cleaned dataset is ready for analysis?**
*Tests:* Rigor. *Answer:* Recheck row counts, missing value counts, and spot-check a sample of records against the original source.

**69. Why is documenting data cleaning decisions important?**
*Tests:* Professionalism/reproducibility awareness. *Answer:* It makes the analysis explainable and reproducible, and lets others (or future you) understand what assumptions were made.

**70. How would you handle an outlier that could be either an error or a legitimate extreme value?**
*Tests:* Judgment over mechanical rule-following. *Answer:* Investigate its source before deciding — don't automatically remove it without understanding why it exists.

## Business/Case Studies (10)

**71. Sales dropped 15% last quarter — how would you investigate why?**
*Tests:* Structured problem-solving. *Answer:* Clarify scope (region/product), check for volume vs price drivers, segment by customer group, check for external factors (seasonality, competition).

**72. A key metric suddenly dropped to zero — what would you check first?**
*Tests:* Data quality instinct before jumping to conclusions. *Answer:* Check for a pipeline/tracking failure before assuming it reflects a real business change.

**73. How would you measure the success of a new product feature?**
*Tests:* KPI selection skill. *Answer:* Define adoption and engagement metrics tied to the feature's intended purpose, and compare to a baseline or control group if possible.

**74. A stakeholder wants a dashboard with 30 metrics on it — how would you respond?**
*Tests:* Pushback and prioritization skill. *Answer:* Work with them to identify the handful of metrics that actually drive decisions, and explain why an overcrowded dashboard reduces clarity.

**75. How would you approach analyzing customer churn for a subscription business?**
*Tests:* End-to-end case reasoning. *Answer:* Define churn clearly, segment customers, look for behavioral or plan-based patterns, and validate findings against a holdout period.

**76. If you had to choose one metric to track overall business health, what would guide your choice?**
*Tests:* Business framing maturity. *Answer:* A metric that's directly tied to the core value the business delivers, hard to game, and actionable when it moves.

**77. How would you approach a request for an analysis where you're not sure it's actually the right question?**
*Tests:* Consultative thinking. *Answer:* Ask clarifying questions about the underlying decision before diving into the requested analysis.

**78. How would you explain a technically correct but counterintuitive finding to a skeptical stakeholder?**
*Tests:* Communication under pushback. *Answer:* Walk through the methodology transparently, use a clear visual, and invite questions rather than being defensive.

**79. What would you do if you discovered a significant error in an analysis after it was already presented?**
*Tests:* Integrity and accountability. *Answer:* Correct it promptly and transparently, communicate the impact clearly, and update any decisions that were based on it.

**80. How would you approach analyzing a dataset with far more variables than you have time to explore thoroughly?**
*Tests:* Prioritization under constraint. *Answer:* Prioritize variables most plausibly linked to the business question, using domain knowledge to narrow scope before diving deep.

## Behavioral (10)

**81. Tell me about a time you had to explain a technical finding to a non-technical audience.**
*Tests:* Communication skill, with a real example.

**82. Describe a time you disagreed with a stakeholder's request or interpretation of data.**
*Tests:* Confidence balanced with professionalism.

**83. Tell me about a project where you found unexpected results. How did you handle it?**
*Tests:* Adaptability and analytical honesty.

**84. Describe a time you had to work with messy or incomplete data.**
*Tests:* Practical resilience and problem-solving.

**85. Tell me about a time you made a mistake in an analysis. What did you do?**
*Tests:* Accountability and integrity.

**86. Describe a situation where you had to prioritize between multiple competing requests.**
*Tests:* Time management and business judgment.

**87. Tell me about a time you had to learn a new tool or skill quickly for a project.**
*Tests:* Learning agility.

**88. Describe how you've handled a tight deadline for an analysis.**
*Tests:* Working under pressure while maintaining quality.

**89. Tell me about a time your analysis directly influenced a business decision.**
*Tests:* Real-world impact and ownership.

**90. Describe a time you had to give feedback on someone else's analysis or work.**
*Tests:* Collaboration and constructive communication.

## Resume/Project (5)

**91. Walk me through one of your portfolio projects end to end.**
*Tests:* Depth of understanding of your own work, not just the final output.

**92. Why did you choose this particular dataset/business problem for your project?**
*Tests:* Genuine motivation and business framing instinct.

**93. What would you do differently if you redid this project today?**
*Tests:* Growth mindset and self-critical reflection.

**94. What was the most challenging part of this project, and how did you handle it?**
*Tests:* Problem-solving under real difficulty, not just a polished narrative.

**95. How did you validate that your findings in this project were correct?**
*Tests:* Rigor and self-verification habits.

## General Analytics (5)

**96. What's the difference between a Data Analyst, a Data Engineer, and a Data Scientist?**
*Tests:* Role clarity.

**97. How do you stay current with tools and techniques in data analytics?**
*Tests:* Genuine ongoing learning habits.

**98. What's your process for validating an analysis before presenting it?**
*Tests:* Rigor as a habit, not an afterthought.

**99. How do you decide when an analysis is "done"?**
*Tests:* Judgment about diminishing returns versus thoroughness.

**100. What excites you about working as a Data Analyst?**
*Tests:* Genuine motivation and cultural fit.

---

## How to Use This List

Work through categories that map to your weakest areas first. For technical questions, practice actually writing the SQL/Python/formula, not just describing the answer verbally. For behavioral and business questions, prepare specific real examples in advance rather than improvising in the moment.
