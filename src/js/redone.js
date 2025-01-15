//TODO: make category list get updated

import { setDate } from 'date-fns';
import '/src/css/style.css'; //should not be here
// let wrapper = document.querySelector('#wrapper');

// model for task, project and note class
class NodeMaker {
    constructor(title) {
        this.title = title;
        this.current = title;
        this.previous = null;
        this.next = null;
    }

    // gets a specific property
    getProperty(property) { return this[property]; }

    // redefines a property's value
    setProperty(property, value = false) { 
        if(property !== 'offset'){
            if(property === 'title') this.current = value;
            this[property] = value;
        } else {
            if (value) {
                this.offset += 1;
            } else this.offset -= 1;
        };
    }

    // gets item before current one
    getPrevious() { return this.previous; }

    // replaces item to one before current one
    setPrevious(task) { this.previous = task; }

    // gets item after current one
    getNext() { return this.next; }

    // replaces item to one after current one
    setNext(task) { this.next = task; }
}

// creates Task object 
class Task extends NodeMaker {
    constructor(title, details, dueDate, priority) {
        super(title);
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getProperty(property) { return super.getProperty(property); }

    setProperty(property, value) { super.setProperty(property, value); }

    getPrevious() { return super.getPrevious(); }

    setPrevious(task) { super.setPrevious(task); }

    getNext() { return super.getNext(); }

    setNext(task) { super.setNext(task); }

}

// creates Project object 
class Project extends NodeMaker{
    constructor(title) {
        super(title);
        this.offset = 0;
        this.taskList = new TaskList();
    }

    getProperty(property) { return super.getProperty(property); }

    setProperty(property, value) { super.setProperty(property, value); }

    getPrevious() { return super.getPrevious(); } 

    setPrevious(project) { super.setPrevious(project); }

    getNext() { return super.getNext(); }

    setNext(project) { super.setNext(project); }

}

// creates Note object
class Note extends NodeMaker{
    constructor(title, details) {
        super(title);
        this.details = details;
    }

    getProperty(property) { return super.getProperty(property); }

    setProperty(property, value) { super.setProperty(property, value); }

    getPrevious() { return super.getPrevious(); }

    setPrevious(note) { super.setPrevious(note); }

    getNext() { return super.getNext(); }

    setNext(note) { super.setNext(note); }
    
}

// creates Note object
class Category extends NodeMaker{
    constructor(title, start = 0, finish = 0) {
        super(title);
        this.offset = 0;
        this.start = start;
        this.finish = finish;
        this.taskList = new TaskList();
    }

    getOffset() { return this.offset; }

    setOffset(command) { 
        (command === 'increase') ? this.offset += 1 : this.offset -= 1;
    }

    getPrevious() { return super.getPrevious(); } 

    setPrevious(task) { super.setPrevious(task); }

    getNext() { return super.getNext(); }

    setNext(task) { super.setNext(task); }

}

// model for lists
class ListMaker {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // edits passed item's specific information
    edit(target, property, value) {
        target.setProperty(property, value); 
    }

    // gets list length:
    length(head, tail) {
        if (head === null) return 0;

        let jumper = head;
        let counter = 1;
        while(jumper !== tail) {
            jumper = jumper.getNext();
            counter++;
        }
        if(head === tail) counter = 1;

        return counter;
    } 

    // gets all items of a list
    getAll(func, head, tail) {
        if (func === 0) return 0;

        let arr = [];
        let jumper = head;
        while((jumper !== tail)) {
            arr.push(jumper);
            jumper = jumper.getNext();
        };
        arr.push(tail);
        return arr;
    }

    // delets passed item from parent list
    deleteThis(func, head, tail, value) {
        if (func === 0) return 0;

        if(head === tail) {
            head = null;
            tail = null;
            return;
        }

        let jumper = head;
        while((jumper != tail) && (jumper != value)) {
            jumper = jumper.getNext();
        };

        // gets before and after items
        let previousToOriginal = jumper.getPrevious();
        let afterOriginal = jumper.getNext();

        // edits before and after items
        if (jumper === head) {
            afterOriginal.setPrevious(null);
        } else if (jumper === tail) {
            previousToOriginal.setNext(null);
        } else {
            previousToOriginal.setNext(afterOriginal);
            afterOriginal.setPrevious(previousToOriginal);
        };
    }

}

// manages all task objects
class TaskList extends ListMaker {
    constructor() { super(); }

    // creates a new item and adds it to the task list 
    push = (title, details, dueDate, priority) => { 
        let task = new Task(title, details, dueDate, priority);
        if (this.tail === null) this.head = task;
        if (this.tail !== null) {
            task.setPrevious(this.tail);
            this.tail.setNext(task);
        };
        this.tail = task;
        return task;
    } 

    // edits a tasks' specific information
    edit = (item, property, value) => { 
        super.edit(item, property, value);
    }

    // edits a tasks' specific information
    callToEdit = (item, property, value) => { 
        categoryFactory.updateTask(item, property, value);
        this.edit(item, property, value);
    }

    // task list length
    length = () => {
        let num = super.length(this.head, this.tail);
        return num;
    } 

    // gets all task list items
    getAllTasks = () => {
        let arr = super.getAll(this.length(), this.head, this.tail);
        return arr; 
    }

    // delets a task from the task list and gui
    deleteThis = (value) => { 
        super.deleteThis(this.length(), this.head, this.tail, value);
        
        if(this.head === value) {
            this.head = this.head.getNext();
        };
        if (this.tail === value) {
            this.tail = this.tail.getPrevious();
        };
    } 

};

// manages all project objects
class ProjectList extends ListMaker {
    constructor() { super(); }

    // creates a new project and adds it to the project list
    push = (title) => { 
        let project = new Project(title); 
        if (this.tail === null) this.head = project;

        if (this.tail !== null) {
            project.setPrevious(this.tail);
            this.tail.setNext(project);
        }
        this.tail = project;
        return project;
    } 

    // increase / decreases offset based on creation or deletion of a task
    editOffset = (project, command) => {
        if (command === 'reduce') { // decreases
            project.setProperty('offset');
        } else project.setProperty('offset', true); // increases
    };

    // project list length
    length = () => {
        let num = super.length(this.head, this.tail);
        return num;
    }; 

    // gets all projects from the project list
    getAllProjects = () => {
        let arr = super.getAll(this.length(), this.head, this.tail);
        return arr;
    }

    // deletes a project from the list
    deleteThis = (value) => { 
        super.deleteThis(this.length(), this.head, this.tail, value);

        console.log('project deleted');
        
        if(this.head === value) {
            this.head = this.head.getNext();
        };
        if (this.tail === value) {
            this.tail = this.tail.getPrevious();
        };
    } 

};

// manages all note objects
class NoteList extends ListMaker {
    constructor() { 
        super(); 
        this.offset = 0;
    }

    // creates a new note and adds it to note list
    push = (title, details) => { 
        let note = new Note(title, details); 
        if (this.tail === null) this.head = note;

        if (this.tail !== null) {
            note.setPrevious(this.tail);
            this.tail.setNext(note);
        }
        this.tail = note;
        return note;
    } 

    // edits a note's specific information
    edit = (target, property, value) => { 
        super.edit(target, property, value);
    }

    // increase / decreases offset based on creation or deletion of a note
    editOffset = (command) => {
        if (command === 'reduce') { 
            this.offset -= 1;
        } else this.offset += 1; 
    };

    // note list length
    length = () => {
        let num = super.length(this.head, this.tail);
        return num;
    }

    getAllNotes = () => {
        let arr = super.getAll(this.length(), this.head, this.tail);
        return arr;
    }

    // deletes a note from note list
    deleteThis = (value) => { 
        super.deleteThis(this.length(), this.head, this.tail, value);
        
        if(this.head === value) {
            this.head = this.head.getNext();
        };
        if (this.tail === value) {
            this.tail = this.tail.getPrevious();
        };
    } 

};

//manages all category objects
class CategoryList extends ListMaker {
    constructor() { super(); }

    push = (title, start, finish) => { 
        let category = new Category(title, start, finish); 
        if (this.tail === null) this.head = category;

        if (this.tail !== null) {
            category.setPrevious(this.tail);
            this.tail.setNext(category);
        }
        this.tail = category;
        return category;
    } 


    editOffset = (target, task, command) => {
        if (command === 'increase') {
            target.taskList.push(task.title, task.details, task.dueDate, task.priority);
        };
        target.setOffset(command);
    }

    // edits passed item's specific information
    editList = (task, command) => {        
        this.editOffset(this.head, task, command);
        let juan = task.dueDate;
        let today = this.head.getNext().start;
        let tomorrow = timeFactory.tomorrow();
        if(juan.getFullYear() != timeFactory.year()) {
            return;
        } else {
            if((timeFactory.monthFirstDay() <= juan) && (juan <= timeFactory.monthLastDay())){
                this.editOffset(this.tail, task, command);
                if((timeFactory.monday() <= juan) && (juan <= timeFactory.sunday())){
                    this.editOffset(this.tail.getPrevious(), task, command);
                    if ((juan.getDate() < today.getDate()) || (juan.getDate() > today.getDate())) {
                        if ((juan.getDate() < tomorrow.getDate()) || (juan.getDate() > tomorrow.getDate())) {
                            return;
                        } else {
                            this.editOffset(this.tail.getPrevious().getPrevious(), task, command);
                            return;
                        }
                    } else {
                        this.editOffset(this.head.getNext(), task, command);
                        return;
                    };
                };
            };
        };
    };

    // gets list length
    length = () => {
        let num = super.length(this.head, this.tail);
        return num;
    }; 

    // gets all items of a list
    getAllCategories = () => {
        let arr = super.getAll(this.length(), this.head, this.tail);
        return arr;
    }

}

// these 3 function exist so that a task can be created internally, added to project, created in gui and displayed in one place
const projectFactory = (function(){
    var projectList = new ProjectList();

    // creates a task, adds it to its parent task list and increases offset of parent project & category
    const createTask = (project, title, details, dueDate, priority) => {
        var newTask = project.taskList.push(title, details, dueDate, priority);
        projectList.editOffset(project, 'increase');
        categoryFactory.addTask(newTask, 'increase');
        // create in gui and display it
        return newTask;
    };

    // creates a project and adds it to the project list
    const createProject = (title) => {
        let newProject = projectList.push(title);
        return newProject;
        // create in gui and display it
    };

    // finds the task in all task lists it resides in, deletes it and reduces offset of all parent projects
    const deleteTask = (task) => {
        let projectsArray = projectList.getAllProjects();
        if (projectsArray.length === undefined) return;
        projectsArray.forEach(itemProject => {
            let tasksArray = itemProject.taskList.getAllTasks();
            if (tasksArray.length === undefined) return;
            tasksArray.forEach(item => {
                if (item.title === task) {
                    itemProject.taskList.deleteThis(item);
                    projectList.editOffset(itemProject, 'reduce');
                    categoryFactory.deleteOneTask(task);
                    console.log('task in project found and deleted!');
                };
            });
        });
    };

    const deleteProject = (project) => {
        let projectArray = projectList.getAllProjects();
        if (projectArray.length === undefined) return;
        if(projectArray.includes(project)) {
            categoryFactory.deleteAllTasks(project);
            projectList.deleteThis(project);
            console.log('project found and deleted!');
        };
    };

    //delete after finishing project
    const displayProjectList = () => { 
        console.log('projectList:');
        console.log(projectList);
    };

    return {
        createTask,
        createProject,
        deleteTask,
        deleteProject,
        displayProjectList
    };

})();

const categoryFactory = (function(){
    var categoryList = new CategoryList();

    // creates a category and adds it to the category list
    const createCategory = () => {
        var home = categoryList.push('Home'); //if both 0 then add all
        var today = categoryList.push('Today', timeFactory.today());
        var tomorrow = categoryList.push('Tomorrow', timeFactory.tomorrow());
        var thisWeek = categoryList.push('This Week', timeFactory.monday(), timeFactory.sunday());
        var thisMonth = categoryList.push('This Month', timeFactory.monthFirstDay(), timeFactory.monthLastDay());

        return {
            home,
            today,
            tomorrow,
            thisWeek,
            thisMonth
        };
        
        // create in gui and display it
    }

    const createTask = (title, details, dueDate, priority) => {
        var newTask = new Task(title, details, dueDate, priority);
        categoryFactory.addTask(newTask, 'increase');
        return newTask;
    }

    const addTask = (task, command) => {
        categoryList.editList(task, command);
    }

    const updateTask = (target, property, value) => {
        const categoryArray = categoryList.getAllCategories();
        categoryArray.forEach(category => {
            let categoryItemsArr = category.taskList.getAllTasks();
            if (categoryItemsArr.length === undefined) return;
            for(let i = 0; i < categoryItemsArr.length; i++) {
                let counter = categoryItemsArr[i];
                if((counter.title == target.title) && (counter.dueDate == target.dueDate)) {
                    category.taskList.edit(counter, property, value);
                }; 
            };
        });
    };

    const deleteOneTask = (task) => {
        let categoryArray = categoryList.getAllCategories();
        if (categoryArray.length === undefined) return;

        categoryArray.forEach(itemCategory => {
            let itemArray = itemCategory.taskList.getAllTasks();
            if (itemArray.length === undefined) return;
            itemArray.forEach(item => {
                if (item.title === task) {
                    itemCategory.taskList.deleteThis(item);
                    categoryList.editOffset(itemCategory, task, 'reduce');
                    console.log('task in category found and deleted!');
                };
            });
        });
    };

    const deleteAllTasks = (project) => {
        const categoryArray = categoryList.getAllCategories();
        if (categoryArray.length === undefined) return;
        const projectArray = project.taskList.getAllTasks();
        if (projectArray.length === undefined) return;
        projectArray.forEach(projectItem => {
            categoryArray.forEach(category => {
                let categoryItemsArr = category.taskList.getAllTasks();
                if (categoryItemsArr.length === undefined) return;
                categoryItemsArr.forEach((item1) => {
                    if((item1.title === projectItem.title) && (item1.dueDate === projectItem.dueDate)) {
                        category.taskList.deleteThis(item1);
                        categoryList.editOffset(category, item1, 'reduce');
                    }; 
                });

            });

        });
    };

    //delete after finishing the project
    const displayCategoryList = () => { 
        console.log('categoryList:');
        console.log(categoryList);
    };

    return {
        createTask,
        createCategory,
        addTask,
        updateTask,
        deleteOneTask,
        deleteAllTasks,
        displayCategoryList
    }

})();

const noteFactory = (function(){
    var noteList = new NoteList();

    // creates a note and adds it to the note list
    const createNote = (title, details) => {
        let newNote = noteList.push(title, details);
        noteList.editOffset('increase');
        return newNote;
        // create in gui and display it
    };

    const editNote = (target, property, value) => {
        noteList.edit(target, property, value);
    };

    const deleteNote = (note) => {
        let noteArray = noteList.getAllNotes();
        if (noteArray.length === undefined) return;
        if(noteArray.includes(note)) {
            noteList.deleteThis(note);
            noteList.editOffset('reduce');
            console.log('note found and deleted!');
        };
    };

    //delete after finishing project
    const displayNotes = () => { 
        console.log('NoteList:');
        console.log(noteList);
    };


    return {
        createNote,
        editNote,
        deleteNote,
        displayNotes
    };
})();

const timeFactory = (function() {
    
    const year = () => {
        const today = new Date();
        const year = today.getFullYear();
        return year;
    };

    const today = () => {
        const today = new Date();
        return today;
    }; 

    const tomorrow = () => {
        const today = new Date();
        const tmrw = new Date(today);
        tmrw.setDate(today.getDate() + 1);
        return tmrw;
    };

    const monday = () => {
        const today = new Date();
        const day = today.getDay();
        const diff = today.getDate() - day + (day === 0 ? -6 : 1)
        const monday = new Date(today.setDate(diff));
        return monday;
    }

    const sunday = () => {
        const sunday = new Date(monday());
        sunday.setDate(sunday.getDate() + 6);
        return sunday;
    }

    const monthFirstDay = () => {
        const today = new Date();
        const firstMonthDay = new Date(today.getFullYear(), today.getMonth(), 1);
        return firstMonthDay;
    }

    const monthLastDay = () => {
        const today = new Date();
        const lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        return lastMonthDay;
    }


    return {
        year,
        today,
        tomorrow,
        monday, 
        sunday,
        monthFirstDay,
        monthLastDay
    }

})();

//delete after connecting js files
let today = new Date();
let outside = new Date('01-03-2023');
let tmrw = new Date('01-16-2025');
let eight = new Date('01-08-2025');
let thisWeek = new Date('01-17-2025');
let thisWeek2 = new Date('01-31-2025');
let thisWeek3 = new Date('01-01-2025');
let nextMonth = new Date('04-07-2025');

categoryFactory.createCategory();
let car1 = projectFactory.createProject('car1');
let car2 = projectFactory.createProject('car2');
let car3 = projectFactory.createProject('car3');

projectFactory.createTask(car1, 'volvo', 'fast', today, 'low');
projectFactory.createTask(car1, 'bmw', 'fast', outside, 'low');
projectFactory.createTask(car1, 'aston martin', 'mid', thisWeek, 'mid');
projectFactory.createTask(car1, 'volkswagen', 'mid', thisWeek3, 'high');
projectFactory.createTask(car1, 'jaguar', 'mid', thisWeek2, 'high');

projectFactory.createTask(car2, 'toyota', 'slow', tmrw, 'mid');
projectFactory.createTask(car2, 'hyundai', 'slow', eight, 'mid');
projectFactory.createTask(car2, 'ford', 'mid', nextMonth, 'mid');
projectFactory.createTask(car2, 'Cadillac ', 'mid', nextMonth, 'mid');

projectFactory.createTask(car3, 'bentley', 'fast', thisWeek, 'high');
projectFactory.createTask(car3, 'Citroën', 'fast', thisWeek3, 'mid');
projectFactory.createTask(car3, 'Chevrolet', 'slow', eight, 'low');

car1.taskList.callToEdit(car1.taskList.head.getNext(), 'title', 'buggati');
projectFactory.deleteTask('volvo'); 
// projectFactory.deleteTask('buggati'); 
// projectFactory.deleteTask('aston martin'); 
// projectFactory.deleteTask('volkswagen'); 
// projectFactory.deleteTask('jaguar'); 

// home is 12
// projectFactory.deleteProject(car1); // 7
// projectFactory.deleteProject(car2); // 8
// projectFactory.deleteProject(car3); // 9


categoryFactory.createTask('bentley', 'fast', outside, 'high');
categoryFactory.createTask('Citroën', 'fast', today, 'mid');
categoryFactory.createTask('Chevrolet', 'slow', thisWeek2, 'low');



projectFactory.displayProjectList();
categoryFactory.displayCategoryList();


let noteBook = noteFactory.createNote('read book', 'found this cute book wanna read it');
let noteBread = noteFactory.createNote('buy bread', 'gonna make cake');
let noteBoy = noteFactory.createNote('find this boy', 'boyfriend sleeping somewhere, have to find him');
let noteCar = noteFactory.createNote('car', 'stalk cars');

noteFactory.editNote(noteBook, 'title', 'alfonso breado');
// noteFactory.deleteNote(noteBook);
// noteFactory.deleteNote(noteBread);
// noteFactory.deleteNote(noteBoy);
// noteFactory.deleteNote(noteCar);

noteFactory.displayNotes();

export {
    projectFactory,
    categoryFactory,
    noteFactory
}