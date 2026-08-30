# Extract, Transform, Load (ETL)

> How data moves from source systems into analysis-ready form, and what a Data Analyst needs to understand about this process.

## Overview

ETL describes the process of extracting data from source systems, transforming it into a clean and structured form, and loading it into a destination system (typically a data warehouse) where it's ready for analysis. Understanding this process helps an analyst understand where their data actually comes from and why it looks the way it does.

## Why a Data Analyst Should Understand This

The data an analyst queries has usually already passed through an ETL (or ELT) pipeline built and maintained by Data Engineers. Understanding this process helps an analyst diagnose data issues, ask more informed questions when something looks wrong, and understand the limitations of the data they're working with.

## How It Relates to Analytics

ETL is what makes analysis possible in the first place — raw data from source systems (CRMs, applications, files) is rarely usable directly; ETL transforms it into the clean, structured format an analyst actually queries.

## Extract

Pulling data out of its original source system — a database, an API, a file export, a CRM, and so on.

## Transform

Cleaning, restructuring, and combining the extracted data into the format needed by the destination system — this might include standardizing formats, calculating derived fields, joining multiple sources, and applying data quality rules.

## Load

Writing the transformed data into its destination — typically a data warehouse.

## ETL vs ELT

| Aspect | ETL | ELT |
|---|---|---|
| Order of operations | Transform before loading | Load raw data first, transform after |
| Where transformation happens | In a separate processing step, before the destination | Within the destination system itself (often a modern cloud data warehouse) |
| Common context | Traditional data warehousing | Modern cloud-based data platforms with powerful in-warehouse processing |

## Data Pipelines

An ETL/ELT process is typically implemented as a **data pipeline** — an automated, often scheduled sequence of steps that moves data from source to destination reliably and repeatedly.

## Sources

Common data sources feeding an ETL pipeline include transactional databases, CRM systems, third-party APIs, and file-based exports.

## Transformations

Common transformation types include: standardizing formats (dates, currencies), deduplication, joining data from multiple sources, calculating derived metrics, and filtering out irrelevant or invalid records.

## Validation

A well-built pipeline includes validation steps — checking that loaded data meets basic quality expectations (row counts within expected ranges, no unexpected nulls in critical fields) before it's considered ready for use.

## Loading

Data can be loaded in different ways — a full reload (replacing all existing data) or an incremental load (adding only new or changed records) — with the choice affecting both performance and how quickly data becomes available.

## Scheduling

Pipelines typically run on a defined schedule (hourly, daily) rather than continuously, meaning there's usually some lag between when data is generated at the source and when it's available for analysis — an important consideration when interpreting "current" data.

## Monitoring

Pipelines are usually monitored for failures or unexpected changes in data volume, since a broken pipeline can silently leave analysts working with stale or incomplete data if not caught quickly.

## Data Quality

ETL pipelines are often where the first layer of data quality checks happens, before data even reaches an analyst — though analysts should still perform their own validation rather than assuming the pipeline caught everything relevant to their specific analysis.

## Analyst Interaction

Analysts typically don't build ETL pipelines themselves (this is usually a Data Engineer's responsibility), but they interact with the results constantly, and often are the first to notice when something in the pipeline has gone wrong — a metric that looks unexpectedly low, or data that seems to be missing a day.

## Real-World Data Analyst Use Cases

- Recognizing that a suspiciously incomplete-looking dataset might indicate an ETL pipeline failure, rather than a genuine business change
- Understanding why data in a warehouse is only as current as the last scheduled pipeline run
- Communicating clearly with a Data Engineer about a specific data quality issue, using shared ETL terminology

## Common Mistakes

- Assuming data in a warehouse is always fully current, without understanding the pipeline's refresh schedule
- Not recognizing a pipeline failure when a dataset shows an unusual pattern, instead assuming it reflects a real business change
- Underestimating how much cleaning and transformation already happened before data reached the analyst — and assuming any remaining issues are the pipeline's fault rather than a legitimate data quality issue at the source

## Best Practices

- Understand the refresh schedule of key data sources, to correctly interpret how current the data actually is
- Flag suspicious patterns (unexpectedly low volume, missing recent data) to Data Engineers promptly, since this could indicate a pipeline issue
- Communicate data quality issues using precise, shared ETL terminology to make collaboration with engineering teams more efficient

## Interview Relevance

### Common Interview Questions
- What's the difference between ETL and ELT?
- Why might data in a warehouse not reflect the most recent transactions?
- How would you investigate whether an unusual pattern in your data reflects a real business change or a pipeline issue?

### What Interviewers Usually Test
Whether the candidate understands data doesn't just "appear" in a warehouse — it moves through a specific process with its own potential failure points and limitations.

## Relationship to the Core Data Analyst Workflow

ETL is what makes the "gather data" stage of the [[WORKFLOW]] possible in a structured, repeatable way, and understanding it helps explain data quality issues encountered later in that workflow.

## Revision Summary

- ETL extracts data from sources, transforms it into clean/structured form, and loads it into a destination (usually a data warehouse).
- ELT differs from ETL mainly in when transformation happens — after loading, typically within a modern cloud warehouse.
- Pipelines run on a schedule, meaning warehouse data has some inherent lag behind the source systems.
- Analysts should recognize suspicious data patterns as possible pipeline issues, not just real business changes.
