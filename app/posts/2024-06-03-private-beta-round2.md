---
title: Private Beta round 2 usability testing
description:
date: 2024-06-03
tags:
  - usability testing
  - user research
  - private beta
---

## Research aims

- Validate design ideas.
- Understand users understanding of labels used.

## What we did
We carried out usability testing to test new design ideas:

- [Form overview](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/cph-overview/archived/draft), including:
  - Add email address
  - Add contact details for support
  - Add information about what happens next
  - Add a link to a privacy notice
- [Edit a form](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/2.html)
- Editor - [Add page](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/add-page.html)
  - Page title – [National Insurance Number](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/preview/)
- [Add component](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/component-pages/add)
  - [Reference number](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/component-pages/custom-field-validation/page1)
- Editor - [Preview](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/preview/custom-reference)
  - [Error message](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/preview/custom-reference-error)
- Editor - [Add a Condition](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/editor/conditions/existing0)

## Scenarios and tasks

### 1. Form Overview
   - Give overall feedback on the page
   - Asked to add:
      - Email address where the completed form will be sent to
      - Contact details for support
      - Information about what happens after the form is submitted
      - Policy notice
### 2. Use XGov
   - Scenario - Ask citizens for their National Insurance Number
      - Add a page
      - Add a component
   - Scenario - Ask citizens to apply for a ‘Export Health Certificate (EHC)’ to move dogs and cats from Great Britain (England, Scotland and Wales) to the EU.
      - Add components

## Who we talked to

We talked to 4 participants:

- 1 x BAU working with mainly Environment Agency - Whitehall
- 1 x Environment Agency – Fishing rod licenses
- 1 x BAU working with Trade - Whitehall
- 1 x BAU updating gov.uk/intranet - Whitehall

## Background and reminder

Some participants had previous experience in creating digital forms, some did not have experience.

All content designers within Defra will be given training support to use XGov to start with.

The goal is for DXT Design Forms to have its own UIs, interaction and content in the future.

## Insight 1: Form overview

We asked open questions to understand participants background and story, and to start thinking about the ‘journey of a form’, where the need for creating a new form comes from, who needs a new form, which tools are used, what works well and what does not.

These insights help us plan more insightful research.

![Form overview page in draft](image1.png "Form overview page in draft")


### Main insights

> The page is clear.

> Very similar to Whitehall – consistency is good.

No issues in:

- adding email address
- providing contact details for support
- telling users what happens next
- adding the Privacy notice link

Participants would refer to the SMEs/Policy team if they missed some information. SMEs /Policy teams might refer to Defra legal team if not known.

These pages have been moved from ‘Guidance and Privacy’ page, which did not test very well in Round 1 usability testing previously carried out, to be directly in the Form overview.

## Insight 2: Add page

Scenario – we asked participants to show us how they would ask citizens for their National Insurance Number.

![Form editor and National Insurance Pattern we wanted users to create](image13.png "Form editor and National Insurance pattern we wanted users to create")

### Main insights

The concept of adding a page per question, and/or creating the page before adding the question is not clear to all content designers.

Participants mental model is to create/add a question to the form.

#### Idea for the future: invisible design

- Can the system create a page without the user knowing?
- Can a page be created while the user creates a question?

## Insight 3: Add page screen

!['Add page' configuration page](image12.png "'Add page' configuration page")

### Main insights

Select a page type - even though the copy was clear to participants, listing options using bullet points will improve readability and general user experience.

For example:

Select:
  - Start Page to start a form
  - Question Page to request information
  - Summary Page at the end of a section or form.

Page title – it was not clear to all participants.

It might need some more copy / explanation.

## Insight 4: Add component

![Editor with a page added to it](image11.png "Editor with a page added to it")


### Main insights

- It was not clear to all participants.
- Their mental model was to ‘Add a question’ rather than ‘Add component’.
- Reminder – Content designers will receive training to use XGov.

## Insight 4: Reference number in a specific format

![Configuration page for adding asking users for a number in a specific format](image10.png "Configuration page for asking users for a number in a specific format")

### Main insights

- All participants were prompted to choose the 'Reference...' Option.
- Short label – it was not clear to all participants.
- In general, the whole page needs some content revision.

![Minimum and maximum number of characters for reference number input](image9.png "Minimum and maximum number of characters for reference number input")

Minimum and Maximum number of characters - the copy was clear to all participants.

![Guidance for reference number input](image8.png "Guidance for reference number input")

Guidance - Participants found it very helpful.
> 'This seemed really handy to be honest.' - Content designer, Environment Agency

![Input box configuration](image7.png "Input box configuration")

Minimum and Maximum number of characters – The screen was clear. To all participants.

Participants understood the reason for having the 9 boxes (by selecting 9 from the previous page).

## Insight 5: Preview

![Expanded details link for 'Get help with this form'](image6.png "Expanded details link for 'Get help with this form'")

### Main insights

In general, the content was clear. Participants were familiar with and recognised the information they 'would have input' on the 'Form Overview' page would be displayed under the section 'Get help with this form'.

## Preview with error mistake

![Previewing a form with an error message](image5.png "Previewing a form with an error message")

### Main insight

Participants understood the message. The message was clear to all participants.

## Insight 6: Conditions users understanding

### Scenario - Let's imagine you want to:

- create a form for citizens to apply for an ‘Export Health Certificate (EHC)’ to move dogs and cats from Great Britain (England, Scotland and Wales) to the EU
- you want to ask citizens which animal they want to take to the EU
- if they choose dogs, you want to know how old the dog is.

Users had to click the ‘Conditions’ link on the left menu.

The label 'Conditions' was not clear to all participants. They were all prompted.

## Insight 7: Journey to add a ‘Condition’ question

![Adding a condition to a form](image3.png "Adding a condition to a form")

### Main insights

1. Add or change conditions - Not clear what this page does
2. Add condition: Enter condition name – It needs some content revision to avoid repetitions.
3. Add condition: select question route start point - It was clear, no issues.
4. Add condition: select answer and destination - No issues; both copy and the logic behind the questions were clear.
5. Confirmation page - No issues; both copy and the logic behind the questions were clear.

## Insight 8: Users way of working

Being able to plan, sketch out and visualise the flow of the questions and the whole form definitely help users in creating usable and easy to use digital forms.

> "If I was going to approach this in reality, say I've got this old PDF form in front of me, or I was asked to create a new form, what I would expect to be able or what I would do is first of all sketch out on paper or in Mural or Figma or whatever I would sketch out first how I would expect the pages to be and then I'd feel more comfortable using this form builder." - Content designer, Environmental Agency

## Insight 9: General feedback and next steps

General feedback

The prototype and XGov need an overall content design review.
More consistency is needed with labels used throughout DXT.

## Next steps

Defra Forms content designers to review XGov labels and content.

No more testing XGov, because Defra content designers will be given training.

Start new design ideas for future with low fidelity prototypes, Figma rather than Heroku.
