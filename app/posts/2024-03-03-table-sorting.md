---
title: Making it easier to find forms
description: How we decided to use a sorting feature to help users find forms
date: 2024-03-03
tags:
- managing forms
- form library
- finding forms
---
## What we changed

Stopped using the [MoJ sortable table component](https://design-patterns.service.justice.gov.uk/components/sortable-table) and instead adopted table sorting functionality.

## Why we changed this

We stopped using the [MoJ sortable table component](https://design-patterns.service.justice.gov.uk/components/sortable-table) because it wouldn’t work alongside pagination as it it would only sort items of the current page and not every page; this confused users.

## How it works

Implementation of sorting with the following pre-configured options:

### 1.Form name (A to Z)

 Sorting by this label will organise the forms based on alphabetical order of form names, starting with the letter A

### 2.Form name (Z to A)

 Sorting by this label will organise the forms based on alphabetical order of form names, starting with the letter Z



### 3.Updated (newest)

 This refers to the date when the form was last modified or edited. Sorting by this label will organise the forms based on the most recent updates made to them, with the forms that were modified most recently appearing at the top of the list.

### 4. Updated (oldest)

This refers to the date when the form was last modified or edited. Forms will be arranged in ascending order based on the date and time they were last modified or edited, with the oldest updates appearing at the top of the list. I.e.,  view the forms starting from the ones that have not been updated for the longest time. 

### 5. Status

This indicates the current state or condition of the form. Sorting by this label will arrange the forms based on their status, with drafts organised all at the top of list, draft and live and then live

### 6. Live (newest)

This shows the date when the form was published (status changed to ‘Live’). If the form has not been published, this field may be empty. Sorting by this label will organise the forms based on the most recent publishing dates, with the most recently published forms appearing first.   



### 7. Live (oldest)

Forms will be arranged in ascending order based on the date and time they were last published, with the oldest published forms appearing at the top of the list. I.e., to view the forms starting from the ones that have been published for the longest time


1. By default, the sorting option : Updated (newest) will be selected upon load

2. Sorting button trigger would then apply the sorting option to the table

Form counts is displayed and updated dynamically as follows:

- Updated (Oldest + Newest) : Fulll count of all statuses

- Status : Full count if all statuses

- Live (newest) : Count of only Live or Draft & Live

- Live (oldest) : Count of only Live or Draft & Live

- A-Z : Full count of all statuses

- Z-A : Full count of all statuses

## Future considerations

In most user research sessions, users communicated that the way they would look for a form is to first look for a search bar but in the absence of that they would select ‘CTRL + F’ on their keyboard. However, that method only works if the form they are searching for is on the current page. It was decided that future iterations would look at testing an approach that combined sorting with filtering and search functionality.

## Screenshots
![Before: table with full page width design, and the MoJ sortable table component](01-library.png "form library table when at full width and using the MoJ sortable table component")

![After: form library page with sorting functionality](03-library.png "Form library with a button for sorting the table")