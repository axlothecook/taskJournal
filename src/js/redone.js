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

    getOffset() { return this.offset; }

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

    // deletes passed item from parent list
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
        let juan = new Date(task.dueDate);
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
        if (!project) return;
        var newTask = project.taskList.push(title, details, dueDate, priority);
        projectList.editOffset(project, 'increase');
        categoryFactory.addTask(newTask, 'increase');
        return newTask;
    };

    // creates a project and adds it to the project list
    const createProject = (title) => {
        let newProject = projectList.push(title);
        return newProject;
        // create in gui and display it
    };

    const updateTask = (target, property, value) => {
        const projectArray = projectList.getAllProjects();
        projectArray.forEach(project => {
            let taskArr = project.taskList.getAllTasks();
            if (taskArr.length === undefined) return;
            taskArr.forEach(task => {
                if((task.title == target.title) && (task.dueDate == target.dueDate)) {
                    project.taskList.edit(task, property, value);   
                    return;                
                }; 
            });
        });
    }

    // finds the task in all task lists it resides in, deletes it and reduces offset of all parent projects
    const deleteTask = (task) => {
        let returnVar;
        let projectsArray = projectList.getAllProjects();
        if (projectsArray.length === undefined) return;
        projectsArray.forEach(itemProject => {
            let tasksArray = itemProject.taskList.getAllTasks();
            if (tasksArray.length === undefined) return;
            tasksArray.forEach(item => {
                if (item.title === task.title) {
                    returnVar = itemProject;
                    itemProject.taskList.deleteThis(item);
                    projectList.editOffset(itemProject, 'reduce');
                };
            });
        });
        if(returnVar != undefined) return returnVar;
    };

    const deleteProject = (project) => {
        let projectArray = projectList.getAllProjects();
        if (projectArray.length === undefined) return;
        if(projectArray.includes(project)) {
            categoryFactory.deleteAllTasks(project);
            projectList.deleteThis(project);
        };
    };

    //returns list of all projects
    const getProjects = () => { return projectList.getAllProjects(); };

    //returns list of tasks for given project
    const getAll = (string) => {
        let projectArray = projectList.getAllProjects();
        if (projectArray.length === undefined) return;
        let tasksArray = [];
        projectArray.forEach(project => {
            if(project.title === string) {
                tasksArray = project.taskList.getAllTasks();
                if (tasksArray.length === undefined) return 0;
            };
        });
        return tasksArray;
    };

    // number of items in that project
    const getOffset = (searchWord) => {
        let projectArray = projectList.getAllProjects();
        if (projectArray.length === undefined) return 0;
        const project = projectArray.find((project) => { 
            if (project.title === searchWord) return project;
        });
        return project.getOffset();
    };

    // shows project linked list
    const displayProjectList = () => { 
        console.log('projectList:');
        console.log(projectList);
    };

    return {
        createTask,
        createProject,
        updateTask,
        deleteTask,
        deleteProject,
        getProjects,
        getAll,
        getOffset,
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
    }

    const createTask = (title, details, dueDate, priority) => {
        var newTask = new Task(title, details, dueDate, priority);
        categoryFactory.addTask(newTask, 'increase');
        return newTask;
    }

    const addTask = (task, command) => {
        //logic to check if the task being added already exists
        var checker = true;
        const categoryArr = categoryList.getAllCategories();
        categoryArr.forEach(category => {
            let taskArr = category.taskList.getAllTasks();
            if (taskArr != 0) {
                taskArr.forEach(item => {
                    if((item.title === task.title) && (item.details === task.details)) checker = false;
                });
            };
        });
        if(!checker) return;
        categoryList.editList(task, command);
    }

    const updateTask = (target, property, value) => {
        let categoryToChangeArr = [];
        let taskarr = [];
        const categoryArray = categoryList.getAllCategories();
        categoryArray.forEach(category => {
            let taskArr = category.taskList.getAllTasks();
            if (taskArr.length === undefined) return;
            taskArr.forEach(task => {
                if((task.title == target.title) && (task.dueDate == target.dueDate)) {
                    categoryToChangeArr.push(category);
                    taskarr.push(task);                    
                }; 
            });
        });

        projectFactory.updateTask(target, property, value);
        categoryToChangeArr.forEach(category => {
            taskarr.forEach(item => {
                category.taskList.edit(item, property, value);
            });
        });
    };

    const deleteOneTask = (task) => {
        let returnVar;
        let catcher;
        let categoryArray = categoryList.getAllCategories();
        if (categoryArray.length === undefined) return;
        categoryArray.forEach(itemCategory => {
            let itemArray = itemCategory.taskList.getAllTasks();
            if (itemArray.length === undefined) return;
            itemArray.forEach(item => {
                if (item.title === task.title) {
                    itemCategory.taskList.deleteThis(item);
                    categoryList.editOffset(itemCategory, task, 'reduce');
                    returnVar = projectFactory.deleteTask(task);
                    if (returnVar != undefined) catcher = returnVar;
                };
            });
        });
        if(catcher != undefined) return catcher;
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

    //receives name for the category we are feching tasks for
    const getAll = (string) => {
        let categoryArray = categoryList.getAllCategories();
        let tasksArray = [];
        categoryArray.forEach(category => {
            if(category.title === string) {
                tasksArray = category.taskList.getAllTasks();
                if (tasksArray.length === undefined) return 0;
            };
        });
        return tasksArray;
    };

    // fetch just the time categories
    const getCategories = () => { return categoryList.getAllCategories(); };

    // number of items in that category
    const getOffset = (searchWord) => {
        let categoryArray = categoryList.getAllCategories();
        if (categoryArray.length === undefined) return 0;
        const category = categoryArray.find((category) => { 
            if(category.title === searchWord) return category;
        });
        return category.getOffset();
    };

    // shows category linked list
    const displayCategoryList = () => {
        console.log('Category List:');
        console.log(categoryList);
    }

    return {
        createTask,
        createCategory,
        addTask,
        getCategories,
        updateTask,
        deleteOneTask,
        deleteAllTasks,
        getAll,
        getOffset,
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
        };
    };

    const listLength = () => { return noteList.length(); };

    const getAll = () => { return noteList.getAllNotes(); };

    // shows note linked list
    const displayNotes = () => { 
        console.log('NoteList:');
        console.log(noteList);
    };


    return {
        createNote,
        editNote,
        deleteNote,
        listLength,
        getAll,
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

//initiating the website with examples of tasks, projects and notes
let today = '2025-02-06';
let outside = '2023-03-01';
let tmrw = '2025-02-06'; 
let seven = '2025-02-09';
let thisWeek = '2025-02-08';
let thisWeek2 = '2025-02-01';
let thisWeek3 = '2025-02-02';
let nextMonth = '2025-04-07';

categoryFactory.createCategory();
let bills = projectFactory.createProject('Bills');
let gym = projectFactory.createProject('Gym');
let gaming = projectFactory.createProject('Gaming');

projectFactory.createTask(bills, 'electricity', 'get money', today, 'high');
projectFactory.createTask(bills, 'gas', 'not that expensive', outside, 'low');
projectFactory.createTask(bills, 'running water', 'get money', thisWeek, 'mid');
projectFactory.createTask(bills, 'wifi', 'ask for change in package', thisWeek3, 'high');
projectFactory.createTask(bills, 'trash collection', 'throw the trash out too', thisWeek2, 'high');

projectFactory.createTask(gym, 'wash clothes', 'takes around 2h', tmrw, 'mid');
projectFactory.createTask(gym, 'check money', 'make sure to have enough money for protein shakes', seven, 'mid');
projectFactory.createTask(gym, 'upgrade membership', 'get the premium membership with tasty water', nextMonth, 'mid');
projectFactory.createTask(gym, 'call johnny', 'ask johnny to join', nextMonth, 'mid');

projectFactory.createTask(gaming, 'arknights', 'autorun the game', thisWeek, 'high');
projectFactory.createTask(gaming, 'monster hunter', 'play with morgana', thisWeek3, 'mid');
projectFactory.createTask(gaming, 'game awards 2025', 'watch the latest game awards on YT', seven, 'low');


categoryFactory.createTask('buy bread', 'bread.', outside, 'high');
categoryFactory.createTask('call grandma', 'check up on granny', today, 'mid');
categoryFactory.createTask('organize meetup', 'when and where is the trip?', thisWeek2, 'low');

projectFactory.displayProjectList();
categoryFactory.displayCategoryList();


noteFactory.createNote('read book', 'found this cute book wanna read it');
noteFactory.createNote('recipe', 'gonna make cake');
noteFactory.createNote('???', 'cat sleeping somewhere, have to find him');
noteFactory.createNote('language', 'learn japanese');
noteFactory.createNote('water plants', 'get nutrients too');
noteFactory.createNote('showcase', `showcases
long
note
i dunno 
water
bridge 
anime 
mouse
napkin
food 
banana`);
noteFactory.createNote('anime', 'watch dandadan');
noteFactory.createNote('rubics cube', 'get the last model of rubics cube from their website');

noteFactory.displayNotes();

export {
    projectFactory,
    categoryFactory,
    noteFactory
}