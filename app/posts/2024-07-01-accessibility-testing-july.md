---
title: Accessibility testing - July 2024
description: A participant using Dragon speech recognition software found the prototype generally usable, but identified minor issues with label clarity, missing confirmation messages, and command functionality.
date: 2024-07-01
author: Monica Ferraro
tags:
  - private beta
  - user research
  - usability testing
  - accessibility
---
## Research aims
Test and validate the accessibility and usability of the prototype for users using a speech recognition software.

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
We talked to 1 participant with repetitive strain injuries and with some minor visual disturbance. The participant used Dragon to help her with her strain injuries, and ClaroView to help her with the vision disturbance.

### Insight 1: General feedback
In general, the prototype works well, with only minor issues using Dragon. The user was able to navigate around the prototype and achieve all tasks needed to proceed through the journey of creating, editing, and publishing a digital form.

> "I've found it quite easy...I personally hate having to scroll down pages... It was still really easy to navigate around."

> "It's a lot to look at when you've not seen that before, but there was nothing missing, nothing that sort of sprung to mind."

### Insight 2: Forms library – Command “Click ‘button name’”
The Forms library works well.

Command “Click link” was showing “Clear filters” as ‘link 7’. It should be "Click ‘button name’" - “Click Clear filter”.

![Forms library showing filters and list of forms](01.png "Forms library showing filters and list of forms")

### Insight 3: Forms library – Draft and Live states
It's not clear to the participant if the labels ‘Draft’ and ‘Live’ for the form status are a button or not.

![Closer view of forms library showing filters and list of forms](02.png "Closer view of forms library showing filters and list of forms")

> "The draft and the live. Is that just to show you what status it's in?"

### Insight 4: Forms library – Sort by
Command “Click Status” didn’t select “Status” option in the 'Sort by' drop down options.

The participant is familiar with “sort by” select menus that automatically submits the form for you. She had to use command 'tab' and 'press return' commands to make it work.

![The ’Sort by’ drop down menu showing the 5 options: Updated (newest), Updated (oldest), Status, Form name (A-Z) and Form name (Z-A).](02.png "The ’Sort by’ drop down menu showing the 5 options: Updated (newest), Updated (oldest), Status, Form name (A-Z) and Form name (Z-A).")

> "I'm not used to...like normally...do something in a box like that. If you press return it will sort it. I was like, yeah, I don't think I pressed an extra button before, but it works."

### Insight 5: Usability issue – Missing confirmation
There is no confirmation that the list has been sorted by the selected filter. The number of forms displayed changes at the top of the list, but there is no confirmation on how the list was sorted. For example: Sort by Status or Filtered by Lead organization.

![List sorted by Defra as Lead organization](04.png "List sorted by Defra as Lead organization")

### Insight 6: Create a form
The journey to create a new form works well with Dragon commands.

![First page of the ’Create of a new form’ journey, ’Enter a name for your form’ Test form](05.png "First page of the ’Create of a new form’ journey, ’Enter a name for your form’ Test form")

### Insight 7: There was no confirmation of a new form was created
It looked like it was not obvious to the participant that a new form was created. Possibly because the participant did not recognize the name of the form. We call our new form ‘Apply for a county parish holding’ while she named her new form ‘Form test’.

But also, because there is no confirmation of what just happened.

![New form created, ’Apply for a county parish holding number in England’](06.png "New form created, ’Apply for a county parish holding number in England’")

### Insight 8: https
Dragon capitalised the H of ‘http’s a couple of times, in the 'Contact link for support' page and in the 'Policy notice' page. The participant mentioned it's common for Dragon to do that and she didn’t think it's fixable.

![The ‘Contact link for support’ page showing Dragon capitalising the H of https](07.png "The ‘Contact link for support’ page showing Dragon capitalising the 'H' of https")

> "It's quite common in Dragon, that it will automatically capitalize the 1st letter in what it perceives to be a sentence."

### Insight 9: Copy and Paste
Copy and paste didn’t work for non-editable text. Commands 'Select xxx' and 'Copy that' didn't work.

The participant used her mouse to copy some text and paste it in the input box. She tried using the same commands with the BBC News website, and the commands did not work either. She could carry out her task without using the mouse by reading out the test, if she wanted to.

![The ’tell the users what happens after they submit the form’ page with the text in the non-editable Example section, highlighted.](08.png "The ’tell the users what happens after they submit the form’ page with the text in the non-editable Example section, highlighted.")