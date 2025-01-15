let wrapper = document.querySelector('#wrapper');

// creates Task object 
class Task {
    constructor(title, details, dueDate, priority) {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.previous = null;
        this.next = null;
    }

    getProperty(property) {
        return `${this}.${property}`;
    }

    setProperty(property, value) {
        `${this}.${property} = ${value}`;
    }

    getPrevious() {
        return this.previous;
    }

    setPrevious(task) {
        this.previous = task;
    }

    getNext() {
        return this.next;
    }

    setNext(task) {
        this.next = task;
    }

}

// creates Project object 
class Project {
    constructor(title) {
        this.title = title;
        this.offset = 0;
    }

    getProperty(property) {
        return `${this}.${property}`;
    }

    setProperty(property, value) {
        `${this}.${property} = ${value}`;
    }

}

// creates Note object
class Note {
    constructor(title, details) {
        this.title = title;
        this.details = details;
    }

    getProperty(property) {
        return `${this}.${property}`;
    }

    setProperty(property, value) {
        `${this}.${property} = ${value}`;
    }
    
}


// manages all task objects
const TaskManager = (function() {

    const Constructor = function () {
        const head = null;
        const tail = null;

        return {
            head,
            tail
        }
    }


    //needs to push offset up
    const push = (title, details, dueDate, priority) => { 
        let task = new Task(title, details, dueDate, priority); 

        if (this.Constructor.tail === null) this.Constructor.head = task;

        if (this.Constructor.tail !== null) {
            task.setPrevious(this.tail);
            this.Constructor.setNext(task);
        }

        this.Constructor.tail = task;
    } 

    const edit = (property, value) => { this.task.setProperty(property, value); }

    // length basically
    const getAllTasks = () => {
        if (this.Constructor.head === null) return 0;

        let jumper = this.Constructor.head;
        let counter = 1;

        while(jumper !== this.Constructor.tail) {
            jumper = jumper.getNext();
            counter++;
        }

        return counter;
    } 

    //needs to reduce offset 
    const deleteTask = (task) => { 
        if (this.getAllTasks() === 0) {
            console.log('no tasks exist');
            return;
        }

        let jumper = this.Constructor.head;
        let counter = 0;
        while((jumper != this.Constructor.tail) && (jumper !== task)) {
            jumper = jumper.getNext();
            counter++;
        };

        // get before and after
        let previousToOriginal = jumper.getPrevious();
        let afterOriginal = jumper.getNext();

        // edit before and after
        if (jumper === this.Constructor.head) {
            afterOriginal.setPrevious(null);
            this.Constructor.head = afterOriginal;
        } else if (jumper === this.Constructor.tail) {
            previousToOriginal.setNext(null);
            this.Constructor.tail = previousToOriginal;
        } else {
            previousToOriginal.setNext(afterOriginal);
            afterOriginal.setPrevious(previousToOriginal);
        };

        // remove task itself
        jumper.remove(); 

        // check which projects(s) it belongs to

        // remove it from all projects it belongs to
 
        // edit offset of involved project(s) + all project category

    } 

    return {
        push,
        edit,
        getAllTasks,
        deleteTask
    }

})();

// manages all project objects
const ProjectManager = (function() {

    const push = (title) => { 
        let project = new Project(title); 
    } 

    const edit = (property, value) => { this.project.setProperty(property, value); }

    const editOffset = (value) => {};

    const getAllProjects = () => {}; //return 

    const deleteProject = (project) => { this.project.remove(); } 

    return {
        push,
        edit,
        // editOffset,
        // getAllProjects,
        deleteProject
    }

})();

// manages all note objects
const NoteManager = (function() {
    const noteArray = [];

    const push = (title, details) => { 
        let note = new Note(title, details); 
        this.noteArray.push(note);
    } 

    // how to update array too?
    const edit = (property, value) => { this.note.setProperty(property, value); }

    //check if this is correct syntax
    const deleteNote = (note) => { this.noteArray.splice(0, note); } 

    return {
        push,
        edit,
        deleteNote
    }

})();


// ???
const factory = (function() {
    const createTask = (title, details, dueDate, priority) => {
        TaskManager.push(title, details, dueDate, priority);
        //create task in gui
        //display task
    }

    const createProject = (title) => {
        ProjectManager.push(title);
        //create project in gui
        //display project
    }

    const createNote = (title, details) => {
        NoteManager.push(title, details);
        //create note in gui
        //display note
    }

    return {
        createTask,
        createProject,
        createNote
    }

})();