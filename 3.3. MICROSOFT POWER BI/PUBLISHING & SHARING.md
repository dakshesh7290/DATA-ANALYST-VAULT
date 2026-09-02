# Publishing & Sharing

> Moving a report from Power BI Desktop into Power BI Service, and controlling how others access and interact with it.

## Overview

Building a report in Power BI Desktop is only half the process — for a dashboard to be useful to stakeholders, it needs to be published to Power BI Service, refreshed on a schedule, and shared with the right audience, often with appropriate access controls.

## Why It Matters for a Data Analyst

A report that stays on the analyst's own machine has limited value. Publishing and sharing is what turns a personal analysis into a tool the wider team or organization can rely on.

## Core Concepts

- **Workspace** — a container in Power BI Service where reports and datasets are organized and shared with specific people or teams
- **Publishing** — the act of pushing a report from Desktop into a workspace in the Service
- **Scheduled refresh** — configuring how often the published dataset pulls fresh data from its source
- **Sharing** — granting specific people or groups access to view or interact with a published report
- **Row-Level Security (RLS)** — restricting what data individual users can see within the same report, based on their identity or role

## How It Works

After building a report in Desktop, the analyst publishes it to a workspace in Power BI Service. From there, a refresh schedule can be configured so the dataset stays current without manual intervention, and access can be shared with individuals, groups, or the wider organization depending on the workspace's permission settings.

## Workspaces

Workspaces separate reports by team, project, or purpose (e.g. a "Sales Analytics" workspace vs a "Finance Reporting" workspace). Access to a workspace controls who can view, edit, or manage the reports and datasets within it.

## Refresh

Depending on the data source and Power BI licensing, scheduled refresh can run on intervals ranging from multiple times a day to daily. Some sources also support near real-time refresh through more advanced configurations.

## Row-Level Security (Introductory)

RLS allows a single published report to show different data to different users — for example, a regional sales manager sees only their region's data, while an executive sees everything. This is configured through roles defined in Desktop and then assigned to specific users or groups after publishing.

## Real-World Data Analyst Use Cases

- Publishing a finished sales dashboard to a shared workspace so regional managers can access it directly
- Setting up a daily scheduled refresh so a report reflects the previous day's data each morning automatically
- Using RLS so a single report serves multiple regional teams without exposing each region's data to the others

## Common Mistakes

- Forgetting to configure a scheduled refresh after publishing, leaving the report silently showing outdated data
- Sharing a report more broadly than intended by misunderstanding workspace permission levels
- Assuming RLS is automatically applied without properly testing it as different user roles

## Best Practices

- Always configure and test scheduled refresh immediately after publishing
- Organize workspaces logically by team or purpose rather than publishing everything into one shared space
- Test RLS thoroughly by viewing the report "as" different roles before sharing broadly

## Interview Perspective

### Common Interview Questions
- What's the difference between a workspace and a published report?
- How would you ensure different regional managers only see their own region's data in the same report?
- What happens if you forget to configure a scheduled refresh?

### What Interviewers Usually Test
Whether the candidate understands that publishing is not the final step — refresh scheduling and access control are part of making a report genuinely usable.

### Common Traps
Treating "publish" as equivalent to "the report is now fully live and correct" without accounting for refresh scheduling.

## Practical Application

Publishing and sharing is the step that turns an individual analyst's work into an organizational resource — it's often just as important to get right as the analysis itself.

## Revision Summary

- Publishing moves a report from Desktop into a workspace in Power BI Service.
- Scheduled refresh must be explicitly configured — it does not happen automatically after publishing.
- Row-Level Security lets one report serve multiple audiences with different visible data.
- Workspaces control organization and access at a team or project level.
