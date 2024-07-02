---
title: Making form actions intuitive
description: Each forms need a base from which users can make the majority of actions on it.
date: 2024-04-26
author: Daniel Da Silveira
tags:
- managing forms
- form overview
---
## Before (Creating a draft of a form)
The as-is flow was:

1. Users needed to open a form from the 'Form home' in edit mode and find the 'Form settings' link.

![Form home' page, with 'Edit' link highlighted](01-home.png "Form home' page, with 'Edit' link highlighted")


2. Click 'Form settings'

![Details component expanded to reveal organisation details](01-editor.png "Form editor page, with 'Form settings' link highlighted")

3. Enter required information to make a form live

![Details component expanded to reveal organisation details](02-settings.png "Form settings page with 'Publish' button")

4. Go back to the Form home and select 'Create draft'

![Details component expanded to reveal organisation details](04-draft.svg "Form settings page with 'Publish' button")



### What we found
- It didn't fall into users' mental model to have to go open a draft form and then open the 'Form settings' link
- Users expect to do more from the 'Form home'
- We can put more information in the 'Form home' as users prefer when movement between pages were kept to a minimum
- the term 'Form home' didn't make sense straight away for users and they didn't intuitively pick up what its purpose was

## What we changed
- changed the name of the page from 'Form home' to 'Overview'
- followed a similar pattern used in Whitehall publisher, whereby actions are grouped in a `govuk-grid-one-third`column layout next to form details
- - moved key form actions to form overview such as:
  - create draft from live
  - make form live
  - close live form
  - edit draft
  - delete draft

![Form overview page with form actions in a `govuk-grid-one-third` column layout](05-overview.png "Form overview page with form actions in a `govuk-grid-one-third` column layout")

As a result, users felt a lot more accustomed with the page layout because the majority of their time is spend Whitehall Publisher.

> "This feels like home" - BAU content designer