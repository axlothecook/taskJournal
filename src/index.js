import './style.css'
import editSvgVar from '../image/pen-to-square-regular.svg';
import trashSvgVar from '../image/trash-can-regular.svg';
import closeSvgVar from '../image/x-svg.svg';
import { format } from 'date-fns';

let wrapper = document.querySelector('#wrapper');

//tasks is object constructor
class TasksClass{
    constructor(title, description, deadline, urgency){
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.urgency = urgency;
        // this.finalized = false;  //why use this at all
    };
};

//category constructor
class CategoryClass{
    constructor(name, count, offset){
        this.name = name;
        this.count = count;
        this.offset = offset;
    };
};


const taskManager = (function () {
    let tasksArray = [];

    const addTask = (task) => {
        tasksArray.push(task);
        return console.log(tasksArray);
    };

    //do i need to pass it if not gonna use
    const removeTask = (task) => {
        // return tasksArray.splice((tasksArray.length - 1), 1);
        tasksArray.forEach((index) => {
            if(index === task){
                return tasksArray.splice(index, 1);
            };
        });
    };

    const getTask = (offset = 0) => {
        if (offset === 0) return tasksArray;

        //else calculate offset
    };

    return { addTask, removeTask, getTask };

})();

const categoryManager = (function () {
    let categoryArray = [];

    const addCategory = (category) => {
        return categoryArray.push(category);
    };

    //dont pass anything
    const removeCategory = () => {
        return categoryArray.remove([categoryArray.length - 1]);
    };

    const getCategory = (offset = 0) => {
        if (offset === 0) return categoryArray;

        //else calculate offset;
    };

    return { addCategory, removeCategory, getCategory };

})();

const Functionalities = (function () {
    const toggleButtonCheck = (checkbox, targetdiv, textdiv) => {
        if (checkbox.classList.contains('active')) {
            checkbox.classList.remove('active');
            targetdiv.style.opacity = '1';
            return textdiv.style.textDecoration = 'none';
        };
                    
        checkbox.classList.add('active');
        targetdiv.style.opacity = '0.5';
        return textdiv.style.textDecoration = 'line-through';
    };

    const changeBorderStyle = (task, targetdiv) => {
       return (task.urgency === 'low') ? targetdiv.classList.add('border-green') : (task.urgency === 'medium') ? targetdiv.classList.add('border-orange') : targetdiv.classList.add('border-red');
    };

    const deleteCurrentTodo = (task, targetdiv) => {
        targetdiv.remove();
        return taskManager.removeTask(task);
    }

    const fadeIn = (popup) => {  //doesnt really work
        let opacity = 0;
        // popup.style.opacity = '0'; //doesnt really work

        let interval = setInterval(function() {
            if (opacity < 1) {
            opacity += 0.2;
            popup.style.opacity = opacity;
            } else {
                clearInterval(interval);
                popup.showModal();
            };
        }, 30);
    };

    const fadeOut = (popup) => {
        let opacity = 1;
        let interval = setInterval(function() {
            if (opacity > 0) {
            opacity -= 0.3;
            popup.style.opacity = opacity;
            } else {
                clearInterval(interval);
                popup.remove();
            };
        }, 50);
    };

    const setInitialPriorityParent = () => {
        let divArray = [];

        return function resulting (div, classToSet) {
            console.log('setInitialPriority entered');

            let decidingVar = false;

            div.addEventListener('click', function (e) {
                divArray.push(div);

                if(divArray.length > 1) {
                    divArray[0].classList.remove(divArray[0].classList[3]);
                    divArray.splice(0, 1);
                };
                divArray[0].classList.add(classToSet);

                console.log('returning');
                console.log(divArray[0]);

                decidingVar = true;

                return divArray[0];
            });

            setTimeout(function () {
                console.log('inside settimeout func');
                if (decidingVar === false) {
                    console.log('deciding var remained false');
                    return divArray[0];
                };
            }, 2000);
            
        };

    };

    const setPriority = (targetTask, div, classToAdd) => {
        if(!div.classList.contains(targetTask.urgency)) return;

        let divToReturn = setInitialPriority(div, classToAdd);
        return divToReturn;

    };

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

    const createRightSideDiv = (parent) => {
        const rightSideOfPopup = document.createElement('div');
        rightSideOfPopup.classList.add('right-side-of-popup');
        parent.appendChild(rightSideOfPopup);
        return rightSideOfPopup;
    };

    const updateCurrentObject = (targetTask, changedTitle, changedDescription, changedDate, changedUrgency) => {
        targetTask.title = changedTitle;
        targetTask.description = changedDescription;
        targetTask.deadline = changedDate;
        targetTask.urgency = changedUrgency;

        return targetTask;
    };

    let setInitialPriority = setInitialPriorityParent();
    let onOptionTextHover = optionHoverParent();

    return { 
        toggleButtonCheck, 
        changeBorderStyle, 
        deleteCurrentTodo, 
        fadeIn, 
        fadeOut, 
        setInitialPriority, 
        setPriority, 
        onOptionTextHover, 
        createRightSideDiv, 
        updateCurrentObject 
    };
    
})();


const GUIManager = (function () {

    const createTodoOptionF = (popup, parent) => {
        let clickedDiv;

        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title: Pay bills');
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

            const detailsInput = document.createElement('input');
            detailsInput.setAttribute('type', 'text');
            detailsInput.setAttribute('placeholder', 'Details: electricity, gas, insurance.');
            detailsInput.classList.add('details-input');
            detailsInput.setAttribute('id', 'todo-details-input');
            inputWrapperDiv.appendChild(detailsInput);

        const datePriorityWrapperParent = document.createElement('div');
        datePriorityWrapperParent.setAttribute('id', 'date-priority-wrapper-div');
        popup.appendChild(datePriorityWrapperParent);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.setAttribute('id', 'date-priority-wrapper-div-child');
            datePriorityWrapperParent.appendChild(datePriorityWrapperChild);

                const sharedDisplayFlex1 = document.createElement('div');
                sharedDisplayFlex1.classList.add('shared-display-flex-gap-10px');
                sharedDisplayFlex1.setAttribute('id', 'due-date-div');
                datePriorityWrapperChild.appendChild(sharedDisplayFlex1);

                    const h3DueDate = document.createElement('h3');
                    h3DueDate.textContent = 'Due Date:';
                    sharedDisplayFlex1.appendChild(h3DueDate);

                    const todoDateInput = document.createElement('input');
                    todoDateInput.setAttribute('type', 'date');
                    todoDateInput.classList.add('btn-div', 'todo-date-class');
                    todoDateInput.setAttribute('id', 'new-todo-date-input');
                    sharedDisplayFlex1.appendChild(todoDateInput);

                const sharedDisplayFlex2Grandparent = document.createElement('div');
                sharedDisplayFlex2Grandparent.classList.add('shared-display-flex-gap-10px');
                sharedDisplayFlex2Grandparent.setAttribute('id', 'priority-div-parent');
                datePriorityWrapperChild.appendChild(sharedDisplayFlex2Grandparent);

                    const h3Priority = document.createElement('h3');
                    h3Priority.textContent = 'Priority:';
                    sharedDisplayFlex2Grandparent.appendChild(h3Priority);

                    const sharedDisplayFlex3Parent = document.createElement('div');
                    sharedDisplayFlex3Parent.classList.add('shared-display-flex-gap-10px');
                    sharedDisplayFlex3Parent.setAttribute('id', 'priority-divs-wrapper-parent');
                    sharedDisplayFlex2Grandparent.appendChild(sharedDisplayFlex3Parent);

                        const sharedDisplayFlex4Grandchild = document.createElement('div');
                        sharedDisplayFlex4Grandchild.classList.add('shared-display-flex-gap-10px');
                        sharedDisplayFlex4Grandchild.setAttribute('id', 'priority-divs-wrapper-child');
                        sharedDisplayFlex3Parent.appendChild(sharedDisplayFlex4Grandchild);

                            const lowPriorityDiv = document.createElement('div');
                            lowPriorityDiv.classList.add('btn-div', 'priority-div', 'low');
                            lowPriorityDiv.setAttribute('id', 'low-priority-div');
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplayFlex4Grandchild.appendChild(lowPriorityDiv);
                            clickedDiv = Functionalities.setInitialPriority(lowPriorityDiv, 'add-green');
                            
                            const mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'medium');
                            mediumPriorityDiv.setAttribute('id', 'medium-priority-div');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplayFlex4Grandchild.appendChild(mediumPriorityDiv);
                            clickedDiv = Functionalities.setInitialPriority(mediumPriorityDiv, 'add-orange');

                            const highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'high');
                            highPriorityDiv.setAttribute('id', 'high-priority-div');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplayFlex4Grandchild.appendChild(highPriorityDiv);
                            clickedDiv = Functionalities.setInitialPriority(highPriorityDiv, 'add-red');

                        const addToDoBtn = document.createElement('div');
                        addToDoBtn.classList.add('btn-div', 'general-green-btn', 'add-todo-btn');
                        addToDoBtn.textContent = 'ADD TO DO';
                        sharedDisplayFlex3Parent.appendChild(addToDoBtn);
                        addToDoBtn.addEventListener('click', function (e) {
                            factory.createTask(titleInput.value, detailsInput.value, todoDateInput.value, clickedDiv.classList[2]);
                            let closePrent = parent;
                            closePrent.remove();

                        });

        return popup;

    };

    const createProjectOptionF = (popup) => {
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
            createProjectBtn.classList.add('btn-div', 'general-green-btn', 'create-project-note-btn');
            createProjectBtn.textContent = 'CREATE PROJECT';
            rightSideSubmitBtnDiv.appendChild(createProjectBtn);

        return popup;

    };

    const createNoteOptionF = (popup) => {
        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'input');
            titleInput.setAttribute('placeholder', 'Title: when cooking, add sugar to soup');
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

            const detailsInput = document.createElement('input');
            detailsInput.setAttribute('placeholder', 'Details');
            detailsInput.classList.add('details-input');
            detailsInput.setAttribute('id', 'note-details-input');
            inputWrapperDiv.appendChild(detailsInput);

        const rightSideSubmitBtnDiv = document.createElement('div');
        rightSideSubmitBtnDiv.classList.add('right-side-submit-btn-div');
        popup.appendChild(rightSideSubmitBtnDiv);

            const createNoteBtn = document.createElement('div');
            createNoteBtn.classList.add('btn-div', 'general-green-btn', 'create-project-note-btn');
            createNoteBtn.textContent = 'CREATE NOTE';
            rightSideSubmitBtnDiv.appendChild(createNoteBtn);

        return popup;
    }

    const createNewTask = () => {
        const createNewTaskDiv = document.createElement('dialog');
        createNewTaskDiv.setAttribute('id', 'create-new-task-popup');
        wrapper.appendChild(createNewTaskDiv);

            const tobBarCreateTodo = document.createElement('div');
            tobBarCreateTodo.classList.add('topbar', 'topbar-create-todo-popup');
            createNewTaskDiv.appendChild(tobBarCreateTodo);

                const h1tobBarPopup = document.createElement('h1');
                h1tobBarPopup.textContent = 'Create a new...';
                h1tobBarPopup.style.color = 'white';
                tobBarCreateTodo.appendChild(h1tobBarPopup);

                const closeSvgDiv = document.createElement('div'); 
                closeSvgDiv.classList.add('close-svg-div');
                closeSvgDiv.addEventListener('click', function (e) {
                    Functionalities.fadeOut(createNewTaskDiv);
                });

                tobBarCreateTodo.appendChild(closeSvgDiv);

                    const closeSvg = document.createElement('object');
                    closeSvg.setAttribute('type', 'image/svg+xml');
                    closeSvg.classList.add('close-x-svg');
                    closeSvg.data = closeSvgVar;
                    closeSvgDiv.appendChild(closeSvg);

            const sidebarCreateTodo = document.createElement('div');
            sidebarCreateTodo.classList.add('sidebar', 'sidebar-create-todo-popup');
            createNewTaskDiv.appendChild(sidebarCreateTodo);

                const mainSidebarTextWrapper = document.createElement('div');
                mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
                sidebarCreateTodo.appendChild(mainSidebarTextWrapper);

                    const createTodoOption = document.createElement('div');
                    createTodoOption.classList.add('option-text', 'todo-option');
                    createTodoOption.textContent = 'To Do';
                    mainSidebarTextWrapper.appendChild(createTodoOption);
                    Functionalities.onOptionTextHover(createTodoOption, 'mouseOn');

                    //project and note option
                    const createProjectOption = document.createElement('div');
                    createProjectOption.classList.add('option-text', 'project-option');
                    createProjectOption.textContent = 'Project';
                    mainSidebarTextWrapper.appendChild(createProjectOption);
                    Functionalities.onOptionTextHover(createProjectOption, 'mouseOn');

                    const createNoteOption = document.createElement('div');
                    createNoteOption.classList.add('option-text', 'note-option');
                    createNoteOption.textContent = 'Note';
                    mainSidebarTextWrapper.appendChild(createNoteOption);
                    Functionalities.onOptionTextHover(createNoteOption, 'mouseOn');

            let div = Functionalities.createRightSideDiv(createNewTaskDiv);
            createTodoOptionF(div, createNewTaskDiv); //default
            createTodoOption.classList.add('mouseOn');

            createTodoOption.addEventListener('click', function (e) {
                div.remove();
                div = Functionalities.createRightSideDiv(createNewTaskDiv);
                createTodoOptionF(div, createNewTaskDiv);
            });

            createProjectOption.addEventListener('click', function (e) {
                div.remove();
                div = Functionalities.createRightSideDiv(createNewTaskDiv);
                createProjectOptionF(div, createNewTaskDiv);
            });

            createNoteOption.addEventListener('click', function (e) {
                div.remove();
                div = Functionalities.createRightSideDiv(createNewTaskDiv);
                createNoteOptionF(div, createNewTaskDiv);
            });

        return createNewTaskDiv;
    };

    const createLandingPage = () => {
        const topBar = document.createElement('div');
        topBar.setAttribute('id', 'topbar');
        wrapper.appendChild(topBar);

            const taskJournalh1 = document.createElement('h1');
            taskJournalh1.textContent = 'Task Journal';
            topBar.appendChild(taskJournalh1);

        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar');
        wrapper.appendChild(sideBar);

            const mainSidebarTextWrapper = document.createElement('div');
            mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
            sideBar.appendChild(mainSidebarTextWrapper);

                //this is where the rest of text goes

            const addBtn = document.createElement('div');
            addBtn.setAttribute('id', 'add-btn');
            addBtn.textContent = '+';
            sideBar.appendChild(addBtn);
            addBtn.addEventListener('click', function (e) {
                let popup = createNewTask();
                popup.showModal();

            });

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div', 'content-div-flex');
        contentDiv.setAttribute('id', 'main-content');
        wrapper.appendChild(contentDiv);

    };

    const createDetailsDiv = (targetTask) => {
        const detailsPopUp = document.createElement('dialog');
        detailsPopUp.setAttribute('id', 'details-popup');
        wrapper.appendChild(detailsPopUp);

        const closeSvgDiv = document.createElement('div'); 
        closeSvgDiv.classList.add('close-svg-div');
        closeSvgDiv.addEventListener('click', function (e) {
            Functionalities.fadeOut(detailsPopUp);
        });
        detailsPopUp.appendChild(closeSvgDiv);

        const closeSvg = document.createElement('object');
        closeSvg.setAttribute('type', 'image/svg+xml');
        closeSvg.classList.add('close-x-svg');
        closeSvg.data = closeSvgVar;
        closeSvgDiv.appendChild(closeSvg);

        const detailsPopupTextWrapper = document.createElement('div');
        detailsPopupTextWrapper.setAttribute('id', 'details-popup-text-wrapper');
        detailsPopUp.appendChild(detailsPopupTextWrapper);

            const detailsTitle = document.createElement('div');
            detailsTitle.setAttribute('id', 'details-popup-title');
            detailsTitle.textContent = targetTask.title;
            detailsPopupTextWrapper.appendChild(detailsTitle);

            const detailsAbout = document.createElement('div');
            detailsAbout.setAttribute('id', 'details-popup-about-wrapper');
            detailsPopupTextWrapper.appendChild(detailsAbout);

                const detailsPopupProject = document.createElement('div');
                detailsPopupProject.setAttribute('id', 'details-popup-project');
                detailsAbout.appendChild(detailsPopupProject);

                    const detailsPopupCategory = document.createElement('span');
                    detailsPopupCategory.setAttribute('id', 'details-popup-category');
                    detailsPopupCategory.textContent = 'Project: ';
                    detailsPopupProject.appendChild(detailsPopupCategory);

                    const spanCategory = document.createElement('span');
                    spanCategory.textContent = 'today';  //fix: input must be the project to which todo belongs to
                    detailsPopupProject.appendChild(spanCategory);

                //////
                const detailsPopupPriority = document.createElement('div');
                detailsPopupPriority.setAttribute('id', 'details-popup-priority');
                detailsAbout.appendChild(detailsPopupPriority);

                    const detailsPopupUrgency = document.createElement('span');
                    detailsPopupUrgency.setAttribute('id', 'details-popup-urgency');
                    detailsPopupUrgency.textContent = 'Priority: ';
                    detailsPopupPriority.appendChild(detailsPopupUrgency);

                    const spanPriority = document.createElement('span');
                    spanPriority.textContent = targetTask.urgency;
                    detailsPopupPriority.appendChild(spanPriority);

                //////
                const detailsPopupDueDate = document.createElement('div');
                detailsPopupDueDate.setAttribute('id', 'details-popup-due-date');
                detailsAbout.appendChild(detailsPopupDueDate);

                    const detailsPopupDeadline = document.createElement('span');
                    detailsPopupDeadline.setAttribute('id', 'details-popup-deadline');
                    detailsPopupDeadline.textContent = 'Due Date: ';
                    detailsPopupDueDate.appendChild(detailsPopupDeadline);

                    const spanDueDate = document.createElement('span');
                    spanDueDate.textContent = `${format(new Date(targetTask.deadline), 'MMMM')} ${format(new Date(targetTask.deadline), 'do')}, ${format(new Date(targetTask.deadline), 'yyyy')}`;
                    detailsPopupDueDate.appendChild(spanDueDate);

                //////
                const detailsPopupDescription = document.createElement('div');
                detailsPopupDueDate.setAttribute('id', 'details-popup-due-date');
                detailsAbout.appendChild(detailsPopupDescription);

                    const detailsPopupMore = document.createElement('span');
                    detailsPopupMore.setAttribute('id', 'details-popup-more');
                    detailsPopupMore.textContent = 'Description: ';
                    detailsPopupDescription.appendChild(detailsPopupMore);

                    const spanDescription = document.createElement('span');
                    spanDescription.textContent = targetTask.description;
                    detailsPopupDescription.appendChild(spanDescription);

        return detailsPopUp;

    };

    const displayDetailsDiv = (targetTask) => {
        let popUp = createDetailsDiv(targetTask);
        Functionalities.fadeIn(popUp);

    };

    const createEditDiv = (targetTask) => {
        let currentDiv;

        const editPopUp = document.createElement('dialog');
        editPopUp.classList.add('right-side-of-popup', 'edit-popup');
        wrapper.appendChild(editPopUp);

        const closeSvgDiv = document.createElement('div'); 
        closeSvgDiv.classList.add('close-svg-div');
        closeSvgDiv.addEventListener('click', function (e) {
            Functionalities.fadeOut(editPopUp);
        });
        editPopUp.appendChild(closeSvgDiv);

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
            editTitleArea.textContent = targetTask.title;
            textAreaWrapper.appendChild(editTitleArea);

            const editDetailsArea= document.createElement('textarea');
            editDetailsArea.classList.add('details-input');
            editDetailsArea.setAttribute('id', 'todo-details-input');
            editDetailsArea.textContent = targetTask.description;
            textAreaWrapper.appendChild(editDetailsArea);

        const datePriorityWrapper = document.createElement('div');
        datePriorityWrapper.setAttribute('id', 'date-priority-wrapper-div');
        editPopUp.appendChild(datePriorityWrapper);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.setAttribute('id', 'date-priority-wrapper-div-child');
            datePriorityWrapper.appendChild(datePriorityWrapperChild);

                const sharedDisplay1 = document.createElement('div');
                sharedDisplay1.classList.add('shared-display-flex-gap-10px');
                sharedDisplay1.setAttribute('id', 'due-date-div');
                datePriorityWrapperChild.appendChild(sharedDisplay1);

                    const h3DueDate = document.createElement('h3');
                    h3DueDate.textContent = 'Due Date:';
                    sharedDisplay1.appendChild(h3DueDate);

                    const editDateInput = document.createElement('input');
                    editDateInput.setAttribute('type', 'date');
                    editDateInput.classList.add('btn-div', 'todo-date-class');
                    editDateInput.setAttribute('id', 'new-todo-date-input');
                    editDateInput.valueAsDate = new Date(targetTask.deadline);
                    sharedDisplay1.appendChild(editDateInput);

                const sharedDisplay2Parent = document.createElement('div');
                sharedDisplay2Parent.classList.add('shared-display-flex-gap-10px');
                sharedDisplay2Parent.setAttribute('id', 'priority-div-parent');
                datePriorityWrapperChild.appendChild(sharedDisplay2Parent);

                    const h3Priority = document.createElement('h3');
                    h3Priority.textContent = 'Priority:';
                    sharedDisplay2Parent.appendChild(h3Priority);

                    const sharedDisplay2ChildParent =  document.createElement('div');
                    sharedDisplay2ChildParent.classList.add('shared-display-flex-gap-10px');
                    sharedDisplay2ChildParent.setAttribute('id', 'priority-divs-wrapper-parent');
                    sharedDisplay2Parent.appendChild(sharedDisplay2ChildParent);

                        const sharedDisplay2ChildChild = document.createElement('div');
                        sharedDisplay2ChildChild.classList.add('shared-display-flex-gap-10px');
                        sharedDisplay2ChildChild.setAttribute('id', 'priority-divs-wrapper-child');
                        sharedDisplay2ChildParent.appendChild(sharedDisplay2ChildChild);

                            let lowPriorityDiv = document.createElement('div');
                            lowPriorityDiv.classList.add('btn-div', 'priority-div', 'low');
                            lowPriorityDiv.setAttribute('id', 'low-priority-div');
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplay2ChildChild.appendChild(lowPriorityDiv);
                            Functionalities.setPriority(targetTask, lowPriorityDiv, 'add-green');

                            currentDiv = Functionalities.setInitialPriority(lowPriorityDiv, 'add-green');
                            console.log('current div (green): ');
                            console.log(currentDiv);

                            let mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'medium');
                            mediumPriorityDiv.setAttribute('id', 'medium-priority-div');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplay2ChildChild.appendChild(mediumPriorityDiv);
                            Functionalities.setPriority(targetTask, mediumPriorityDiv, 'add-orange');

                            currentDiv = Functionalities.setInitialPriority(mediumPriorityDiv, 'add-orange');
                            console.log('current div (orange): ');
                            console.log(currentDiv);

                            let highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'high');
                            highPriorityDiv.setAttribute('id', 'high-priority-div');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplay2ChildChild.appendChild(highPriorityDiv);
                            Functionalities.setPriority(targetTask, highPriorityDiv, 'add-red');

                            currentDiv = Functionalities.setInitialPriority(highPriorityDiv, 'add-red');
                            console.log('current div (red): ');
                            console.log(currentDiv);

                    const confirmChangesBtn = document.createElement('div');
                    confirmChangesBtn.classList.add('btn-div', 'general-green-btn', 'confirm-changes-btn');
                    confirmChangesBtn.textContent = 'CONFIRM CHANGES';
                    confirmChangesBtn.addEventListener('click', function (e) {   
                        console.log('currentDiv.classList[2]:');
                        console.log(currentDiv.classList[2]);       
                        console.log(currentDiv);          
                        Functionalities.updateCurrentObject(targetTask, editTitleArea.textContent, editDetailsArea.textContent, editDateInput.valueAsDate, currentDiv.classList[2]);
                        Functionalities.fadeOut(editPopUp);
                    });
                    sharedDisplay2ChildParent.appendChild(confirmChangesBtn);

        return editPopUp;

    };

    const displayEditPopup = (targetTask) => {
        let popUp = createEditDiv(targetTask);
        // add fade in / fade out animation
        popUp.showModal();

    };

    const createTask = (task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');
        Functionalities.changeBorderStyle(task, taskDiv);

            const leftSide = document.createElement('div');
            leftSide.classList.add('left-side');
            taskDiv.appendChild(leftSide);

                const checkboxDiv = document.createElement('div');
                checkboxDiv.classList.add('checkbox-div');
                leftSide.appendChild(checkboxDiv);

                const taskTextDiv = document.createElement('div');
                taskTextDiv.classList.add('task-text-div');
                taskTextDiv.textContent = task.title;
                leftSide.appendChild(taskTextDiv);

                checkboxDiv.addEventListener('click', function (e) {
                    Functionalities.toggleButtonCheck(checkboxDiv, taskDiv, taskTextDiv);
                });

            const rightSide = document.createElement('div');
            rightSide.classList.add('right-side');
            taskDiv.appendChild(rightSide);

                const detailsDiv = document.createElement('div');
                detailsDiv.classList.add('btn-div', 'general-green-btn', 'details-div');
                detailsDiv.textContent = 'DETAILS';
                detailsDiv.addEventListener('click', function (e) {
                    displayDetailsDiv(task);
                });
                rightSide.appendChild(detailsDiv);

                const dateDisplayDiv = document.createElement('div');
                dateDisplayDiv.classList.add('date-display-div');
                dateDisplayDiv.textContent = `${format(new Date(task.deadline), 'MMM')} ${format(new Date(task.deadline), 'do')}`;                
                rightSide.appendChild(dateDisplayDiv);

                const editSvgDiv = document.createElement('div');
                editSvgDiv.classList.add('edit-svg-div');
                editSvgDiv.addEventListener('click', function (e) {
                    displayEditPopup(task);
                });
                rightSide.appendChild(editSvgDiv);

                    const editSvg = document.createElement('object');
                    editSvg.setAttribute('type', 'image/svg+xml');
                    editSvg.classList.add('svg-div');
                    editSvg.data = editSvgVar;
                    editSvgDiv.appendChild(editSvg);

                const trashSvgDiv = document.createElement('div');
                trashSvgDiv.classList.add('trash-svg-div');
                trashSvgDiv.addEventListener('click', function(e) {
                    Functionalities.deleteCurrentTodo(task, taskDiv);
                });
                rightSide.appendChild(trashSvgDiv);

                    const trashSvg = document.createElement('object');
                    trashSvg.setAttribute('type', 'image/svg+xml');
                    trashSvg.classList.add('svg-div');
                    trashSvg.data = trashSvgVar;
                    trashSvgDiv.appendChild(trashSvg);

        return taskDiv;

    };

    const displayTask = (task) => {
        document.querySelector('#main-content').appendChild(createTask(task));

    };

    //do not pass tasks array
    const createAllTasks = () => {};

    const createCategory = (category) => {};

    const displayCategory = (category) => {};

    //do not pass category array
    const createAllCategories = () => {};

    return { createLandingPage, createTask, displayTask, createAllTasks, createCategory, displayCategory, createAllCategories };

})();

const factory = (function () {
    const createTask = (title, description, deadline, urgency) => {
       let newTask = new TasksClass(title, description, deadline, urgency);
       taskManager.addTask(newTask);
       GUIManager.createTask(newTask);
       GUIManager.displayTask(newTask);
    };

    const createCategory = (name, count, offset) => {
        let newCategory = new CategoryClass(name, count, offset);
        categoryManager.addCategory(newCategory);
        GUIManager.createCategory(newCategory);
        GUIManager.displayCategory(newCategory);
    };

    return { createTask, createCategory };

})();


window.addEventListener('onload', GUIManager.createLandingPage());

// factory.createTask('buy books', 'blablabla', '2024-12-25', 'high');
// factory.createTask('tiger', 'olaolaola', 'Nov 25th', 'medium');