Title: taskJournal
What is it?
taskJournal is an online task manager for the busybodies. This includes creation, information view, edition and deletion of day-to-day tasks, projects and notes. 

How do you manage to differentiate between tasks?
Tasks are categorized by five different time categories and optionally by a specific project they belong to. Additionally, some features of a task are colored differently depending on its urgency. For instance, if the task is of high urgency, its features will be coloured red. 

Can a task belong to multiple categories and / projects?
Each task belongs to only one project, as it made sense a specific task would not appear in two projects. Moreover, each task can belong to one or more time categories. For example, if the task is due 'Today', it makes sense it also fits in category 'This Week, 'This Month, and the general one, 'Home', but not 'Tomorrow'.

Where can I find a task that doesn't belong to this month? (so not today, tomorrow or this week)
The general, all encompassing task category is 'Home'. You can find tasks of all relevancy there, including those that passed (if not deleted) and future ones.

Are notes categorized?
Since notes are considered temporary relevant information, they are considered to be quicky deleted by user and such are not categorized by anything. If the user wishes to provide more information to note, such as time or urgency, the user is prompted to create a task instead.

What external libraries / frameworks / APIs does this project employ?
+ localStorage API
+ date-fns library

How is any of the libraries employed?
date-fns library formats date names on task GUI between details button and edit svg. It is also used in categorizing tasks based on time; whether they are due today, tomorrow, etc. with functions isToday(), isTomorrow(), isThisMonth(), and isThisWeek().

How is any of the frameworks employed?
I haven't learned any frameworks yet, and as such the projects does not included any.

How is any of the APIs employed?
localStorage API stores all tasks, projects and notes the taskJournal is initiated with. It saves all creations, editions and deletions user does before page reload. And after the page reload, it loads all previously saved tasks, projects and notes (if any).

Any notes on improvement for future projects?
+ simpler code
+ use paper to sketch design
+ build css with media queries and scaling down in mind
+ use classess instead of id on html elements
+ commit to github after at the end of day for easier review of code to implement optimizated and simpler code easier

Demo:
// general look of the website on 1200px+ screen
![image](https://github.com/user-attachments/assets/666d943b-df05-40f4-ab2a-9a377ee0e4ee)
