# Dashboard Development

> Turning a data model into a polished, interactive report — layout, filters, drill-through, and bookmarks.

## Overview

Once a data model and its DAX measures are in place, dashboard development is about arranging visuals into report pages that communicate clearly and let stakeholders explore the data themselves. This spans layout decisions as well as Power BI's interactive features: filters, slicers, drill-through, tooltips, and bookmarks.

## Why It Matters for a Data Analyst

A technically correct data model doesn't help stakeholders unless it's presented in a way that's clear and usable. Dashboard development is often the most visible part of an analyst's Power BI work — it's what stakeholders directly interact with.

## Core Concepts

- **Report page** — a single screen within a Power BI report, containing one or more visuals
- **Filters** — restrict what data is shown, applicable at the visual, page, or report level
- **Slicers** — on-canvas interactive filter controls
- **Drill-through** — lets a user click into a summary visual to see a detailed page focused on that specific selection
- **Tooltips** — additional information shown on hover, which can be customized with their own mini-report page
- **Bookmarks** — saved states of a report page's filters/view, useful for guided walkthroughs or toggling between views

## Layout Principles

- Place the most important KPI or metric prominently, typically near the top
- Group related visuals together visually
- Maintain consistent formatting (colors, fonts) across all pages
- Avoid overcrowding a single page — Power BI supports multiple pages for a reason

## Real-World Data Analyst Use Cases

- Building a summary page with key KPIs, and a drill-through page showing detailed transaction-level data for any selected KPI
- Using bookmarks to let a presenter toggle between different views during a live meeting
- Customizing tooltips to show a mini trend chart when hovering over a data point

## Common Mistakes

- Cramming every possible visual onto a single page instead of using drill-through or additional pages
- Using filters/slicers inconsistently across pages, confusing users about what's currently being shown
- Not testing the report with realistic filter combinations before sharing it

## Best Practices

- Design with the stakeholder's actual questions in mind, not just "what visuals are available"
- Use drill-through for detail that doesn't need to be visible by default, keeping the main view clean
- Test the full range of filter/slicer interactions before publishing

## Interview Perspective

### Common Interview Questions
- How would you design a dashboard for a sales director who wants both a high-level and detailed view?
- What's the difference between a slicer and a filter in Power BI?
- How does drill-through improve a report's usability?

### What Interviewers Usually Test
Design judgment — whether the candidate thinks about the end user's workflow, not just Power BI's feature list.

### Common Traps
Listing Power BI features without connecting them to an actual reporting need — interviewers usually want to see the "why," not just the "what."

## Practical Application

Dashboard development is where data modeling and DAX work becomes something stakeholders can actually use — it's frequently the final, most visible deliverable of a Power BI project.

## Revision Summary

- Dashboard development turns a data model into a usable, interactive report through layout, filters, drill-through, tooltips, and bookmarks.
- Drill-through and multiple pages help avoid overcrowding a single view.
- Bookmarks are useful for guided presentations or toggling between saved states.
- Good dashboard design starts from the stakeholder's actual questions, not the available feature list.
