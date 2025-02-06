import '/src/css/style.css';
import { format } from 'date-fns';
import closeSvgVar from '/image/x-svg.svg';
import trashSvgVar from '/image/trash-can-regular.svg';
import editSvgVar from '/image/pen-to-square-regular.svg';
import {
    projectFactory,
    categoryFactory,
    noteFactory
} from './redone.js';

import {
    Toggle,
    Change,
    FadeOut,
    popupRightSide,
    mouseAction,
    ChangeBtnColor
} from './additionalGui.js';

let wrapper = document.querySelector('#wrapper');

const CreateNew = (function() {
    const createNew = () => {
        const createNewDiv = document.createElement('dialog');
        createNewDiv.setAttribute('id', 'create-new-task-popup');
        wrapper.appendChild(createNewDiv);

            const tobBarCreateTodo = document.createElement('div');
            tobBarCreateTodo.classList.add('topbar', 'topbar-create-todo-popup');
            createNewDiv.appendChild(tobBarCreateTodo);

                const h1tobBarPopup = document.createElement('h1');
                h1tobBarPopup.textContent = 'Create a new...';
                h1tobBarPopup.style.color = 'white';
                tobBarCreateTodo.appendChild(h1tobBarPopup);

                const closeSvgDiv = document.createElement('div'); 
                closeSvgDiv.classList.add('close-svg-div');
                tobBarCreateTodo.appendChild(closeSvgDiv);
                closeSvgDiv.addEventListener('click', function (e) {
                    FadeOut.fadeOut(createNewDiv); 
                });

                    const closeSvg = document.createElement('object');
                    closeSvg.setAttribute('type', 'image/svg+xml');
                    closeSvg.classList.add('close-x-svg');
                    closeSvg.data = closeSvgVar;                        
                    closeSvgDiv.appendChild(closeSvg);

            const sidebarCreateTodo = document.createElement('div');
            sidebarCreateTodo.classList.add('sidebar', 'sidebar-create-todo-popup');
            createNewDiv.appendChild(sidebarCreateTodo);

                const mainSidebarTextWrapper = document.createElement('div');
                mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
                sidebarCreateTodo.appendChild(mainSidebarTextWrapper);

                    const createTodoOption = document.createElement('div');
                    createTodoOption.classList.add('option-text', 'todo-option');
                    createTodoOption.textContent = 'To Do';
                    mainSidebarTextWrapper.appendChild(createTodoOption);
                    mouseAction.onOptionTextHover(createTodoOption, 'mouseOn');

                    //project and note option
                    const createProjectOption = document.createElement('div');
                    createProjectOption.classList.add('option-text', 'project-option');
                    createProjectOption.textContent = 'Project';
                    mainSidebarTextWrapper.appendChild(createProjectOption);
                    mouseAction.onOptionTextHover(createProjectOption, 'mouseOn');

                    const createNoteOption = document.createElement('div');
                    createNoteOption.classList.add('option-text', 'note-option');
                    createNoteOption.textContent = 'Note';
                    mainSidebarTextWrapper.appendChild(createNoteOption);
                    mouseAction.onOptionTextHover(createNoteOption, 'mouseOn');

            let div = popupRightSide.side(createNewDiv); 
            CreateTodo.todo(div, createNewDiv); //default
            createTodoOption.classList.add('mouseOn');

            createTodoOption.addEventListener('click', function (e) {
                div.remove();
                div = popupRightSide.side(createNewDiv);
                CreateTodo.todo(div, createNewDiv);
            });

            createProjectOption.addEventListener('click', function (e) {
                div.remove();
                div = popupRightSide.side(createNewDiv);
                CreateProject.project(div, createNewDiv);
            });

            createNoteOption.addEventListener('click', function (e) {
                div.remove();
                div = popupRightSide.side(createNewDiv);
                CreateNote.note(div, createNewDiv);
            });

        return createNewDiv;
    };

    return { createNew };
    
})();


const CreateTodo = (function() {
    const todo = (popup, parent) => {
        const inputWrapperDiv = document.createElement('div');
        inputWrapperDiv.classList.add('input-wrapper-div');
        popup.appendChild(inputWrapperDiv);

            const titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Title: Pay bills');
            titleInput.classList.add('title-input');
            inputWrapperDiv.appendChild(titleInput);

            const detailsInput = document.createElement('textarea');
            detailsInput.setAttribute('placeholder', 'Details: electricity, gas, insurance.');
            detailsInput.classList.add('details-input');
            inputWrapperDiv.appendChild(detailsInput);

        const datePriorityWrapperParent = document.createElement('div');
        datePriorityWrapperParent.setAttribute('id', 'date-priority-wrapper-div');
        popup.appendChild(datePriorityWrapperParent);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.setAttribute('id', 'date-priority-wrapper-div-child');
            datePriorityWrapperParent.appendChild(datePriorityWrapperChild);

                const sharedDisplayFlex1 = document.createElement('div');
                sharedDisplayFlex1.classList.add('shared-display-flex-gap-10px');
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
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplayFlex4Grandchild.appendChild(lowPriorityDiv);
                            // clickedDiv = changeBtnColor.initiate();
                            
                            const mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'mid');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplayFlex4Grandchild.appendChild(mediumPriorityDiv);
                            // clickedDiv = changeBtnColor.initiate();
                            
                            const highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'high');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplayFlex4Grandchild.appendChild(highPriorityDiv);
                            // clickedDiv = changeBtnColor.initiate();

                            let checker;
                            const btnArr = [lowPriorityDiv, mediumPriorityDiv, highPriorityDiv];
                            btnArr.forEach(btn => {
                                btn.addEventListener('click', () => {
                                    if(btn.classList.contains('low')) {
                                        btn.classList.add('add-green');
                                        if (checker != undefined) checker.classList.remove(checker.classList[3]);
                                    } else if (btn.classList.contains('mid')) {
                                        btn.classList.add('add-orange');
                                        if (checker != undefined) checker.classList.remove(checker.classList[3]);
                                    } else if(btn.classList.contains('high')) {
                                        btn.classList.add('add-red');
                                        if (checker != undefined) checker.classList.remove(checker.classList[3]);
                                    };
                                    checker = btn;
                                });
                            });
                            

                        const addToDoBtn = document.createElement('div');
                        addToDoBtn.classList.add('btn-div', 'general-green-btn', 'add-todo-btn');
                        addToDoBtn.textContent = 'ADD TO DO';
                        sharedDisplayFlex3Parent.appendChild(addToDoBtn);
                        addToDoBtn.addEventListener('click', function (e) {
                            let object = {
                                title: titleInput.value,
                                details: detailsInput.value,
                                duedate: todoDateInput.value,
                                priority: checker.classList[2]
                            }
                            Manager.create(object);
                            FadeOut.fadeOut(parent); 
                        });
        return popup;
    };

    return { todo };
    
})();

const CreateProject = (function() {
    const project = (popup, parent) => {
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
            createProjectBtn.addEventListener('click', function() {
                projectFactory.createProject(titleInput.value);
                CreateCategories.callCategoryCreation();
                FadeOut.fadeOut(parent); 
            });

        return popup;
    };

    return { project };
    
})();

const CreateNote = (function() {
    const note = (popup, parent) => {
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
            createNoteBtn.classList.add('btn-div', 'general-green-btn', 'create-project-note-btn');
            createNoteBtn.textContent = 'CREATE NOTE';
            rightSideSubmitBtnDiv.appendChild(createNoteBtn);
            createNoteBtn.addEventListener('click', function() {
                noteFactory.createNote(titleInput.value, detailsInput.value);
                CreatePanel.notePanel();
                CreateCategories.callCategoryCreation();
                FadeOut.fadeOut(parent); 
            });

        return popup;
    };

    return { note };
    
})();

//creates details div about each task
const DetailsDiv = (function() {
    const details = (target) => { 
        const detailsPopUp = document.createElement('dialog');
            detailsPopUp.setAttribute('id', 'details-popup');
            wrapper.appendChild(detailsPopUp);
    
            const closeSvgDiv = document.createElement('div'); 
            closeSvgDiv.classList.add('close-svg-div');
            detailsPopUp.appendChild(closeSvgDiv);
            closeSvgDiv.addEventListener('click', function () {
                FadeOut.fadeOut(detailsPopUp); 
            });
    
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
                detailsTitle.textContent = target.title;
                detailsPopupTextWrapper.appendChild(detailsTitle);
    
                const detailsAbout = document.createElement('div');
                detailsAbout.setAttribute('id', 'details-popup-about-wrapper');
                detailsPopupTextWrapper.appendChild(detailsAbout);
    
                    //////
                    const detailsPopupPriority = document.createElement('div');
                    detailsAbout.appendChild(detailsPopupPriority);
    
                        const detailsPopupUrgency = document.createElement('span');
                        detailsPopupUrgency.setAttribute('id', 'details-popup-urgency');
                        detailsPopupUrgency.textContent = 'Priority: ';
                        detailsPopupPriority.appendChild(detailsPopupUrgency);
    
                        const spanPriority = document.createElement('span');
                        spanPriority.textContent = target.priority;
                        detailsPopupPriority.appendChild(spanPriority);
    
                    //////
                    const detailsPopupDueDate = document.createElement('div');
                    detailsAbout.appendChild(detailsPopupDueDate);
    
                        const detailsPopupDeadline = document.createElement('span');
                        detailsPopupDeadline.setAttribute('id', 'details-popup-deadline');
                        detailsPopupDeadline.textContent = 'Due Date: ';
                        detailsPopupDueDate.appendChild(detailsPopupDeadline);
    
                        const spanDueDate = document.createElement('span');
                        spanDueDate.textContent = `${format(new Date(target.dueDate), 'MMMM')} ${format(new Date(target.dueDate), 'do')}, ${format(new Date(target.dueDate), 'yyyy')}`;
                        detailsPopupDueDate.appendChild(spanDueDate);
    
                    //////
                    const detailsPopupDescription = document.createElement('div');
                    detailsAbout.appendChild(detailsPopupDescription);
    
                        const detailsPopupMore = document.createElement('span');
                        detailsPopupMore.setAttribute('id', 'details-popup-more');
                        detailsPopupMore.textContent = 'Description: ';
                        detailsPopupDescription.appendChild(detailsPopupMore);
    
                        const spanDescription = document.createElement('span');
                        spanDescription.textContent = target.details;
                        detailsPopupDescription.appendChild(spanDescription);
    
        return detailsPopUp;
    };

    return { details };
    
})();

const EditDiv = (function() {
    const edit = (target) => { 
        const editPopUp = document.createElement('dialog');
        editPopUp.classList.add('right-side-of-popup', 'edit-popup');
        wrapper.appendChild(editPopUp);

        const closeSvgDiv = document.createElement('div'); 
        closeSvgDiv.classList.add('close-svg-div');
        editPopUp.appendChild(closeSvgDiv);
        closeSvgDiv.addEventListener('click', function () {
            FadeOut.fadeOut(editPopUp);                  
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
            editTitleArea.textContent = target.title;
            textAreaWrapper.appendChild(editTitleArea);

            const editDetailsArea= document.createElement('textarea');
            editDetailsArea.classList.add('details-input');
            editDetailsArea.textContent = target.details;
            textAreaWrapper.appendChild(editDetailsArea);

        const datePriorityWrapper = document.createElement('div');
        datePriorityWrapper.setAttribute('id', 'date-priority-wrapper-div');
        editPopUp.appendChild(datePriorityWrapper);

            const datePriorityWrapperChild = document.createElement('div');
            datePriorityWrapperChild.setAttribute('id', 'date-priority-wrapper-div-child');
            datePriorityWrapper.appendChild(datePriorityWrapperChild);

                const sharedDisplay1 = document.createElement('div');
                sharedDisplay1.classList.add('shared-display-flex-gap-10px');
                datePriorityWrapperChild.appendChild(sharedDisplay1);

                    const h3DueDate = document.createElement('h3');
                    h3DueDate.textContent = 'Due Date';                
                    sharedDisplay1.appendChild(h3DueDate);

                    const editDateInput = document.createElement('input');
                    editDateInput.setAttribute('type', 'date');
                    editDateInput.classList.add('btn-div', 'todo-date-class');
                    editDateInput.valueAsDate = new Date(target.dueDate);
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
                            lowPriorityDiv.textContent = 'LOW';
                            sharedDisplay2ChildChild.appendChild(lowPriorityDiv);


                            let mediumPriorityDiv = document.createElement('div');
                            mediumPriorityDiv.classList.add('btn-div', 'priority-div', 'mid');
                            mediumPriorityDiv.textContent = 'MEDIUM';
                            sharedDisplay2ChildChild.appendChild(mediumPriorityDiv);


                            let highPriorityDiv = document.createElement('div');
                            highPriorityDiv.classList.add('btn-div', 'priority-div', 'high');
                            highPriorityDiv.textContent = 'HIGH';
                            sharedDisplay2ChildChild.appendChild(highPriorityDiv);

                            let selectedBtn;
                            if(target.priority === 'low') {
                                lowPriorityDiv.classList.add('add-green');
                                selectedBtn = lowPriorityDiv.classList[2];
                            } else if(target.priority === 'mid') {
                                mediumPriorityDiv.classList.add('add-orange');
                                selectedBtn = mediumPriorityDiv.classList[2];
                            } else if(target.priority === 'high') {
                                highPriorityDiv.classList.add('add-red');
                                selectedBtn = highPriorityDiv.classList[2];
                            };

                            let btn1 = {
                                btn: lowPriorityDiv,
                                classToAdd: 'add-green',
                            };
                            let btn2 = {
                                btn: mediumPriorityDiv,
                                classToAdd: 'add-orange',
                            };
                            let btn3 = {
                                btn: highPriorityDiv,
                                classToAdd: 'add-red',
                            };

                            ChangeBtnColor.set(btn1, btn2, btn3);

                    const confirmChangesBtn = document.createElement('div');
                    confirmChangesBtn.classList.add('btn-div', 'general-green-btn', 'confirm-changes-btn');
                    confirmChangesBtn.textContent = 'CONFIRM CHANGES';
                    sharedDisplay2ChildParent.appendChild(confirmChangesBtn);
                    confirmChangesBtn.addEventListener('click', function () {   
                        let classToPass = ChangeBtnColor.returnClickedBtn();
                        if (classToPass != undefined) selectedBtn = classToPass;
                        let object = {
                            target: target,
                            title: editTitleArea.value,
                            details: editDetailsArea.value,
                            dueDate: editDateInput.value,
                            priority: selectedBtn
                        }
                        Manager.manageTaskUpdate(object);
                        FadeOut.fadeOut(editPopUp);   
                    });
                    

        return editPopUp;
    
    };

    return { edit };
    
})();

// each task
const TaskGUI = (function() {          
    const task = (target) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');
        Change.borderStyle(target, taskDiv); 

            const leftSide = document.createElement('div');
            leftSide.classList.add('left-side');
            taskDiv.appendChild(leftSide);

                const checkboxDiv = document.createElement('div');
                checkboxDiv.classList.add('checkbox-div');
                leftSide.appendChild(checkboxDiv);

                const taskTextDiv = document.createElement('div');
                taskTextDiv.classList.add('task-text-div');
                taskTextDiv.textContent = target.title;
                leftSide.appendChild(taskTextDiv);

                checkboxDiv.addEventListener('click', function (e) {
                    let object = {
                        checkboxDiv: checkboxDiv,
                        taskDiv: taskDiv,
                        taskTextDiv: taskTextDiv,
                        createCategories: CreateCategories.callCategoryCreation,
                        deleteTask: categoryFactory.deleteOneTask,
                        task: target,
                        addTaskToCategory: categoryFactory.addTask,
                        addTaskToProject: projectFactory.createTask
                    }
                    Toggle.button(object); 
                });

            const rightSide = document.createElement('div');
            rightSide.classList.add('right-side');
            taskDiv.appendChild(rightSide);

                const detailsDiv = document.createElement('div');
                detailsDiv.classList.add('btn-div', 'general-green-btn', 'details-div');
                detailsDiv.textContent = 'DETAILS';
                rightSide.appendChild(detailsDiv);
                detailsDiv.addEventListener('click', function () {
                    let modal = DetailsDiv.details(target);
                    modal.showModal();
                    // DetailsDiv.details(target);
                });

                const dateDisplayDiv = document.createElement('div');
                dateDisplayDiv.classList.add('date-display-div');
                dateDisplayDiv.textContent = `${format(new Date(target.dueDate), 'MMM')} ${format(new Date(target.dueDate), 'do')}`;       
                rightSide.appendChild(dateDisplayDiv);

                const editSvgDiv = document.createElement('div');
                editSvgDiv.classList.add('edit-svg-div');
                rightSide.appendChild(editSvgDiv);
                editSvgDiv.addEventListener('click', function () {
                    let modal = EditDiv.edit(target);;
                    modal.showModal();
                });

                    const editSvg = document.createElement('object');
                    editSvg.setAttribute('type', 'image/svg+xml');
                    editSvg.classList.add('svg-div');
                    editSvg.data = editSvgVar;                         
                    editSvgDiv.appendChild(editSvg);

                const trashSvgDiv = document.createElement('div');
                trashSvgDiv.classList.add('trash-svg-div');
                rightSide.appendChild(trashSvgDiv);
                trashSvgDiv.addEventListener('click', function(e) {
                    categoryFactory.deleteOneTask(target);
                    FadeOut.fadeOut(taskDiv); 
                    CreateCategories.callCategoryCreation();
                });

                    const trashSvg = document.createElement('object');
                    trashSvg.setAttribute('type', 'image/svg+xml');
                    trashSvg.classList.add('svg-div');
                    trashSvg.data = trashSvgVar;         
                    trashSvgDiv.appendChild(trashSvg);

        return taskDiv;
    };

    return { task };
    
})();

const NoteGui = (function() {
    const create = (target) => {
        const noteItself = document.createElement('div');
        noteItself.classList.add('example-note');
        
            const closeSvgDiv = document.createElement('div'); 
            closeSvgDiv.classList.add('close-svg-div');
            noteItself.appendChild(closeSvgDiv);
            closeSvgDiv.addEventListener('click', function (e) {
                noteFactory.deleteNote(target);
                FadeOut.fadeOut(noteItself); 
                CreatePanel.notePanel();
                CreateCategories.callCategoryCreation();
            });

                const closeSvg = document.createElement('object');
                closeSvg.setAttribute('type', 'image/svg+xml');
                closeSvg.classList.add('close-x-svg');
                closeSvg.data = closeSvgVar;
                closeSvgDiv.appendChild(closeSvg);

            const title = document.createElement('textarea');
            title.classList.add('note-title');
            title.value = target.title;
            noteItself.appendChild(title);
            title.addEventListener('input', function (e) {
                noteFactory.editNote(target, 'title', e.target.value);
                CreatePanel.autoResize(this);
            });

            const details = document.createElement('textarea');
            details.classList.add('note-paragraph');
            details.value = target.details;
            noteItself.appendChild(details);
            details.addEventListener('input', function (e) {
                noteFactory.editNote(target, 'details', e.target.value);
                CreatePanel.autoResize(this);
            });

        return noteItself;

    };

    return { create }
})();

const Manager = (function(){
    var callerVar;
    var parentVar;
    var objectVar;

    const fetchCaller = (parent, caller, object) => {
        callerVar = caller;
        parentVar = parent;
        objectVar = object;
    }

    const create = (object) => {
        categoryFactory.createTask(object.title, object.details, object.duedate, object.priority);
        //this condition is for when the user creates a note without clicking on specific category / project
        if(callerVar != undefined) {
            if(callerVar.classList.contains('project')){
                projectFactory.createTask(objectVar, object.title, object.details, object.duedate, object.priority);
                CreatePanel.generalPanel(parentVar, projectFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
            } else CreatePanel.generalPanel(parentVar, categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
        } else {
            objectVar = categoryFactory.getCategories()[0];
            parentVar = document.querySelector('.content-div');
            CreatePanel.generalPanel(parentVar, categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
        }
        CreateCategories.callCategoryCreation();
    }

    const manageTaskUpdate = (object) => {
        categoryFactory.updateTask(object.target, 'title', object.title);
        categoryFactory.updateTask(object.target, 'details', object.details);
        categoryFactory.updateTask(object.target, 'dueDate', object.dueDate);
        categoryFactory.updateTask(object.target, 'priority', object.priority);

        updatePanelAfterTaskEdit();
    }

    const updatePanelAfterTaskEdit = () => {
        if(callerVar != undefined) {
            if(callerVar.classList.contains('project')){
                CreatePanel.generalPanel(parentVar, projectFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
            } else CreatePanel.generalPanel(parentVar, categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
        } else {
            objectVar = categoryFactory.getCategories()[0];
            parentVar = document.querySelector('.content-div');
            CreatePanel.generalPanel(parentVar, categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
        }
        CreateCategories.callCategoryCreation();
    }

    return {
        fetchCaller,
        create,
        manageTaskUpdate,
        updatePanelAfterTaskEdit
    }

})();


const CreatePanel = (function() {
    var parentVar;

    const addListener = (parent, caller, func1, func2, keyword, object) => {
        caller.addEventListener('click', function (e) {
            Manager.fetchCaller(parent, caller, object);
            generalPanel(parent, func1, func2, keyword);
        });
    };

    const generalPanel = (parent, func1, func2, keyword) => {
        if (parent != 0) parentVar = parent;
        if (func1 === undefined) return;
        let obj = {
            array: func1,
            function: func2
        };
        if(obj.array === 0) {
            clearPanel(parentVar);
            emptyMsg(parentVar, keyword);
            return;
        };
        clearPanel(parentVar);
        parentVar.classList.add('content-div-flex');
        let arr = obj.array;
        arr.forEach(item => {
            parent.prepend(obj.function(item));
        });
    };

    const emptyMsg = (parent, target) => {
        const emptyMsgContainer = document.createElement('div');
        emptyMsgContainer.classList.add('empty-msg-container');
        parent.appendChild(emptyMsgContainer);

            const h1 = document.createElement('h1');
            h1.classList.add('sidebar-text-h3');
            h1.textContent = `Oh! Looks like there are no ${target} here right now. Wanna add one?`;
            emptyMsgContainer.appendChild(h1);

            const addBtn = document.createElement('div');
            addBtn.setAttribute('id', 'add-btn');
            addBtn.textContent = '+';
            emptyMsgContainer.appendChild(addBtn);
            addBtn.addEventListener('click', function (e) {
                let modal = CreateNew.createNew();
                modal.showModal();
            });

            return emptyMsgContainer;
    };

    const createColumns = (parent) => {
        // removes all content in parent
        clearPanel(parent);
        parent.classList.add('content-div-grid');

        const column1 = document.createElement('div');
        column1.classList.add('grid-col', 'grid-col--1');
        parent.appendChild(column1);

        const column2 = document.createElement('div');
        column2.classList.add('grid-col', 'grid-col--2');
        parent.appendChild(column2);

        const column3 = document.createElement('div');
        column3.classList.add('grid-col', 'grid-col--3');
        parent.appendChild(column3);

        const column4 = document.createElement('div');
        column4.classList.add('grid-col', 'grid-col--4');
        parent.appendChild(column4);

        let object = {
            parentvar: parent,
            column1Var: column1,
            column2Var: column2,
            column3Var: column3,
            column4Var: column4,
            counter: 0
        };

        return object;

    };

    const appendToPanel = (note, obj) => {
        if (obj.counter === 0) {
            obj.column1Var.appendChild(note);
            obj.counter++;
        } else if (obj.counter === 1) {
            obj.column2Var.appendChild(note);
            obj.counter++;
        } else if (obj.counter === 2) {
            obj.column3Var.appendChild(note);
            obj.counter++;
        } else if (obj.counter === 3) {
            obj.column4Var.appendChild(note);
            obj.counter = 0;
        };
    };

    const autoResize = (element) => {
        element.style.height = '10px';
        element.style.height = element.scrollHeight + 'px';
    }

    const clearPanel = (parent) => {
        var parentHolder = parent;
        if(parentHolder.classList.length > 1) {
            while(parentHolder.firstChild) {
                parentHolder.removeChild(parentHolder.lastChild);
            };
            parentHolder.classList.remove(parentHolder.classList[1]);
        } else parentHolder.textContent = '';
        return parentHolder;
    };

    const notePanel = (parent = 0) => {
        if (parent != 0) parentVar = parent;
        let obj = {
            array: noteFactory.getAll(),
            function: NoteGui.create
        };
        if(obj.array === 0) {
            clearPanel(parentVar);
            emptyMsg(parentVar, 'notes');
            return;
        };                            
        let arr = obj.array;
        arr = arr.reverse();
        let object = createColumns(parentVar);
        arr.forEach(item => appendToPanel(obj.function(item), object));
        let titles = document.getElementsByClassName('note-title');
        let details = document.getElementsByClassName('note-paragraph');
        let elements = [...titles, ...details]
        for (var item of elements) { 
            autoResize(item);
        };
    };

    return { 
        addListener,
        autoResize,
        emptyMsg,
        createColumns,
        appendToPanel,
        generalPanel,
        clearPanel,
        notePanel 
    };
    
})();

const CreateProjects = (function(){
    const parentProject = (contentDiv, parent) => {
        const projectsDiv = document.createElement('div');
        projectsDiv.setAttribute('id', 'projects-div');
        parent.appendChild(projectsDiv);

            const mainSidebarTextNoHover = document.createElement('div');
            mainSidebarTextNoHover.setAttribute('id', 'main-sidebar-text-no-hover');
            projectsDiv.appendChild(mainSidebarTextNoHover);

                const projectSideText = document.createElement('div');
                projectSideText.setAttribute('id', 'sidebar-text-h1-project');
                projectSideText.textContent = 'Projects';
                mainSidebarTextNoHover.appendChild(projectSideText);
            
            const subtypeWrapper = document.createElement('div');
            subtypeWrapper.setAttribute('id', 'subtype-wrapper');
            projectsDiv.appendChild(subtypeWrapper);

            var projectArr = projectFactory.getProjects();
            if (projectArr.length === undefined) return;
            projectArr.forEach(object => {
                project(contentDiv, subtypeWrapper, object);
            });
    }

    const project = (contentDiv, parent, object) => {
        const subtypeSidebarText = document.createElement('div');
        subtypeSidebarText.classList.add('subtype-sidebar-text', 'project', `${object.title}`);
        parent.appendChild(subtypeSidebarText);

            const project = document.createElement('div');
            project.classList.add('sidebar-text-h3');
            project.textContent = object.title;
            subtypeSidebarText.appendChild(project);

                const holder = document.createElement('div');
                holder.classList.add('holder-right-div');
                subtypeSidebarText.appendChild(holder);

                    const trashSvgDiv = document.createElement('div');
                    trashSvgDiv.classList.add('holder-trash-svg-div');
                    holder.appendChild(trashSvgDiv);
                    trashSvgDiv.addEventListener('click', function(e) {
                        projectFactory.deleteProject(object);
                        FadeOut.fadeOut(subtypeSidebarText); 
                        CreateCategories.callCategoryCreation();
                    });

                        const trashSvg = document.createElement('object');
                        trashSvg.setAttribute('type', 'image/svg+xml');
                        trashSvg.classList.add('holder-trash-svg');
                        trashSvg.data = trashSvgVar;       
                        trashSvgDiv.appendChild(trashSvg);

                    const offset = document.createElement('div');
                    offset.classList.add('show-number');
                    offset.textContent = object.offset;
                    holder.appendChild(offset);


            mouseAction.hover(subtypeSidebarText, project, offset);
            CreatePanel.addListener(contentDiv, subtypeSidebarText, projectFactory.getAll(object.title), TaskGUI.task, 'tasks', object);

        return subtypeSidebarText;
    }

    return {
        parentProject,
        project
    }

})();

// creates clickable div with note h1 and counter for notes
const CreateNotePanel = (function(){
    const create = (contentDiv, parent) => {
        const notesContainer = document.createElement('div');
        notesContainer.classList.add('main-sidebar-text', 'sidebar-text-h1', 'notes-div');
        notesContainer.textContent = 'Notes';
        parent.appendChild(notesContainer);

            const offsetNotes = document.createElement('div');
            offsetNotes.setAttribute('id', 'show-number-project');
            offsetNotes.textContent = noteFactory.listLength();
            notesContainer.appendChild(offsetNotes);
            
            mouseAction.hover(notesContainer, notesContainer, offsetNotes);
            notesContainer.addEventListener('click', function (e) {                      
                CreatePanel.notePanel(contentDiv);
            });

        return notesContainer;
    }

    return { create }
    
})();

const CreateCategories = (function(){
    var parentVar;
    var wrapperVar;
    var mainSidebarTextWrapperVar;

    const callCategoryCreation = (parent, wrapper, mainSidebarTextWrapper) => {
        if(parent != undefined) parentVar = parent;
        if(mainSidebarTextWrapper != undefined) mainSidebarTextWrapperVar = mainSidebarTextWrapper;
        if(wrapper != undefined) {
            wrapperVar = wrapper;
        } else wrapperVar.textContent = '';
        const categoryArray = categoryFactory.getCategories();
        categoryArray.forEach(category => {
            let div = create(wrapperVar, category);
            CreatePanel.addListener(parentVar, div, categoryFactory.getAll(category.title), TaskGUI.task, 'tasks', category);
        });
        CreateProjects.parentProject(parentVar, mainSidebarTextWrapperVar);
        CreateNotePanel.create(parentVar, mainSidebarTextWrapperVar);
    };

    const create = (parentWrapper, object) => {
        const category = document.createElement('div');
        category.classList.add('main-sidebar-text', 'sidebar-text-h1', 'category');
        category.textContent = object.title;
        parentWrapper.appendChild(category);

            const offset = document.createElement('div');
            offset.classList.add('show-number');
            offset.textContent = object.offset;
            category.appendChild(offset);

            mouseAction.hover(category, category, offset);

        return category;
    }

    return {
        callCategoryCreation,
        create
    }
})();


const CreateLandingPage = (function() {
    const page = () => {
        const topBar = document.createElement('div');
        topBar.setAttribute('id', 'topbar');
        wrapper.appendChild(topBar);

            const taskJournalh1 = document.createElement('h1');
            taskJournalh1.textContent = 'Task Journal';
            topBar.appendChild(taskJournalh1);

        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar');
        wrapper.appendChild(sideBar);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');
        wrapper.appendChild(contentDiv);

            const mainSidebarTextWrapper = document.createElement('div');
            mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
            sideBar.appendChild(mainSidebarTextWrapper);

                // creates all 5 categories with all the projects and the notes section
                CreateCategories.callCategoryCreation(contentDiv, mainSidebarTextWrapper, mainSidebarTextWrapper);

                // appends a default for when website loads
                CreatePanel.generalPanel(contentDiv, categoryFactory.getAll('Home'), TaskGUI.task, 'tasks');

            const addBtn = document.createElement('div');
            addBtn.setAttribute('id', 'add-btn');
            addBtn.textContent = '+';
            sideBar.appendChild(addBtn);
            addBtn.addEventListener('click', function () {
                let modal = CreateNew.createNew();
                modal.showModal();
            });

    };

    return { page };

})();

window.addEventListener('onload', CreateLandingPage.page());