---
title: Using the GOV.UK One Login service header
description: How we used a pattern developed by the One Login team as the basis for our Forms Designer's header
date: 2024-01-10
author: Daniel Da Silveira
tags:
  - forms designer interface
---

## Before
We started with a simple page header based on work done by the team behind the admin interface for the 'Apply for plant export certificates and inspections' service.

![Page header first iteration](01.png "Page header first iteration")

However, as more features were being developed by our team a need was identified for a more robust page header that could leave room for:

- service name
- name of the user using the system
- ability to sign in and out
- form management navigation to:
  - forms library
  - overview page
  - editor
  - analytics etc

After a review of other potential patterns, the team decided to test a design by the [GOV.UK One Login service team](https://github.com/govuk-one-login/service-header).

## After

After a review of other potential patterns, the team decided to test a design by the [GOV.UK One Login service team](https://github.com/govuk-one-login/service-header).

![Details component expanded to reveal organisation details](03.png "Form editor page, with 'Form settings' link highlighted")

### What we found

- it was lacking Defra branding such as colours
- having the nav items aligned-right meant that sometimes they were missed
- at smaller screen sizes it responded well and users understood how to use the menu link to expand and view nav items

### What we did

- added Defra branding
- aligned nav items left

![One Login header with Defra branding and nav items left-aligned](04.jpeg "One Login header (desktop view) with Defra branding and nav items left-aligned")

![One Login header (mobile view) with Defra branding and nav items left-aligned](05.png "One Login header (mobile view) with Defra branding and nav items left-aligned")