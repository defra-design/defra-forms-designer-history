---
title: Usability testing - alpha round 1
description:
date: 2024-04-25
tags:
- usability testing
- user research
- alpha
---

## Research aims
- understand more about the content team and our users
- validate the usability and overall user experience of new proposed designs.

## What we did
We carried out:

1. interviews to understand our users
2. usability testing to test new design ideas:

- [Forms library](http://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/library).
- [Edit a form](https://designer.forms.cyb.dev/app/designer/user-research-test)
- [Form Builder - xGov](https://www.figma.com/proto/1A9Tthy0CJeqp2rGNSKRjH/Defra-Form-Builder-flows?type=design&node-id=2014-116998&t=bdtb4pOB9WsYhrNs-1&scaling=contain&page-id=1330%3A51984&mode=design)

### Scenarios and tasks

#### Understand more about the content team and our users
- What is your role on the DDTS Content team in Defra?
- What does a typical day look like for you?
- Any specific software or applications you use?
- Working with stakeholders: what works well and what can be improved

#### Forms Library
- What do you understand this page to be showing you?
- What does status mean to you in this context?

#### Forms Library – Finding a specific form
- I’d like you to imagine you’ve been asked to edit the Report a Dead Wild Bird form, are you able to show us how you’d find that form on this page?

#### Form Builder – Edit a form
Can you please show me how you would edit this form?

#### Form Builder – XGov
We used XGov to build some of the prototype, and this is the easiest way to test the thinking. However, we did not test XGov specifically.
We gather feedback on the page (what they saw) and we asked some comparison with what they use now.

### Insight 1: Understanding our users

#### Main insights
- The dynamic/ structure of the content team will support new learning, but the team have a very high varied cognitive workload which we need to take account of.
- 'The best day is when you get something completed and published and you can see the results of all the work. But that can take a long time to get to fruition. So even if you can do some work where you can see some impact – an initial draft… and seeing it when it’s been through that content design process and hopefully it’s much more friendly and user focused’ ' - Content designer
- Teams work across lots of different projects (10, with a focus on 3)
- They use many different tools:
- Trello and Slack for organising work and overlaps,
- internal notes on Whitehall
- Hemmingway Editor, Mural, Word, Excel
- Whitehall Publish, Gov.uk and GovForms
- They work with multiple stakeholders at the same time
- They need to have a good understanding of the subject area
- They want to make a difference for citizens, often clashing with stakeholders and SMEs who do not want to change things.
- That dynamic largely happens before any content goes into a form or content builder
- There is an added sympathy for the end user with form building which makes this process harder.
- The bulk of the work happens prior to the form being built.

![Process map for what happens when forms are built currently](01.png "Process map for what happens when forms are built currently.")


### Insight 2: Key user needs

- Key people in the team need to pick up and understand what has happened on the form (support the web)
- The Web needs to have multiple points of experience to catch issues
- Tools that facilitate ‘last updated by’ and when the update was are key to this.
- There is a macro and micro level to getting the gist of what has happened on a project.
- To make any kind of progress towards user experience values (impact, doing the right thing).
- Form tools that ‘replace’ work done previously obfuscate the progress can undermine the craft.
- There will always be a need for the Word version or original drafts, templates for stakeholders. How can we work with this?
- Practical issues around versioning where sometimes a big rework takes place, but a smaller change needs to be published first
- Is there anything else we can offer to reveal progress and impact – e.g the analysis view?

### Insight 3: Form library and Form Home

![Form library with draft forms](02.png "Form library with draft forms.")

![Form library with draft forms](03.png "Form library with published and draft forms.")


#### Main insights
Users understood the page and what it was showing them. But every user mentioned either a search or filter.
- In absence of the facets or search, they use Ctrl F (2 users checked only with their eyes).
- Users looked by the name (could be the nature of task).
- The form library needed more representative data. The placeholder content gave the impression the forms might be templates.

### Insight 4: XGov
#### Main insights

> ‘I’m going to assume we’ll be given guidance on how to use this.’ - Content designer
- There was confusion between the two experiences the XGov Form Builder tries to provide: what the user sees, and what the technical requirements are.
- The disparity between users familiar with form building and those with more Word document experience was stark.
- Users navigated a lot on ‘feeling’ which suggests there is a need for a level of experience.
- Integrating the dev things, like component name, and backend aspects felt ‘completely unintuitive’
- Two participants could ‘link’ pages, but it required prompting.
- Where can you find ‘free from text’ in this list? ‘Details I suppose’
- Section vs Page – ‘why would a section title appear above a page title unless they are the same?’

Users who are not experienced in form design will use components for all aspects.
- Edit page was considered where you’d add the questions ‘A question page is different to a radio button’.
- The ordering and wording of the components is a big IA task for the tool.
- Three users used the components in the same way you would for building something from scratch. E.g using the text component to write the question.
- Add ‘a list item’ much harder to engage with than Yes / No option (which is at the bottom).

