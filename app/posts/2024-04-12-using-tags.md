---
title: Using the GOV.UK tags component to show the status of forms
description: Users need to know what state a form is in, in order to decide what actions to make on them.
date: 2024-04-12
author: Daniel Da Silveira
tags:
- managing forms
- form library
---
Users need to know what state a form is in. Tags are used across the GOV.UK form builder and Whitehall Publisher to show the current status of guidance and/or forms. We made a conscious decision to try and use similar tags in our form builder in order to limit the need to re-learn things between products.

## What we found
- we found that statuses helped user scan pages and keep track of what forms needed action
- users expect that when a new form is created that it automatically inherits a 'Draft' tag
- changing form status during the process of adding an internal note might fit into the content designers' workflow (to be tested)

## What we changed
### Published versus Live
Our first iterations used 'Published' to denote a form that is available to the public. This is what Whitehall publisher uses. However, GOV.UK forms uses 'Live'. To create a level of consistency, we tested using 'Live' and found that it matched users' mental of model of what it meant.

### Starting small
In our discussions with members of the BAU content team, we found that the general lifecycle of a form is as follows:

- Draft
- Testing
- 2i review
- Publishing
- Withdrawing

In an effort to follow principle of [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement), we conducted a prioritisation exercise and decided that for MVP, we'd focus on the following statuses:

- Draft
- Live
- Closed

We decided on using the term 'Closed' because 'Withdrawing' in the content community denotes more than one thing. In our case, 'Closed' can only mean one thing; that a form has been closed from public access.\

### When forms have more than 1 status
Forms can have more than one status:

- 1 live forms and 1 draft version of that live form
- 1 draft form and 1 closed form

We were concerned about displaying more than 1 status at a time for each form in the form library. However, in testing, we found that users found it important to be able to see both statuses at the same time. We also found that users generally understood the concept of having more than status.

#### Screenshot of a form with more than 1 status in the form library
![Form with a live and draft tag](02-tags.png "Form with a draft and live status")

#### Screenshot of earlier status iterations
![Current iteration where we had published and review tags](01-tags.png "Table showing different statuses")
