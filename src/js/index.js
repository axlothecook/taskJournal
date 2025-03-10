import '/src/css/style.css';
import { 
    format, 
    isToday, 
    isTomorrow, 
    isThisMonth, 
    isThisWeek 
} from "date-fns";
import closeSvgVar from '/image/x-svg.svg';
import trashSvgVar from '/image/trash-can-regular.svg';
import editSvgVar from '/image/pen-to-square-regular.svg';
import openSidebarSvgReal from '/image/bars-solid.svg';

class Task {
    constructor(title, project, details, dueDate, urgency, done = false) {
        this.title = title;
        this.project = project;
        this.details = details;
        this.dueDate = dueDate;
        this.urgency = urgency;
        this.done = done;
    }

    editProperty(property, value) {
        this[property] = value;
    };

}

class Project {
    constructor(title) {
        this.title = title;
    }
}

class Note {
    constructor(title, details) {
        this.title = title;
        this.details = details;
    }

    editProperty(property, value) {
        this[property] = value;
    }
}

const StorageManager = (function(){
    const FirstBootDone = () => { localStorage.setItem('latch', JSON.stringify(true)); };

    const isFirstBoot = () => { return !JSON.parse(localStorage.getItem('latch')); };

    const loadTasks = () => {
        var taskArr = JSON.parse(localStorage.getItem('tasks'));
        return taskArr ? taskArr : [];
    }

    const loadProjects = () => {
        var projectArr = JSON.parse(localStorage.getItem('projects'));
        return projectArr ? projectArr : [];
    }

    const loadNotes = () => {
        var notesArr = JSON.parse(localStorage.getItem('notes'));
        return notesArr ? notesArr : [];
    }

    const updateTasks = (taskArr) => {
        var taskList = [];

        taskArr.forEach(task => {
            taskList.push({
                title: task.title,
                project: task.project,
                details: task.details, 
                dueDate: task.dueDate,
                urgency: task.urgency,
                done: task.done
            });
        });
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    const updateOneTask = (task, changes) => {
        var count = 0;
        var taskArr = loadTasks();
        taskArr.forEach(element => {
            Object.keys(element).forEach( key => { 
                if(element[key] === task[key]) {
                    count++;
                    if (count === 6) {
                        Object.keys(changes).forEach( property => { 
                            if(changes[property] !== undefined) element[property] = changes[property];
                        });
                        return element;
                    };
                };
            });
        });
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    };

    const updateProjects = (projectsArr) => {
        var projectList = [];

        projectsArr.forEach(project => {
            projectList.push(project.title);
        });
        localStorage.setItem('projects', JSON.stringify(projectList));
    }

    const updateNotes = (notesArr) => {
        var noteList = [];

        notesArr.forEach(note => {
            noteList.push({
                title: note.title,
                details: note.details
            });
        });
        localStorage.setItem('notes', JSON.stringify(noteList));
    }

    const updateOneNote = (note, changes) => {
        var count = 0;
        var noteArr = loadNotes();
        noteArr.forEach(element => {
            Object.keys(element).forEach(key => {
                if(element[key] === note[key]) {
                    count++;
                    if (count === 2) {
                        Object.keys(element).forEach(property => { 
                            (property === 'title') ? element[property] = changes.title : element[property] = changes.details; 
                        });
                        return element;
                    };
                };
            });
        });
        localStorage.setItem('notes', JSON.stringify(noteArr));
    }

    return {
        FirstBootDone,
        isFirstBoot,
        loadTasks,
        loadProjects,
        loadNotes,
        updateTasks,
        updateOneTask,
        updateProjects,
        updateNotes,
        updateOneNote
    }

})();

const TaskManager = (function(){
    var taskArr = [];
    const today = new Date();
    var date2 = new Date(today);
    date2.setDate(today.getDate() + 2);
    var date3 = new Date(today);
    date3.setDate(today.getDate() + 1);

    const addTask = (title, project, details, dueDate, urgency) => { 
        taskArr.push(new Task(title, project, details, dueDate, urgency)); 
        StorageManager.updateTasks(taskArr);
    };

    const initializeTasks = () => {
        addTask('Cooking', 'Chores', 'Cook lunch', date2, 'low');
        addTask('Hades 2', 'Gaming', 'Game w friends', today, 'high');
        addTask('Electricity', 'Bills', 'pay on time', date3, 'mid');
    }

    const deleteTask = (title) => { 
        taskArr = taskArr.filter(task => task.title !== title); 
        StorageManager.updateTasks(taskArr);
    };

    const getLength = () => { return taskArr.length; };

    const getAllTasks = () => { return taskArr; };

    StorageManager.isFirstBoot() ? initializeTasks() : StorageManager.loadTasks().forEach(task => taskArr.push(new Task(task.title, task.project, task.details, task.dueDate, task.urgency, task.done)));

    return {
        addTask,
        deleteTask,
        getLength,
        getAllTasks
    }

})();

const TaskParser = (function(){
    const parseByTime = (condition) => { return TaskManager.getAllTasks().filter(task => condition(task.dueDate)); };

    const parseByProject = (project) => { return TaskManager.getAllTasks().filter(task => task.project === project); };

    return {
        parseByTime,
        parseByProject
    }

})();

const ProjectManager = (function(){
    var projectArr = []   

    const addProject = (title) => {
        projectArr.push(new Project(title));
        StorageManager.updateProjects(projectArr);
    };

    const initializeProjects = () => {
        addProject('Chores');
        addProject('Gaming');
        addProject('Bills'); 
    }

    const deleteProject = (title) => { 
        projectArr = projectArr.filter(project => project.title !== title); 
        TaskParser.parseByProject(title).forEach(task => TaskManager.deleteTask(task.title));
        StorageManager.updateProjects(projectArr);
    };

    const getAllProjects = () => {return projectArr};

    StorageManager.isFirstBoot() ? initializeProjects() : StorageManager.loadProjects().forEach(title => projectArr.push(new Project(title)));

    return {
        addProject,
        deleteProject,
        getAllProjects
    }

})();

const NoteManager = (function(){
    var noteList = [];

    const addNote = (title, details) => {
        noteList.push(new Note(title, details));
        StorageManager.updateNotes(noteList);
    }

    const initializeNotes = () => {
        addNote('Cinema', 'Watch latest John Wick movie');
        addNote('library', 'see if they got the book');
        addNote('vet', 'take Doggy to the vet on Thursday');
        StorageManager.FirstBootDone();
    }
    
    const deleteNote = (title) => {
        noteList = noteList.filter(note => note.title !== title);
        StorageManager.updateNotes(noteList);
    }

    const getLength = () => { return noteList.length(); };

    const getAllNotes = () => { return noteList; };

    StorageManager.isFirstBoot() ? initializeNotes() : StorageManager.loadNotes().forEach(note => noteList.push(new Note(note.title, note.details)));

    return {
        addNote,
        initializeNotes,
        deleteNote,
        getLength,
        getAllNotes
    }

})();

// gui
const GUIManager = (function(){
    const body = document.querySelector('body');
    var tasksContainer, categoryLinks, projectsContainer, notesContainer;

    var offsetContainers = [];

    const homeCondition = (X) => { return true; };

    var filterFunc = TaskParser.parseByTime;
    var filterParam = homeCondition;

    const fadeOut = (div) => {
        let opacity = 1;
        let interval = setInterval(function() {
            if (opacity > 0) {
            opacity -= 0.3;
            div.style.opacity = opacity;
            } else {
                clearInterval(interval);
                div.remove();
            };
        }, 50);
    };

    const side = (parent) => {
        const rightSideOfPopup = document.createElement('div');
        rightSideOfPopup.classList.add('right-side-of-popup'); 
        parent.appendChild(rightSideOfPopup);
        return rightSideOfPopup;
    }

    const optionHoverParent = () => {
        let divArray = [];

        return function result (div, classToAdd) {
            divArray.push(div);

            div.addEventListener('click', function (e) {
                divArray.forEach((item) => {
                    item.classList.remove(classToAdd);
                });
                this.classList.add(classToAdd);
            });

        };

    };

    var onOptionTextHover = optionHoverParent();

    const hover = (parent, child1, child2 = 0) => {
        parent.addEventListener('mouseover', function() {
            if(child2 === 0) {
                child1.classList.add('blue-clr1');
            } else {
                child1.classList.add('blue-clr1');
                child2.classList.add('white-clr1');
            };
        });

        parent.addEventListener('mouseout', function() {
            if(child2 === 0) { 
                child1.classList.remove('blue-clr1');
            } else {
                child1.classList.remove('blue-clr1');
                child2.classList.remove('white-clr1');
            }
        });
    };

    const bodyScrollControls = {
        scrollBarWidth: window.innerWidth - document.body.clientWidth,
    
        disable() {
            document.body.style.marginRight = `${this.scrollBarWidth}px`;
            document.body.style.overflowY = 'hidden';
        },

        enable() {
            document.body.style.marginRight = null;
            document.body.style.overflowY = null;
        },
    };

    const toggle = (status, checkboxDiv, taskDiv, taskTextDiv) => {
        if (!status) {
            checkboxDiv.classList.remove('active');
            taskDiv.style.opacity = '1';
            taskTextDiv.style.textDecoration = 'none';
        } else {
            checkboxDiv.classList.add('active');
            taskDiv.style.opacity = '0.5';
            taskTextDiv.style.textDecoration = 'line-through';
        }
    };

    const createTaskElement = (task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div', `${task.urgency}-div`);
        tasksContainer.prepend(taskDiv);

            const taskLeftSide = document.createElement('div');
            taskLeftSide.classList.add('task-left-side');
            taskDiv.appendChild(taskLeftSide);

            const taskRightSide = document.createElement('div');
            taskRightSide.classList.add('task-right-side');
            taskDiv.appendChild(taskRightSide);

            const checkbox = document.createElement('div');
            checkbox.classList.add('checkbox', `${task.urgency}-checkbox-border`);
            taskLeftSide.appendChild(checkbox);
            checkbox.addEventListener('click', () => {
                task.editProperty('done', !task.done);
                toggle(task.done, checkbox, taskDiv, taskTitle); 
                calculateOffsets();
                StorageManager.updateTasks(TaskManager.getAllTasks());
            });

                const taskTitle = document.createElement('div');
                taskTitle.classList.add('title-holder');
                taskTitle.textContent = task.title;
                taskLeftSide.appendChild(taskTitle);

            toggle(task.done, checkbox, taskDiv, taskTitle); 

                const detailsBtn = document.createElement('div');
                detailsBtn.classList.add('btn-div', `general-${task.urgency}-btn`);
                detailsBtn.textContent = 'DETAILS';
                taskRightSide.appendChild(detailsBtn);
                detailsBtn.addEventListener('click', () => {
                    createDetailsDiv(task).showModal();
                });

                const dueDateDiv = document.createElement('div');
                dueDateDiv.classList.add('due-date-div');
                dueDateDiv.textContent = `${format(new Date(task.dueDate), 'MMM')} ${format(new Date(task.dueDate), 'do')}`;
                (window.innerWidth > 600) ? taskRightSide.appendChild(dueDateDiv) : taskLeftSide.appendChild(dueDateDiv); 
                
                const svgDiv = document.createElement('div');
                svgDiv.classList.add('edit-delete-svg-div');
                taskRightSide.appendChild(svgDiv);

                const editDiv = document.createElement('div');
                editDiv.classList.add('edit-svg');
                svgDiv.appendChild(editDiv);

                editDiv.addEventListener('click', () => {
                    createEditDiv(task).showModal();
                })

                    const editSvg = document.createElement('object');
                    editSvg.setAttribute('type', 'image/svg+xml');
                    editSvg.classList.add('edit-svg');
                    editSvg.data = editSvgVar;                         
                    editDiv.appendChild(editSvg);

                const deleteDiv = document.createElement('div');
                deleteDiv.classList.add('delete-svg');
                svgDiv.appendChild(deleteDiv);

                deleteDiv.addEventListener('click', () => {
                    TaskManager.deleteTask(task.title);
                    calculateOffsets();
                    loadTaskPage(filterFunc(filterParam));
                });

                    const trashSvg = document.createElement('object');
                    trashSvg.setAttribute('type', 'image/svg+xml');
                    trashSvg.classList.add('trash-svg');
                    trashSvg.data = trashSvgVar;         
                    deleteDiv.appendChild(trashSvg);

    }

    const addProjectToOffestContainer = (offset, title) => {
        offsetContainers = offsetContainers.filter(object => object.filterP !== title);

        offsetContainers.push({
            element: offset,
            filterF: TaskParser.parseByProject,
            filterP: title
        });

        calculateOffsets();  
    }

    const calculateOffsets = () => {
        offsetContainers.forEach(object => {
            object.element.textContent = (object.filterF(object.filterP)).filter(task => !task.done).length;
        });
    }

    const createProjectElement = (project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectsContainer.appendChild(projectDiv);

            const projectTitle = document.createElement('h2');
            projectTitle.classList.add('project-title-h2-size');
            projectTitle.textContent = project.title;
            projectDiv.appendChild(projectTitle);

            const rightSideDiv = document.createElement('div');
            rightSideDiv.classList.add('right-side-project-title');
            projectDiv.appendChild(rightSideDiv);

                const deleteDiv = document.createElement('div');
                deleteDiv.classList.add('delete-svg');
                rightSideDiv.appendChild(deleteDiv);

                const offset = document.createElement('div');
                offset.classList.add('show-number');
                offset.textContent = 0;
                rightSideDiv.appendChild(offset);

                hover(projectDiv, projectTitle, offset);
                addProjectToOffestContainer(offset, project.title);

                    const trashSvg = document.createElement('object');
                    trashSvg.setAttribute('type', 'image/svg+xml');
                    trashSvg.classList.add('trash-svg-project');
                    trashSvg.data = trashSvgVar;         
                    deleteDiv.appendChild(trashSvg);

                deleteDiv.addEventListener('click', () => {
                    while(projectsContainer.firstChild) {
                        projectsContainer.removeChild(projectsContainer.lastChild);
                    };
                    ProjectManager.deleteProject(project.title);
                    ProjectManager.getAllProjects().forEach(project => createProjectElement(project));
                    offsetContainers = offsetContainers.filter(object => object.filterParam !== project.title);

                    if(project.title === filterParam) {
                        filterFunc = TaskParser.parseByTime;
                        filterParam = homeCondition;
                    };

                    if (filterParam !== 'Notes') loadTaskPage(filterFunc(filterParam));
                });

        projectTitle.addEventListener('click', () => {
            loadTaskPage(TaskParser.parseByProject(project.title));
            filterFunc = TaskParser.parseByProject;
            filterParam = project.title;
        });
            
    }

    const autoResize = (element) => {
        element.style.height = '10px';
        element.style.height = element.scrollHeight + 'px';
    }

    const createNoteElement = () => {
        const notesTitle = document.createElement('h1');
        notesTitle.classList.add('title-h1-size');
        notesTitle.textContent = 'Notes';
        notesContainer.appendChild(notesTitle);

        hover(notesTitle, notesTitle);

        notesContainer.addEventListener('click', () => {
            loadNotesPage(NoteManager.getAllNotes());
            filterParam = notesTitle.textContent;
        });
    }

    const noteGUI = (note) => {
        var changed= {};

        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        tasksContainer.prepend(noteDiv);
        
            const deleteSvgDiv = document.createElement('div'); 
            deleteSvgDiv.classList.add('close-svg-div');
            noteDiv.appendChild(deleteSvgDiv);
            deleteSvgDiv.addEventListener('click', function () {
                NoteManager.deleteNote(note.title);
                loadNotesPage(NoteManager.getAllNotes());
            });

                const closeSvg = document.createElement('object');
                closeSvg.setAttribute('type', 'image/svg+xml');
                closeSvg.classList.add('close-x-svg');
                closeSvg.data = closeSvgVar;
                deleteSvgDiv.appendChild(closeSvg);

            const title = document.createElement('textarea');
            title.classList.add('note-title');
            title.value = note.title;
            changed.title = note.title;
            noteDiv.appendChild(title);
            title.addEventListener('input', function (e) {
                changed.title = e.target.value;
                StorageManager.updateOneNote(note, changed);
                note.editProperty('title', e.target.value);
                autoResize(this);
            });

            const details = document.createElement('textarea');
            details.classList.add('note-paragraph');
            details.value = note.details;
            changed.details = note.details;
            noteDiv.appendChild(details);
            details.addEventListener('input', function (e) {
                changed.details = e.target.value;
                StorageManager.updateOneNote(note, changed);
                note.editProperty('details', e.target.value);
                autoResize(this);
            });
    }

    const loadTaskPage = (taskarr) => {
        while(tasksContainer.firstChild) {
            tasksContainer.removeChild(tasksContainer.lastChild);
        };
        if(window.innerWidth > 600) {
            if(tasksContainer.classList.contains('flex-row')) tasksContainer.classList.remove('flex-row');
            tasksContainer.classList.add('flex-column');
        } else tasksContainer.classList.add('flex-row');
        taskarr.forEach(task => {
            createTaskElement(task);
        })
    }

    const loadNotesPage = (notesarr) => {
        while(tasksContainer.firstChild) {
            tasksContainer.removeChild(tasksContainer.lastChild);
        };
        if(tasksContainer.classList.contains('flex-column')) tasksContainer.classList.remove('flex-column');
        tasksContainer.classList.add('flex-row');
        notesarr.forEach(note => {
            noteGUI(note);
        })
    }

    const createDetailsDiv = (task) => { 
        const detailsDiv = document.createElement('dialog');
            detailsDiv.setAttribute('id', 'details-popup');
            body.appendChild(detailsDiv);
    
            const closeSvgDiv = document.createElement('div'); 
            closeSvgDiv.classList.add('close-svg-div');
            detailsDiv.appendChild(closeSvgDiv);
            closeSvgDiv.addEventListener('click', function () {
                fadeOut(detailsDiv); 
            });
    
            const closeSvg = document.createElement('object');
            closeSvg.setAttribute('type', 'image/svg+xml');
            closeSvg.classList.add('close-x-svg');
            closeSvg.data = closeSvgVar;
            closeSvgDiv.appendChild(closeSvg);
    
            const detailsDivTextWrapper = document.createElement('div');
            detailsDivTextWrapper.setAttribute('id', 'details-popup-text-wrapper');
            detailsDiv.appendChild(detailsDivTextWrapper);
    
                const detailsTitle = document.createElement('div');
                detailsTitle.setAttribute('id', 'details-popup-title');
                detailsTitle.textContent = task.title;
                detailsDivTextWrapper.appendChild(detailsTitle);
    
                const detailsAbout = document.createElement('div');
                detailsAbout.setAttribute('id', 'details-popup-about-wrapper');
                detailsDivTextWrapper.appendChild(detailsAbout);

                    const detailsDivBelongsTo = document.createElement('div');
                    detailsAbout.appendChild(detailsDivBelongsTo);
    
                        const detailsDivProject = document.createElement('span');
                        detailsDivProject.classList.add('details-sub-title', 'details-project');
                        detailsDivProject.textContent = 'Project: ';
                        detailsDivBelongsTo.appendChild(detailsDivProject);
                        
                        const spanProject = document.createElement('span');
                        (task.project === null) ? (spanProject.textContent = '-') : (spanProject.textContent = task.project);
                        detailsDivBelongsTo.appendChild(spanProject);
    
                    const detailsDivPriority = document.createElement('div');
                    detailsAbout.appendChild(detailsDivPriority);
    
                        const detailsDivUrgency = document.createElement('span');
                        detailsDivUrgency.classList.add('details-sub-title', 'details-urgency');
                        detailsDivUrgency.textContent = 'Priority: ';
                        detailsDivPriority.appendChild(detailsDivUrgency);
    
                        const spanPriority = document.createElement('span');
                        spanPriority.textContent = task.urgency;
                        detailsDivPriority.appendChild(spanPriority);
    
                    const detailsDivDueDate = document.createElement('div');
                    detailsAbout.appendChild(detailsDivDueDate);
    
                        const detailsDivDeadline = document.createElement('span');
                        detailsDivDeadline.classList.add('details-sub-title', 'details-deadline');
                        detailsDivDeadline.textContent = 'Due Date: ';
                        detailsDivDueDate.appendChild(detailsDivDeadline);
    
                        const spanDueDate = document.createElement('span');
                        spanDueDate.textContent = `${format(new Date(task.dueDate), 'MMMM')} ${format(new Date(task.dueDate), 'do')}, ${format(new Date(task.dueDate), 'yyyy')}`;
                        detailsDivDueDate.appendChild(spanDueDate);
    
                    const detailsDivDescription = document.createElement('div');
                    detailsAbout.appendChild(detailsDivDescription);
    
                        const detailsDivMore = document.createElement('span');
                        detailsDivMore.classList.add('details-sub-title', 'details-description');
                        detailsDivMore.textContent = 'Description: ';
                        detailsDivDescription.appendChild(detailsDivMore);
    
                        const spanDescription = document.createElement('span');
                        spanDescription.textContent = task.details;
                        detailsDivDescription.appendChild(spanDescription);

        return detailsDiv;
    };

    const createEditDiv = (task) => { 
        let changed = {};

        const editPopUp = document.createElement('dialog');
        editPopUp.classList.add('right-side-of-popup', 'edit-popup');
        body.appendChild(editPopUp);

        const closeSvgDiv = document.createElement('div'); 
        closeSvgDiv.classList.add('close-svg-div');
        editPopUp.appendChild(closeSvgDiv);
        closeSvgDiv.addEventListener('click', function () {
            fadeOut(editPopUp);                  
        });

            const closeSvg = document.createElement('object');
            closeSvg.setAttribute('type', 'image/svg+xml');
            closeSvg.classList.add('close-x-svg');
            closeSvg.data = closeSvgVar;                 
            closeSvgDiv.appendChild(closeSvg);

        const textAreaWrapper = document.createElement('div');
        textAreaWrapper.setAttribute('id', 'textarea-wrapper-div');
        editPopUp.appendChild(textAreaWrapper);

            const editTitleArea = document.createElement('textarea');
            editTitleArea.classList.add('title-input');
            editTitleArea.textContent = task.title;
            task.editProperty('title', editTitleArea.textContent);
            textAreaWrapper.appendChild(editTitleArea);
            editTitleArea.addEventListener('change', (e) => {
                changed.title = e.target.value;
            });

            const editDetailsArea= document.createElement('textarea');
            editDetailsArea.classList.add('details-input');
            editDetailsArea.textContent = task.details;
            textAreaWrapper.appendChild(editDetailsArea);
            editDetailsArea.addEventListener('change', (e) => {
                changed.details = e.target.value;
            });

        const datePriorityWrapper = document.createElement('div');
        datePriorityWrapper.classList.add('date-priority-wrapper-div', 'date-priority-wrapper-div-edit');
        editPopUp.appendChild(datePriorityWrapper);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.classList.add('date-priority-wrapper-div-child', 'date-priority-wrapper-div-child-edit');
            datePriorityWrapper.appendChild(datePriorityWrapperChild);

                const sharedDisplay1 = document.createElement('div');
                sharedDisplay1.classList.add('shared-display-flex-gap-10px', 'share-display-10-px-edit');
                datePriorityWrapperChild.appendChild(sharedDisplay1);

                    const h3DueDate = document.createElement('h3');
                    h3DueDate.textContent = 'Due Date';                
                    sharedDisplay1.appendChild(h3DueDate);

                    const editDateInput = document.createElement('input');
                    editDateInput.setAttribute('type', 'date');
                    editDateInput.classList.add('btn-div', 'todo-date-class');
                    editDateInput.valueAsDate = new Date(task.dueDate);
                    sharedDisplay1.appendChild(editDateInput);
                    editDateInput.addEventListener('change', (e) => {
                        changed.dueDate = e.target.value;
                    });                    

                const sharedDisplay2Parent = document.createElement('div');
                sharedDisplay2Parent.classList.add('shared-display-flex-gap-10px');
                sharedDisplay2Parent.classList.add('priority-div-parent', 'priority-div-parent-edit');
                datePriorityWrapperChild.appendChild(sharedDisplay2Parent);

                    const h3Priority = document.createElement('h3');
                    h3Priority.textContent = 'Priority:';
                    sharedDisplay2Parent.appendChild(h3Priority);

                    const sharedDisplay2ChildParent =  document.createElement('div');
                    sharedDisplay2ChildParent.classList.add('shared-display-flex-gap-10px');
                    sharedDisplay2ChildParent.classList.add('priority-divs-wrapper-parent', 'priority-divs-wrapper-parent-edit');
                    sharedDisplay2Parent.appendChild(sharedDisplay2ChildParent);

                        const sharedDisplay2ChildChild = document.createElement('div');
                        sharedDisplay2ChildChild.classList.add('shared-display-flex-gap-10px');
                        sharedDisplay2ChildChild.classList.add('priority-divs-wrapper-child', 'priority-divs-wrapper-child-edit');
                        sharedDisplay2ChildParent.appendChild(sharedDisplay2ChildChild);

                            let lowPriorityDiv = document.createElement('div');
                            lowPriorityDiv.classList.add('btn-div', 'priority-div', 'general-low-btn');
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplay2ChildChild.appendChild(lowPriorityDiv);


                            let mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'general-mid-btn');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplay2ChildChild.appendChild(mediumPriorityDiv);


                            let highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'general-high-btn');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplay2ChildChild.appendChild(highPriorityDiv);

                            let selected = task.urgency;

                            switch (selected) {
                                case "low":
                                    lowPriorityDiv.classList.add('general-low-btn-selected');
                                    break;
                                case "mid":
                                    mediumPriorityDiv.classList.add('general-medium-btn-selected');
                                    break;
                                case "high":
                                    highPriorityDiv.classList.add('general-high-btn-selected');
                                    break;
                            }

                            lowPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "mid":
                                        mediumPriorityDiv.classList.remove('general-medium-btn-selected');
                                        break;
                                    case "high":
                                        highPriorityDiv.classList.remove('general-high-btn-selected');
                                        break;
                                }
                                selected = "low";
                                lowPriorityDiv.classList.add('general-low-btn-selected');
                                changed.urgency = selected;
                            });

                            mediumPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "low":
                                        lowPriorityDiv.classList.remove('general-low-btn-selected');
                                        break;
                                    case "high":
                                        highPriorityDiv.classList.remove('general-high-btn-selected');
                                        break;
                                }
                                selected = "mid";
                                mediumPriorityDiv.classList.add('general-medium-btn-selected');
                                changed.urgency = selected;
                            });

                            highPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "mid":
                                        mediumPriorityDiv.classList.remove('general-medium-btn-selected');
                                        break;
                                    case "low":
                                        lowPriorityDiv.classList.remove('general-low-btn-selected');
                                        break;
                                }
                                selected = "high";
                                highPriorityDiv.classList.add('general-high-btn-selected');
                                changed.urgency = selected;
                            });

                    const confirmChangesBtn = document.createElement('div');
                    confirmChangesBtn.classList.add('btn-div', 'general-low-btn', 'confirm-changes-btn');
                    confirmChangesBtn.textContent = 'CONFIRM CHANGES';
                    sharedDisplay2ChildParent.appendChild(confirmChangesBtn);
                    confirmChangesBtn.addEventListener('click', function () { 
                        StorageManager.updateOneTask(task, changed);  
                        for (const property in changed) {
                            task.editProperty(property, changed[property]);
                        };
                        loadTaskPage(filterFunc(filterParam));
                        fadeOut(editPopUp);   
                    });

        return editPopUp;
    };

    const createTaskSide = (popup, parent) => {
        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.placeholder = 'Title: Pay bills';
            titleInput.required = true;                   
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

            const detailsInput = document.createElement('textarea');
            detailsInput.setAttribute('placeholder', 'Details: electricity, gas, insurance.');
            detailsInput.classList.add('details-input');
            inputWrapperDiv.appendChild(detailsInput);

        const datePriorityWrapperParent = document.createElement('div');
        datePriorityWrapperParent.classList.add('date-priority-wrapper-div', 'date-priority-wrapper-div-create');
        popup.appendChild(datePriorityWrapperParent);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.classList.add('date-priority-wrapper-div-child', 'date-priority-wrapper-div-child-create');
            datePriorityWrapperParent.appendChild(datePriorityWrapperChild);

                const sharedDisplayFlex1 = document.createElement('div');
                sharedDisplayFlex1.classList.add('shared-display-flex-gap-10px', 'date-div-992-px-mq');
                datePriorityWrapperChild.appendChild(sharedDisplayFlex1);

                    const h3DueDate = document.createElement('h3');
                    h3DueDate.textContent = 'Due Date:';
                    sharedDisplayFlex1.appendChild(h3DueDate);

                    const todoDateInput = document.createElement('input');
                    todoDateInput.setAttribute('type', 'date');
                    todoDateInput.classList.add('btn-div', 'todo-date-class');
                    sharedDisplayFlex1.appendChild(todoDateInput);

                const sharedDisplayFlex2Grandparent = document.createElement('div');
                sharedDisplayFlex2Grandparent.classList.add('shared-display-flex-gap-10px');
                sharedDisplayFlex2Grandparent.classList.add('priority-div-parent', 'priority-div-parent-create');
                datePriorityWrapperChild.appendChild(sharedDisplayFlex2Grandparent);

                    const h3Priority = document.createElement('h3');
                    h3Priority.textContent = 'Priority:';
                    sharedDisplayFlex2Grandparent.appendChild(h3Priority);

                    const sharedDisplayFlex3Parent = document.createElement('div');
                    sharedDisplayFlex3Parent.classList.add('shared-display-flex-gap-10px');
                    sharedDisplayFlex3Parent.classList.add('priority-divs-wrapper-parent', 'priority-divs-wrapper-parent-create');
                    sharedDisplayFlex2Grandparent.appendChild(sharedDisplayFlex3Parent);

                        const sharedDisplayFlex4Grandchild = document.createElement('div');
                        sharedDisplayFlex4Grandchild.classList.add('shared-display-flex-gap-10px');
                        sharedDisplayFlex4Grandchild.classList.add('priority-divs-wrapper-child', 'priority-divs-wrapper-child-create');
                        sharedDisplayFlex3Parent.appendChild(sharedDisplayFlex4Grandchild);

                            const lowPriorityDiv = document.createElement('div');
                            lowPriorityDiv.classList.add('btn-div', 'priority-div', 'general-low-btn');
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplayFlex4Grandchild.appendChild(lowPriorityDiv);
                            
                            const mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'general-mid-btn');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplayFlex4Grandchild.appendChild(mediumPriorityDiv);
                            
                            const highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'general-high-btn');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplayFlex4Grandchild.appendChild(highPriorityDiv);

                            let selected;

                            lowPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "mid":
                                        mediumPriorityDiv.classList.remove('general-medium-btn-selected');
                                        break;
                                    case "high":
                                        highPriorityDiv.classList.remove('general-high-btn-selected');
                                        break;
                                }
                                selected = "low";
                                lowPriorityDiv.classList.add('general-low-btn-selected');
                            });

                            mediumPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "low":
                                        lowPriorityDiv.classList.remove('general-low-btn-selected');
                                        break;
                                    case "high":
                                        highPriorityDiv.classList.remove('general-high-btn-selected');
                                        break;
                                }
                                selected = "mid";
                                mediumPriorityDiv.classList.add('general-medium-btn-selected');
                            });

                            highPriorityDiv.addEventListener('click', () => {
                                switch (selected) {
                                    case "mid":
                                        mediumPriorityDiv.classList.remove('general-medium-btn-selected');
                                        break;
                                    case "low":
                                        lowPriorityDiv.classList.remove('general-low-btn-selected');
                                        break;
                                }
                                selected = "high";
                                highPriorityDiv.classList.add('general-high-btn-selected');
                            });

                        const addToDoBtn = document.createElement('div');
                        addToDoBtn.classList.add('btn-div', 'general-low-btn', 'add-todo-btn');
                        addToDoBtn.textContent = 'ADD TO DO';                        
                        sharedDisplayFlex3Parent.appendChild(addToDoBtn);
                        addToDoBtn.addEventListener('click', () => {
                            let project = null;
                            if((filterParam !== 'Notes') && (typeof filterParam !== 'function')) project = filterParam;
                            TaskManager.addTask(titleInput.value, project, detailsInput.value, todoDateInput.value, selected);
                            calculateOffsets();
                            loadTaskPage(filterFunc(filterParam));
                            fadeOut(parent); 
                        });
    };

    const createProjectSide = (popup, parent) => {
        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'input');
            titleInput.setAttribute('placeholder', 'Title: School Project X');
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

        const rightSideSubmitBtnDiv = document.createElement('div');
        rightSideSubmitBtnDiv.classList.add('right-side-submit-btn-div');
        popup.appendChild(rightSideSubmitBtnDiv);

            const createProjectBtn = document.createElement('div');
            createProjectBtn.classList.add('btn-div', 'general-low-btn', 'create-project-note-btn');
            createProjectBtn.textContent = 'CREATE PROJECT';
            rightSideSubmitBtnDiv.appendChild(createProjectBtn);
            createProjectBtn.addEventListener('click', function() {
                ProjectManager.addProject(titleInput.value);
                while(projectsContainer.firstChild) {
                    projectsContainer.removeChild(projectsContainer.lastChild);
                };
                ProjectManager.getAllProjects().forEach(project => createProjectElement(project));
                fadeOut(parent); 
            });
    };

    const createNoteSide = (popup, parent) => {
        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'input');
            titleInput.setAttribute('placeholder', 'Title: when cooking, add sugar to soup');
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

            const detailsInput = document.createElement('textarea');
            detailsInput.setAttribute('placeholder', 'Details');
            detailsInput.classList.add('details-input');
            inputWrapperDiv.appendChild(detailsInput);

        const rightSideSubmitBtnDiv = document.createElement('div');
        rightSideSubmitBtnDiv.classList.add('right-side-submit-btn-div');
        popup.appendChild(rightSideSubmitBtnDiv);

            const createNoteBtn = document.createElement('div');
            createNoteBtn.classList.add('btn-div', 'general-low-btn', 'create-project-note-btn');
            createNoteBtn.textContent = 'CREATE NOTE';
            rightSideSubmitBtnDiv.appendChild(createNoteBtn);
            createNoteBtn.addEventListener('click', function() {
                NoteManager.addNote(titleInput.value, detailsInput.value);
                loadNotesPage(NoteManager.getAllNotes());
                fadeOut(parent); 
            });
    };

    const createNewDiv = () => {
        const createNewDiv = document.createElement('dialog');
        createNewDiv.setAttribute('id', 'create-new-task-popup');
        body.appendChild(createNewDiv);

            const tobBarCreateTodo = document.createElement('div');
            tobBarCreateTodo.classList.add('create-new-topbar');
            createNewDiv.appendChild(tobBarCreateTodo);

                const h1tobBarPopup = document.createElement('h1');
                h1tobBarPopup.textContent = 'Create a new...';
                h1tobBarPopup.style.color = 'white';
                tobBarCreateTodo.appendChild(h1tobBarPopup);

                const closeSvgDiv = document.createElement('div'); 
                closeSvgDiv.classList.add('close-svg-div');
                tobBarCreateTodo.appendChild(closeSvgDiv);
                closeSvgDiv.addEventListener('click', function () {
                    fadeOut(createNewDiv); 
                });

                    const closeSvg = document.createElement('object');
                    closeSvg.setAttribute('type', 'image/svg+xml');
                    closeSvg.classList.add('close-x-svg');
                    closeSvg.data = closeSvgVar;                        
                    closeSvgDiv.appendChild(closeSvg);

            const sidebarCreateTodo = document.createElement('div');
            sidebarCreateTodo.classList.add('create-new-sidebar');
            createNewDiv.appendChild(sidebarCreateTodo);

                const mainSidebarTextWrapper = document.createElement('div');
                mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
                sidebarCreateTodo.appendChild(mainSidebarTextWrapper);

                // create a new task option
                    const createTodoOption = document.createElement('div');
                    createTodoOption.classList.add('option-text');
                    createTodoOption.textContent = 'To Do';
                    mainSidebarTextWrapper.appendChild(createTodoOption);
                    onOptionTextHover(createTodoOption, 'mouseOn');

                    // create a new project option
                    const createProjectOption = document.createElement('div');
                    createProjectOption.classList.add('option-text');
                    createProjectOption.textContent = 'Project';
                    mainSidebarTextWrapper.appendChild(createProjectOption);
                    onOptionTextHover(createProjectOption, 'mouseOn');

                    // create a new note option
                    const createNoteOption = document.createElement('div');
                    createNoteOption.classList.add('option-text');
                    createNoteOption.textContent = 'Note';
                    mainSidebarTextWrapper.appendChild(createNoteOption);
                    onOptionTextHover(createNoteOption, 'mouseOn');

            let div = side(createNewDiv); 
            // default create task ui on the right side when popup opens
            createTaskSide(div, createNewDiv); 
            createTodoOption.classList.add('mouseOn');

            createTodoOption.addEventListener('click', function () {
                div.remove();
                div = side(createNewDiv);
                createTaskSide(div, createNewDiv);
            });

            createProjectOption.addEventListener('click', function () {
                div.remove();
                div = side(createNewDiv);
                createProjectSide(div, createNewDiv);
            });

            createNoteOption.addEventListener('click', function () {
                div.remove();
                div = side(createNewDiv);
                createNoteSide(div, createNewDiv);
            });

        return createNewDiv;
    };

    const createFilters = () => {

        var categoryArr = [
            {title: 'Home', condition: homeCondition},
            {title: 'Today', condition: isToday}, 
            {title: 'Tomorrow', condition: isTomorrow}, 
            {title: 'This Week', condition: isThisWeek}, 
            {title: 'This Month', condition: isThisMonth}
        ];

        categoryArr.forEach(object => {
            const category = document.createElement('div');
            category.classList.add('category', `${object.title.replace(/\s+/g, '')}`);
            categoryLinks.appendChild(category);

                const categoryTitle = document.createElement('h1');
                categoryTitle.classList.add('title-h1-size');
                categoryTitle.textContent = object.title;
                if((window.innerWidth <= 480) && (/\s/g.test(object.title))) categoryTitle.textContent = object.title.split(" ")[1];

                category.appendChild(categoryTitle);

                const offset = document.createElement('div');
                offset.classList.add('show-number');
                offset.textContent = 0;
                category.appendChild(offset);

                hover(category, category, offset);

                offsetContainers.push({
                    element: offset,
                    filterF: TaskParser.parseByTime,
                    filterP: object.condition
                });

            category.addEventListener('click', () => {
                loadTaskPage(TaskParser.parseByTime(object.condition));
                filterFunc = TaskParser.parseByTime;
                filterParam = object.condition;
            });
        });

        ProjectManager.getAllProjects().forEach(project => createProjectElement(project));
        createNoteElement();
    }

    const createPage = () => {
        const parent = document.createElement('div');
        parent.setAttribute('id', 'parent');
        body.appendChild(parent);

            const topBar = document.createElement('div');
            topBar.setAttribute('id', 'topbar');
            parent.appendChild(topBar);

            const child = document.createElement('div');
            child.setAttribute('id', 'child');
            parent.appendChild(child);

                const topbarSvgDiv = document.createElement('div');
                topbarSvgDiv.setAttribute('id', 'svg-div');
                topBar.appendChild(topbarSvgDiv);

                const titleDiv = document.createElement('div');
                titleDiv.setAttribute('id', 'title-div');
                topBar.appendChild(titleDiv);

                    const title = document.createElement('h1');
                    title.textContent = 'taskJournal';
                    titleDiv.appendChild(title);          

                const sidebar = document.createElement('div');
                sidebar.classList.add('side-bar');
                child.appendChild(sidebar);

                tasksContainer = document.createElement('div');
                tasksContainer.classList.add('tasks-container');
                child.appendChild(tasksContainer);

                    const linksContainer = document.createElement('div');
                    linksContainer.setAttribute('id', 'links-container');
                    sidebar.appendChild(linksContainer);

                        categoryLinks = document.createElement('div');
                        categoryLinks.classList.add('links-div', 'category-links');
                        linksContainer.appendChild(categoryLinks);

                        const projectsDiv = document.createElement('div');
                        projectsDiv.setAttribute('id', 'projects-div');
                        linksContainer.appendChild(projectsDiv);

                            const projectsTitle = document.createElement('h1');
                            projectsTitle.classList.add('title-h1-size');
                            projectsTitle.textContent = 'Projects';
                            projectsDiv.appendChild(projectsTitle);

                            projectsContainer = document.createElement('div');
                            projectsContainer.classList.add('links-div', 'projects-links');
                            projectsDiv.appendChild(projectsContainer);

                        notesContainer = document.createElement('div');
                        notesContainer.setAttribute('id', 'notes-div');
                        linksContainer.appendChild(notesContainer);

                    const addBtn = document.createElement('button');
                    addBtn.classList.add('add-btn', 'add-btn-main');
                    addBtn.textContent = '+';
                    sidebar.appendChild(addBtn);
                    addBtn.addEventListener('click', () => {
                        let modal = createNewDiv();
                        modal.showModal();
                    });

                    const bottomDiv = document.createElement('div');
                    bottomDiv.classList.add('bottom-bar');
                    child.appendChild(bottomDiv);

                    const addBtn2 = document.createElement('button');
                    addBtn2.classList.add('add-btn');
                    addBtn2.textContent = '+';
                    bottomDiv.appendChild(addBtn2);
                    addBtn2.addEventListener('click', () => {
                        let modal = createNewDiv();
                        modal.showModal();
                    });

                        const openSidebarDiv = document.createElement('div');
                        openSidebarDiv.classList.add('open-sidebar-div');
                        bottomDiv.appendChild(openSidebarDiv); 
                        openSidebarDiv.addEventListener('click', () => {
                            if (sidebar.classList.contains('show-sidebar')) {
                                sidebar.classList.remove('show-sidebar');
                                bodyScrollControls.disable();
                            } else {
                                sidebar.classList.add('show-sidebar');
                                bodyScrollControls.enable();
                            }
                        });

                            const openSidebarSvg = document.createElement('object');
                            openSidebarSvg.setAttribute('type', 'image/svg+xml');
                            openSidebarSvg.classList.add('open-sidebar-svg');
                            openSidebarSvg.data = openSidebarSvgReal;    
                            openSidebarDiv.appendChild(openSidebarSvg);   

        loadTaskPage(TaskManager.getAllTasks());
        createFilters();
        calculateOffsets();

    }

    return { createPage }

})();

window.addEventListener('onload', GUIManager.createPage());
