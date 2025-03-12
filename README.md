Name of the project: taskJournal

![image](https://github.com/user-attachments/assets/666d943b-df05-40f4-ab2a-9a377ee0e4ee)

What is it? <br />
taskJournal is an online task manager for the busybodies. This includes creation, information view, edition and deletion of day-to-day tasks, projects and notes. 

How do you manage to differentiate between tasks? <br />
Tasks are categorized by five different time categories and optionally by a specific project they belong to. Additionally, some features of a task are colored differently depending on its urgency. For instance, if the task is of high urgency, its features will be coloured red. 

Can a task belong to multiple categories and / projects? <br />
Each task belongs to only one project, as it made sense a specific task would not appear in two projects. Moreover, each task can belong to one or more time categories. For example, if the task is due 'Today', it makes sense it also fits in category 'This Week, 'This Month, and the general one, 'Home', but not 'Tomorrow'.

Where can I find a task that doesn't belong to this month? (so not today, tomorrow or this week) <br />
The general, all encompassing task category is 'Home'. You can find tasks of all relevancy there, including those that passed (if not deleted) and future ones.

How do I add a task to a project? <br />
Click on the name of the project you wish to add task to and then click the plus button. By clicking on the name of a specific project, after creating a task it will automatically be added to that project.

Are notes categorized? <br />
Since notes are considered temporary relevant information, they are considered to be quicky deleted by user and such are not categorized by anything. If the user wishes to provide more information to note, such as time or urgency, the user is prompted to create a task instead.

What external libraries / frameworks / APIs does this project employ? <br />
+ localStorage API
+ date-fns library

How are any of the libraries employed? <br />
date-fns library formats date names on task GUI between details button and edit svg. It is also used in categorizing tasks based on time; whether they are due today, tomorrow, etc. with functions isToday(), isTomorrow(), isThisMonth(), and isThisWeek().

How are any of the frameworks employed? <br />
I haven't learned any frameworks yet, and as such the projects does not included any.

How are any of the APIs employed? <br />
localStorage API stores all tasks, projects and notes the taskJournal is initiated with. It saves all creations, editions and deletions user does before page reload. And after the page reload, it loads all previously saved tasks, projects and notes (if any).

Any notes on improvement for future projects? <br />
+ simpler code
+ use paper to sketch design
+ build css with media queries and scaling down in mind
+ use classess instead of id on html elements
+ commit to github after at the end of day for easier review of code to implement optimizated and simpler code easier

Demo: <br />
// general look of the website on 1200px+ screen and smartphone
![image](https://github.com/user-attachments/assets/666d943b-df05-40f4-ab2a-9a377ee0e4ee)
![image](https://github.com/user-attachments/assets/b689c8e0-882e-47e6-9fc7-c3d0226a882d)


// creating a new task
![image](https://github.com/user-attachments/assets/dfff1d97-8c0b-48e3-b0d1-93b6961efecf)
![image](https://github.com/user-attachments/assets/eccbb6b8-5cef-416b-a41b-dd945a3086e6)


// editing a task 
![image](https://github.com/user-attachments/assets/a66f17c1-13e8-44b5-964b-e50dec221cf6)
![image](https://github.com/user-attachments/assets/d471cd25-9dad-415c-9acb-5cbb5ddb345d)


// details of a task
![image](https://github.com/user-attachments/assets/1d24089e-bc56-44a1-9f91-a3e278e3e08e)

// notes section
![image](https://github.com/user-attachments/assets/219d5bba-1ecc-444c-a9de-e7babf31e2e8)

