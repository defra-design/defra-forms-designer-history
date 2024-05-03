---
title: How we present information about forms
description: Forms have attached meta information that needs presenting back to users. This post talks about how iterated on the presentation of that information
date: 2024-04-12
tags:
- managing forms
- form overview
---
## What we changed
### 1. Presenting organisation details in the main body of the page
When users first create a new form, they add details about lead organisation and team details.

- Previously we had those details wrapped inside of the [GOV.UK details component](https://design-system.service.gov.uk/components/details/). However, in testing, users struggled to understand what information to expect when it was expanded and it rarely matched with their expectations once they did expand it. Several users suggested that it presented in the main body of the page rather than hidden away.
- It was also unclear how users could edit those organisation details

We changed this and made this information appear in the main body of the page and used the [GOV.UK summary list component](https://design-system.service.gov.uk/components/summary-list/) because it was purposely designed and tested for such scenarios.

#### Details component expanded to reveal organisation details (before)
![Details component expanded to reveal organisation details](01-organisation-details.png "Details component expanded to reveal organisation details")

#### Displaying organisation details using the summary list component (after)
![Details component expanded to reveal organisation details](02-org-details.png "Details component expanded to reveal organisation details")

This tested positively and users correctly identified how they could update this information.

### 2. Presenting versions of forms in their different states using seperate summary list rather than one table

- Previously forms were presented on one table
- We found that forms presented in this way limited our ability to include other piece of information such as preview links
- Though this made the page longer, the users of this system would be expert users that prefer more information presented on a page than the average user

#### Summary list of draft and live form (before)
![Summary list of draft and live form (before)](03-draft:live.png "Summary list of draft and live form (before)")

#### Summary list of draft and live form (after)
![Summary list of draft and live form (before)](04-draft:live.png "Summary list of draft and live form (before)")
