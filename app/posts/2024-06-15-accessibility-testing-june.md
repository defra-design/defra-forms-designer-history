---
title: Accessibility testing June 2024
description: Accessibility testing with a user with dyslexia and low-vision
date: 2024-06-15
author: Monica Ferraro
tags:
  - accessibility
  - user research
  - private beta
---

## Research aims

Test and validate the accessibility and usability of the prototype for users with access needs.

## What we did
We carried out accessibility and usability testing of the following Heroku pages:
- Sign in
- Forms library
- Create a new form
- Form overview
  - Add an email
  - Phone
  - Email
  - Online contact link
  - Tell users what happens after...
  - Privacy notice
- Make draft live
- The form is live
- Create a draft to edit
- Make draft live
- The form is now live
- Close form

## Who we talked to
We talked to 1 participant with dyslexia and a low-vision condition, using webpages in dark mode to help him with his low-vision condition and Read Aloud to help him with dyslexia.

### Insight 1: General feedback
The prototype works well, needing only a few minor improvements. The user was able to interact well with the prototype and achieve the tasks needed to proceed through the journey.

> First of all, straight away, I can see that in dark mode...It looks like it's behaving, which is good.

> Everything seems to be quite nice there. I can see everything in good colours. As you can see, I have a very big pointer because I keep on losing it due to my bad eyesight. But no, that seems good. It changes the colours of things. Sometimes this draft and live. I don't know whether those were the intended colours. But no, that seems to be OK.

### Insight 2: Forms library

While using Read Aloud, the cursor does not highlight the information written in the ‘Last updated’ column.

![Forms library in dark mode](01.png "Forms library in dark mode")

> What that does for me is...if I could see the cursor moving over the words whilst it's talking at the same time, it helps me absorb the information better.

### Insight 3: Forms library – Sorting
It was not clear to the participant when forms have been published. It looks like a Published column is missing from the table.

![Forms library sorting menu in dark mode](02.png "Forms library sorting menu in dark mode")

> OK, I can see the column for when it was updated, but I can't see the column for when it was published...I know that that particular document there was updated on this date... when was it published?

### Insight 4: Forms library – High Contrast Mode (Alt-Shift-Print Screen)
The colorization around Live and Draft labels disappears in high contrast mode.

![Forms library sorting menu in dark mode and tags](03.png "Forms library sorting menu in dark mode and tags")

> The one thing I noticed straight away, probably just a minor thing, is that the boxes around live and draft have disappeared. And the colorization of them has disappeared, but you know it's minor stuff. I think fundamentally I can read everything on the page and fundamentally I understand everything on the page. So it's just minor stuff really.

### Insight 5: Consistency and Standards
#### Jakob Nielsen's Usability Heuristics

###### 4: Consistency and Standards

Users should not have to wonder whether different words, situations, or actions mean the same thing. Failing to maintain consistency may increase the users' cognitive load by forcing them to learn something new.

The whole DXT needs a review to make sure there is consistency on all labels and headings used.

![Wording of things in the overview page](04.png "Wording of things in the overview page")

![Difference in the wording used in the overview page and question pages](05.png "Difference in the wording used in the overview page and question pages")


### Insight 6: Heading with caption
Read Aloud starts reading from the Heading of the page ‘Phone number and opening times’. It does not read the caption above that (Apply for a county parish holding number in England).

![Page to enter phone number and opening times](06.png "Page to enter phone number and opening times")

> Phone number and opening times. I don't know. I don't know why it does this. Might be worth something looking at. If I go in here and then click on the readout Read Aloud. The Read Aloud starts reading from phone number and opening times and doesn't read the sentence above it.

### Insight 7: Wrong autofill
The system automatically inserts the e-mail address in the correct field ‘Email address’ but also in the field underneath ‘Response time’, which is not an e-mail address field.

![Autofill incorrect for text input](07.png "Autofill incorrect for text input")

> That's interesting. When I selected the e-mail address previously saved, it also put the e-mail address in underneath, but that's not an e-mail address field.

### Insight 8: Confirmation message
There’s too much scrolling up and down the Form overview page because every time the user adds information to the form (email address, phone number, privacy notice, etc.) the system rightly displays the Success message, taking the user up the page every time. Consequently, the user must scroll down the page again to add another field.

![Success notification banner](08.png "Success notification banner")

> A minor thing from my perspective is that yeah, it's coming back every time and taking me to the top of the page and saying, yeah, I've filled something in, and then I'm scrolling down, and then selecting another thing, I don't know whether it could hold my hand a bit more on that...

### Insight 9: Hyphen to comma
Read Aloud shortens the pause between the two words when a hyphen is used. A comma works better with Read Aloud.

![Hyphen and read aloud](09.png "Hyphen and read aloud")

> I would consider changing that hyphen to a comma...because what a hyphen does when you read it out, it shortens the space, it shortens the pause between the two words. And I just think it doesn't make it read as well as if it had a comma.

### Insight 10: Notification banner not read
Read Aloud starts reading from the Title of the page. The 'notification message' is missed. It is read by Read Aloud only if the user clicks on the box.

![Success notification banner](10.png "Success notification banner")



