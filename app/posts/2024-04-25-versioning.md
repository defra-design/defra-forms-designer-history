---
title: How users can publish forms
description: One of the key actions a user can take is to publish their forms so that it's accessible to the public. This post describes how we've changed the designs for this process.
author: Daniel Da Silveira
date: 2024-04-25
tags:
- managing forms
- publishing
- versioning
---

The goal of this process is to give users the ability to publish a form with a production URL immediately without the need for any additional resource

> You can work through this process using [our prototype](https://defra-forms-mvp-prototype-6c025bd15252.herokuapp.com/cph-overview/draft). Password: Iloveforms2024

## How it works

We adopted Whitehall publishers group of buttons pattern.

### 1. Draft
When a form is created it automatically adopt a status of 'Draft'. In this state, a form can be edited, made live and deleted.

![Manage form panel for draft](10-draft.png "Manage form for draft showing a Edit draft and make draft live buttons and a delete draft link")


### 2. Live
When a user has provided required information (in this instance, the email address for sending completed forms), the user will then see on their Overview page, a button labelled 'Make form live'.

![Summary list showing the live link url and preview link url for a live form](12-live.png "Summary list showing the live link url and preview link url for a live form")

When a form is made live, the following is done:

- a live link URL is created, in the format of https://www.submit-form-to-defra.service.gov.uk/form-name
- a preview link of that live form is created, in the format of https://www.preview.submit-a-form-to-defra.gov.uk/form-name
- we chose to show the url in its entirety as users have a need to copy the link to send to stakeholders

> For MVP, users will need to create a separate start page in Whitehall publisher and add the Live link URL to it

![Manage form panel for live forms](11-live.png "Manage form for live forms showing a create draft to edit and close live form buttons")


### 3. Creating a draft version of a live form
- to avoid the complexity of creating multiple versions of the same form, users can only edit a form when it's in 'Draft' status
- the only way to edit a form that's 'Live' is to create a 'Draft' version of it
- once you've made changes to a draft version of a live form, when you make the draft version live, it replaces the existing Live form

![Overview page of a where a user has just created a draft version of a live form"](04-draft-from-live.png "Overview page of a where a user has just created a draft version of a live form")


### 4. Closing a live form
There are situations where users need to close a live form permanently or temporarily
- users can close a live form and then re-open it

![Warning question for the user to confirm their choice of closing a live form"](07-close-question.png "Warning question for the user to confirm their choice of closing a live form")

![Form overview page showing a success notification that the form was closed"](08-closed-success.png "Form overview page showing a success notification that the form was closed")

### 5. Creating a draft from a closed form

![Form overview page showing a success notification that a draft version was created from a closed from"](09-draft-from-closed.png "Form overview page showing a success notification that a draft version was created from a closed from")

### 6. Make a draft version of a closed form live
- Warning component is used to warn users that it will replace the closed closed form

![Form overview page showing a success notification that a draft version was created from a closed from"](13-draft-live-from-closed.jpeg "Form overview page showing a success notification that a draft version was created from a closed from")

## Future considerations
- embedding the 2i process into this journey
- what happens when a draft is deleted