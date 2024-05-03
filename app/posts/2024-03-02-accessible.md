---
title: Creating an accessible forms library using the GOV.UK table component
description: Users need the ability to view and manage forms for a variety of reasons. This post talks about the work we did to create an accessible view of forms for users
date: 2024-03-02
tags:
- managing forms
- form library
---

## What we changed

- Changed from a `govuk-grid-column-full` to a `govuk-grid-column-two-thirds` page layout. Although full page width layout allows us to fit more content on the page, when users magnify their screens, they are likely to miss content that is hidden beyond the horizontal fold

- Removed the ‘created by column’

- Truncated dates

- At breakpoints of less than 769px, the table will wrap to just to 2 columns


## Why we changed this

- We moved away from the full-page width layout because although it allows us to fit more content on the page, when users magnify their screens they are likely to miss content that is hidden beyond the horizontal fold.

- To increase accessibility further, we wrapped table contents into two columns when viewing at less than 769px. This further ensured that users didn’t need to scroll vertically or horizontally in order to scan for information

- We removed the created by column because users reported that they didn’t need to see this information in the library, and was more important for them to see the Form name, Last updated information and the status of the forms

- We followed the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#:~:text=when%20space%20is%20an%20issue%20%2D%20in%20tables%20or%20publication%20titles%2C%20for%20example%20%2D%20you%20can%20use%20truncated%20months%3A%20Jan%2C%20Feb) of ‘when space is an issue - in tables or publication titles, for example - you can use truncated months: Jan, Feb’.

### Table with full page width design, and the MoJ sortable table component (before changes)
![Table with full page width design, and the MoJ sortable table component (before changes)](01-library.png "Table with full page width design, and the MoJ sortable table component (before changes)")

### Table with two-thirds page width design at more than 769px, 3 column layout (after changes)
![After: table with two-thirds page width design at more than 769px, 3 column layout](02-library.png " table with two-thirds page width design at more than 769px, 3 column layout")


### Table with two-thirds page width design at less than 769px, 2 column layout (after changes)
![After: table with two-thirds page width design at less than 769px, 2 column layout](03-library.png " table with two-thirds page width design at less than 769px, 2 column layout")





## Things we considered

We considered using [GOV.UK summary list component] (https://design-system.service.gov.uk/components/summary-list/), but feedback from users was that it made pages to long and it was more important for them find things at a snapshot view.

![Summary lists version of the form library](04-library.png "Summary lists version of the form library ")



![Summary cards version of the form library](05-library.png " Summary cards version of the form library ")

