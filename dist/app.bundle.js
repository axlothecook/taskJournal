/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/additionalGui.js":
/*!*********************************!*\
  !*** ./src/js/additionalGui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Change: () => (/* binding */ Change),
/* harmony export */   ChangeBtnColor: () => (/* binding */ ChangeBtnColor),
/* harmony export */   FadeOut: () => (/* binding */ FadeOut),
/* harmony export */   Toggle: () => (/* binding */ Toggle),
/* harmony export */   mouseAction: () => (/* binding */ mouseAction),
/* harmony export */   popupRightSide: () => (/* binding */ popupRightSide)
/* harmony export */ });
const Toggle = function () {
  let projectVar;
  const button = object => {
    if (object.checkboxDiv.classList.contains('active')) {
      object.checkboxDiv.classList.remove('active');
      object.taskDiv.style.opacity = '1';
      object.addTaskToCategory(object.task, 'increase');
      object.addTaskToProject(projectVar, object.task.title, object.task.details, object.task.dueDate, object.task.priority);
      object.createCategories();
      return object.taskTextDiv.style.textDecoration = 'none';
    }
    ;
    object.checkboxDiv.classList.add('active');
    object.taskDiv.style.opacity = '0.5';
    projectVar = object.deleteTask(object.task);
    object.createCategories();
    return object.taskTextDiv.style.textDecoration = 'line-through';
  };
  return {
    button
  };
}();
const Change = function () {
  const borderStyle = (div, target) => {
    return div.priority === 'low' ? target.classList.add('border-green') : div.priority === 'mid' ? target.classList.add('border-orange') : target.classList.add('border-red');
  };
  return {
    borderStyle
  };
}();
const FadeOut = function () {
  const fadeOut = div => {
    let opacity = 1;
    let interval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.3;
        div.style.opacity = opacity;
      } else {
        clearInterval(interval);
        div.remove();
      }
      ;
    }, 50);
  };
  return {
    fadeOut
  };
}();
//     const deleteCurrentTodo = (div, target) => {
//         target.remove();
//         return taskManager.removeTask(div);  //change
//     }

//     return { deleteCurrentTodo }

// })();

const popupRightSide = function () {
  const side = parent => {
    const rightSideOfPopup = document.createElement('div');
    rightSideOfPopup.classList.add('right-side-of-popup'); //fix
    parent.appendChild(rightSideOfPopup);
    return rightSideOfPopup;
  };
  return {
    side
  };
}();
const mouseAction = function () {
  const hover = (parent, child1, child2) => {
    parent.addEventListener('mouseover', function () {
      child1.classList.add('blue-clr1');
      child2.classList.add('white-clr1');
    });
    parent.addEventListener('mouseout', function () {
      child1.classList.remove('blue-clr1');
      child2.classList.remove('white-clr1');
    });
  };
  const optionHoverParent = () => {
    let divArray = [];
    return function result(div, classToAdd) {
      divArray.push(div);
      div.addEventListener('click', function (e) {
        divArray.forEach(item => {
          item.classList.remove(classToAdd);
        });
        this.classList.add(classToAdd);
      });
    };
  };
  let onOptionTextHover = optionHoverParent();
  return {
    hover,
    onOptionTextHover
  };
}();
const ChangeBtnColor = function () {
  let arr = [];
  let clickedBtn;
  const set = (btn1, btn2, btn3) => {
    arr = [btn1, btn2, btn3];
    arr.forEach(object => {
      object.btn.addEventListener('click', function () {
        arr.forEach(object => {
          if (object.btn.classList.length === 4) object.btn.classList.remove(object.btn.classList[3]);
        });
        object.btn.classList.add(object.classToAdd);
        clickedBtn = object.btn.classList[2];
      });
    });
  };
  const returnClickedBtn = () => {
    return clickedBtn;
  };
  return {
    set,
    returnClickedBtn
  };
}();


/***/ }),

/***/ "./src/js/redone.js":
/*!**************************!*\
  !*** ./src/js/redone.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryFactory: () => (/* binding */ categoryFactory),
/* harmony export */   noteFactory: () => (/* binding */ noteFactory),
/* harmony export */   projectFactory: () => (/* binding */ projectFactory)
/* harmony export */ });
// model for task, project and note class
class NodeMaker {
  constructor(title) {
    this.title = title;
    this.current = title;
    this.previous = null;
    this.next = null;
  }

  // gets a specific property
  getProperty(property) {
    return this[property];
  }

  // redefines a property's value
  setProperty(property) {
    let value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (property !== 'offset') {
      if (property === 'title') this.current = value;
      this[property] = value;
    } else {
      if (value) {
        this.offset += 1;
      } else this.offset -= 1;
    }
    ;
  }

  // gets item before current one
  getPrevious() {
    return this.previous;
  }

  // replaces item to one before current one
  setPrevious(task) {
    this.previous = task;
  }

  // gets item after current one
  getNext() {
    return this.next;
  }

  // replaces item to one after current one
  setNext(task) {
    this.next = task;
  }
}

// creates Task object 
class Task extends NodeMaker {
  constructor(title, details, dueDate, priority) {
    super(title);
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  getProperty(property) {
    return super.getProperty(property);
  }
  setProperty(property, value) {
    super.setProperty(property, value);
  }
  getPrevious() {
    return super.getPrevious();
  }
  setPrevious(task) {
    super.setPrevious(task);
  }
  getNext() {
    return super.getNext();
  }
  setNext(task) {
    super.setNext(task);
  }
}

// creates Project object 
class Project extends NodeMaker {
  constructor(title) {
    super(title);
    this.offset = 0;
    this.taskList = new TaskList();
  }
  getOffset() {
    return this.offset;
  }
  getProperty(property) {
    return super.getProperty(property);
  }
  setProperty(property, value) {
    super.setProperty(property, value);
  }
  getPrevious() {
    return super.getPrevious();
  }
  setPrevious(project) {
    super.setPrevious(project);
  }
  getNext() {
    return super.getNext();
  }
  setNext(project) {
    super.setNext(project);
  }
}

// creates Note object
class Note extends NodeMaker {
  constructor(title, details) {
    super(title);
    this.details = details;
  }
  getProperty(property) {
    return super.getProperty(property);
  }
  setProperty(property, value) {
    super.setProperty(property, value);
  }
  getPrevious() {
    return super.getPrevious();
  }
  setPrevious(note) {
    super.setPrevious(note);
  }
  getNext() {
    return super.getNext();
  }
  setNext(note) {
    super.setNext(note);
  }
}

// creates Note object
class Category extends NodeMaker {
  constructor(title) {
    let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let finish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    super(title);
    this.offset = 0;
    this.start = start;
    this.finish = finish;
    this.taskList = new TaskList();
  }
  getOffset() {
    return this.offset;
  }
  setOffset(command) {
    command === 'increase' ? this.offset += 1 : this.offset -= 1;
  }
  getPrevious() {
    return super.getPrevious();
  }
  setPrevious(task) {
    super.setPrevious(task);
  }
  getNext() {
    return super.getNext();
  }
  setNext(task) {
    super.setNext(task);
  }
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
    while (jumper !== tail) {
      jumper = jumper.getNext();
      counter++;
    }
    if (head === tail) counter = 1;
    return counter;
  }

  // gets all items of a list
  getAll(func, head, tail) {
    if (func === 0) return 0;
    let arr = [];
    let jumper = head;
    while (jumper !== tail) {
      arr.push(jumper);
      jumper = jumper.getNext();
    }
    ;
    arr.push(tail);
    return arr;
  }

  // deletes passed item from parent list
  deleteThis(func, head, tail, value) {
    if (func === 0) return 0;
    if (head === tail) {
      head = null;
      tail = null;
      return;
    }
    let jumper = head;
    while (jumper != tail && jumper != value) {
      jumper = jumper.getNext();
    }
    ;

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
    }
    ;
  }
}

// manages all task objects
class TaskList extends ListMaker {
  constructor() {
    super();
  }

  // creates a new item and adds it to the task list 
  push = (title, details, dueDate, priority) => {
    let task = new Task(title, details, dueDate, priority);
    if (this.tail === null) this.head = task;
    if (this.tail !== null) {
      task.setPrevious(this.tail);
      this.tail.setNext(task);
    }
    ;
    this.tail = task;
    return task;
  };

  // edits a tasks' specific information
  edit = (item, property, value) => {
    super.edit(item, property, value);
  };

  // edits a tasks' specific information
  callToEdit = (item, property, value) => {
    categoryFactory.updateTask(item, property, value);
    this.edit(item, property, value);
  };

  // task list length
  length = () => {
    let num = super.length(this.head, this.tail);
    return num;
  };

  // gets all task list items
  getAllTasks = () => {
    let arr = super.getAll(this.length(), this.head, this.tail);
    return arr;
  };

  // delets a task from the task list and gui
  deleteThis = value => {
    super.deleteThis(this.length(), this.head, this.tail, value);
    if (this.head === value) {
      this.head = this.head.getNext();
    }
    ;
    if (this.tail === value) {
      this.tail = this.tail.getPrevious();
    }
    ;
  };
}
;

// manages all project objects
class ProjectList extends ListMaker {
  constructor() {
    super();
  }

  // creates a new project and adds it to the project list
  push = title => {
    let project = new Project(title);
    if (this.tail === null) this.head = project;
    if (this.tail !== null) {
      project.setPrevious(this.tail);
      this.tail.setNext(project);
    }
    this.tail = project;
    return project;
  };

  // increase / decreases offset based on creation or deletion of a task
  editOffset = (project, command) => {
    if (command === 'reduce') {
      // decreases
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
  };

  // deletes a project from the list
  deleteThis = value => {
    super.deleteThis(this.length(), this.head, this.tail, value);
    if (this.head === value) {
      this.head = this.head.getNext();
    }
    ;
    if (this.tail === value) {
      this.tail = this.tail.getPrevious();
    }
    ;
  };
}
;

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
  };

  // edits a note's specific information
  edit = (target, property, value) => {
    super.edit(target, property, value);
  };

  // increase / decreases offset based on creation or deletion of a note
  editOffset = command => {
    if (command === 'reduce') {
      this.offset -= 1;
    } else this.offset += 1;
  };

  // note list length
  length = () => {
    let num = super.length(this.head, this.tail);
    return num;
  };
  getAllNotes = () => {
    let arr = super.getAll(this.length(), this.head, this.tail);
    return arr;
  };

  // deletes a note from note list
  deleteThis = value => {
    super.deleteThis(this.length(), this.head, this.tail, value);
    if (this.head === value) {
      this.head = this.head.getNext();
    }
    ;
    if (this.tail === value) {
      this.tail = this.tail.getPrevious();
    }
    ;
  };
}
;

//manages all category objects
class CategoryList extends ListMaker {
  constructor() {
    super();
  }
  push = (title, start, finish) => {
    let category = new Category(title, start, finish);
    if (this.tail === null) this.head = category;
    if (this.tail !== null) {
      category.setPrevious(this.tail);
      this.tail.setNext(category);
    }
    this.tail = category;
    return category;
  };
  editOffset = (target, task, command) => {
    if (command === 'increase') {
      target.taskList.push(task.title, task.details, task.dueDate, task.priority);
    }
    ;
    target.setOffset(command);
  };

  // edits passed item's specific information
  editList = (task, command) => {
    this.editOffset(this.head, task, command);
    let juan = new Date(task.dueDate);
    let today = this.head.getNext().start;
    let tomorrow = timeFactory.tomorrow();
    if (juan.getFullYear() != timeFactory.year()) {
      return;
    } else {
      if (timeFactory.monthFirstDay() <= juan && juan <= timeFactory.monthLastDay()) {
        this.editOffset(this.tail, task, command);
        if (timeFactory.monday() <= juan && juan <= timeFactory.sunday()) {
          this.editOffset(this.tail.getPrevious(), task, command);
          if (juan.getDate() < today.getDate() || juan.getDate() > today.getDate()) {
            if (juan.getDate() < tomorrow.getDate() || juan.getDate() > tomorrow.getDate()) {
              return;
            } else {
              this.editOffset(this.tail.getPrevious().getPrevious(), task, command);
              return;
            }
          } else {
            this.editOffset(this.head.getNext(), task, command);
            return;
          }
          ;
        }
        ;
      }
      ;
    }
    ;
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
  };
}

// these 3 function exist so that a task can be created internally, added to project, created in gui and displayed in one place
const projectFactory = function () {
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
  const createProject = title => {
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
        if (task.title == target.title && task.dueDate == target.dueDate) {
          project.taskList.edit(task, property, value);
          return;
        }
        ;
      });
    });
  };

  // finds the task in all task lists it resides in, deletes it and reduces offset of all parent projects
  const deleteTask = task => {
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
        }
        ;
      });
    });
    if (returnVar != undefined) return returnVar;
  };
  const deleteProject = project => {
    let projectArray = projectList.getAllProjects();
    if (projectArray.length === undefined) return;
    if (projectArray.includes(project)) {
      categoryFactory.deleteAllTasks(project);
      projectList.deleteThis(project);
    }
    ;
  };

  //returns list of all projects
  const getProjects = () => {
    return projectList.getAllProjects();
  };

  //returns list of tasks for given project
  const getAll = string => {
    let projectArray = projectList.getAllProjects();
    if (projectArray.length === undefined) return;
    let tasksArray = [];
    projectArray.forEach(project => {
      if (project.title === string) {
        tasksArray = project.taskList.getAllTasks();
        if (tasksArray.length === undefined) return 0;
      }
      ;
    });
    return tasksArray;
  };

  // number of items in that project
  const getOffset = searchWord => {
    let projectArray = projectList.getAllProjects();
    if (projectArray.length === undefined) return 0;
    const project = projectArray.find(project => {
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
}();
const categoryFactory = function () {
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
  };
  const createTask = (title, details, dueDate, priority) => {
    var newTask = new Task(title, details, dueDate, priority);
    categoryFactory.addTask(newTask, 'increase');
    return newTask;
  };
  const addTask = (task, command) => {
    //logic to check if the task being added already exists
    var checker = true;
    const categoryArr = categoryList.getAllCategories();
    categoryArr.forEach(category => {
      let taskArr = category.taskList.getAllTasks();
      if (taskArr != 0) {
        taskArr.forEach(item => {
          if (item.title === task.title && item.details === task.details) checker = false;
        });
      }
      ;
    });
    if (!checker) return;
    categoryList.editList(task, command);
  };
  const updateTask = (target, property, value) => {
    let categoryToChangeArr = [];
    let taskarr = [];
    const categoryArray = categoryList.getAllCategories();
    categoryArray.forEach(category => {
      let taskArr = category.taskList.getAllTasks();
      if (taskArr.length === undefined) return;
      taskArr.forEach(task => {
        if (task.title == target.title && task.dueDate == target.dueDate) {
          categoryToChangeArr.push(category);
          taskarr.push(task);
        }
        ;
      });
    });
    projectFactory.updateTask(target, property, value);
    categoryToChangeArr.forEach(category => {
      taskarr.forEach(item => {
        category.taskList.edit(item, property, value);
      });
    });
  };
  const deleteOneTask = task => {
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
        }
        ;
      });
    });
    if (catcher != undefined) return catcher;
  };
  const deleteAllTasks = project => {
    const categoryArray = categoryList.getAllCategories();
    if (categoryArray.length === undefined) return;
    const projectArray = project.taskList.getAllTasks();
    if (projectArray.length === undefined) return;
    projectArray.forEach(projectItem => {
      categoryArray.forEach(category => {
        let categoryItemsArr = category.taskList.getAllTasks();
        if (categoryItemsArr.length === undefined) return;
        categoryItemsArr.forEach(item1 => {
          if (item1.title === projectItem.title && item1.dueDate === projectItem.dueDate) {
            category.taskList.deleteThis(item1);
            categoryList.editOffset(category, item1, 'reduce');
          }
          ;
        });
      });
    });
  };

  //receives name for the category we are feching tasks for
  const getAll = string => {
    let categoryArray = categoryList.getAllCategories();
    let tasksArray = [];
    categoryArray.forEach(category => {
      if (category.title === string) {
        tasksArray = category.taskList.getAllTasks();
        if (tasksArray.length === undefined) return 0;
      }
      ;
    });
    return tasksArray;
  };

  // fetch just the time categories
  const getCategories = () => {
    return categoryList.getAllCategories();
  };

  // number of items in that category
  const getOffset = searchWord => {
    let categoryArray = categoryList.getAllCategories();
    if (categoryArray.length === undefined) return 0;
    const category = categoryArray.find(category => {
      if (category.title === searchWord) return category;
    });
    return category.getOffset();
  };

  // shows category linked list
  const displayCategoryList = () => {
    console.log('Category List:');
    console.log(categoryList);
  };
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
  };
}();
const noteFactory = function () {
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
  const deleteNote = note => {
    let noteArray = noteList.getAllNotes();
    if (noteArray.length === undefined) return;
    if (noteArray.includes(note)) {
      noteList.deleteThis(note);
      noteList.editOffset('reduce');
    }
    ;
  };
  const listLength = () => {
    return noteList.length();
  };
  const getAll = () => {
    return noteList.getAllNotes();
  };

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
}();
const timeFactory = function () {
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
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    return monday;
  };
  const sunday = () => {
    const sunday = new Date(monday());
    sunday.setDate(sunday.getDate() + 6);
    return sunday;
  };
  const monthFirstDay = () => {
    const today = new Date();
    const firstMonthDay = new Date(today.getFullYear(), today.getMonth(), 1);
    return firstMonthDay;
  };
  const monthLastDay = () => {
    const today = new Date();
    const lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return lastMonthDay;
  };
  return {
    year,
    today,
    tomorrow,
    monday,
    sunday,
    monthFirstDay,
    monthLastDay
  };
}();

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

// let projects = {
//     arr: [bills.title, gym.title, gaming.title]
// }

// let buga = JSON.stringify('projects', projects);
// localStorage.setItem('projects', buga);

// let getsmt = localStorage.getItem('projects');
// console.log(JSON.parse(getsmt));

// let taskArr = {
//     task: 
// }

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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../image/check.png */ "./image/check.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, #wrapper{
    height: 100%;
    user-select: none;
}

*, *::before, *::after{
    padding: 0;
    margin: 0;
}

body{
    --main-content: white;
    --side-bar: #eee;
    --btn-topbar: #607AB6;

    /* background-color: blue; */
    color: black;
    box-sizing: border-box;
    display: flex; 
    flex-flow: column wrap;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1, h2, h3{
    margin-block-start: 0em;
    margin-block-end: 0em;
}

input, textarea{
    background-color: transparent;
    border: none;
    cursor: text;
}

input:hover, input:focus{
    outline: none;
}

textarea{
    border: none;
    font-family: inherit;
    resize: none;
}

textarea:focus{
    outline: none;
}

span{
    font-size: 18px;
}

object{
    pointer-events: none;
    cursor: pointer;
}

#wrapper, #create-new-task-popup{
    width: 100%;
    display: grid;
    grid-template-columns:1fr 4fr;
    grid-template-rows: 1fr 10fr;
}

#topbar{
    grid-area: 1 / 1 / 1 / 3;
    background-color: var(--btn-topbar);

    display: flex;
    align-items: flex-end;  
    padding: 0 0 15px 45px;
}

.sidebar{
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--side-bar);
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8rem;
    padding: 2.7rem;
    padding-top: 4rem;
    border-right: 2px solid var(--btn-topbar);
}

.main-sidebar-text-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.main-sidebar-text, .subtype-sidebar-text, #main-sidebar-text-no-hover{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-sidebar-text, .subtype-sidebar-text {
    cursor: pointer;
}

.main-sidebar-text:hover, .subtype-sidebar-text:hover {
    transform: scale(1.05);
}

.holder-right-div {
    display: flex;
    gap: 1.2rem;
}

.holder-trash-svg-div {
    display: flex;
    align-items: center;
}

.holder-trash-svg {
    width: 1.3rem;
    height: 1.3rem;
}

.sidebar-text-h1, #sidebar-text-h1-project{
    font-size: 25px;
    font-weight: bold;
    flex-shrink: 0;
}

.show-number, #show-number-project{
    width: 25px;
    height: 25px;
    background-color: var(--btn-topbar);
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

#projects-div{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#subtype-wrapper{
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 10px;
    margin-bottom: 20px;
}

.sidebar-text-h3{
    font-size: 20px;
    font-weight: normal;
}

#add-btn{
    width: 3.5rem;
    height: 3.1rem;
    background-color: var(--btn-topbar);
    border: none;
    border-radius: 45px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    font-size: 50px;
    color: white;
    padding-bottom: 7px;
    cursor: pointer;
    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
}

#add-btn:hover{
    transform: scale(1.1);
    background-color: #4b5e8b;
}

.content-div{
    grid-area: 2 / 2 / 3 / 3;
    background-color: var(--main-content);
    padding: 4rem;
    overflow: scroll;
}

.content-div-flex{
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem;
    gap: 1.3rem;
}

/* code for individual item in main content */
.task-div{
    background-color: var(--side-bar);
    padding: 0.4rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
}

.task-div.border-green{
    border-left: 3px solid green;
}

.task-div.border-orange{
    border-left: 3px solid orange;
}

.task-div.border-red{
    border-left: 3px solid red;
}

.left-side{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.checkbox-div{
    width: 0.7rem;
    height: 0.7rem;
    border: 2px solid 	#119999;
    border-radius: 4px;
    cursor: pointer;
}

.checkbox-div.active{ 
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: green;
}

.right-side{
    width: 222px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 13px;
}

.date-display-div{
    width: 5rem;
    display: flex;
    justify-content: center;
}

.btn-div{
    font-size: 13px;
    padding: 5px 11px;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
}

.btn-div:hover{
    color: white;
    transition: all 0.3s;
}

.general-green-btn, .todo-date-class{
    color: #119999;
    background-color: rgba(#119999, 0.7);
    border: 1px solid #119999;
}

.general-green-btn:hover{
    background-color: #119999;
}

/* rename example-note to note-div */
.task-div:hover, .example-note:hover{
    transition: all 0.3s; 
    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
} 

.svg-div{
    width: 0.9rem;
    height: 0.9rem;
}

.edit-svg-div:hover, .trash-svg-div:hover, .holder-trash-svg-div:hover{
    cursor: pointer;
    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);
}


/* popup to create a new task */
#create-new-task-popup{
    width: 60rem;
    height: 30rem;
    margin: 12% auto;
    border: none;
    border-radius: 5px;
    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
}

.topbar-create-todo-popup{
    grid-column: 1 / 3;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--btn-topbar);
}

.create-new-close{
    width: 1.5rem;
    height: 1.5rem;
    filter: invert(100%) sepia(0%) saturate(1709%) hue-rotate(287deg) brightness(106%) contrast(106%);
    cursor: pointer;
}

.create-new-close:hover{
    cursor: pointer;
    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);
}

.right-side-of-popup{
    padding: 50px;
    display: grid;
    grid-template-columns: 6fr 1fr;
    gap: 35px;
}

.sidebar-create-todo-popup{
    max-width: 9rem;
    min-width: 4rem;
    justify-content: flex-start;
    padding: 30px;
    border-right: 1px solid grey;
}

.option-text, .note-title{
    font-size: 25px;
    font-weight: normal;
    cursor: pointer;
    transform: scale (1); 
    color: black;
    /* add with js on hover to the element, not class: var(--btn-topbar); */
}

.option-text.mouseOn{
    font-weight: bold;
    transform: scale (1.02); 
    color: black;
}

.option-text:hover{
    font-weight: bold;
    transform: scale (1.02); 
    color: black;
}

.input-wrapper-div{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.title-input{
    font-size: 20px;
    font-weight: 500;
}

.details-input{
    font-size: 17px;

}

#date-priority-wrapper-div, #date-priority-wrapper-div-child{
    display: flex;
    flex-direction: column;
}

#date-priority-wrapper-div{
    justify-content: space-between;
}

.todo-date-class{
    text-transform: uppercase;
}

.todo-date-class:hover, .todo-date-class:focus{
    color: #119999;
    outline: none;
}

#date-priority-wrapper-div-child{
    height: 100%;
    gap: 50px;
}

.priority-div, .add-todo-btn{
    width: 4.5rem;
}

.low{
    color: green;
    /* background-color: (green, 0.7); */
    border: 1px solid green;
}

.low.add-green{
    background-color: green;
    color: white;
}

.low:hover{
    background-color: green;
    color: white;
}

.mid{
    color: orange;
    /* background-color: (orange, 0.7); */
    border: 1px solid orange;
}

.mid.add-orange{
    background-color: orange;
    color: white;
}


.mid:hover{
    background-color: orange;
    color: white;
}

.high{
    color: red;
    /* background-color: (red, 0.7); */
    border: 1px solid red;
}

.high.add-red{
    background-color: red;
    color: white;
}

.high:hover{
    background-color: red;
    color: white;
}

.shared-display-flex-gap-10px{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#priority-div-parent{
    height: 100%;
}

#priority-divs-wrapper-parent{
    height: 100%;
    justify-content: space-between;
}

#priority-divs-wrapper-parent, #priority-divs-wrapper-child{
    flex-wrap: wrap;
    align-content: center;
}

/* code for create project & note popup */
.right-side-submit-btn-div{
    display: flex;
    flex-direction: column-reverse;
}

.create-project-note-btn{
    width: 7rem;
}

/* for note */
.content-div-grid{
    /* padding: 0 10px; */
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    /* grid-template-columns: repeat(3, minmax(150px, 33.33%)); */
    /* align-items: center; */
    /* justify-items: flex-start; */
}

.grid-col{
    /* width: 33.33%; */
    padding: 0 10px;
}

.grid-col--1{
    padding-left: 0px;
}

.grid-col--4{
    padding-right: 0px;
}

.example-note{
    position: relative;
    height: fit-content;
    background-color: var(--side-bar);
    margin-top: 1.2rem;
    padding: 1.3rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.note-title, .note-paragraph, .details-input{
    height: fit-content;
    width: 96%;
    display: block;
    overflow: hidden;
}

.note-paragraph { 
    font-size: 20px;
}

.note-title{
    margin-bottom: 1.2rem;
}

/* #create-note-close, #create-edit-close */
.close-svg-div{
    position: absolute;
    top: 10px;
    right: 10px;
    line-height: 1;
    width: 1rem;
    height: 1rem;
}

.close-svg-div:hover{
    cursor: pointer;
}

.close-x-svg{
    filter: invert(0%) sepia(7%) saturate(7471%) hue-rotate(279deg) brightness(91%) contrast(109%);
    width: 1rem;
    height: 1rem;
}


/* edit popup  */
.edit-popup{
    position: relative;
    height: 21rem;
    width: 50rem;
    margin: auto;
    background-color: #f7f7f7;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 10px;
}

.confirm-changes-btn{
    width: 8rem;
}

#textarea-wrapper-div{
    display: flex;
    flex-direction: column;
    gap: 0px;
}

#textarea-wrapper-div textarea:first-of-type{
    line-height: 0.8; 
}

#textarea-wrapper-div textarea:last-of-type{
    height: 100%;
    line-height: 1.5; 
}

#create-edit-close{
    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);
}



/* details popup code */
#details-popup{
    position: relative;
    width: 40rem;
    margin: auto;
    padding: 2rem;
    background-color: #f7f7f7;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 10px;
    /* opacity: 0;  */  /* doesnt work */
}

::backdrop{  /* animate so that blur comes in and off */
    background: rgb(0 0 0 / 30%);
    backdrop-filter: blur(6px);
}

#details-popup-text-wrapper{
    display: flex;
    flex-direction: column;
    gap: 17px;
}

#details-popup-title{
    font-size: 35px;
}

#details-popup-about-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#details-popup-category{ 
    margin-right: 4.2rem;
}

#details-popup-urgency{
    margin-right: 4.1rem;
}

#details-popup-deadline{
    margin-right: 3rem;
}

#details-popup-more{
    margin-right: 1.9rem;
}

.empty-msg-container {
    margin-top: 13%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.blue-clr1 {
    color: #607AB6;
}

.white-clr1 {
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, #wrapper{\r\n    height: 100%;\r\n    user-select: none;\r\n}\r\n\r\n*, *::before, *::after{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    --main-content: white;\r\n    --side-bar: #eee;\r\n    --btn-topbar: #607AB6;\r\n\r\n    /* background-color: blue; */\r\n    color: black;\r\n    box-sizing: border-box;\r\n    display: flex; \r\n    flex-flow: column wrap;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nh1, h2, h3{\r\n    margin-block-start: 0em;\r\n    margin-block-end: 0em;\r\n}\r\n\r\ninput, textarea{\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: text;\r\n}\r\n\r\ninput:hover, input:focus{\r\n    outline: none;\r\n}\r\n\r\ntextarea{\r\n    border: none;\r\n    font-family: inherit;\r\n    resize: none;\r\n}\r\n\r\ntextarea:focus{\r\n    outline: none;\r\n}\r\n\r\nspan{\r\n    font-size: 18px;\r\n}\r\n\r\nobject{\r\n    pointer-events: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#wrapper, #create-new-task-popup{\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns:1fr 4fr;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n\r\n#topbar{\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: var(--btn-topbar);\r\n\r\n    display: flex;\r\n    align-items: flex-end;  \r\n    padding: 0 0 15px 45px;\r\n}\r\n\r\n.sidebar{\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    background-color: var(--side-bar);\r\n    min-width: 15rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    gap: 8rem;\r\n    padding: 2.7rem;\r\n    padding-top: 4rem;\r\n    border-right: 2px solid var(--btn-topbar);\r\n}\r\n\r\n.main-sidebar-text-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.main-sidebar-text, .subtype-sidebar-text, #main-sidebar-text-no-hover{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.main-sidebar-text, .subtype-sidebar-text {\r\n    cursor: pointer;\r\n}\r\n\r\n.main-sidebar-text:hover, .subtype-sidebar-text:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n.holder-right-div {\r\n    display: flex;\r\n    gap: 1.2rem;\r\n}\r\n\r\n.holder-trash-svg-div {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.holder-trash-svg {\r\n    width: 1.3rem;\r\n    height: 1.3rem;\r\n}\r\n\r\n.sidebar-text-h1, #sidebar-text-h1-project{\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.show-number, #show-number-project{\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: var(--btn-topbar);\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n    border: none;\r\n    border-radius: 25px;\r\n    padding: 2px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n}\r\n\r\n#projects-div{\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n#subtype-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 20px;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sidebar-text-h3{\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n}\r\n\r\n#add-btn{\r\n    width: 3.5rem;\r\n    height: 3.1rem;\r\n    background-color: var(--btn-topbar);\r\n    border: none;\r\n    border-radius: 45px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 100;\r\n    font-size: 50px;\r\n    color: white;\r\n    padding-bottom: 7px;\r\n    cursor: pointer;\r\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#add-btn:hover{\r\n    transform: scale(1.1);\r\n    background-color: #4b5e8b;\r\n}\r\n\r\n.content-div{\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    background-color: var(--main-content);\r\n    padding: 4rem;\r\n    overflow: scroll;\r\n}\r\n\r\n.content-div-flex{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 4rem 6rem;\r\n    gap: 1.3rem;\r\n}\r\n\r\n/* code for individual item in main content */\r\n.task-div{\r\n    background-color: var(--side-bar);\r\n    padding: 0.4rem 1rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: none;\r\n}\r\n\r\n.task-div.border-green{\r\n    border-left: 3px solid green;\r\n}\r\n\r\n.task-div.border-orange{\r\n    border-left: 3px solid orange;\r\n}\r\n\r\n.task-div.border-red{\r\n    border-left: 3px solid red;\r\n}\r\n\r\n.left-side{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.checkbox-div{\r\n    width: 0.7rem;\r\n    height: 0.7rem;\r\n    border: 2px solid \t#119999;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.checkbox-div.active{ \r\n    background-image: url(/image/check.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-color: green;\r\n}\r\n\r\n.right-side{\r\n    width: 222px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n    font-size: 13px;\r\n}\r\n\r\n.date-display-div{\r\n    width: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-div{\r\n    font-size: 13px;\r\n    padding: 5px 11px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n.btn-div:hover{\r\n    color: white;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.general-green-btn, .todo-date-class{\r\n    color: #119999;\r\n    background-color: rgba(#119999, 0.7);\r\n    border: 1px solid #119999;\r\n}\r\n\r\n.general-green-btn:hover{\r\n    background-color: #119999;\r\n}\r\n\r\n/* rename example-note to note-div */\r\n.task-div:hover, .example-note:hover{\r\n    transition: all 0.3s; \r\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\r\n} \r\n\r\n.svg-div{\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n}\r\n\r\n.edit-svg-div:hover, .trash-svg-div:hover, .holder-trash-svg-div:hover{\r\n    cursor: pointer;\r\n    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);\r\n}\r\n\r\n\r\n/* popup to create a new task */\r\n#create-new-task-popup{\r\n    width: 60rem;\r\n    height: 30rem;\r\n    margin: 12% auto;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.topbar-create-todo-popup{\r\n    grid-column: 1 / 3;\r\n    padding: 5px 20px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: var(--btn-topbar);\r\n}\r\n\r\n.create-new-close{\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    filter: invert(100%) sepia(0%) saturate(1709%) hue-rotate(287deg) brightness(106%) contrast(106%);\r\n    cursor: pointer;\r\n}\r\n\r\n.create-new-close:hover{\r\n    cursor: pointer;\r\n    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);\r\n}\r\n\r\n.right-side-of-popup{\r\n    padding: 50px;\r\n    display: grid;\r\n    grid-template-columns: 6fr 1fr;\r\n    gap: 35px;\r\n}\r\n\r\n.sidebar-create-todo-popup{\r\n    max-width: 9rem;\r\n    min-width: 4rem;\r\n    justify-content: flex-start;\r\n    padding: 30px;\r\n    border-right: 1px solid grey;\r\n}\r\n\r\n.option-text, .note-title{\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    transform: scale (1); \r\n    color: black;\r\n    /* add with js on hover to the element, not class: var(--btn-topbar); */\r\n}\r\n\r\n.option-text.mouseOn{\r\n    font-weight: bold;\r\n    transform: scale (1.02); \r\n    color: black;\r\n}\r\n\r\n.option-text:hover{\r\n    font-weight: bold;\r\n    transform: scale (1.02); \r\n    color: black;\r\n}\r\n\r\n.input-wrapper-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.title-input{\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.details-input{\r\n    font-size: 17px;\r\n\r\n}\r\n\r\n#date-priority-wrapper-div, #date-priority-wrapper-div-child{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#date-priority-wrapper-div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.todo-date-class{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.todo-date-class:hover, .todo-date-class:focus{\r\n    color: #119999;\r\n    outline: none;\r\n}\r\n\r\n#date-priority-wrapper-div-child{\r\n    height: 100%;\r\n    gap: 50px;\r\n}\r\n\r\n.priority-div, .add-todo-btn{\r\n    width: 4.5rem;\r\n}\r\n\r\n.low{\r\n    color: green;\r\n    /* background-color: (green, 0.7); */\r\n    border: 1px solid green;\r\n}\r\n\r\n.low.add-green{\r\n    background-color: green;\r\n    color: white;\r\n}\r\n\r\n.low:hover{\r\n    background-color: green;\r\n    color: white;\r\n}\r\n\r\n.mid{\r\n    color: orange;\r\n    /* background-color: (orange, 0.7); */\r\n    border: 1px solid orange;\r\n}\r\n\r\n.mid.add-orange{\r\n    background-color: orange;\r\n    color: white;\r\n}\r\n\r\n\r\n.mid:hover{\r\n    background-color: orange;\r\n    color: white;\r\n}\r\n\r\n.high{\r\n    color: red;\r\n    /* background-color: (red, 0.7); */\r\n    border: 1px solid red;\r\n}\r\n\r\n.high.add-red{\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.high:hover{\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.shared-display-flex-gap-10px{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n#priority-div-parent{\r\n    height: 100%;\r\n}\r\n\r\n#priority-divs-wrapper-parent{\r\n    height: 100%;\r\n    justify-content: space-between;\r\n}\r\n\r\n#priority-divs-wrapper-parent, #priority-divs-wrapper-child{\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n}\r\n\r\n/* code for create project & note popup */\r\n.right-side-submit-btn-div{\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.create-project-note-btn{\r\n    width: 7rem;\r\n}\r\n\r\n/* for note */\r\n.content-div-grid{\r\n    /* padding: 0 10px; */\r\n    overflow-y: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-auto-rows: auto;\r\n    /* grid-template-columns: repeat(3, minmax(150px, 33.33%)); */\r\n    /* align-items: center; */\r\n    /* justify-items: flex-start; */\r\n}\r\n\r\n.grid-col{\r\n    /* width: 33.33%; */\r\n    padding: 0 10px;\r\n}\r\n\r\n.grid-col--1{\r\n    padding-left: 0px;\r\n}\r\n\r\n.grid-col--4{\r\n    padding-right: 0px;\r\n}\r\n\r\n.example-note{\r\n    position: relative;\r\n    height: fit-content;\r\n    background-color: var(--side-bar);\r\n    margin-top: 1.2rem;\r\n    padding: 1.3rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.note-title, .note-paragraph, .details-input{\r\n    height: fit-content;\r\n    width: 96%;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.note-paragraph { \r\n    font-size: 20px;\r\n}\r\n\r\n.note-title{\r\n    margin-bottom: 1.2rem;\r\n}\r\n\r\n/* #create-note-close, #create-edit-close */\r\n.close-svg-div{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    line-height: 1;\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.close-svg-div:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.close-x-svg{\r\n    filter: invert(0%) sepia(7%) saturate(7471%) hue-rotate(279deg) brightness(91%) contrast(109%);\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n\r\n/* edit popup  */\r\n.edit-popup{\r\n    position: relative;\r\n    height: 21rem;\r\n    width: 50rem;\r\n    margin: auto;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.confirm-changes-btn{\r\n    width: 8rem;\r\n}\r\n\r\n#textarea-wrapper-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0px;\r\n}\r\n\r\n#textarea-wrapper-div textarea:first-of-type{\r\n    line-height: 0.8; \r\n}\r\n\r\n#textarea-wrapper-div textarea:last-of-type{\r\n    height: 100%;\r\n    line-height: 1.5; \r\n}\r\n\r\n#create-edit-close{\r\n    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);\r\n}\r\n\r\n\r\n\r\n/* details popup code */\r\n#details-popup{\r\n    position: relative;\r\n    width: 40rem;\r\n    margin: auto;\r\n    padding: 2rem;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    border-radius: 10px;\r\n    /* opacity: 0;  */  /* doesnt work */\r\n}\r\n\r\n::backdrop{  /* animate so that blur comes in and off */\r\n    background: rgb(0 0 0 / 30%);\r\n    backdrop-filter: blur(6px);\r\n}\r\n\r\n#details-popup-text-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 17px;\r\n}\r\n\r\n#details-popup-title{\r\n    font-size: 35px;\r\n}\r\n\r\n#details-popup-about-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n#details-popup-category{ \r\n    margin-right: 4.2rem;\r\n}\r\n\r\n#details-popup-urgency{\r\n    margin-right: 4.1rem;\r\n}\r\n\r\n#details-popup-deadline{\r\n    margin-right: 3rem;\r\n}\r\n\r\n#details-popup-more{\r\n    margin-right: 1.9rem;\r\n}\r\n\r\n.empty-msg-container {\r\n    margin-top: 13%;\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 40px;\r\n}\r\n\r\n.blue-clr1 {\r\n    color: #607AB6;\r\n}\r\n\r\n.white-clr1 {\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./image/check.png":
/*!*************************!*\
  !*** ./image/check.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e08a3cef69e479d3462.png";

/***/ }),

/***/ "./image/pen-to-square-regular.svg":
/*!*****************************************!*\
  !*** ./image/pen-to-square-regular.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "563693f451cdf0d0a85d.svg";

/***/ }),

/***/ "./image/trash-can-regular.svg":
/*!*************************************!*\
  !*** ./image/trash-can-regular.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5285df78e97954a0aeb0.svg";

/***/ }),

/***/ "./image/x-svg.svg":
/*!*************************!*\
  !*** ./image/x-svg.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a3b8c93effbbd703c63.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");
/* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");









const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(+date, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


function normalizeDates(context, ...dates) {
  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)
    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(laterDate_);
  const earlierStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js");
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");
/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.js */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_4__.toDate)(date, options?.in);

  if (!(0,_isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
/* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = (0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !((!(0,_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") || isNaN(+(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date)));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // [TODO] -- I challenge you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");
/* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");
/* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");
/* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");
/* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");
/* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");


/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { ...options, weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");




/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/gui.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../image/x-svg.svg */ "./image/x-svg.svg");
/* harmony import */ var _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../image/trash-can-regular.svg */ "./image/trash-can-regular.svg");
/* harmony import */ var _image_pen_to_square_regular_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../image/pen-to-square-regular.svg */ "./image/pen-to-square-regular.svg");
/* harmony import */ var _redone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redone.js */ "./src/js/redone.js");
/* harmony import */ var _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./additionalGui.js */ "./src/js/additionalGui.js");







let wrapper = document.querySelector('#wrapper');
const CreateNew = function () {
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
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(createNewDiv);
    });
    const closeSvg = document.createElement('object');
    closeSvg.setAttribute('type', 'image/svg+xml');
    closeSvg.classList.add('close-x-svg');
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.onOptionTextHover(createTodoOption, 'mouseOn');

    //project and note option
    const createProjectOption = document.createElement('div');
    createProjectOption.classList.add('option-text', 'project-option');
    createProjectOption.textContent = 'Project';
    mainSidebarTextWrapper.appendChild(createProjectOption);
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.onOptionTextHover(createProjectOption, 'mouseOn');
    const createNoteOption = document.createElement('div');
    createNoteOption.classList.add('option-text', 'note-option');
    createNoteOption.textContent = 'Note';
    mainSidebarTextWrapper.appendChild(createNoteOption);
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.onOptionTextHover(createNoteOption, 'mouseOn');
    let div = _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.popupRightSide.side(createNewDiv);
    CreateTodo.todo(div, createNewDiv); //default
    createTodoOption.classList.add('mouseOn');
    createTodoOption.addEventListener('click', function (e) {
      div.remove();
      div = _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.popupRightSide.side(createNewDiv);
      CreateTodo.todo(div, createNewDiv);
    });
    createProjectOption.addEventListener('click', function (e) {
      div.remove();
      div = _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.popupRightSide.side(createNewDiv);
      CreateProject.project(div, createNewDiv);
    });
    createNoteOption.addEventListener('click', function (e) {
      div.remove();
      div = _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.popupRightSide.side(createNewDiv);
      CreateNote.note(div, createNewDiv);
    });
    return createNewDiv;
  };
  return {
    createNew
  };
}();
const CreateTodo = function () {
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
        if (btn.classList.contains('low')) {
          btn.classList.add('add-green');
          if (checker != undefined) checker.classList.remove(checker.classList[3]);
        } else if (btn.classList.contains('mid')) {
          btn.classList.add('add-orange');
          if (checker != undefined) checker.classList.remove(checker.classList[3]);
        } else if (btn.classList.contains('high')) {
          btn.classList.add('add-red');
          if (checker != undefined) checker.classList.remove(checker.classList[3]);
        }
        ;
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
      };
      Manager.create(object);
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(parent);
    });
    return popup;
  };
  return {
    todo
  };
}();
const CreateProject = function () {
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
    createProjectBtn.addEventListener('click', function () {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.createProject(titleInput.value);
      CreateCategories.callCategoryCreation();
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(parent);
    });
    return popup;
  };
  return {
    project
  };
}();
const CreateNote = function () {
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
    createNoteBtn.addEventListener('click', function () {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.createNote(titleInput.value, detailsInput.value);
      CreatePanel.notePanel();
      CreateCategories.callCategoryCreation();
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(parent);
    });
    return popup;
  };
  return {
    note
  };
}();

//creates details div about each task
const DetailsDiv = function () {
  const details = target => {
    const detailsPopUp = document.createElement('dialog');
    detailsPopUp.setAttribute('id', 'details-popup');
    wrapper.appendChild(detailsPopUp);
    const closeSvgDiv = document.createElement('div');
    closeSvgDiv.classList.add('close-svg-div');
    detailsPopUp.appendChild(closeSvgDiv);
    closeSvgDiv.addEventListener('click', function () {
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(detailsPopUp);
    });
    const closeSvg = document.createElement('object');
    closeSvg.setAttribute('type', 'image/svg+xml');
    closeSvg.classList.add('close-x-svg');
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    spanDueDate.textContent = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(target.dueDate), 'MMMM')} ${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(target.dueDate), 'do')}, ${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(target.dueDate), 'yyyy')}`;
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
  return {
    details
  };
}();
const EditDiv = function () {
  const edit = target => {
    const editPopUp = document.createElement('dialog');
    editPopUp.classList.add('right-side-of-popup', 'edit-popup');
    wrapper.appendChild(editPopUp);
    const closeSvgDiv = document.createElement('div');
    closeSvgDiv.classList.add('close-svg-div');
    editPopUp.appendChild(closeSvgDiv);
    closeSvgDiv.addEventListener('click', function () {
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(editPopUp);
    });
    const closeSvg = document.createElement('object');
    closeSvg.setAttribute('type', 'image/svg+xml');
    closeSvg.classList.add('close-x-svg');
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeSvgDiv.appendChild(closeSvg);
    const textAreaWrapper = document.createElement('div');
    textAreaWrapper.setAttribute('id', 'textarea-wrapper-div');
    editPopUp.appendChild(textAreaWrapper);
    const editTitleArea = document.createElement('textarea');
    editTitleArea.classList.add('title-input');
    editTitleArea.textContent = target.title;
    textAreaWrapper.appendChild(editTitleArea);
    const editDetailsArea = document.createElement('textarea');
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
    const sharedDisplay2ChildParent = document.createElement('div');
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
    if (target.priority === 'low') {
      lowPriorityDiv.classList.add('add-green');
      selectedBtn = lowPriorityDiv.classList[2];
    } else if (target.priority === 'mid') {
      mediumPriorityDiv.classList.add('add-orange');
      selectedBtn = mediumPriorityDiv.classList[2];
    } else if (target.priority === 'high') {
      highPriorityDiv.classList.add('add-red');
      selectedBtn = highPriorityDiv.classList[2];
    }
    ;
    let btn1 = {
      btn: lowPriorityDiv,
      classToAdd: 'add-green'
    };
    let btn2 = {
      btn: mediumPriorityDiv,
      classToAdd: 'add-orange'
    };
    let btn3 = {
      btn: highPriorityDiv,
      classToAdd: 'add-red'
    };
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.ChangeBtnColor.set(btn1, btn2, btn3);
    const confirmChangesBtn = document.createElement('div');
    confirmChangesBtn.classList.add('btn-div', 'general-green-btn', 'confirm-changes-btn');
    confirmChangesBtn.textContent = 'CONFIRM CHANGES';
    sharedDisplay2ChildParent.appendChild(confirmChangesBtn);
    confirmChangesBtn.addEventListener('click', function () {
      let classToPass = _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.ChangeBtnColor.returnClickedBtn();
      if (classToPass != undefined) selectedBtn = classToPass;
      let object = {
        target: target,
        title: editTitleArea.value,
        details: editDetailsArea.value,
        dueDate: editDateInput.value,
        priority: selectedBtn
      };
      Manager.manageTaskUpdate(object);
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(editPopUp);
    });
    return editPopUp;
  };
  return {
    edit
  };
}();

// each task
const TaskGUI = function () {
  const task = target => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.Change.borderStyle(target, taskDiv);
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
        deleteTask: _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.deleteOneTask,
        task: target,
        addTaskToCategory: _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.addTask,
        addTaskToProject: _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.createTask
      };
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.Toggle.button(object);
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
    dateDisplayDiv.textContent = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(target.dueDate), 'MMM')} ${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(target.dueDate), 'do')}`;
    rightSide.appendChild(dateDisplayDiv);
    const editSvgDiv = document.createElement('div');
    editSvgDiv.classList.add('edit-svg-div');
    rightSide.appendChild(editSvgDiv);
    editSvgDiv.addEventListener('click', function () {
      let modal = EditDiv.edit(target);
      ;
      modal.showModal();
    });
    const editSvg = document.createElement('object');
    editSvg.setAttribute('type', 'image/svg+xml');
    editSvg.classList.add('svg-div');
    editSvg.data = _image_pen_to_square_regular_svg__WEBPACK_IMPORTED_MODULE_3__;
    editSvgDiv.appendChild(editSvg);
    const trashSvgDiv = document.createElement('div');
    trashSvgDiv.classList.add('trash-svg-div');
    rightSide.appendChild(trashSvgDiv);
    trashSvgDiv.addEventListener('click', function (e) {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.deleteOneTask(target);
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(taskDiv);
      CreateCategories.callCategoryCreation();
    });
    const trashSvg = document.createElement('object');
    trashSvg.setAttribute('type', 'image/svg+xml');
    trashSvg.classList.add('svg-div');
    trashSvg.data = _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashSvgDiv.appendChild(trashSvg);
    return taskDiv;
  };
  return {
    task
  };
}();
const NoteGui = function () {
  const create = target => {
    const noteItself = document.createElement('div');
    noteItself.classList.add('example-note');
    const closeSvgDiv = document.createElement('div');
    closeSvgDiv.classList.add('close-svg-div');
    noteItself.appendChild(closeSvgDiv);
    closeSvgDiv.addEventListener('click', function (e) {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.deleteNote(target);
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(noteItself);
      CreatePanel.notePanel();
      CreateCategories.callCategoryCreation();
    });
    const closeSvg = document.createElement('object');
    closeSvg.setAttribute('type', 'image/svg+xml');
    closeSvg.classList.add('close-x-svg');
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeSvgDiv.appendChild(closeSvg);
    const title = document.createElement('textarea');
    title.classList.add('note-title');
    title.value = target.title;
    noteItself.appendChild(title);
    title.addEventListener('input', function (e) {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.editNote(target, 'title', e.target.value);
      CreatePanel.autoResize(this);
    });
    const details = document.createElement('textarea');
    details.classList.add('note-paragraph');
    details.value = target.details;
    noteItself.appendChild(details);
    details.addEventListener('input', function (e) {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.editNote(target, 'details', e.target.value);
      CreatePanel.autoResize(this);
    });
    return noteItself;
  };
  return {
    create
  };
}();
const Manager = function () {
  var callerVar;
  var parentVar;
  var objectVar;
  const fetchCaller = (parent, caller, object) => {
    callerVar = caller;
    parentVar = parent;
    objectVar = object;
  };
  const create = object => {
    _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.createTask(object.title, object.details, object.duedate, object.priority);
    //this condition is for when the user creates a note without clicking on specific category / project
    if (callerVar != undefined) {
      if (callerVar.classList.contains('project')) {
        _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.createTask(objectVar, object.title, object.details, object.duedate, object.priority);
        CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
      } else CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
    } else {
      objectVar = _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getCategories()[0];
      parentVar = document.querySelector('.content-div');
      CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
    }
    CreateCategories.callCategoryCreation();
  };
  const manageTaskUpdate = object => {
    _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.updateTask(object.target, 'title', object.title);
    _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.updateTask(object.target, 'details', object.details);
    _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.updateTask(object.target, 'dueDate', object.dueDate);
    _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.updateTask(object.target, 'priority', object.priority);
    updatePanelAfterTaskEdit();
  };
  const updatePanelAfterTaskEdit = () => {
    if (callerVar != undefined) {
      if (callerVar.classList.contains('project')) {
        CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
      } else CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
    } else {
      objectVar = _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getCategories()[0];
      parentVar = document.querySelector('.content-div');
      CreatePanel.generalPanel(parentVar, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll(objectVar.title), TaskGUI.task, 'tasks');
    }
    CreateCategories.callCategoryCreation();
  };
  return {
    fetchCaller,
    create,
    manageTaskUpdate,
    updatePanelAfterTaskEdit
  };
}();
const CreatePanel = function () {
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
    if (obj.array === 0) {
      clearPanel(parentVar);
      emptyMsg(parentVar, keyword);
      return;
    }
    ;
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
  const createColumns = parent => {
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
    }
    ;
  };
  const autoResize = element => {
    element.style.height = '10px';
    element.style.height = element.scrollHeight + 'px';
  };
  const clearPanel = parent => {
    var parentHolder = parent;
    if (parentHolder.classList.length > 1) {
      while (parentHolder.firstChild) {
        parentHolder.removeChild(parentHolder.lastChild);
      }
      ;
      parentHolder.classList.remove(parentHolder.classList[1]);
    } else parentHolder.textContent = '';
    return parentHolder;
  };
  const notePanel = function () {
    let parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (parent != 0) parentVar = parent;
    let obj = {
      array: _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.getAll(),
      function: NoteGui.create
    };
    if (obj.array === 0) {
      clearPanel(parentVar);
      emptyMsg(parentVar, 'notes');
      return;
    }
    ;
    let arr = obj.array;
    arr = arr.reverse();
    let object = createColumns(parentVar);
    arr.forEach(item => appendToPanel(obj.function(item), object));
    let titles = document.getElementsByClassName('note-title');
    let details = document.getElementsByClassName('note-paragraph');
    let elements = [...titles, ...details];
    for (var item of elements) {
      autoResize(item);
    }
    ;
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
}();
const CreateProjects = function () {
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
    var projectArr = _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.getProjects();
    if (projectArr.length === undefined) return;
    projectArr.forEach(object => {
      project(contentDiv, subtypeWrapper, object);
    });
  };
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
    trashSvgDiv.addEventListener('click', function (e) {
      _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.deleteProject(object);
      _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.FadeOut.fadeOut(subtypeSidebarText);
      CreateCategories.callCategoryCreation();
    });
    const trashSvg = document.createElement('object');
    trashSvg.setAttribute('type', 'image/svg+xml');
    trashSvg.classList.add('holder-trash-svg');
    trashSvg.data = _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashSvgDiv.appendChild(trashSvg);
    const offset = document.createElement('div');
    offset.classList.add('show-number');
    offset.textContent = object.offset;
    holder.appendChild(offset);
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.hover(subtypeSidebarText, project, offset);
    CreatePanel.addListener(contentDiv, subtypeSidebarText, _redone_js__WEBPACK_IMPORTED_MODULE_4__.projectFactory.getAll(object.title), TaskGUI.task, 'tasks', object);
    return subtypeSidebarText;
  };
  return {
    parentProject,
    project
  };
}();

// creates clickable div with note h1 and counter for notes
const CreateNotePanel = function () {
  const create = (contentDiv, parent) => {
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('main-sidebar-text', 'sidebar-text-h1', 'notes-div');
    notesContainer.textContent = 'Notes';
    parent.appendChild(notesContainer);
    const offsetNotes = document.createElement('div');
    offsetNotes.setAttribute('id', 'show-number-project');
    offsetNotes.textContent = _redone_js__WEBPACK_IMPORTED_MODULE_4__.noteFactory.listLength();
    notesContainer.appendChild(offsetNotes);
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.hover(notesContainer, notesContainer, offsetNotes);
    notesContainer.addEventListener('click', function (e) {
      CreatePanel.notePanel(contentDiv);
    });
    return notesContainer;
  };
  return {
    create
  };
}();
const CreateCategories = function () {
  var parentVar;
  var wrapperVar;
  var mainSidebarTextWrapperVar;
  const callCategoryCreation = (parent, wrapper, mainSidebarTextWrapper) => {
    if (parent != undefined) parentVar = parent;
    if (mainSidebarTextWrapper != undefined) mainSidebarTextWrapperVar = mainSidebarTextWrapper;
    if (wrapper != undefined) {
      wrapperVar = wrapper;
    } else wrapperVar.textContent = '';
    const categoryArray = _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getCategories();
    categoryArray.forEach(category => {
      let div = create(wrapperVar, category);
      CreatePanel.addListener(parentVar, div, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll(category.title), TaskGUI.task, 'tasks', category);
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
    _additionalGui_js__WEBPACK_IMPORTED_MODULE_5__.mouseAction.hover(category, category, offset);
    return category;
  };
  return {
    callCategoryCreation,
    create
  };
}();
const CreateLandingPage = function () {
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
    CreatePanel.generalPanel(contentDiv, _redone_js__WEBPACK_IMPORTED_MODULE_4__.categoryFactory.getAll('Home'), TaskGUI.task, 'tasks');
    const addBtn = document.createElement('div');
    addBtn.setAttribute('id', 'add-btn');
    addBtn.textContent = '+';
    sideBar.appendChild(addBtn);
    addBtn.addEventListener('click', function () {
      let modal = CreateNew.createNew();
      modal.showModal();
    });
  };
  return {
    page
  };
}();
window.addEventListener('onload', CreateLandingPage.page());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSw0QkFBNEI7QUFDNUIsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0ZBQW9GLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLFlBQVksTUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvRUFBZTtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFlO0FBQzlCO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9IQUFvSDtBQUNwSCxnSEFBZ0g7QUFDaEgsMEhBQTBIO0FBQzFILDRIQUE0SDtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxPQUFPLHdFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFdBQVcsd0VBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxTQUFTLHdFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHOztBQUVILE9BQU8sd0VBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSx3RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTDBEO0FBQ2M7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9zcmMvanMvYWRkaXRpb25hbEd1aS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL3NyYy9qcy9yZWRvbmUuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9ub3JtYWxpemVEYXRlcy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0LmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4uanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNram91cm5hbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL3NyYy9qcy9ndWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9nZ2xlID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHByb2plY3RWYXI7XHJcbiAgICBjb25zdCBidXR0b24gPSAob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGVja2JveERpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5jaGVja2JveERpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgb2JqZWN0LnRhc2tEaXYuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgb2JqZWN0LmFkZFRhc2tUb0NhdGVnb3J5KG9iamVjdC50YXNrLCAnaW5jcmVhc2UnKTtcclxuICAgICAgICAgICAgb2JqZWN0LmFkZFRhc2tUb1Byb2plY3QocHJvamVjdFZhciwgb2JqZWN0LnRhc2sudGl0bGUsIG9iamVjdC50YXNrLmRldGFpbHMsIG9iamVjdC50YXNrLmR1ZURhdGUsIG9iamVjdC50YXNrLnByaW9yaXR5KTtcclxuICAgICAgICAgICAgb2JqZWN0LmNyZWF0ZUNhdGVnb3JpZXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC50YXNrVGV4dERpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIG9iamVjdC5jaGVja2JveERpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBvYmplY3QudGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgcHJvamVjdFZhciA9IG9iamVjdC5kZWxldGVUYXNrKG9iamVjdC50YXNrKTtcclxuICAgICAgICBvYmplY3QuY3JlYXRlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHJldHVybiBvYmplY3QudGFza1RleHREaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgYnV0dG9uIH07XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgQ2hhbmdlID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYm9yZGVyU3R5bGUgPSAoZGl2LCB0YXJnZXQpID0+IHtcclxuICAgICAgICByZXR1cm4gKGRpdi5wcmlvcml0eSA9PT0gJ2xvdycpID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1ncmVlbicpIDogKGRpdi5wcmlvcml0eSA9PT0gJ21pZCcpID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1vcmFuZ2UnKSA6IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdib3JkZXItcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYm9yZGVyU3R5bGUgfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuY29uc3QgRmFkZU91dCA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGZhZGVPdXQgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAob3BhY2l0eSA+IDApIHtcclxuICAgICAgICAgICAgb3BhY2l0eSAtPSAwLjM7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgZmFkZU91dCB9O1xyXG5cclxufSkoKTtcclxuLy8gICAgIGNvbnN0IGRlbGV0ZUN1cnJlbnRUb2RvID0gKGRpdiwgdGFyZ2V0KSA9PiB7XHJcbi8vICAgICAgICAgdGFyZ2V0LnJlbW92ZSgpO1xyXG4vLyAgICAgICAgIHJldHVybiB0YXNrTWFuYWdlci5yZW1vdmVUYXNrKGRpdik7ICAvL2NoYW5nZVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiB7IGRlbGV0ZUN1cnJlbnRUb2RvIH1cclxuXHJcbi8vIH0pKCk7XHJcblxyXG5jb25zdCBwb3B1cFJpZ2h0U2lkZSA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHNpZGUgPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlT2ZQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJpZ2h0U2lkZU9mUG9wdXAuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1vZi1wb3B1cCcpOyAvL2ZpeFxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChyaWdodFNpZGVPZlBvcHVwKTtcclxuICAgICAgICByZXR1cm4gcmlnaHRTaWRlT2ZQb3B1cDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzaWRlIH07XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgbW91c2VBY3Rpb24gPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBob3ZlciA9IChwYXJlbnQsIGNoaWxkMSwgY2hpbGQyKSA9PiB7XHJcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjaGlsZDEuY2xhc3NMaXN0LmFkZCgnYmx1ZS1jbHIxJyk7XHJcbiAgICAgICAgICAgIGNoaWxkMi5jbGFzc0xpc3QuYWRkKCd3aGl0ZS1jbHIxJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjaGlsZDEuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ZS1jbHIxJyk7XHJcbiAgICAgICAgICAgIGNoaWxkMi5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZS1jbHIxJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbkhvdmVyUGFyZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXZBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVzdWx0IChkaXYsIGNsYXNzVG9BZGQpIHtcclxuICAgICAgICAgICAgZGl2QXJyYXkucHVzaChkaXYpO1xyXG5cclxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGRpdkFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgb25PcHRpb25UZXh0SG92ZXIgPSBvcHRpb25Ib3ZlclBhcmVudCgpO1xyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGhvdmVyLFxyXG4gICAgICAgIG9uT3B0aW9uVGV4dEhvdmVyLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgQ2hhbmdlQnRuQ29sb3IgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGxldCBjbGlja2VkQnRuO1xyXG4gICAgY29uc3Qgc2V0ID0gKGJ0bjEsIGJ0bjIsIGJ0bjMpID0+IHtcclxuICAgICAgICBhcnIgPSBbYnRuMSwgYnRuMiwgYnRuM107XHJcbiAgICAgICAgYXJyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmplY3QuYnRuLmNsYXNzTGlzdC5sZW5ndGggPT09IDQpIG9iamVjdC5idG4uY2xhc3NMaXN0LnJlbW92ZShvYmplY3QuYnRuLmNsYXNzTGlzdFszXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5idG4uY2xhc3NMaXN0LmFkZChvYmplY3QuY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkQnRuID0gb2JqZWN0LmJ0bi5jbGFzc0xpc3RbMl07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXR1cm5DbGlja2VkQnRuID0gKCkgPT4geyByZXR1cm4gY2xpY2tlZEJ0bjsgfVxyXG5cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBzZXQsXHJcbiAgICAgICAgcmV0dXJuQ2xpY2tlZEJ0blxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBUb2dnbGUsXHJcbiAgICBDaGFuZ2UsXHJcbiAgICBGYWRlT3V0LFxyXG4gICAgcG9wdXBSaWdodFNpZGUsXHJcbiAgICBtb3VzZUFjdGlvbixcclxuICAgIENoYW5nZUJ0bkNvbG9yXHJcbn0iLCIvLyBtb2RlbCBmb3IgdGFzaywgcHJvamVjdCBhbmQgbm90ZSBjbGFzc1xyXG5jbGFzcyBOb2RlTWFrZXIge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRzIGEgc3BlY2lmaWMgcHJvcGVydHlcclxuICAgIGdldFByb3BlcnR5KHByb3BlcnR5KSB7IHJldHVybiB0aGlzW3Byb3BlcnR5XTsgfVxyXG5cclxuICAgIC8vIHJlZGVmaW5lcyBhIHByb3BlcnR5J3MgdmFsdWVcclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSA9IGZhbHNlKSB7IFxyXG4gICAgICAgIGlmKHByb3BlcnR5ICE9PSAnb2Zmc2V0Jyl7XHJcbiAgICAgICAgICAgIGlmKHByb3BlcnR5ID09PSAndGl0bGUnKSB0aGlzLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm9mZnNldCAtPSAxO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0cyBpdGVtIGJlZm9yZSBjdXJyZW50IG9uZVxyXG4gICAgZ2V0UHJldmlvdXMoKSB7IHJldHVybiB0aGlzLnByZXZpb3VzOyB9XHJcblxyXG4gICAgLy8gcmVwbGFjZXMgaXRlbSB0byBvbmUgYmVmb3JlIGN1cnJlbnQgb25lXHJcbiAgICBzZXRQcmV2aW91cyh0YXNrKSB7IHRoaXMucHJldmlvdXMgPSB0YXNrOyB9XHJcblxyXG4gICAgLy8gZ2V0cyBpdGVtIGFmdGVyIGN1cnJlbnQgb25lXHJcbiAgICBnZXROZXh0KCkgeyByZXR1cm4gdGhpcy5uZXh0OyB9XHJcblxyXG4gICAgLy8gcmVwbGFjZXMgaXRlbSB0byBvbmUgYWZ0ZXIgY3VycmVudCBvbmVcclxuICAgIHNldE5leHQodGFzaykgeyB0aGlzLm5leHQgPSB0YXNrOyB9XHJcbn1cclxuXHJcbi8vIGNyZWF0ZXMgVGFzayBvYmplY3QgXHJcbmNsYXNzIFRhc2sgZXh0ZW5kcyBOb2RlTWFrZXIge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgc3VwZXIodGl0bGUpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvcGVydHkocHJvcGVydHkpIHsgcmV0dXJuIHN1cGVyLmdldFByb3BlcnR5KHByb3BlcnR5KTsgfVxyXG5cclxuICAgIHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkgeyBzdXBlci5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpOyB9XHJcblxyXG4gICAgZ2V0UHJldmlvdXMoKSB7IHJldHVybiBzdXBlci5nZXRQcmV2aW91cygpOyB9XHJcblxyXG4gICAgc2V0UHJldmlvdXModGFzaykgeyBzdXBlci5zZXRQcmV2aW91cyh0YXNrKTsgfVxyXG5cclxuICAgIGdldE5leHQoKSB7IHJldHVybiBzdXBlci5nZXROZXh0KCk7IH1cclxuXHJcbiAgICBzZXROZXh0KHRhc2spIHsgc3VwZXIuc2V0TmV4dCh0YXNrKTsgfVxyXG5cclxufVxyXG5cclxuLy8gY3JlYXRlcyBQcm9qZWN0IG9iamVjdCBcclxuY2xhc3MgUHJvamVjdCBleHRlbmRzIE5vZGVNYWtlcntcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIodGl0bGUpO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2Zmc2V0KCkgeyByZXR1cm4gdGhpcy5vZmZzZXQ7IH1cclxuXHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eSkgeyByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydHkocHJvcGVydHkpOyB9XHJcblxyXG4gICAgc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSB7IHN1cGVyLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7IH1cclxuXHJcbiAgICBnZXRQcmV2aW91cygpIHsgcmV0dXJuIHN1cGVyLmdldFByZXZpb3VzKCk7IH0gXHJcblxyXG4gICAgc2V0UHJldmlvdXMocHJvamVjdCkgeyBzdXBlci5zZXRQcmV2aW91cyhwcm9qZWN0KTsgfVxyXG5cclxuICAgIGdldE5leHQoKSB7IHJldHVybiBzdXBlci5nZXROZXh0KCk7IH1cclxuXHJcbiAgICBzZXROZXh0KHByb2plY3QpIHsgc3VwZXIuc2V0TmV4dChwcm9qZWN0KTsgfVxyXG5cclxufVxyXG5cclxuLy8gY3JlYXRlcyBOb3RlIG9iamVjdFxyXG5jbGFzcyBOb3RlIGV4dGVuZHMgTm9kZU1ha2Vye1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMpIHtcclxuICAgICAgICBzdXBlcih0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eSkgeyByZXR1cm4gc3VwZXIuZ2V0UHJvcGVydHkocHJvcGVydHkpOyB9XHJcblxyXG4gICAgc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSB7IHN1cGVyLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7IH1cclxuXHJcbiAgICBnZXRQcmV2aW91cygpIHsgcmV0dXJuIHN1cGVyLmdldFByZXZpb3VzKCk7IH1cclxuXHJcbiAgICBzZXRQcmV2aW91cyhub3RlKSB7IHN1cGVyLnNldFByZXZpb3VzKG5vdGUpOyB9XHJcblxyXG4gICAgZ2V0TmV4dCgpIHsgcmV0dXJuIHN1cGVyLmdldE5leHQoKTsgfVxyXG5cclxuICAgIHNldE5leHQobm90ZSkgeyBzdXBlci5zZXROZXh0KG5vdGUpOyB9XHJcbiAgICBcclxufVxyXG5cclxuLy8gY3JlYXRlcyBOb3RlIG9iamVjdFxyXG5jbGFzcyBDYXRlZ29yeSBleHRlbmRzIE5vZGVNYWtlcntcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBzdGFydCA9IDAsIGZpbmlzaCA9IDApIHtcclxuICAgICAgICBzdXBlcih0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmZpbmlzaCA9IGZpbmlzaDtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2Zmc2V0KCkgeyByZXR1cm4gdGhpcy5vZmZzZXQ7IH1cclxuXHJcbiAgICBzZXRPZmZzZXQoY29tbWFuZCkgeyBcclxuICAgICAgICAoY29tbWFuZCA9PT0gJ2luY3JlYXNlJykgPyB0aGlzLm9mZnNldCArPSAxIDogdGhpcy5vZmZzZXQgLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91cygpIHsgcmV0dXJuIHN1cGVyLmdldFByZXZpb3VzKCk7IH0gXHJcblxyXG4gICAgc2V0UHJldmlvdXModGFzaykgeyBzdXBlci5zZXRQcmV2aW91cyh0YXNrKTsgfVxyXG5cclxuICAgIGdldE5leHQoKSB7IHJldHVybiBzdXBlci5nZXROZXh0KCk7IH1cclxuXHJcbiAgICBzZXROZXh0KHRhc2spIHsgc3VwZXIuc2V0TmV4dCh0YXNrKTsgfVxyXG5cclxufVxyXG5cclxuLy8gbW9kZWwgZm9yIGxpc3RzXHJcbmNsYXNzIExpc3RNYWtlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdHMgcGFzc2VkIGl0ZW0ncyBzcGVjaWZpYyBpbmZvcm1hdGlvblxyXG4gICAgZWRpdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRhcmdldC5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRzIGxpc3QgbGVuZ3RoOlxyXG4gICAgbGVuZ3RoKGhlYWQsIHRhaWwpIHtcclxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGxldCBqdW1wZXIgPSBoZWFkO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMTtcclxuICAgICAgICB3aGlsZShqdW1wZXIgIT09IHRhaWwpIHtcclxuICAgICAgICAgICAganVtcGVyID0ganVtcGVyLmdldE5leHQoKTtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihoZWFkID09PSB0YWlsKSBjb3VudGVyID0gMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vIGdldHMgYWxsIGl0ZW1zIG9mIGEgbGlzdFxyXG4gICAgZ2V0QWxsKGZ1bmMsIGhlYWQsIHRhaWwpIHtcclxuICAgICAgICBpZiAoZnVuYyA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBsZXQganVtcGVyID0gaGVhZDtcclxuICAgICAgICB3aGlsZSgoanVtcGVyICE9PSB0YWlsKSkge1xyXG4gICAgICAgICAgICBhcnIucHVzaChqdW1wZXIpO1xyXG4gICAgICAgICAgICBqdW1wZXIgPSBqdW1wZXIuZ2V0TmV4dCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXJyLnB1c2godGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGVzIHBhc3NlZCBpdGVtIGZyb20gcGFyZW50IGxpc3RcclxuICAgIGRlbGV0ZVRoaXMoZnVuYywgaGVhZCwgdGFpbCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoZnVuYyA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGlmKGhlYWQgPT09IHRhaWwpIHtcclxuICAgICAgICAgICAgaGVhZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRhaWwgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQganVtcGVyID0gaGVhZDtcclxuICAgICAgICB3aGlsZSgoanVtcGVyICE9IHRhaWwpICYmIChqdW1wZXIgIT0gdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGp1bXBlciA9IGp1bXBlci5nZXROZXh0KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gZ2V0cyBiZWZvcmUgYW5kIGFmdGVyIGl0ZW1zXHJcbiAgICAgICAgbGV0IHByZXZpb3VzVG9PcmlnaW5hbCA9IGp1bXBlci5nZXRQcmV2aW91cygpO1xyXG4gICAgICAgIGxldCBhZnRlck9yaWdpbmFsID0ganVtcGVyLmdldE5leHQoKTtcclxuXHJcbiAgICAgICAgLy8gZWRpdHMgYmVmb3JlIGFuZCBhZnRlciBpdGVtc1xyXG4gICAgICAgIGlmIChqdW1wZXIgPT09IGhlYWQpIHtcclxuICAgICAgICAgICAgYWZ0ZXJPcmlnaW5hbC5zZXRQcmV2aW91cyhudWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGp1bXBlciA9PT0gdGFpbCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c1RvT3JpZ2luYWwuc2V0TmV4dChudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmV2aW91c1RvT3JpZ2luYWwuc2V0TmV4dChhZnRlck9yaWdpbmFsKTtcclxuICAgICAgICAgICAgYWZ0ZXJPcmlnaW5hbC5zZXRQcmV2aW91cyhwcmV2aW91c1RvT3JpZ2luYWwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyBtYW5hZ2VzIGFsbCB0YXNrIG9iamVjdHNcclxuY2xhc3MgVGFza0xpc3QgZXh0ZW5kcyBMaXN0TWFrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICAvLyBjcmVhdGVzIGEgbmV3IGl0ZW0gYW5kIGFkZHMgaXQgdG8gdGhlIHRhc2sgbGlzdCBcclxuICAgIHB1c2ggPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7IFxyXG4gICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICBpZiAodGhpcy50YWlsID09PSBudWxsKSB0aGlzLmhlYWQgPSB0YXNrO1xyXG4gICAgICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFzay5zZXRQcmV2aW91cyh0aGlzLnRhaWwpO1xyXG4gICAgICAgICAgICB0aGlzLnRhaWwuc2V0TmV4dCh0YXNrKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGFpbCA9IHRhc2s7XHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vIGVkaXRzIGEgdGFza3MnIHNwZWNpZmljIGluZm9ybWF0aW9uXHJcbiAgICBlZGl0ID0gKGl0ZW0sIHByb3BlcnR5LCB2YWx1ZSkgPT4geyBcclxuICAgICAgICBzdXBlci5lZGl0KGl0ZW0sIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdHMgYSB0YXNrcycgc3BlY2lmaWMgaW5mb3JtYXRpb25cclxuICAgIGNhbGxUb0VkaXQgPSAoaXRlbSwgcHJvcGVydHksIHZhbHVlKSA9PiB7IFxyXG4gICAgICAgIGNhdGVnb3J5RmFjdG9yeS51cGRhdGVUYXNrKGl0ZW0sIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5lZGl0KGl0ZW0sIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFzayBsaXN0IGxlbmd0aFxyXG4gICAgbGVuZ3RoID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBudW0gPSBzdXBlci5sZW5ndGgodGhpcy5oZWFkLCB0aGlzLnRhaWwpO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9IFxyXG5cclxuICAgIC8vIGdldHMgYWxsIHRhc2sgbGlzdCBpdGVtc1xyXG4gICAgZ2V0QWxsVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN1cGVyLmdldEFsbCh0aGlzLmxlbmd0aCgpLCB0aGlzLmhlYWQsIHRoaXMudGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGFycjsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRzIGEgdGFzayBmcm9tIHRoZSB0YXNrIGxpc3QgYW5kIGd1aVxyXG4gICAgZGVsZXRlVGhpcyA9ICh2YWx1ZSkgPT4geyBcclxuICAgICAgICBzdXBlci5kZWxldGVUaGlzKHRoaXMubGVuZ3RoKCksIHRoaXMuaGVhZCwgdGhpcy50YWlsLCB2YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5oZWFkID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQuZ2V0TmV4dCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMudGFpbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLmdldFByZXZpb3VzKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gXHJcblxyXG59O1xyXG5cclxuLy8gbWFuYWdlcyBhbGwgcHJvamVjdCBvYmplY3RzXHJcbmNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgTGlzdE1ha2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhIG5ldyBwcm9qZWN0IGFuZCBhZGRzIGl0IHRvIHRoZSBwcm9qZWN0IGxpc3RcclxuICAgIHB1c2ggPSAodGl0bGUpID0+IHsgXHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7IFxyXG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT09IG51bGwpIHRoaXMuaGVhZCA9IHByb2plY3Q7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRhaWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5zZXRQcmV2aW91cyh0aGlzLnRhaWwpO1xyXG4gICAgICAgICAgICB0aGlzLnRhaWwuc2V0TmV4dChwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWlsID0gcHJvamVjdDtcclxuICAgICAgICByZXR1cm4gcHJvamVjdDtcclxuICAgIH0gXHJcblxyXG4gICAgLy8gaW5jcmVhc2UgLyBkZWNyZWFzZXMgb2Zmc2V0IGJhc2VkIG9uIGNyZWF0aW9uIG9yIGRlbGV0aW9uIG9mIGEgdGFza1xyXG4gICAgZWRpdE9mZnNldCA9IChwcm9qZWN0LCBjb21tYW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT09ICdyZWR1Y2UnKSB7IC8vIGRlY3JlYXNlc1xyXG4gICAgICAgICAgICBwcm9qZWN0LnNldFByb3BlcnR5KCdvZmZzZXQnKTtcclxuICAgICAgICB9IGVsc2UgcHJvamVjdC5zZXRQcm9wZXJ0eSgnb2Zmc2V0JywgdHJ1ZSk7IC8vIGluY3JlYXNlc1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm9qZWN0IGxpc3QgbGVuZ3RoXHJcbiAgICBsZW5ndGggPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG51bSA9IHN1cGVyLmxlbmd0aCh0aGlzLmhlYWQsIHRoaXMudGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07IFxyXG5cclxuICAgIC8vIGdldHMgYWxsIHByb2plY3RzIGZyb20gdGhlIHByb2plY3QgbGlzdFxyXG4gICAgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN1cGVyLmdldEFsbCh0aGlzLmxlbmd0aCgpLCB0aGlzLmhlYWQsIHRoaXMudGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZWxldGVzIGEgcHJvamVjdCBmcm9tIHRoZSBsaXN0XHJcbiAgICBkZWxldGVUaGlzID0gKHZhbHVlKSA9PiB7IFxyXG4gICAgICAgIHN1cGVyLmRlbGV0ZVRoaXModGhpcy5sZW5ndGgoKSwgdGhpcy5oZWFkLCB0aGlzLnRhaWwsIHZhbHVlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmhlYWQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5nZXROZXh0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy50YWlsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuZ2V0UHJldmlvdXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBcclxuXHJcbn07XHJcblxyXG4vLyBtYW5hZ2VzIGFsbCBub3RlIG9iamVjdHNcclxuY2xhc3MgTm90ZUxpc3QgZXh0ZW5kcyBMaXN0TWFrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHN1cGVyKCk7IFxyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVzIGEgbmV3IG5vdGUgYW5kIGFkZHMgaXQgdG8gbm90ZSBsaXN0XHJcbiAgICBwdXNoID0gKHRpdGxlLCBkZXRhaWxzKSA9PiB7IFxyXG4gICAgICAgIGxldCBub3RlID0gbmV3IE5vdGUodGl0bGUsIGRldGFpbHMpOyBcclxuICAgICAgICBpZiAodGhpcy50YWlsID09PSBudWxsKSB0aGlzLmhlYWQgPSBub3RlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5vdGUuc2V0UHJldmlvdXModGhpcy50YWlsKTtcclxuICAgICAgICAgICAgdGhpcy50YWlsLnNldE5leHQobm90ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFpbCA9IG5vdGU7XHJcbiAgICAgICAgcmV0dXJuIG5vdGU7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vIGVkaXRzIGEgbm90ZSdzIHNwZWNpZmljIGluZm9ybWF0aW9uXHJcbiAgICBlZGl0ID0gKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSA9PiB7IFxyXG4gICAgICAgIHN1cGVyLmVkaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluY3JlYXNlIC8gZGVjcmVhc2VzIG9mZnNldCBiYXNlZCBvbiBjcmVhdGlvbiBvciBkZWxldGlvbiBvZiBhIG5vdGVcclxuICAgIGVkaXRPZmZzZXQgPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgICAgIGlmIChjb21tYW5kID09PSAncmVkdWNlJykgeyBcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgLT0gMTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5vZmZzZXQgKz0gMTsgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG5vdGUgbGlzdCBsZW5ndGhcclxuICAgIGxlbmd0aCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbnVtID0gc3VwZXIubGVuZ3RoKHRoaXMuaGVhZCwgdGhpcy50YWlsKTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbE5vdGVzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBzdXBlci5nZXRBbGwodGhpcy5sZW5ndGgoKSwgdGhpcy5oZWFkLCB0aGlzLnRhaWwpO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGVsZXRlcyBhIG5vdGUgZnJvbSBub3RlIGxpc3RcclxuICAgIGRlbGV0ZVRoaXMgPSAodmFsdWUpID0+IHsgXHJcbiAgICAgICAgc3VwZXIuZGVsZXRlVGhpcyh0aGlzLmxlbmd0aCgpLCB0aGlzLmhlYWQsIHRoaXMudGFpbCwgdmFsdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuaGVhZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLmdldE5leHQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5nZXRQcmV2aW91cygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IFxyXG5cclxufTtcclxuXHJcbi8vbWFuYWdlcyBhbGwgY2F0ZWdvcnkgb2JqZWN0c1xyXG5jbGFzcyBDYXRlZ29yeUxpc3QgZXh0ZW5kcyBMaXN0TWFrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICBwdXNoID0gKHRpdGxlLCBzdGFydCwgZmluaXNoKSA9PiB7IFxyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aXRsZSwgc3RhcnQsIGZpbmlzaCk7IFxyXG4gICAgICAgIGlmICh0aGlzLnRhaWwgPT09IG51bGwpIHRoaXMuaGVhZCA9IGNhdGVnb3J5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy50YWlsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LnNldFByZXZpb3VzKHRoaXMudGFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFpbC5zZXROZXh0KGNhdGVnb3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWlsID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgfSBcclxuXHJcblxyXG4gICAgZWRpdE9mZnNldCA9ICh0YXJnZXQsIHRhc2ssIGNvbW1hbmQpID0+IHtcclxuICAgICAgICBpZiAoY29tbWFuZCA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICAgICAgICB0YXJnZXQudGFza0xpc3QucHVzaCh0YXNrLnRpdGxlLCB0YXNrLmRldGFpbHMsIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0YXJnZXQuc2V0T2Zmc2V0KGNvbW1hbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXRzIHBhc3NlZCBpdGVtJ3Mgc3BlY2lmaWMgaW5mb3JtYXRpb25cclxuICAgIGVkaXRMaXN0ID0gKHRhc2ssIGNvbW1hbmQpID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWRpdE9mZnNldCh0aGlzLmhlYWQsIHRhc2ssIGNvbW1hbmQpO1xyXG4gICAgICAgIGxldCBqdWFuID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICBsZXQgdG9kYXkgPSB0aGlzLmhlYWQuZ2V0TmV4dCgpLnN0YXJ0O1xyXG4gICAgICAgIGxldCB0b21vcnJvdyA9IHRpbWVGYWN0b3J5LnRvbW9ycm93KCk7XHJcbiAgICAgICAgaWYoanVhbi5nZXRGdWxsWWVhcigpICE9IHRpbWVGYWN0b3J5LnllYXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoKHRpbWVGYWN0b3J5Lm1vbnRoRmlyc3REYXkoKSA8PSBqdWFuKSAmJiAoanVhbiA8PSB0aW1lRmFjdG9yeS5tb250aExhc3REYXkoKSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0T2Zmc2V0KHRoaXMudGFpbCwgdGFzaywgY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICBpZigodGltZUZhY3RvcnkubW9uZGF5KCkgPD0ganVhbikgJiYgKGp1YW4gPD0gdGltZUZhY3Rvcnkuc3VuZGF5KCkpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRPZmZzZXQodGhpcy50YWlsLmdldFByZXZpb3VzKCksIHRhc2ssIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoanVhbi5nZXREYXRlKCkgPCB0b2RheS5nZXREYXRlKCkpIHx8IChqdWFuLmdldERhdGUoKSA+IHRvZGF5LmdldERhdGUoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChqdWFuLmdldERhdGUoKSA8IHRvbW9ycm93LmdldERhdGUoKSkgfHwgKGp1YW4uZ2V0RGF0ZSgpID4gdG9tb3Jyb3cuZ2V0RGF0ZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0T2Zmc2V0KHRoaXMudGFpbC5nZXRQcmV2aW91cygpLmdldFByZXZpb3VzKCksIHRhc2ssIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0T2Zmc2V0KHRoaXMuaGVhZC5nZXROZXh0KCksIHRhc2ssIGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZ2V0cyBsaXN0IGxlbmd0aFxyXG4gICAgbGVuZ3RoID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBudW0gPSBzdXBlci5sZW5ndGgodGhpcy5oZWFkLCB0aGlzLnRhaWwpO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9OyBcclxuXHJcbiAgICAvLyBnZXRzIGFsbCBpdGVtcyBvZiBhIGxpc3RcclxuICAgIGdldEFsbENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN1cGVyLmdldEFsbCh0aGlzLmxlbmd0aCgpLCB0aGlzLmhlYWQsIHRoaXMudGFpbCk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIHRoZXNlIDMgZnVuY3Rpb24gZXhpc3Qgc28gdGhhdCBhIHRhc2sgY2FuIGJlIGNyZWF0ZWQgaW50ZXJuYWxseSwgYWRkZWQgdG8gcHJvamVjdCwgY3JlYXRlZCBpbiBndWkgYW5kIGRpc3BsYXllZCBpbiBvbmUgcGxhY2VcclxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBwcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYSB0YXNrLCBhZGRzIGl0IHRvIGl0cyBwYXJlbnQgdGFzayBsaXN0IGFuZCBpbmNyZWFzZXMgb2Zmc2V0IG9mIHBhcmVudCBwcm9qZWN0ICYgY2F0ZWdvcnlcclxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAocHJvamVjdCwgdGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9qZWN0KSByZXR1cm47XHJcbiAgICAgICAgdmFyIG5ld1Rhc2sgPSBwcm9qZWN0LnRhc2tMaXN0LnB1c2godGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5lZGl0T2Zmc2V0KHByb2plY3QsICdpbmNyZWFzZScpO1xyXG4gICAgICAgIGNhdGVnb3J5RmFjdG9yeS5hZGRUYXNrKG5ld1Rhc2ssICdpbmNyZWFzZScpO1xyXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGEgcHJvamVjdCBhbmQgYWRkcyBpdCB0byB0aGUgcHJvamVjdCBsaXN0XHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0TGlzdC5wdXNoKHRpdGxlKTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcclxuICAgICAgICAvLyBjcmVhdGUgaW4gZ3VpIGFuZCBkaXNwbGF5IGl0XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0TGlzdC5nZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFza0FyciA9IHByb2plY3QudGFza0xpc3QuZ2V0QWxsVGFza3MoKTtcclxuICAgICAgICAgICAgaWYgKHRhc2tBcnIubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgdGFza0Fyci5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoKHRhc2sudGl0bGUgPT0gdGFyZ2V0LnRpdGxlKSAmJiAodGFzay5kdWVEYXRlID09IHRhcmdldC5kdWVEYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudGFza0xpc3QuZWRpdCh0YXNrLCBwcm9wZXJ0eSwgdmFsdWUpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9OyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluZHMgdGhlIHRhc2sgaW4gYWxsIHRhc2sgbGlzdHMgaXQgcmVzaWRlcyBpbiwgZGVsZXRlcyBpdCBhbmQgcmVkdWNlcyBvZmZzZXQgb2YgYWxsIHBhcmVudCBwcm9qZWN0c1xyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhcjtcclxuICAgICAgICBsZXQgcHJvamVjdHNBcnJheSA9IHByb2plY3RMaXN0LmdldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgaWYgKHByb2plY3RzQXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goaXRlbVByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFza3NBcnJheSA9IGl0ZW1Qcm9qZWN0LnRhc2tMaXN0LmdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgICAgIGlmICh0YXNrc0FycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRhc2tzQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRpdGxlID09PSB0YXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFyID0gaXRlbVByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByb2plY3QudGFza0xpc3QuZGVsZXRlVGhpcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5lZGl0T2Zmc2V0KGl0ZW1Qcm9qZWN0LCAncmVkdWNlJyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihyZXR1cm5WYXIgIT0gdW5kZWZpbmVkKSByZXR1cm4gcmV0dXJuVmFyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBsZXQgcHJvamVjdEFycmF5ID0gcHJvamVjdExpc3QuZ2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICBpZiAocHJvamVjdEFycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgaWYocHJvamVjdEFycmF5LmluY2x1ZGVzKHByb2plY3QpKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5RmFjdG9yeS5kZWxldGVBbGxUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3QuZGVsZXRlVGhpcyhwcm9qZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3JldHVybnMgbGlzdCBvZiBhbGwgcHJvamVjdHNcclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4geyByZXR1cm4gcHJvamVjdExpc3QuZ2V0QWxsUHJvamVjdHMoKTsgfTtcclxuXHJcbiAgICAvL3JldHVybnMgbGlzdCBvZiB0YXNrcyBmb3IgZ2l2ZW4gcHJvamVjdFxyXG4gICAgY29uc3QgZ2V0QWxsID0gKHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0TGlzdC5nZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBsZXQgdGFza3NBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzQXJyYXkgPSBwcm9qZWN0LnRhc2tMaXN0LmdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFza3NBcnJheS5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzQXJyYXk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG51bWJlciBvZiBpdGVtcyBpbiB0aGF0IHByb2plY3RcclxuICAgIGNvbnN0IGdldE9mZnNldCA9IChzZWFyY2hXb3JkKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RBcnJheSA9IHByb2plY3RMaXN0LmdldEFsbFByb2plY3RzKCk7XHJcbiAgICAgICAgaWYgKHByb2plY3RBcnJheS5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RBcnJheS5maW5kKChwcm9qZWN0KSA9PiB7IFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gc2VhcmNoV29yZCkgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3QuZ2V0T2Zmc2V0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNob3dzIHByb2plY3QgbGlua2VkIGxpc3RcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0TGlzdCA9ICgpID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RMaXN0OicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVUYXNrLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgdXBkYXRlVGFzayxcclxuICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXHJcbiAgICAgICAgZ2V0UHJvamVjdHMsXHJcbiAgICAgICAgZ2V0QWxsLFxyXG4gICAgICAgIGdldE9mZnNldCxcclxuICAgICAgICBkaXNwbGF5UHJvamVjdExpc3RcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgY2F0ZWdvcnlGYWN0b3J5ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgY2F0ZWdvcnlMaXN0ID0gbmV3IENhdGVnb3J5TGlzdCgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYSBjYXRlZ29yeSBhbmQgYWRkcyBpdCB0byB0aGUgY2F0ZWdvcnkgbGlzdFxyXG4gICAgY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGhvbWUgPSBjYXRlZ29yeUxpc3QucHVzaCgnSG9tZScpOyAvL2lmIGJvdGggMCB0aGVuIGFkZCBhbGxcclxuICAgICAgICB2YXIgdG9kYXkgPSBjYXRlZ29yeUxpc3QucHVzaCgnVG9kYXknLCB0aW1lRmFjdG9yeS50b2RheSgpKTtcclxuICAgICAgICB2YXIgdG9tb3Jyb3cgPSBjYXRlZ29yeUxpc3QucHVzaCgnVG9tb3Jyb3cnLCB0aW1lRmFjdG9yeS50b21vcnJvdygpKTtcclxuICAgICAgICB2YXIgdGhpc1dlZWsgPSBjYXRlZ29yeUxpc3QucHVzaCgnVGhpcyBXZWVrJywgdGltZUZhY3RvcnkubW9uZGF5KCksIHRpbWVGYWN0b3J5LnN1bmRheSgpKTtcclxuICAgICAgICB2YXIgdGhpc01vbnRoID0gY2F0ZWdvcnlMaXN0LnB1c2goJ1RoaXMgTW9udGgnLCB0aW1lRmFjdG9yeS5tb250aEZpcnN0RGF5KCksIHRpbWVGYWN0b3J5Lm1vbnRoTGFzdERheSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaG9tZSxcclxuICAgICAgICAgICAgdG9kYXksXHJcbiAgICAgICAgICAgIHRvbW9ycm93LFxyXG4gICAgICAgICAgICB0aGlzV2VlayxcclxuICAgICAgICAgICAgdGhpc01vbnRoXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIHZhciBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICBjYXRlZ29yeUZhY3RvcnkuYWRkVGFzayhuZXdUYXNrLCAnaW5jcmVhc2UnKTtcclxuICAgICAgICByZXR1cm4gbmV3VGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2ssIGNvbW1hbmQpID0+IHtcclxuICAgICAgICAvL2xvZ2ljIHRvIGNoZWNrIGlmIHRoZSB0YXNrIGJlaW5nIGFkZGVkIGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgdmFyIGNoZWNrZXIgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyID0gY2F0ZWdvcnlMaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcclxuICAgICAgICBjYXRlZ29yeUFyci5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhc2tBcnIgPSBjYXRlZ29yeS50YXNrTGlzdC5nZXRBbGxUYXNrcygpO1xyXG4gICAgICAgICAgICBpZiAodGFza0FyciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKGl0ZW0udGl0bGUgPT09IHRhc2sudGl0bGUpICYmIChpdGVtLmRldGFpbHMgPT09IHRhc2suZGV0YWlscykpIGNoZWNrZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFjaGVja2VyKSByZXR1cm47XHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0LmVkaXRMaXN0KHRhc2ssIGNvbW1hbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlUb0NoYW5nZUFyciA9IFtdO1xyXG4gICAgICAgIGxldCB0YXNrYXJyID0gW107XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IGNhdGVnb3J5TGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhc2tBcnIgPSBjYXRlZ29yeS50YXNrTGlzdC5nZXRBbGxUYXNrcygpO1xyXG4gICAgICAgICAgICBpZiAodGFza0Fyci5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0YXNrQXJyLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZigodGFzay50aXRsZSA9PSB0YXJnZXQudGl0bGUpICYmICh0YXNrLmR1ZURhdGUgPT0gdGFyZ2V0LmR1ZURhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlUb0NoYW5nZUFyci5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrYXJyLnB1c2godGFzayk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH07IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvamVjdEZhY3RvcnkudXBkYXRlVGFzayh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUb0NoYW5nZUFyci5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgdGFza2Fyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkudGFza0xpc3QuZWRpdChpdGVtLCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlT25lVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhcjtcclxuICAgICAgICBsZXQgY2F0Y2hlcjtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlBcnJheSA9IGNhdGVnb3J5TGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjYXRlZ29yeUFycmF5LmZvckVhY2goaXRlbUNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1BcnJheSA9IGl0ZW1DYXRlZ29yeS50YXNrTGlzdC5nZXRBbGxUYXNrcygpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbUFycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGl0ZW1BcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IHRhc2sudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnkudGFza0xpc3QuZGVsZXRlVGhpcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3QuZWRpdE9mZnNldChpdGVtQ2F0ZWdvcnksIHRhc2ssICdyZWR1Y2UnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYXIgPSBwcm9qZWN0RmFjdG9yeS5kZWxldGVUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5WYXIgIT0gdW5kZWZpbmVkKSBjYXRjaGVyID0gcmV0dXJuVmFyO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoY2F0Y2hlciAhPSB1bmRlZmluZWQpIHJldHVybiBjYXRjaGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVBbGxUYXNrcyA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IGNhdGVnb3J5TGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5QXJyYXkubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnRhc2tMaXN0LmdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgaWYgKHByb2plY3RBcnJheS5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3RJdGVtID0+IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUl0ZW1zQXJyID0gY2F0ZWdvcnkudGFza0xpc3QuZ2V0QWxsVGFza3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUl0ZW1zQXJyLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUl0ZW1zQXJyLmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKGl0ZW0xLnRpdGxlID09PSBwcm9qZWN0SXRlbS50aXRsZSkgJiYgKGl0ZW0xLmR1ZURhdGUgPT09IHByb2plY3RJdGVtLmR1ZURhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRhc2tMaXN0LmRlbGV0ZVRoaXMoaXRlbTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3QuZWRpdE9mZnNldChjYXRlZ29yeSwgaXRlbTEsICdyZWR1Y2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9OyBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy9yZWNlaXZlcyBuYW1lIGZvciB0aGUgY2F0ZWdvcnkgd2UgYXJlIGZlY2hpbmcgdGFza3MgZm9yXHJcbiAgICBjb25zdCBnZXRBbGwgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5QXJyYXkgPSBjYXRlZ29yeUxpc3QuZ2V0QWxsQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGxldCB0YXNrc0FycmF5ID0gW107XHJcbiAgICAgICAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgaWYoY2F0ZWdvcnkudGl0bGUgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdGFza3NBcnJheSA9IGNhdGVnb3J5LnRhc2tMaXN0LmdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFza3NBcnJheS5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzQXJyYXk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGZldGNoIGp1c3QgdGhlIHRpbWUgY2F0ZWdvcmllc1xyXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHsgcmV0dXJuIGNhdGVnb3J5TGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7IH07XHJcblxyXG4gICAgLy8gbnVtYmVyIG9mIGl0ZW1zIGluIHRoYXQgY2F0ZWdvcnlcclxuICAgIGNvbnN0IGdldE9mZnNldCA9IChzZWFyY2hXb3JkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5QXJyYXkgPSBjYXRlZ29yeUxpc3QuZ2V0QWxsQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeUFycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5QXJyYXkuZmluZCgoY2F0ZWdvcnkpID0+IHsgXHJcbiAgICAgICAgICAgIGlmKGNhdGVnb3J5LnRpdGxlID09PSBzZWFyY2hXb3JkKSByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5LmdldE9mZnNldCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzaG93cyBjYXRlZ29yeSBsaW5rZWQgbGlzdFxyXG4gICAgY29uc3QgZGlzcGxheUNhdGVnb3J5TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZWdvcnkgTGlzdDonKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeUxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVGFzayxcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcclxuICAgICAgICBhZGRUYXNrLFxyXG4gICAgICAgIGdldENhdGVnb3JpZXMsXHJcbiAgICAgICAgdXBkYXRlVGFzayxcclxuICAgICAgICBkZWxldGVPbmVUYXNrLFxyXG4gICAgICAgIGRlbGV0ZUFsbFRhc2tzLFxyXG4gICAgICAgIGdldEFsbCxcclxuICAgICAgICBnZXRPZmZzZXQsXHJcbiAgICAgICAgZGlzcGxheUNhdGVnb3J5TGlzdFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IG5vdGVGYWN0b3J5ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbm90ZUxpc3QgPSBuZXcgTm90ZUxpc3QoKTtcclxuXHJcbiAgICAvLyBjcmVhdGVzIGEgbm90ZSBhbmQgYWRkcyBpdCB0byB0aGUgbm90ZSBsaXN0XHJcbiAgICBjb25zdCBjcmVhdGVOb3RlID0gKHRpdGxlLCBkZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld05vdGUgPSBub3RlTGlzdC5wdXNoKHRpdGxlLCBkZXRhaWxzKTtcclxuICAgICAgICBub3RlTGlzdC5lZGl0T2Zmc2V0KCdpbmNyZWFzZScpO1xyXG4gICAgICAgIHJldHVybiBuZXdOb3RlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0Tm90ZSA9ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG5vdGVMaXN0LmVkaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVOb3RlID0gKG5vdGUpID0+IHtcclxuICAgICAgICBsZXQgbm90ZUFycmF5ID0gbm90ZUxpc3QuZ2V0QWxsTm90ZXMoKTtcclxuICAgICAgICBpZiAobm90ZUFycmF5Lmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgaWYobm90ZUFycmF5LmluY2x1ZGVzKG5vdGUpKSB7XHJcbiAgICAgICAgICAgIG5vdGVMaXN0LmRlbGV0ZVRoaXMobm90ZSk7XHJcbiAgICAgICAgICAgIG5vdGVMaXN0LmVkaXRPZmZzZXQoJ3JlZHVjZScpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpc3RMZW5ndGggPSAoKSA9PiB7IHJldHVybiBub3RlTGlzdC5sZW5ndGgoKTsgfTtcclxuXHJcbiAgICBjb25zdCBnZXRBbGwgPSAoKSA9PiB7IHJldHVybiBub3RlTGlzdC5nZXRBbGxOb3RlcygpOyB9O1xyXG5cclxuICAgIC8vIHNob3dzIG5vdGUgbGlua2VkIGxpc3RcclxuICAgIGNvbnN0IGRpc3BsYXlOb3RlcyA9ICgpID0+IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdGVMaXN0OicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGVMaXN0KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTm90ZSxcclxuICAgICAgICBlZGl0Tm90ZSxcclxuICAgICAgICBkZWxldGVOb3RlLFxyXG4gICAgICAgIGxpc3RMZW5ndGgsXHJcbiAgICAgICAgZ2V0QWxsLFxyXG4gICAgICAgIGRpc3BsYXlOb3Rlc1xyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHRpbWVGYWN0b3J5ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCB5ZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICByZXR1cm4geWVhcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9kYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0b2RheTtcclxuICAgIH07IFxyXG5cclxuICAgIGNvbnN0IHRvbW9ycm93ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB0bXJ3ID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgICAgIHRtcncuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICByZXR1cm4gdG1ydztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbW9uZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBkaWZmID0gdG9kYXkuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PT0gMCA/IC02IDogMSlcclxuICAgICAgICBjb25zdCBtb25kYXkgPSBuZXcgRGF0ZSh0b2RheS5zZXREYXRlKGRpZmYpKTtcclxuICAgICAgICByZXR1cm4gbW9uZGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdW5kYXkgPSBuZXcgRGF0ZShtb25kYXkoKSk7XHJcbiAgICAgICAgc3VuZGF5LnNldERhdGUoc3VuZGF5LmdldERhdGUoKSArIDYpO1xyXG4gICAgICAgIHJldHVybiBzdW5kYXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9udGhGaXJzdERheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RNb250aERheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIDEpO1xyXG4gICAgICAgIHJldHVybiBmaXJzdE1vbnRoRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vbnRoTGFzdERheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbGFzdE1vbnRoRGF5ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSArIDEsIDApO1xyXG4gICAgICAgIHJldHVybiBsYXN0TW9udGhEYXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeWVhcixcclxuICAgICAgICB0b2RheSxcclxuICAgICAgICB0b21vcnJvdyxcclxuICAgICAgICBtb25kYXksIFxyXG4gICAgICAgIHN1bmRheSxcclxuICAgICAgICBtb250aEZpcnN0RGF5LFxyXG4gICAgICAgIG1vbnRoTGFzdERheVxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbi8vaW5pdGlhdGluZyB0aGUgd2Vic2l0ZSB3aXRoIGV4YW1wbGVzIG9mIHRhc2tzLCBwcm9qZWN0cyBhbmQgbm90ZXNcclxubGV0IHRvZGF5ID0gJzIwMjUtMDItMDYnO1xyXG5sZXQgb3V0c2lkZSA9ICcyMDIzLTAzLTAxJztcclxubGV0IHRtcncgPSAnMjAyNS0wMi0wNic7IFxyXG5sZXQgc2V2ZW4gPSAnMjAyNS0wMi0wOSc7XHJcbmxldCB0aGlzV2VlayA9ICcyMDI1LTAyLTA4JztcclxubGV0IHRoaXNXZWVrMiA9ICcyMDI1LTAyLTAxJztcclxubGV0IHRoaXNXZWVrMyA9ICcyMDI1LTAyLTAyJztcclxubGV0IG5leHRNb250aCA9ICcyMDI1LTA0LTA3JztcclxuXHJcbmNhdGVnb3J5RmFjdG9yeS5jcmVhdGVDYXRlZ29yeSgpO1xyXG5sZXQgYmlsbHMgPSBwcm9qZWN0RmFjdG9yeS5jcmVhdGVQcm9qZWN0KCdCaWxscycpO1xyXG5sZXQgZ3ltID0gcHJvamVjdEZhY3RvcnkuY3JlYXRlUHJvamVjdCgnR3ltJyk7XHJcbmxldCBnYW1pbmcgPSBwcm9qZWN0RmFjdG9yeS5jcmVhdGVQcm9qZWN0KCdHYW1pbmcnKTtcclxuXHJcbi8vIGxldCBwcm9qZWN0cyA9IHtcclxuLy8gICAgIGFycjogW2JpbGxzLnRpdGxlLCBneW0udGl0bGUsIGdhbWluZy50aXRsZV1cclxuLy8gfVxyXG5cclxuLy8gbGV0IGJ1Z2EgPSBKU09OLnN0cmluZ2lmeSgncHJvamVjdHMnLCBwcm9qZWN0cyk7XHJcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIGJ1Z2EpO1xyXG5cclxuLy8gbGV0IGdldHNtdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGdldHNtdCkpO1xyXG5cclxuLy8gbGV0IHRhc2tBcnIgPSB7XHJcbi8vICAgICB0YXNrOiBcclxuLy8gfVxyXG5cclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhiaWxscywgJ2VsZWN0cmljaXR5JywgJ2dldCBtb25leScsIHRvZGF5LCAnaGlnaCcpO1xyXG5wcm9qZWN0RmFjdG9yeS5jcmVhdGVUYXNrKGJpbGxzLCAnZ2FzJywgJ25vdCB0aGF0IGV4cGVuc2l2ZScsIG91dHNpZGUsICdsb3cnKTtcclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhiaWxscywgJ3J1bm5pbmcgd2F0ZXInLCAnZ2V0IG1vbmV5JywgdGhpc1dlZWssICdtaWQnKTtcclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhiaWxscywgJ3dpZmknLCAnYXNrIGZvciBjaGFuZ2UgaW4gcGFja2FnZScsIHRoaXNXZWVrMywgJ2hpZ2gnKTtcclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhiaWxscywgJ3RyYXNoIGNvbGxlY3Rpb24nLCAndGhyb3cgdGhlIHRyYXNoIG91dCB0b28nLCB0aGlzV2VlazIsICdoaWdoJyk7XHJcblxyXG5wcm9qZWN0RmFjdG9yeS5jcmVhdGVUYXNrKGd5bSwgJ3dhc2ggY2xvdGhlcycsICd0YWtlcyBhcm91bmQgMmgnLCB0bXJ3LCAnbWlkJyk7XHJcbnByb2plY3RGYWN0b3J5LmNyZWF0ZVRhc2soZ3ltLCAnY2hlY2sgbW9uZXknLCAnbWFrZSBzdXJlIHRvIGhhdmUgZW5vdWdoIG1vbmV5IGZvciBwcm90ZWluIHNoYWtlcycsIHNldmVuLCAnbWlkJyk7XHJcbnByb2plY3RGYWN0b3J5LmNyZWF0ZVRhc2soZ3ltLCAndXBncmFkZSBtZW1iZXJzaGlwJywgJ2dldCB0aGUgcHJlbWl1bSBtZW1iZXJzaGlwIHdpdGggdGFzdHkgd2F0ZXInLCBuZXh0TW9udGgsICdtaWQnKTtcclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhneW0sICdjYWxsIGpvaG5ueScsICdhc2sgam9obm55IHRvIGpvaW4nLCBuZXh0TW9udGgsICdtaWQnKTtcclxuXHJcbnByb2plY3RGYWN0b3J5LmNyZWF0ZVRhc2soZ2FtaW5nLCAnYXJrbmlnaHRzJywgJ2F1dG9ydW4gdGhlIGdhbWUnLCB0aGlzV2VlaywgJ2hpZ2gnKTtcclxucHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhnYW1pbmcsICdtb25zdGVyIGh1bnRlcicsICdwbGF5IHdpdGggbW9yZ2FuYScsIHRoaXNXZWVrMywgJ21pZCcpO1xyXG5wcm9qZWN0RmFjdG9yeS5jcmVhdGVUYXNrKGdhbWluZywgJ2dhbWUgYXdhcmRzIDIwMjUnLCAnd2F0Y2ggdGhlIGxhdGVzdCBnYW1lIGF3YXJkcyBvbiBZVCcsIHNldmVuLCAnbG93Jyk7XHJcblxyXG5cclxuY2F0ZWdvcnlGYWN0b3J5LmNyZWF0ZVRhc2soJ2J1eSBicmVhZCcsICdicmVhZC4nLCBvdXRzaWRlLCAnaGlnaCcpO1xyXG5jYXRlZ29yeUZhY3RvcnkuY3JlYXRlVGFzaygnY2FsbCBncmFuZG1hJywgJ2NoZWNrIHVwIG9uIGdyYW5ueScsIHRvZGF5LCAnbWlkJyk7XHJcbmNhdGVnb3J5RmFjdG9yeS5jcmVhdGVUYXNrKCdvcmdhbml6ZSBtZWV0dXAnLCAnd2hlbiBhbmQgd2hlcmUgaXMgdGhlIHRyaXA/JywgdGhpc1dlZWsyLCAnbG93Jyk7XHJcblxyXG5wcm9qZWN0RmFjdG9yeS5kaXNwbGF5UHJvamVjdExpc3QoKTtcclxuY2F0ZWdvcnlGYWN0b3J5LmRpc3BsYXlDYXRlZ29yeUxpc3QoKTtcclxuXHJcblxyXG5ub3RlRmFjdG9yeS5jcmVhdGVOb3RlKCdyZWFkIGJvb2snLCAnZm91bmQgdGhpcyBjdXRlIGJvb2sgd2FubmEgcmVhZCBpdCcpO1xyXG5ub3RlRmFjdG9yeS5jcmVhdGVOb3RlKCdyZWNpcGUnLCAnZ29ubmEgbWFrZSBjYWtlJyk7XHJcbm5vdGVGYWN0b3J5LmNyZWF0ZU5vdGUoJz8/PycsICdjYXQgc2xlZXBpbmcgc29tZXdoZXJlLCBoYXZlIHRvIGZpbmQgaGltJyk7XHJcbm5vdGVGYWN0b3J5LmNyZWF0ZU5vdGUoJ2xhbmd1YWdlJywgJ2xlYXJuIGphcGFuZXNlJyk7XHJcbm5vdGVGYWN0b3J5LmNyZWF0ZU5vdGUoJ3dhdGVyIHBsYW50cycsICdnZXQgbnV0cmllbnRzIHRvbycpO1xyXG5ub3RlRmFjdG9yeS5jcmVhdGVOb3RlKCdzaG93Y2FzZScsIGBzaG93Y2FzZXNcclxubG9uZ1xyXG5ub3RlXHJcbmkgZHVubm8gXHJcbndhdGVyXHJcbmJyaWRnZSBcclxuYW5pbWUgXHJcbm1vdXNlXHJcbm5hcGtpblxyXG5mb29kIFxyXG5iYW5hbmFgKTtcclxubm90ZUZhY3RvcnkuY3JlYXRlTm90ZSgnYW5pbWUnLCAnd2F0Y2ggZGFuZGFkYW4nKTtcclxubm90ZUZhY3RvcnkuY3JlYXRlTm90ZSgncnViaWNzIGN1YmUnLCAnZ2V0IHRoZSBsYXN0IG1vZGVsIG9mIHJ1YmljcyBjdWJlIGZyb20gdGhlaXIgd2Vic2l0ZScpO1xyXG5cclxubm90ZUZhY3RvcnkuZGlzcGxheU5vdGVzKCk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcHJvamVjdEZhY3RvcnksXHJcbiAgICBjYXRlZ29yeUZhY3RvcnksXHJcbiAgICBub3RlRmFjdG9yeVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9pbWFnZS9jaGVjay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksICN3cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgLS1tYWluLWNvbnRlbnQ6IHdoaXRlO1xyXG4gICAgLS1zaWRlLWJhcjogI2VlZTtcclxuICAgIC0tYnRuLXRvcGJhcjogIzYwN0FCNjtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDEsIGgyLCBoM3tcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG59XHJcblxyXG5pbnB1dCwgdGV4dGFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogdGV4dDtcclxufVxyXG5cclxuaW5wdXQ6aG92ZXIsIGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5vYmplY3R7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3dyYXBwZXIsICNjcmVhdGUtbmV3LXRhc2stcG9wdXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XHJcbn1cclxuXHJcbiN0b3BiYXJ7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAgXHJcbiAgICBwYWRkaW5nOiAwIDAgMTVweCA0NXB4O1xyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcclxuICAgIG1pbi13aWR0aDogMTVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogOHJlbTtcclxuICAgIHBhZGRpbmc6IDIuN3JlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYnRuLXRvcGJhcik7XHJcbn1cclxuXHJcbi5tYWluLXNpZGViYXItdGV4dC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLXNpZGViYXItdGV4dCwgLnN1YnR5cGUtc2lkZWJhci10ZXh0LCAjbWFpbi1zaWRlYmFyLXRleHQtbm8taG92ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tc2lkZWJhci10ZXh0LCAuc3VidHlwZS1zaWRlYmFyLXRleHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFpbi1zaWRlYmFyLXRleHQ6aG92ZXIsIC5zdWJ0eXBlLXNpZGViYXItdGV4dDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uaG9sZGVyLXJpZ2h0LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxLjJyZW07XHJcbn1cclxuXHJcbi5ob2xkZXItdHJhc2gtc3ZnLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbGRlci10cmFzaC1zdmcge1xyXG4gICAgd2lkdGg6IDEuM3JlbTtcclxuICAgIGhlaWdodDogMS4zcmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci10ZXh0LWgxLCAjc2lkZWJhci10ZXh0LWgxLXByb2plY3R7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc2hvdy1udW1iZXIsICNzaG93LW51bWJlci1wcm9qZWN0e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNzdWJ0eXBlLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRleHQtaDN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4jYWRkLWJ0bntcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICBoZWlnaHQ6IDMuMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4jYWRkLWJ0bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjVlOGI7XHJcbn1cclxuXHJcbi5jb250ZW50LWRpdntcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29udGVudCk7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmNvbnRlbnQtZGl2LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDRyZW0gNnJlbTtcclxuICAgIGdhcDogMS4zcmVtO1xyXG59XHJcblxyXG4vKiBjb2RlIGZvciBpbmRpdmlkdWFsIGl0ZW0gaW4gbWFpbiBjb250ZW50ICovXHJcbi50YXNrLWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrLWRpdi5ib3JkZXItZ3JlZW57XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4udGFzay1kaXYuYm9yZGVyLW9yYW5nZXtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xyXG59XHJcblxyXG4udGFzay1kaXYuYm9yZGVyLXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4ubGVmdC1zaWRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWRpdntcclxuICAgIHdpZHRoOiAwLjdyZW07XHJcbiAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIFx0IzExOTk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWRpdi5hY3RpdmV7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZXtcclxuICAgIHdpZHRoOiAyMjJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uZGF0ZS1kaXNwbGF5LWRpdntcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWRpdntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJ0bi1kaXY6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmdlbmVyYWwtZ3JlZW4tYnRuLCAudG9kby1kYXRlLWNsYXNze1xyXG4gICAgY29sb3I6ICMxMTk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMxMTk5OTksIDAuNyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTE5OTk5O1xyXG59XHJcblxyXG4uZ2VuZXJhbC1ncmVlbi1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE5OTk5O1xyXG59XHJcblxyXG4vKiByZW5hbWUgZXhhbXBsZS1ub3RlIHRvIG5vdGUtZGl2ICovXHJcbi50YXNrLWRpdjpob3ZlciwgLmV4YW1wbGUtbm90ZTpob3ZlcntcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzOyBcclxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn0gXHJcblxyXG4uc3ZnLWRpdntcclxuICAgIHdpZHRoOiAwLjlyZW07XHJcbiAgICBoZWlnaHQ6IDAuOXJlbTtcclxufVxyXG5cclxuLmVkaXQtc3ZnLWRpdjpob3ZlciwgLnRyYXNoLXN2Zy1kaXY6aG92ZXIsIC5ob2xkZXItdHJhc2gtc3ZnLWRpdjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTkzNCUpIGh1ZS1yb3RhdGUoOTdkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCgxMDMlKTtcclxufVxyXG5cclxuXHJcbi8qIHBvcHVwIHRvIGNyZWF0ZSBhIG5ldyB0YXNrICovXHJcbiNjcmVhdGUtbmV3LXRhc2stcG9wdXB7XHJcbiAgICB3aWR0aDogNjByZW07XHJcbiAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgbWFyZ2luOiAxMiUgYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi50b3BiYXItY3JlYXRlLXRvZG8tcG9wdXB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXctY2xvc2V7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMTcwOSUpIGh1ZS1yb3RhdGUoMjg3ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwNiUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3JlYXRlLW5ldy1jbG9zZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTkzNCUpIGh1ZS1yb3RhdGUoOTdkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCgxMDMlKTtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGUtb2YtcG9wdXB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcclxuICAgIGdhcDogMzVweDtcclxufVxyXG5cclxuLnNpZGViYXItY3JlYXRlLXRvZG8tcG9wdXB7XHJcbiAgICBtYXgtd2lkdGg6IDlyZW07XHJcbiAgICBtaW4td2lkdGg6IDRyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLm9wdGlvbi10ZXh0LCAubm90ZS10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxKTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvKiBhZGQgd2l0aCBqcyBvbiBob3ZlciB0byB0aGUgZWxlbWVudCwgbm90IGNsYXNzOiB2YXIoLS1idG4tdG9wYmFyKTsgKi9cclxufVxyXG5cclxuLm9wdGlvbi10ZXh0Lm1vdXNlT257XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUgKDEuMDIpOyBcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9wdGlvbi10ZXh0OmhvdmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxLjAyKTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUtaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZGV0YWlscy1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbn1cclxuXHJcbiNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2LCAjZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdi1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdntcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRvZG8tZGF0ZS1jbGFzc3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50b2RvLWRhdGUtY2xhc3M6aG92ZXIsIC50b2RvLWRhdGUtY2xhc3M6Zm9jdXN7XHJcbiAgICBjb2xvcjogIzExOTk5OTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2LWNoaWxke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4ucHJpb3JpdHktZGl2LCAuYWRkLXRvZG8tYnRue1xyXG4gICAgd2lkdGg6IDQuNXJlbTtcclxufVxyXG5cclxuLmxvd3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IChncmVlbiwgMC43KTsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4ubG93LmFkZC1ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG93OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5taWR7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogKG9yYW5nZSwgMC43KTsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxufVxyXG5cclxuLm1pZC5hZGQtb3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLm1pZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhpZ2h7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogKHJlZCwgMC43KTsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmhpZ2guYWRkLXJlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhpZ2g6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbiNwcmlvcml0eS1kaXYtcGFyZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcHJpb3JpdHktZGl2cy13cmFwcGVyLXBhcmVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI3ByaW9yaXR5LWRpdnMtd3JhcHBlci1wYXJlbnQsICNwcmlvcml0eS1kaXZzLXdyYXBwZXItY2hpbGR7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIGNvZGUgZm9yIGNyZWF0ZSBwcm9qZWN0ICYgbm90ZSBwb3B1cCAqL1xyXG4ucmlnaHQtc2lkZS1zdWJtaXQtYnRuLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvamVjdC1ub3RlLWJ0bntcclxuICAgIHdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4vKiBmb3Igbm90ZSAqL1xyXG4uY29udGVudC1kaXYtZ3JpZHtcclxuICAgIC8qIHBhZGRpbmc6IDAgMTBweDsgKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE1MHB4LCAzMy4zMyUpKTsgKi9cclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAvKiBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG59XHJcblxyXG4uZ3JpZC1jb2x7XHJcbiAgICAvKiB3aWR0aDogMzMuMzMlOyAqL1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb2wtLTF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY29sLS00e1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1ub3Rle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcclxuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDEuM3JlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdGUtdGl0bGUsIC5ub3RlLXBhcmFncmFwaCwgLmRldGFpbHMtaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5vdGUtcGFyYWdyYXBoIHsgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3RlLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiAjY3JlYXRlLW5vdGUtY2xvc2UsICNjcmVhdGUtZWRpdC1jbG9zZSAqL1xyXG4uY2xvc2Utc3ZnLWRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxufVxyXG5cclxuLmNsb3NlLXN2Zy1kaXY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS14LXN2Z3tcclxuICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg3JSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMjc5ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTA5JSk7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcbi8qIGVkaXQgcG9wdXAgICovXHJcbi5lZGl0LXBvcHVwe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMXJlbTtcclxuICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29uZmlybS1jaGFuZ2VzLWJ0bntcclxuICAgIHdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG4jdGV4dGFyZWEtd3JhcHBlci1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMHB4O1xyXG59XHJcblxyXG4jdGV4dGFyZWEtd3JhcHBlci1kaXYgdGV4dGFyZWE6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjg7IFxyXG59XHJcblxyXG4jdGV4dGFyZWEtd3JhcHBlci1kaXYgdGV4dGFyZWE6bGFzdC1vZi10eXBle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTsgXHJcbn1cclxuXHJcbiNjcmVhdGUtZWRpdC1jbG9zZXtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTkzNCUpIGh1ZS1yb3RhdGUoOTdkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCgxMDMlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBkZXRhaWxzIHBvcHVwIGNvZGUgKi9cclxuI2RldGFpbHMtcG9wdXB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAgKi8gIC8qIGRvZXNudCB3b3JrICovXHJcbn1cclxuXHJcbjo6YmFja2Ryb3B7ICAvKiBhbmltYXRlIHNvIHRoYXQgYmx1ciBjb21lcyBpbiBhbmQgb2ZmICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAzMCUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbn1cclxuXHJcbiNkZXRhaWxzLXBvcHVwLXRleHQtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxN3B4O1xyXG59XHJcblxyXG4jZGV0YWlscy1wb3B1cC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuI2RldGFpbHMtcG9wdXAtYWJvdXQtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jZGV0YWlscy1wb3B1cC1jYXRlZ29yeXsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQuMnJlbTtcclxufVxyXG5cclxuI2RldGFpbHMtcG9wdXAtdXJnZW5jeXtcclxuICAgIG1hcmdpbi1yaWdodDogNC4xcmVtO1xyXG59XHJcblxyXG4jZGV0YWlscy1wb3B1cC1kZWFkbGluZXtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5cclxuI2RldGFpbHMtcG9wdXAtbW9yZXtcclxuICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xyXG59XHJcblxyXG4uZW1wdHktbXNnLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNDBweDtcclxufVxyXG5cclxuLmJsdWUtY2xyMSB7XHJcbiAgICBjb2xvcjogIzYwN0FCNjtcclxufVxyXG5cclxuLndoaXRlLWNscjEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7O0lBRXJCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQzs7SUFFbkMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RC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cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCAjd3JhcHBlcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICAtLW1haW4tY29udGVudDogd2hpdGU7XFxyXFxuICAgIC0tc2lkZS1iYXI6ICNlZWU7XFxyXFxuICAgIC0tYnRuLXRvcGJhcjogIzYwN0FCNjtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgze1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgdGV4dGFyZWF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXIsIGlucHV0OmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5vYmplY3R7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3cmFwcGVyLCAjY3JlYXRlLW5ldy10YXNrLXBvcHVwe1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcblxcclxcbiN0b3BiYXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXRvcGJhcik7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxcclxcbiAgICBwYWRkaW5nOiAwIDAgMTVweCA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XFxyXFxuICAgIG1pbi13aWR0aDogMTVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiA4cmVtO1xcclxcbiAgICBwYWRkaW5nOiAyLjdyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1idG4tdG9wYmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2lkZWJhci10ZXh0LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2lkZWJhci10ZXh0LCAuc3VidHlwZS1zaWRlYmFyLXRleHQsICNtYWluLXNpZGViYXItdGV4dC1uby1ob3ZlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zaWRlYmFyLXRleHQsIC5zdWJ0eXBlLXNpZGViYXItdGV4dCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2lkZWJhci10ZXh0OmhvdmVyLCAuc3VidHlwZS1zaWRlYmFyLXRleHQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZGVyLXJpZ2h0LWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZGVyLXRyYXNoLXN2Zy1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZGVyLXRyYXNoLXN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxLjNyZW07XFxyXFxuICAgIGhlaWdodDogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci10ZXh0LWgxLCAjc2lkZWJhci10ZXh0LWgxLXByb2plY3R7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1udW1iZXIsICNzaG93LW51bWJlci1wcm9qZWN0e1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWRpdntcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VidHlwZS13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItdGV4dC1oM3tcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJ0bntcXHJcXG4gICAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzLjFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJ0bjpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1ZThiO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1kaXZ7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb250ZW50KTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtZGl2LWZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gNnJlbTtcXHJcXG4gICAgZ2FwOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGNvZGUgZm9yIGluZGl2aWR1YWwgaXRlbSBpbiBtYWluIGNvbnRlbnQgKi9cXHJcXG4udGFzay1kaXZ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXYuYm9yZGVyLWdyZWVue1xcclxcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXYuYm9yZGVyLW9yYW5nZXtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRpdi5ib3JkZXItcmVke1xcclxcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2lkZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94LWRpdntcXHJcXG4gICAgd2lkdGg6IDAuN3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjdyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIFxcdCMxMTk5OTk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gtZGl2LmFjdGl2ZXsgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2UvY2hlY2sucG5nKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGV7XFxyXFxuICAgIHdpZHRoOiAyMjJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtZGlzcGxheS1kaXZ7XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kaXZ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDExcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5idG4tZGl2OmhvdmVye1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbC1ncmVlbi1idG4sIC50b2RvLWRhdGUtY2xhc3N7XFxyXFxuICAgIGNvbG9yOiAjMTE5OTk5O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMxMTk5OTksIDAuNyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5nZW5lcmFsLWdyZWVuLWJ0bjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVuYW1lIGV4YW1wbGUtbm90ZSB0byBub3RlLWRpdiAqL1xcclxcbi50YXNrLWRpdjpob3ZlciwgLmV4YW1wbGUtbm90ZTpob3ZlcntcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IFxcclxcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnN2Zy1kaXZ7XFxyXFxuICAgIHdpZHRoOiAwLjlyZW07XFxyXFxuICAgIGhlaWdodDogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1zdmctZGl2OmhvdmVyLCAudHJhc2gtc3ZnLWRpdjpob3ZlciwgLmhvbGRlci10cmFzaC1zdmctZGl2OmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTkzNCUpIGh1ZS1yb3RhdGUoOTdkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCgxMDMlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcG9wdXAgdG8gY3JlYXRlIGEgbmV3IHRhc2sgKi9cXHJcXG4jY3JlYXRlLW5ldy10YXNrLXBvcHVwe1xcclxcbiAgICB3aWR0aDogNjByZW07XFxyXFxuICAgIGhlaWdodDogMzByZW07XFxyXFxuICAgIG1hcmdpbjogMTIlIGF1dG87XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wYmFyLWNyZWF0ZS10b2RvLXBvcHVwe1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ldy1jbG9zZXtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxNzA5JSkgaHVlLXJvdGF0ZSgyODdkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTA2JSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXctY2xvc2U6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjQlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgxOTM0JSkgaHVlLXJvdGF0ZSg5N2RlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDEwMyUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZS1vZi1wb3B1cHtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWNyZWF0ZS10b2RvLXBvcHVwe1xcclxcbiAgICBtYXgtd2lkdGg6IDlyZW07XFxyXFxuICAgIG1pbi13aWR0aDogNHJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLXRleHQsIC5ub3RlLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSAoMSk7IFxcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIC8qIGFkZCB3aXRoIGpzIG9uIGhvdmVyIHRvIHRoZSBlbGVtZW50LCBub3QgY2xhc3M6IHZhcigtLWJ0bi10b3BiYXIpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLXRleHQubW91c2VPbntcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUgKDEuMDIpOyBcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLXRleHQ6aG92ZXJ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxLjAyKTsgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXdyYXBwZXItZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1pbnB1dHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1pbnB1dHtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdiwgI2RhdGUtcHJpb3JpdHktd3JhcHBlci1kaXYtY2hpbGR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtY2xhc3N7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtY2xhc3M6aG92ZXIsIC50b2RvLWRhdGUtY2xhc3M6Zm9jdXN7XFxyXFxuICAgIGNvbG9yOiAjMTE5OTk5O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdi1jaGlsZHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1kaXYsIC5hZGQtdG9kby1idG57XFxyXFxuICAgIHdpZHRoOiA0LjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb3d7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogKGdyZWVuLCAwLjcpOyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdy5hZGQtZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sb3c6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5taWR7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IChvcmFuZ2UsIDAuNyk7ICovXFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZC5hZGQtb3Jhbmdle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1pZDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oaWdoe1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAocmVkLCAwLjcpOyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWdoLmFkZC1yZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYtcGFyZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXZzLXdyYXBwZXItcGFyZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5LWRpdnMtd3JhcHBlci1wYXJlbnQsICNwcmlvcml0eS1kaXZzLXdyYXBwZXItY2hpbGR7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb2RlIGZvciBjcmVhdGUgcHJvamVjdCAmIG5vdGUgcG9wdXAgKi9cXHJcXG4ucmlnaHQtc2lkZS1zdWJtaXQtYnRuLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXByb2plY3Qtbm90ZS1idG57XFxyXFxuICAgIHdpZHRoOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3Igbm90ZSAqL1xcclxcbi5jb250ZW50LWRpdi1ncmlke1xcclxcbiAgICAvKiBwYWRkaW5nOiAwIDEwcHg7ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUwcHgsIDMzLjMzJSkpOyAqL1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICAvKiBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb2x7XFxyXFxuICAgIC8qIHdpZHRoOiAzMy4zMyU7ICovXFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29sLS0xe1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29sLS00e1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlLW5vdGV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXIpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGUtdGl0bGUsIC5ub3RlLXBhcmFncmFwaCwgLmRldGFpbHMtaW5wdXR7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiA5NiU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS1wYXJhZ3JhcGggeyBcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjY3JlYXRlLW5vdGUtY2xvc2UsICNjcmVhdGUtZWRpdC1jbG9zZSAqL1xcclxcbi5jbG9zZS1zdmctZGl2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Utc3ZnLWRpdjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UteC1zdmd7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg3JSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMjc5ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTA5JSk7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGVkaXQgcG9wdXAgICovXFxyXFxuLmVkaXQtcG9wdXB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMXJlbTtcXHJcXG4gICAgd2lkdGg6IDUwcmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybS1jaGFuZ2VzLWJ0bntcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcbiN0ZXh0YXJlYS13cmFwcGVyLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0YXJlYS13cmFwcGVyLWRpdiB0ZXh0YXJlYTpmaXJzdC1vZi10eXBle1xcclxcbiAgICBsaW5lLWhlaWdodDogMC44OyBcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRhcmVhLXdyYXBwZXItZGl2IHRleHRhcmVhOmxhc3Qtb2YtdHlwZXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41OyBcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1lZGl0LWNsb3Nle1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgyNCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDE5MzQlKSBodWUtcm90YXRlKDk3ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoMTAzJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGRldGFpbHMgcG9wdXAgY29kZSAqL1xcclxcbiNkZXRhaWxzLXBvcHVwe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLyogb3BhY2l0eTogMDsgICovICAvKiBkb2VzbnQgd29yayAqL1xcclxcbn1cXHJcXG5cXHJcXG46OmJhY2tkcm9weyAgLyogYW5pbWF0ZSBzbyB0aGF0IGJsdXIgY29tZXMgaW4gYW5kIG9mZiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAzMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RldGFpbHMtcG9wdXAtdGV4dC13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbiNkZXRhaWxzLXBvcHVwLXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNkZXRhaWxzLXBvcHVwLWFib3V0LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RldGFpbHMtcG9wdXAtY2F0ZWdvcnl7IFxcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RldGFpbHMtcG9wdXAtdXJnZW5jeXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0LjFyZW07XFxyXFxufVxcclxcblxcclxcbiNkZXRhaWxzLXBvcHVwLWRlYWRsaW5le1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNkZXRhaWxzLXBvcHVwLW1vcmV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1wdHktbXNnLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEzJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdWUtY2xyMSB7XFxyXFxuICAgIGNvbG9yOiAjNjA3QUI2O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtY2xyMSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLmpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5qc1wiO1xuXG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLmpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMuanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYygrZGF0ZSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKCtkYXRlLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEYXRlcyhjb250ZXh0LCAuLi5kYXRlcykge1xuICBjb25zdCBub3JtYWxpemUgPSBjb25zdHJ1Y3RGcm9tLmJpbmQoXG4gICAgbnVsbCxcbiAgICBjb250ZXh0IHx8IGRhdGVzLmZpbmQoKGRhdGUpID0+IHR5cGVvZiBkYXRlID09PSBcIm9iamVjdFwiKSxcbiAgKTtcbiAgcmV0dXJuIGRhdGVzLm1hcChub3JtYWxpemUpO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cnMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2libGUgYnkgMTAwIGFuZCBub3QgZGl2aXNpYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tU3ltYm9sXG4gKiBAc3VtbWFyeSBTeW1ib2wgZW5hYmxpbmcgRGF0ZSBleHRlbnNpb25zIHRvIGluaGVyaXQgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZS5cbiAqXG4gKiBUaGUgc3ltYm9sIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBgY29uc3RydWN0RnJvbWAgZnVuY3Rpb24gdG8gY29uc3RydWN0IGEgZGF0ZVxuICogdXNpbmcgYSByZWZlcmVuY2UgZGF0ZSBhbmQgYSB2YWx1ZS4gSXQgYWxsb3dzIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXNcbiAqIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS4gSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZVxuICogW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzXG4gKiBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0RnJvbVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb21TeW1ib2wgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGFsbG93cyB0byBjb25zdHJ1Y3QgYSBkYXRlIHVzaW5nIGBbU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpXWBcbiAqIGVuYWJsaW5nIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLlxuICogSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZSBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eilcbiAqIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20vZGF0ZS1mbnNcIjtcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnN0cnVjdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBkYXRlKHZhbHVlKTtcblxuICBpZiAoZGF0ZSAmJiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiAmJiBjb25zdHJ1Y3RGcm9tU3ltYm9sIGluIGRhdGUpXG4gICAgcmV0dXJuIGRhdGVbY29uc3RydWN0RnJvbVN5bWJvbF0odmFsdWUpO1xuXG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcblxuICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhsYXRlckRhdGUsIGVhcmxpZXJEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtsYXRlckRhdGVfLCBlYXJsaWVyRGF0ZV9dID0gbm9ybWFsaXplRGF0ZXMoXG4gICAgb3B0aW9ucz8uaW4sXG4gICAgbGF0ZXJEYXRlLFxuICAgIGVhcmxpZXJEYXRlLFxuICApO1xuXG4gIGNvbnN0IGxhdGVyU3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkobGF0ZXJEYXRlXyk7XG4gIGNvbnN0IGVhcmxpZXJTdGFydE9mRGF5ID0gc3RhcnRPZkRheShlYXJsaWVyRGF0ZV8pO1xuXG4gIGNvbnN0IGxhdGVyVGltZXN0YW1wID1cbiAgICArbGF0ZXJTdGFydE9mRGF5IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhsYXRlclN0YXJ0T2ZEYXkpO1xuICBjb25zdCBlYXJsaWVyVGltZXN0YW1wID1cbiAgICArZWFybGllclN0YXJ0T2ZEYXkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGVhcmxpZXJTdGFydE9mRGF5KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgobGF0ZXJUaW1lc3RhbXAgLSBlYXJsaWVyVGltZXN0YW1wKSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLmpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0RGF5T2ZZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldElTT1dlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZOZXh0WWVhcikge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZUaGlzWWVhcikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRpYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgcmV0dXJuICEoKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHx8IGlzTmFOKCt0b0RhdGUoZGF0ZSkpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIFtUT0RPXSBJIGNoYWxsZW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcuanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLmpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2guanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4uanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLmpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mRGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZklTT1dlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyAuLi5vcHRpb25zLCB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZklTT1dlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRhdGVfID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgZGF0ZV8uc2V0RnVsbFllYXIoZGF0ZV8uZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIGRhdGVfLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZV87XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBTdGFydGluZyBmcm9tIHYzLjcuMCwgaXQgY2xvbmVzIGEgZGF0ZSB1c2luZyBgW1N5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKV1gXG4gKiBlbmFibGluZyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS5cbiAqIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2UgW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopXG4gKiB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhcyBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50LCBjb250ZXh0KSB7XG4gIC8vIFtUT0RPXSBHZXQgcmlkIG9mIGB0b0RhdGVgIG9yIGBjb25zdHJ1Y3RGcm9tYD9cbiAgcmV0dXJuIGNvbnN0cnVjdEZyb20oY29udGV4dCB8fCBhcmd1bWVudCwgYXJndW1lbnQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy9zcmMvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGNsb3NlU3ZnVmFyIGZyb20gJy9pbWFnZS94LXN2Zy5zdmcnO1xyXG5pbXBvcnQgdHJhc2hTdmdWYXIgZnJvbSAnL2ltYWdlL3RyYXNoLWNhbi1yZWd1bGFyLnN2Zyc7XHJcbmltcG9ydCBlZGl0U3ZnVmFyIGZyb20gJy9pbWFnZS9wZW4tdG8tc3F1YXJlLXJlZ3VsYXIuc3ZnJztcclxuaW1wb3J0IHtcclxuICAgIHByb2plY3RGYWN0b3J5LFxyXG4gICAgY2F0ZWdvcnlGYWN0b3J5LFxyXG4gICAgbm90ZUZhY3RvcnlcclxufSBmcm9tICcuL3JlZG9uZS5qcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgVG9nZ2xlLFxyXG4gICAgQ2hhbmdlLFxyXG4gICAgRmFkZU91dCxcclxuICAgIHBvcHVwUmlnaHRTaWRlLFxyXG4gICAgbW91c2VBY3Rpb24sXHJcbiAgICBDaGFuZ2VCdG5Db2xvclxyXG59IGZyb20gJy4vYWRkaXRpb25hbEd1aS5qcyc7XHJcblxyXG5sZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cmFwcGVyJyk7XHJcblxyXG5jb25zdCBDcmVhdGVOZXcgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjcmVhdGVOZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICAgICAgY3JlYXRlTmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlLW5ldy10YXNrLXBvcHVwJyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVOZXdEaXYpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9iQmFyQ3JlYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b2JCYXJDcmVhdGVUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvcGJhcicsICd0b3BiYXItY3JlYXRlLXRvZG8tcG9wdXAnKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RGl2LmFwcGVuZENoaWxkKHRvYkJhckNyZWF0ZVRvZG8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGgxdG9iQmFyUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICAgICAgaDF0b2JCYXJQb3B1cC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcuLi4nO1xyXG4gICAgICAgICAgICAgICAgaDF0b2JCYXJQb3B1cC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICB0b2JCYXJDcmVhdGVUb2RvLmFwcGVuZENoaWxkKGgxdG9iQmFyUG9wdXApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgY2xvc2VTdmdEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2Utc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgdG9iQmFyQ3JlYXRlVG9kby5hcHBlbmRDaGlsZChjbG9zZVN2Z0Rpdik7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmFkZU91dC5mYWRlT3V0KGNyZWF0ZU5ld0Rpdik7IFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZVN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS14LXN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlU3ZnLmRhdGEgPSBjbG9zZVN2Z1ZhcjsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZVN2Z0Rpdi5hcHBlbmRDaGlsZChjbG9zZVN2Zyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyQ3JlYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzaWRlYmFyQ3JlYXRlVG9kby5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJywgJ3NpZGViYXItY3JlYXRlLXRvZG8tcG9wdXAnKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RGl2LmFwcGVuZENoaWxkKHNpZGViYXJDcmVhdGVUb2RvKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluU2lkZWJhclRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBtYWluU2lkZWJhclRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21haW4tc2lkZWJhci10ZXh0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIHNpZGViYXJDcmVhdGVUb2RvLmFwcGVuZENoaWxkKG1haW5TaWRlYmFyVGV4dFdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVUb2RvT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9kb09wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24tdGV4dCcsICd0b2RvLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9PcHRpb24udGV4dENvbnRlbnQgPSAnVG8gRG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VBY3Rpb24ub25PcHRpb25UZXh0SG92ZXIoY3JlYXRlVG9kb09wdGlvbiwgJ21vdXNlT24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9wcm9qZWN0IGFuZCBub3RlIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbi10ZXh0JywgJ3Byb2plY3Qtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcclxuICAgICAgICAgICAgICAgICAgICBtYWluU2lkZWJhclRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aW9uLm9uT3B0aW9uVGV4dEhvdmVyKGNyZWF0ZVByb2plY3RPcHRpb24sICdtb3VzZU9uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU5vdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbi10ZXh0JywgJ25vdGUtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTm90ZU9wdGlvbi50ZXh0Q29udGVudCA9ICdOb3RlJztcclxuICAgICAgICAgICAgICAgICAgICBtYWluU2lkZWJhclRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlQWN0aW9uLm9uT3B0aW9uVGV4dEhvdmVyKGNyZWF0ZU5vdGVPcHRpb24sICdtb3VzZU9uJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2ID0gcG9wdXBSaWdodFNpZGUuc2lkZShjcmVhdGVOZXdEaXYpOyBcclxuICAgICAgICAgICAgQ3JlYXRlVG9kby50b2RvKGRpdiwgY3JlYXRlTmV3RGl2KTsgLy9kZWZhdWx0XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9PcHRpb24uY2xhc3NMaXN0LmFkZCgnbW91c2VPbicpO1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlVG9kb09wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXYgPSBwb3B1cFJpZ2h0U2lkZS5zaWRlKGNyZWF0ZU5ld0Rpdik7XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLnRvZG8oZGl2LCBjcmVhdGVOZXdEaXYpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGl2ID0gcG9wdXBSaWdodFNpZGUuc2lkZShjcmVhdGVOZXdEaXYpO1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUHJvamVjdC5wcm9qZWN0KGRpdiwgY3JlYXRlTmV3RGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVOb3RlT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRpdiA9IHBvcHVwUmlnaHRTaWRlLnNpZGUoY3JlYXRlTmV3RGl2KTtcclxuICAgICAgICAgICAgICAgIENyZWF0ZU5vdGUubm90ZShkaXYsIGNyZWF0ZU5ld0Rpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTmV3RGl2O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBjcmVhdGVOZXcgfTtcclxuICAgIFxyXG59KSgpO1xyXG5cclxuXHJcbmNvbnN0IENyZWF0ZVRvZG8gPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0b2RvID0gKHBvcHVwLCBwYXJlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dFdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcHBlci1kaXYnKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXJEaXYpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiBQYXkgYmlsbHMnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICBkZXRhaWxzSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXRhaWxzOiBlbGVjdHJpY2l0eSwgZ2FzLCBpbnN1cmFuY2UuJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0V3JhcHBlckRpdi5hcHBlbmRDaGlsZChkZXRhaWxzSW5wdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlUHJpb3JpdHlXcmFwcGVyUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlclBhcmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtcHJpb3JpdHktd3JhcHBlci1kaXYnKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChkYXRlUHJpb3JpdHlXcmFwcGVyUGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyQ2hpbGQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2LWNoaWxkJyk7XHJcbiAgICAgICAgICAgIGRhdGVQcmlvcml0eVdyYXBwZXJQYXJlbnQuYXBwZW5kQ2hpbGQoZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5RmxleDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4MS5jbGFzc0xpc3QuYWRkKCdzaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyQ2hpbGQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheUZsZXgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDNEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgICAgICAgICBoM0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDEuYXBwZW5kQ2hpbGQoaDNEdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICd0b2RvLWRhdGUtY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDEuYXBwZW5kQ2hpbGQodG9kb0RhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheUZsZXgyR3JhbmRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZGl2LXBhcmVudCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDNQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50LmFwcGVuZENoaWxkKGgzUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4M1BhcmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWRpdnMtd3JhcHBlci1wYXJlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudC5hcHBlbmRDaGlsZChzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheUZsZXg0R3JhbmRjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDRHcmFuZGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXg0R3JhbmRjaGlsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWRpdnMtd3JhcHBlci1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheUZsZXg0R3JhbmRjaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2xvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnTE9XJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tlZERpdiA9IGNoYW5nZUJ0bkNvbG9yLmluaXRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ3ByaW9yaXR5LWRpdicsICdtaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gJ01FRElVTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDRHcmFuZGNoaWxkLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrZWREaXYgPSBjaGFuZ2VCdG5Db2xvci5pbml0aWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ3ByaW9yaXR5LWRpdicsICdoaWdoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnSElHSCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDRHcmFuZGNoaWxkLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2VkRGl2ID0gY2hhbmdlQnRuQ29sb3IuaW5pdGlhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkFyciA9IFtsb3dQcmlvcml0eURpdiwgbWVkaXVtUHJpb3JpdHlEaXYsIGhpZ2hQcmlvcml0eURpdl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5BcnIuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuLmNsYXNzTGlzdC5jb250YWlucygnbG93JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VyICE9IHVuZGVmaW5lZCkgY2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKGNoZWNrZXIuY2xhc3NMaXN0WzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1vcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VyICE9IHVuZGVmaW5lZCkgY2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKGNoZWNrZXIuY2xhc3NMaXN0WzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1yZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VyICE9IHVuZGVmaW5lZCkgY2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKGNoZWNrZXIuY2xhc3NMaXN0WzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlciA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICdnZW5lcmFsLWdyZWVuLWJ0bicsICdhZGQtdG9kby1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9ICdBREQgVE8gRE8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlZGF0ZTogdG9kb0RhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogY2hlY2tlci5jbGFzc0xpc3RbMl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZXIuY3JlYXRlKG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWRlT3V0LmZhZGVPdXQocGFyZW50KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwb3B1cDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgdG9kbyB9O1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5jb25zdCBDcmVhdGVQcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IChwb3B1cCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRXcmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRXcmFwcGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXBwZXItZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGU6IFNjaG9vbCBQcm9qZWN0IFgnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLXN1Ym1pdC1idG4tZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocmlnaHRTaWRlU3VibWl0QnRuRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ2dlbmVyYWwtZ3JlZW4tYnRuJywgJ2NyZWF0ZS1wcm9qZWN0LW5vdGUtYnRuJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQ1JFQVRFIFBST0pFQ1QnO1xyXG4gICAgICAgICAgICByaWdodFNpZGVTdWJtaXRCdG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ0bik7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RGYWN0b3J5LmNyZWF0ZVByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBGYWRlT3V0LmZhZGVPdXQocGFyZW50KTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHByb2plY3QgfTtcclxuICAgIFxyXG59KSgpO1xyXG5cclxuY29uc3QgQ3JlYXRlTm90ZSA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG5vdGUgPSAocG9wdXAsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0V3JhcHBlckRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwcGVyLWRpdicpO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGlucHV0V3JhcHBlckRpdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlOiB3aGVuIGNvb2tpbmcsIGFkZCBzdWdhciB0byBzb3VwJyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRXcmFwcGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGV0YWlscycpO1xyXG4gICAgICAgICAgICBkZXRhaWxzSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlU3VibWl0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmlnaHRTaWRlU3VibWl0QnRuRGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUtc3VibWl0LWJ0bi1kaXYnKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChyaWdodFNpZGVTdWJtaXRCdG5EaXYpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjcmVhdGVOb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAnZ2VuZXJhbC1ncmVlbi1idG4nLCAnY3JlYXRlLXByb2plY3Qtbm90ZS1idG4nKTtcclxuICAgICAgICAgICAgY3JlYXRlTm90ZUJ0bi50ZXh0Q29udGVudCA9ICdDUkVBVEUgTk9URSc7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdi5hcHBlbmRDaGlsZChjcmVhdGVOb3RlQnRuKTtcclxuICAgICAgICAgICAgY3JlYXRlTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbm90ZUZhY3RvcnkuY3JlYXRlTm90ZSh0aXRsZUlucHV0LnZhbHVlLCBkZXRhaWxzSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFuZWwubm90ZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBGYWRlT3V0LmZhZGVPdXQocGFyZW50KTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9wdXA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IG5vdGUgfTtcclxuICAgIFxyXG59KSgpO1xyXG5cclxuLy9jcmVhdGVzIGRldGFpbHMgZGl2IGFib3V0IGVhY2ggdGFza1xyXG5jb25zdCBEZXRhaWxzRGl2ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZGV0YWlscyA9ICh0YXJnZXQpID0+IHsgXHJcbiAgICAgICAgY29uc3QgZGV0YWlsc1BvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNQb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMtcG9wdXAnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXRhaWxzUG9wVXApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICBjbG9zZVN2Z0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1zdmctZGl2Jyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNQb3BVcC5hcHBlbmRDaGlsZChjbG9zZVN2Z0Rpdik7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgRmFkZU91dC5mYWRlT3V0KGRldGFpbHNQb3BVcCk7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS14LXN2ZycpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5kYXRhID0gY2xvc2VTdmdWYXI7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnRGl2LmFwcGVuZENoaWxkKGNsb3NlU3ZnKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzUG9wdXBUZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzUG9wdXBUZXh0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMtcG9wdXAtdGV4dC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNQb3BVcC5hcHBlbmRDaGlsZChkZXRhaWxzUG9wdXBUZXh0V3JhcHBlcik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscy1wb3B1cC10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1BvcHVwVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGV0YWlsc1RpdGxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzLXBvcHVwLWFib3V0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNQb3B1cFRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGRldGFpbHNBYm91dCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzUG9wdXBQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNBYm91dC5hcHBlbmRDaGlsZChkZXRhaWxzUG9wdXBQcmlvcml0eSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc1BvcHVwVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1BvcHVwVXJnZW5jeS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMtcG9wdXAtdXJnZW5jeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUG9wdXBVcmdlbmN5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUG9wdXBQcmlvcml0eS5hcHBlbmRDaGlsZChkZXRhaWxzUG9wdXBVcmdlbmN5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5Qcmlvcml0eS50ZXh0Q29udGVudCA9IHRhcmdldC5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1BvcHVwUHJpb3JpdHkuYXBwZW5kQ2hpbGQoc3BhblByaW9yaXR5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNQb3B1cER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzQWJvdXQuYXBwZW5kQ2hpbGQoZGV0YWlsc1BvcHVwRHVlRGF0ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc1BvcHVwRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNQb3B1cERlYWRsaW5lLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscy1wb3B1cC1kZWFkbGluZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUG9wdXBEZWFkbGluZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1BvcHVwRHVlRGF0ZS5hcHBlbmRDaGlsZChkZXRhaWxzUG9wdXBEZWFkbGluZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5EdWVEYXRlLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0KG5ldyBEYXRlKHRhcmdldC5kdWVEYXRlKSwgJ01NTU0nKX0gJHtmb3JtYXQobmV3IERhdGUodGFyZ2V0LmR1ZURhdGUpLCAnZG8nKX0sICR7Zm9ybWF0KG5ldyBEYXRlKHRhcmdldC5kdWVEYXRlKSwgJ3l5eXknKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUG9wdXBEdWVEYXRlLmFwcGVuZENoaWxkKHNwYW5EdWVEYXRlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNQb3B1cERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0Fib3V0LmFwcGVuZENoaWxkKGRldGFpbHNQb3B1cERlc2NyaXB0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzUG9wdXBNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzUG9wdXBNb3JlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscy1wb3B1cC1tb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNQb3B1cE1vcmUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNQb3B1cERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRldGFpbHNQb3B1cE1vcmUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNQb3B1cERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHNwYW5EZXNjcmlwdGlvbik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZGV0YWlsc1BvcFVwO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBkZXRhaWxzIH07XHJcbiAgICBcclxufSkoKTtcclxuXHJcbmNvbnN0IEVkaXREaXYgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBlZGl0ID0gKHRhcmdldCkgPT4geyBcclxuICAgICAgICBjb25zdCBlZGl0UG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgICAgICBlZGl0UG9wVXAuY2xhc3NMaXN0LmFkZCgncmlnaHQtc2lkZS1vZi1wb3B1cCcsICdlZGl0LXBvcHVwJyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlZGl0UG9wVXApO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZVN2Z0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBjbG9zZVN2Z0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1zdmctZGl2Jyk7XHJcbiAgICAgICAgZWRpdFBvcFVwLmFwcGVuZENoaWxkKGNsb3NlU3ZnRGl2KTtcclxuICAgICAgICBjbG9zZVN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgRmFkZU91dC5mYWRlT3V0KGVkaXRQb3BVcCk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS14LXN2ZycpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5kYXRhID0gY2xvc2VTdmdWYXI7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xvc2VTdmdEaXYuYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0QXJlYVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0QXJlYVdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYS13cmFwcGVyLWRpdicpO1xyXG4gICAgICAgIGVkaXRQb3BVcC5hcHBlbmRDaGlsZCh0ZXh0QXJlYVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdFRpdGxlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIGVkaXRUaXRsZUFyZWEuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICAgICAgICAgICAgZWRpdFRpdGxlQXJlYS50ZXh0Q29udGVudCA9IHRhcmdldC50aXRsZTtcclxuICAgICAgICAgICAgdGV4dEFyZWFXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRUaXRsZUFyZWEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdERldGFpbHNBcmVhPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICBlZGl0RGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pbnB1dCcpO1xyXG4gICAgICAgICAgICBlZGl0RGV0YWlsc0FyZWEudGV4dENvbnRlbnQgPSB0YXJnZXQuZGV0YWlscztcclxuICAgICAgICAgICAgdGV4dEFyZWFXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXREZXRhaWxzQXJlYSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVQcmlvcml0eVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdicpO1xyXG4gICAgICAgIGVkaXRQb3BVcC5hcHBlbmRDaGlsZChkYXRlUHJpb3JpdHlXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyQ2hpbGQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2LWNoaWxkJyk7XHJcbiAgICAgICAgICAgIGRhdGVQcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTEuY2xhc3NMaXN0LmFkZCgnc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXkxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDNEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgICAgICAgICBoM0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5MS5hcHBlbmRDaGlsZChoM0R1ZURhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdERhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ3RvZG8tZGF0ZS1jbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXREYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSh0YXJnZXQuZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTEuYXBwZW5kQ2hpbGQoZWRpdERhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheTJQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZGl2LXBhcmVudCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXkyUGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDNQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LmFwcGVuZENoaWxkKGgzUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5MkNoaWxkUGFyZW50ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1kaXZzLXdyYXBwZXItcGFyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJQYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheTJDaGlsZFBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5MkNoaWxkQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZGl2cy13cmFwcGVyLWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG93UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2xvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnTE9XJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRDaGlsZC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eURpdik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZWRpdW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICdwcmlvcml0eS1kaXYnLCAnbWlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5RGl2KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2hpZ2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdISUdIJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRDaGlsZC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRhcmdldC5wcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdhZGQtZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJ0biA9IGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXQucHJpb3JpdHkgPT09ICdtaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLW9yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQnRuID0gbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRhcmdldC5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1yZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJ0biA9IGhpZ2hQcmlvcml0eURpdi5jbGFzc0xpc3RbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4xID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjogbG93UHJpb3JpdHlEaXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NUb0FkZDogJ2FkZC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bjIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuOiBtZWRpdW1Qcmlvcml0eURpdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1RvQWRkOiAnYWRkLW9yYW5nZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bjMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuOiBoaWdoUHJpb3JpdHlEaXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NUb0FkZDogJ2FkZC1yZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VCdG5Db2xvci5zZXQoYnRuMSwgYnRuMiwgYnRuMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1DaGFuZ2VzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNoYW5nZXNCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICdnZW5lcmFsLWdyZWVuLWJ0bicsICdjb25maXJtLWNoYW5nZXMtYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNoYW5nZXNCdG4udGV4dENvbnRlbnQgPSAnQ09ORklSTSBDSEFOR0VTJztcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5MkNoaWxkUGFyZW50LmFwcGVuZENoaWxkKGNvbmZpcm1DaGFuZ2VzQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2hhbmdlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzVG9QYXNzID0gQ2hhbmdlQnRuQ29sb3IucmV0dXJuQ2xpY2tlZEJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NUb1Bhc3MgIT0gdW5kZWZpbmVkKSBzZWxlY3RlZEJ0biA9IGNsYXNzVG9QYXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZWRpdFRpdGxlQXJlYS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IGVkaXREZXRhaWxzQXJlYS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6IGVkaXREYXRlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogc2VsZWN0ZWRCdG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2VyLm1hbmFnZVRhc2tVcGRhdGUob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmFkZU91dC5mYWRlT3V0KGVkaXRQb3BVcCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBlZGl0UG9wVXA7XHJcbiAgICBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgZWRpdCB9O1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG4vLyBlYWNoIHRhc2tcclxuY29uc3QgVGFza0dVSSA9IChmdW5jdGlvbigpIHsgICAgICAgICAgXHJcbiAgICBjb25zdCB0YXNrID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XHJcbiAgICAgICAgQ2hhbmdlLmJvcmRlclN0eWxlKHRhcmdldCwgdGFza0Rpdik7IFxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlJyk7XHJcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveERpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1kaXYnKTtcclxuICAgICAgICAgICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKGNoZWNrYm94RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGFza1RleHREaXYuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0LWRpdicpO1xyXG4gICAgICAgICAgICAgICAgdGFza1RleHREaXYudGV4dENvbnRlbnQgPSB0YXJnZXQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZCh0YXNrVGV4dERpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RGl2OiBjaGVja2JveERpdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RpdjogdGFza0RpdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RleHREaXY6IHRhc2tUZXh0RGl2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDYXRlZ29yaWVzOiBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrOiBjYXRlZ29yeUZhY3RvcnkuZGVsZXRlT25lVGFzayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzazogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYXNrVG9DYXRlZ29yeTogY2F0ZWdvcnlGYWN0b3J5LmFkZFRhc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhc2tUb1Byb2plY3Q6IHByb2plY3RGYWN0b3J5LmNyZWF0ZVRhc2tcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgVG9nZ2xlLmJ1dHRvbihvYmplY3QpOyBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlJyk7XHJcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAnZ2VuZXJhbC1ncmVlbi1idG4nLCAnZGV0YWlscy1kaXYnKTtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNEaXYudGV4dENvbnRlbnQgPSAnREVUQUlMUyc7XHJcbiAgICAgICAgICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbCA9IERldGFpbHNEaXYuZGV0YWlscyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERldGFpbHNEaXYuZGV0YWlscyh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZURpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVEaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGlzcGxheS1kaXYnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVEaXNwbGF5RGl2LnRleHRDb250ZW50ID0gYCR7Zm9ybWF0KG5ldyBEYXRlKHRhcmdldC5kdWVEYXRlKSwgJ01NTScpfSAke2Zvcm1hdChuZXcgRGF0ZSh0YXJnZXQuZHVlRGF0ZSksICdkbycpfWA7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGVEaXNwbGF5RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0U3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBlZGl0U3ZnRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGVkaXRTdmdEaXYpO1xyXG4gICAgICAgICAgICAgICAgZWRpdFN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWwgPSBFZGl0RGl2LmVkaXQodGFyZ2V0KTs7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0U3ZnLmNsYXNzTGlzdC5hZGQoJ3N2Zy1kaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0U3ZnLmRhdGEgPSBlZGl0U3ZnVmFyOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlZGl0U3ZnRGl2LmFwcGVuZENoaWxkKGVkaXRTdmcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYXNoU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0cmFzaFN2Z0Rpdi5jbGFzc0xpc3QuYWRkKCd0cmFzaC1zdmctZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodHJhc2hTdmdEaXYpO1xyXG4gICAgICAgICAgICAgICAgdHJhc2hTdmdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlGYWN0b3J5LmRlbGV0ZU9uZVRhc2sodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBGYWRlT3V0LmZhZGVPdXQodGFza0Rpdik7IFxyXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZUNhdGVnb3JpZXMuY2FsbENhdGVnb3J5Q3JlYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFzaFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhc2hTdmcuY2xhc3NMaXN0LmFkZCgnc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnLmRhdGEgPSB0cmFzaFN2Z1ZhcjsgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0cmFzaFN2Z0Rpdi5hcHBlbmRDaGlsZCh0cmFzaFN2Zyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrRGl2O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyB0YXNrIH07XHJcbiAgICBcclxufSkoKTtcclxuXHJcbmNvbnN0IE5vdGVHdWkgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjcmVhdGUgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGVJdHNlbGYuY2xhc3NMaXN0LmFkZCgnZXhhbXBsZS1ub3RlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICBjbG9zZVN2Z0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1zdmctZGl2Jyk7XHJcbiAgICAgICAgICAgIG5vdGVJdHNlbGYuYXBwZW5kQ2hpbGQoY2xvc2VTdmdEaXYpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlRmFjdG9yeS5kZWxldGVOb3RlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBGYWRlT3V0LmZhZGVPdXQobm90ZUl0c2VsZik7IFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFuZWwubm90ZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVN2Zy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VTdmcuY2xhc3NMaXN0LmFkZCgnY2xvc2UteC1zdmcnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlU3ZnLmRhdGEgPSBjbG9zZVN2Z1ZhcjtcclxuICAgICAgICAgICAgICAgIGNsb3NlU3ZnRGl2LmFwcGVuZENoaWxkKGNsb3NlU3ZnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbm90ZS10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IHRhcmdldC50aXRsZTtcclxuICAgICAgICAgICAgbm90ZUl0c2VsZi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG5vdGVGYWN0b3J5LmVkaXROb3RlKHRhcmdldCwgJ3RpdGxlJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFuZWwuYXV0b1Jlc2l6ZSh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdub3RlLXBhcmFncmFwaCcpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnZhbHVlID0gdGFyZ2V0LmRldGFpbHM7XHJcbiAgICAgICAgICAgIG5vdGVJdHNlbGYuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbm90ZUZhY3RvcnkuZWRpdE5vdGUodGFyZ2V0LCAnZGV0YWlscycsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIENyZWF0ZVBhbmVsLmF1dG9SZXNpemUodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbm90ZUl0c2VsZjtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZSB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgY2FsbGVyVmFyO1xyXG4gICAgdmFyIHBhcmVudFZhcjtcclxuICAgIHZhciBvYmplY3RWYXI7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hDYWxsZXIgPSAocGFyZW50LCBjYWxsZXIsIG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGNhbGxlclZhciA9IGNhbGxlcjtcclxuICAgICAgICBwYXJlbnRWYXIgPSBwYXJlbnQ7XHJcbiAgICAgICAgb2JqZWN0VmFyID0gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZSA9IChvYmplY3QpID0+IHtcclxuICAgICAgICBjYXRlZ29yeUZhY3RvcnkuY3JlYXRlVGFzayhvYmplY3QudGl0bGUsIG9iamVjdC5kZXRhaWxzLCBvYmplY3QuZHVlZGF0ZSwgb2JqZWN0LnByaW9yaXR5KTtcclxuICAgICAgICAvL3RoaXMgY29uZGl0aW9uIGlzIGZvciB3aGVuIHRoZSB1c2VyIGNyZWF0ZXMgYSBub3RlIHdpdGhvdXQgY2xpY2tpbmcgb24gc3BlY2lmaWMgY2F0ZWdvcnkgLyBwcm9qZWN0XHJcbiAgICAgICAgaWYoY2FsbGVyVmFyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZihjYWxsZXJWYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuY3JlYXRlVGFzayhvYmplY3RWYXIsIG9iamVjdC50aXRsZSwgb2JqZWN0LmRldGFpbHMsIG9iamVjdC5kdWVkYXRlLCBvYmplY3QucHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFuZWwuZ2VuZXJhbFBhbmVsKHBhcmVudFZhciwgcHJvamVjdEZhY3RvcnkuZ2V0QWxsKG9iamVjdFZhci50aXRsZSksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBDcmVhdGVQYW5lbC5nZW5lcmFsUGFuZWwocGFyZW50VmFyLCBjYXRlZ29yeUZhY3RvcnkuZ2V0QWxsKG9iamVjdFZhci50aXRsZSksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0VmFyID0gY2F0ZWdvcnlGYWN0b3J5LmdldENhdGVnb3JpZXMoKVswXTtcclxuICAgICAgICAgICAgcGFyZW50VmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZGl2Jyk7XHJcbiAgICAgICAgICAgIENyZWF0ZVBhbmVsLmdlbmVyYWxQYW5lbChwYXJlbnRWYXIsIGNhdGVnb3J5RmFjdG9yeS5nZXRBbGwob2JqZWN0VmFyLnRpdGxlKSwgVGFza0dVSS50YXNrLCAndGFza3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ3JlYXRlQ2F0ZWdvcmllcy5jYWxsQ2F0ZWdvcnlDcmVhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hbmFnZVRhc2tVcGRhdGUgPSAob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY2F0ZWdvcnlGYWN0b3J5LnVwZGF0ZVRhc2sob2JqZWN0LnRhcmdldCwgJ3RpdGxlJywgb2JqZWN0LnRpdGxlKTtcclxuICAgICAgICBjYXRlZ29yeUZhY3RvcnkudXBkYXRlVGFzayhvYmplY3QudGFyZ2V0LCAnZGV0YWlscycsIG9iamVjdC5kZXRhaWxzKTtcclxuICAgICAgICBjYXRlZ29yeUZhY3RvcnkudXBkYXRlVGFzayhvYmplY3QudGFyZ2V0LCAnZHVlRGF0ZScsIG9iamVjdC5kdWVEYXRlKTtcclxuICAgICAgICBjYXRlZ29yeUZhY3RvcnkudXBkYXRlVGFzayhvYmplY3QudGFyZ2V0LCAncHJpb3JpdHknLCBvYmplY3QucHJpb3JpdHkpO1xyXG5cclxuICAgICAgICB1cGRhdGVQYW5lbEFmdGVyVGFza0VkaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQYW5lbEFmdGVyVGFza0VkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2FsbGVyVmFyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZihjYWxsZXJWYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Jykpe1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFuZWwuZ2VuZXJhbFBhbmVsKHBhcmVudFZhciwgcHJvamVjdEZhY3RvcnkuZ2V0QWxsKG9iamVjdFZhci50aXRsZSksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBDcmVhdGVQYW5lbC5nZW5lcmFsUGFuZWwocGFyZW50VmFyLCBjYXRlZ29yeUZhY3RvcnkuZ2V0QWxsKG9iamVjdFZhci50aXRsZSksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqZWN0VmFyID0gY2F0ZWdvcnlGYWN0b3J5LmdldENhdGVnb3JpZXMoKVswXTtcclxuICAgICAgICAgICAgcGFyZW50VmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtZGl2Jyk7XHJcbiAgICAgICAgICAgIENyZWF0ZVBhbmVsLmdlbmVyYWxQYW5lbChwYXJlbnRWYXIsIGNhdGVnb3J5RmFjdG9yeS5nZXRBbGwob2JqZWN0VmFyLnRpdGxlKSwgVGFza0dVSS50YXNrLCAndGFza3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ3JlYXRlQ2F0ZWdvcmllcy5jYWxsQ2F0ZWdvcnlDcmVhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hDYWxsZXIsXHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIG1hbmFnZVRhc2tVcGRhdGUsXHJcbiAgICAgICAgdXBkYXRlUGFuZWxBZnRlclRhc2tFZGl0XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbmNvbnN0IENyZWF0ZVBhbmVsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHBhcmVudFZhcjtcclxuXHJcbiAgICBjb25zdCBhZGRMaXN0ZW5lciA9IChwYXJlbnQsIGNhbGxlciwgZnVuYzEsIGZ1bmMyLCBrZXl3b3JkLCBvYmplY3QpID0+IHtcclxuICAgICAgICBjYWxsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBNYW5hZ2VyLmZldGNoQ2FsbGVyKHBhcmVudCwgY2FsbGVyLCBvYmplY3QpO1xyXG4gICAgICAgICAgICBnZW5lcmFsUGFuZWwocGFyZW50LCBmdW5jMSwgZnVuYzIsIGtleXdvcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZW5lcmFsUGFuZWwgPSAocGFyZW50LCBmdW5jMSwgZnVuYzIsIGtleXdvcmQpID0+IHtcclxuICAgICAgICBpZiAocGFyZW50ICE9IDApIHBhcmVudFZhciA9IHBhcmVudDtcclxuICAgICAgICBpZiAoZnVuYzEgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIGFycmF5OiBmdW5jMSxcclxuICAgICAgICAgICAgZnVuY3Rpb246IGZ1bmMyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZihvYmouYXJyYXkgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYXJQYW5lbChwYXJlbnRWYXIpO1xyXG4gICAgICAgICAgICBlbXB0eU1zZyhwYXJlbnRWYXIsIGtleXdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGVhclBhbmVsKHBhcmVudFZhcik7XHJcbiAgICAgICAgcGFyZW50VmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtZGl2LWZsZXgnKTtcclxuICAgICAgICBsZXQgYXJyID0gb2JqLmFycmF5O1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBwYXJlbnQucHJlcGVuZChvYmouZnVuY3Rpb24oaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlbXB0eU1zZyA9IChwYXJlbnQsIHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5TXNnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW1wdHlNc2dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZW1wdHktbXNnLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbXB0eU1zZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdGV4dC1oMycpO1xyXG4gICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9IGBPaCEgTG9va3MgbGlrZSB0aGVyZSBhcmUgbm8gJHt0YXJnZXR9IGhlcmUgcmlnaHQgbm93LiBXYW5uYSBhZGQgb25lP2A7XHJcbiAgICAgICAgICAgIGVtcHR5TXNnQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtYnRuJyk7XHJcbiAgICAgICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICcrJztcclxuICAgICAgICAgICAgZW1wdHlNc2dDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb2RhbCA9IENyZWF0ZU5ldy5jcmVhdGVOZXcoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eU1zZ0NvbnRhaW5lcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQ29sdW1ucyA9IChwYXJlbnQpID0+IHtcclxuICAgICAgICAvLyByZW1vdmVzIGFsbCBjb250ZW50IGluIHBhcmVudFxyXG4gICAgICAgIGNsZWFyUGFuZWwocGFyZW50KTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kaXYtZ3JpZCcpO1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbCcsICdncmlkLWNvbC0tMScpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb2x1bW4xKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb2wnLCAnZ3JpZC1jb2wtLTInKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29sdW1uMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29sJywgJ2dyaWQtY29sLS0zJyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbHVtbjMpO1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW40ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sdW1uNC5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbCcsICdncmlkLWNvbC0tNCcpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb2x1bW40KTtcclxuXHJcbiAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgcGFyZW50dmFyOiBwYXJlbnQsXHJcbiAgICAgICAgICAgIGNvbHVtbjFWYXI6IGNvbHVtbjEsXHJcbiAgICAgICAgICAgIGNvbHVtbjJWYXI6IGNvbHVtbjIsXHJcbiAgICAgICAgICAgIGNvbHVtbjNWYXI6IGNvbHVtbjMsXHJcbiAgICAgICAgICAgIGNvbHVtbjRWYXI6IGNvbHVtbjQsXHJcbiAgICAgICAgICAgIGNvdW50ZXI6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXBwZW5kVG9QYW5lbCA9IChub3RlLCBvYmopID0+IHtcclxuICAgICAgICBpZiAob2JqLmNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgICAgb2JqLmNvbHVtbjFWYXIuYXBwZW5kQ2hpbGQobm90ZSk7XHJcbiAgICAgICAgICAgIG9iai5jb3VudGVyKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmouY291bnRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICBvYmouY29sdW1uMlZhci5hcHBlbmRDaGlsZChub3RlKTtcclxuICAgICAgICAgICAgb2JqLmNvdW50ZXIrKztcclxuICAgICAgICB9IGVsc2UgaWYgKG9iai5jb3VudGVyID09PSAyKSB7XHJcbiAgICAgICAgICAgIG9iai5jb2x1bW4zVmFyLmFwcGVuZENoaWxkKG5vdGUpO1xyXG4gICAgICAgICAgICBvYmouY291bnRlcisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmNvdW50ZXIgPT09IDMpIHtcclxuICAgICAgICAgICAgb2JqLmNvbHVtbjRWYXIuYXBwZW5kQ2hpbGQobm90ZSk7XHJcbiAgICAgICAgICAgIG9iai5jb3VudGVyID0gMDtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhdXRvUmVzaXplID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhclBhbmVsID0gKHBhcmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBwYXJlbnRIb2xkZXIgPSBwYXJlbnQ7XHJcbiAgICAgICAgaWYocGFyZW50SG9sZGVyLmNsYXNzTGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHdoaWxlKHBhcmVudEhvbGRlci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRIb2xkZXIucmVtb3ZlQ2hpbGQocGFyZW50SG9sZGVyLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhcmVudEhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKHBhcmVudEhvbGRlci5jbGFzc0xpc3RbMV0pO1xyXG4gICAgICAgIH0gZWxzZSBwYXJlbnRIb2xkZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICByZXR1cm4gcGFyZW50SG9sZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBub3RlUGFuZWwgPSAocGFyZW50ID0gMCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJlbnQgIT0gMCkgcGFyZW50VmFyID0gcGFyZW50O1xyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIGFycmF5OiBub3RlRmFjdG9yeS5nZXRBbGwoKSxcclxuICAgICAgICAgICAgZnVuY3Rpb246IE5vdGVHdWkuY3JlYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZihvYmouYXJyYXkgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYXJQYW5lbChwYXJlbnRWYXIpO1xyXG4gICAgICAgICAgICBlbXB0eU1zZyhwYXJlbnRWYXIsICdub3RlcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGFyciA9IG9iai5hcnJheTtcclxuICAgICAgICBhcnIgPSBhcnIucmV2ZXJzZSgpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBjcmVhdGVDb2x1bW5zKHBhcmVudFZhcik7XHJcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiBhcHBlbmRUb1BhbmVsKG9iai5mdW5jdGlvbihpdGVtKSwgb2JqZWN0KSk7XHJcbiAgICAgICAgbGV0IHRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGUtdGl0bGUnKTtcclxuICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25vdGUtcGFyYWdyYXBoJyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gWy4uLnRpdGxlcywgLi4uZGV0YWlsc11cclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGVsZW1lbnRzKSB7IFxyXG4gICAgICAgICAgICBhdXRvUmVzaXplKGl0ZW0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGFkZExpc3RlbmVyLFxyXG4gICAgICAgIGF1dG9SZXNpemUsXHJcbiAgICAgICAgZW1wdHlNc2csXHJcbiAgICAgICAgY3JlYXRlQ29sdW1ucyxcclxuICAgICAgICBhcHBlbmRUb1BhbmVsLFxyXG4gICAgICAgIGdlbmVyYWxQYW5lbCxcclxuICAgICAgICBjbGVhclBhbmVsLFxyXG4gICAgICAgIG5vdGVQYW5lbCBcclxuICAgIH07XHJcbiAgICBcclxufSkoKTtcclxuXHJcbmNvbnN0IENyZWF0ZVByb2plY3RzID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBwYXJlbnRQcm9qZWN0ID0gKGNvbnRlbnREaXYsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1kaXYnKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpblNpZGViYXJUZXh0Tm9Ib3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluU2lkZWJhclRleHROb0hvdmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1zaWRlYmFyLXRleHQtbm8taG92ZXInKTtcclxuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobWFpblNpZGViYXJUZXh0Tm9Ib3Zlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFNpZGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0U2lkZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyLXRleHQtaDEtcHJvamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdFNpZGVUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuICAgICAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dE5vSG92ZXIuYXBwZW5kQ2hpbGQocHJvamVjdFNpZGVUZXh0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnR5cGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHN1YnR5cGVXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VidHlwZS13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHN1YnR5cGVXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9qZWN0QXJyID0gcHJvamVjdEZhY3RvcnkuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RBcnIubGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgcHJvamVjdEFyci5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0KGNvbnRlbnREaXYsIHN1YnR5cGVXcmFwcGVyLCBvYmplY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gKGNvbnRlbnREaXYsIHBhcmVudCwgb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3VidHlwZVNpZGViYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3VidHlwZVNpZGViYXJUZXh0LmNsYXNzTGlzdC5hZGQoJ3N1YnR5cGUtc2lkZWJhci10ZXh0JywgJ3Byb2plY3QnLCBgJHtvYmplY3QudGl0bGV9YCk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHN1YnR5cGVTaWRlYmFyVGV4dCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10ZXh0LWgzJyk7XHJcbiAgICAgICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XHJcbiAgICAgICAgICAgIHN1YnR5cGVTaWRlYmFyVGV4dC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGhvbGRlci5jbGFzc0xpc3QuYWRkKCdob2xkZXItcmlnaHQtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzdWJ0eXBlU2lkZWJhclRleHQuYXBwZW5kQ2hpbGQoaG9sZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhc2hTdmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFzaFN2Z0Rpdi5jbGFzc0xpc3QuYWRkKCdob2xkZXItdHJhc2gtc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbGRlci5hcHBlbmRDaGlsZCh0cmFzaFN2Z0Rpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhc2hTdmdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RGYWN0b3J5LmRlbGV0ZVByb2plY3Qob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmFkZU91dC5mYWRlT3V0KHN1YnR5cGVTaWRlYmFyVGV4dCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFzaFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFzaFN2Zy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFzaFN2Zy5jbGFzc0xpc3QuYWRkKCdob2xkZXItdHJhc2gtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnLmRhdGEgPSB0cmFzaFN2Z1ZhcjsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnRGl2LmFwcGVuZENoaWxkKHRyYXNoU3ZnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3ctbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LnRleHRDb250ZW50ID0gb2JqZWN0Lm9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBob2xkZXIuYXBwZW5kQ2hpbGQob2Zmc2V0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBtb3VzZUFjdGlvbi5ob3ZlcihzdWJ0eXBlU2lkZWJhclRleHQsIHByb2plY3QsIG9mZnNldCk7XHJcbiAgICAgICAgICAgIENyZWF0ZVBhbmVsLmFkZExpc3RlbmVyKGNvbnRlbnREaXYsIHN1YnR5cGVTaWRlYmFyVGV4dCwgcHJvamVjdEZhY3RvcnkuZ2V0QWxsKG9iamVjdC50aXRsZSksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJywgb2JqZWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1YnR5cGVTaWRlYmFyVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcmVudFByb2plY3QsXHJcbiAgICAgICAgcHJvamVjdFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbi8vIGNyZWF0ZXMgY2xpY2thYmxlIGRpdiB3aXRoIG5vdGUgaDEgYW5kIGNvdW50ZXIgZm9yIG5vdGVzXHJcbmNvbnN0IENyZWF0ZU5vdGVQYW5lbCA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgY3JlYXRlID0gKGNvbnRlbnREaXYsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90ZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1zaWRlYmFyLXRleHQnLCAnc2lkZWJhci10ZXh0LWgxJywgJ25vdGVzLWRpdicpO1xyXG4gICAgICAgIG5vdGVzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ05vdGVzJztcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm90ZXNDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgb2Zmc2V0Tm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdzaG93LW51bWJlci1wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIG9mZnNldE5vdGVzLnRleHRDb250ZW50ID0gbm90ZUZhY3RvcnkubGlzdExlbmd0aCgpO1xyXG4gICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZzZXROb3Rlcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtb3VzZUFjdGlvbi5ob3Zlcihub3Rlc0NvbnRhaW5lciwgbm90ZXNDb250YWluZXIsIG9mZnNldE5vdGVzKTtcclxuICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIENyZWF0ZVBhbmVsLm5vdGVQYW5lbChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBub3Rlc0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjcmVhdGUgfVxyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5jb25zdCBDcmVhdGVDYXRlZ29yaWVzID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcGFyZW50VmFyO1xyXG4gICAgdmFyIHdyYXBwZXJWYXI7XHJcbiAgICB2YXIgbWFpblNpZGViYXJUZXh0V3JhcHBlclZhcjtcclxuXHJcbiAgICBjb25zdCBjYWxsQ2F0ZWdvcnlDcmVhdGlvbiA9IChwYXJlbnQsIHdyYXBwZXIsIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIpID0+IHtcclxuICAgICAgICBpZihwYXJlbnQgIT0gdW5kZWZpbmVkKSBwYXJlbnRWYXIgPSBwYXJlbnQ7XHJcbiAgICAgICAgaWYobWFpblNpZGViYXJUZXh0V3JhcHBlciAhPSB1bmRlZmluZWQpIG1haW5TaWRlYmFyVGV4dFdyYXBwZXJWYXIgPSBtYWluU2lkZWJhclRleHRXcmFwcGVyO1xyXG4gICAgICAgIGlmKHdyYXBwZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJWYXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIH0gZWxzZSB3cmFwcGVyVmFyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IGNhdGVnb3J5RmFjdG9yeS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZSh3cmFwcGVyVmFyLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIENyZWF0ZVBhbmVsLmFkZExpc3RlbmVyKHBhcmVudFZhciwgZGl2LCBjYXRlZ29yeUZhY3RvcnkuZ2V0QWxsKGNhdGVnb3J5LnRpdGxlKSwgVGFza0dVSS50YXNrLCAndGFza3MnLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ3JlYXRlUHJvamVjdHMucGFyZW50UHJvamVjdChwYXJlbnRWYXIsIG1haW5TaWRlYmFyVGV4dFdyYXBwZXJWYXIpO1xyXG4gICAgICAgIENyZWF0ZU5vdGVQYW5lbC5jcmVhdGUocGFyZW50VmFyLCBtYWluU2lkZWJhclRleHRXcmFwcGVyVmFyKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKHBhcmVudFdyYXBwZXIsIG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnbWFpbi1zaWRlYmFyLXRleHQnLCAnc2lkZWJhci10ZXh0LWgxJywgJ2NhdGVnb3J5Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XHJcbiAgICAgICAgcGFyZW50V3JhcHBlci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgb2Zmc2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3ctbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIG9mZnNldC50ZXh0Q29udGVudCA9IG9iamVjdC5vZmZzZXQ7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICBtb3VzZUFjdGlvbi5ob3ZlcihjYXRlZ29yeSwgY2F0ZWdvcnksIG9mZnNldCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhbGxDYXRlZ29yeUNyZWF0aW9uLFxyXG4gICAgICAgIGNyZWF0ZVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcbmNvbnN0IENyZWF0ZUxhbmRpbmdQYWdlID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b3BCYXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BiYXInKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrSm91cm5hbGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGFza0pvdXJuYWxoMS50ZXh0Q29udGVudCA9ICdUYXNrIEpvdXJuYWwnO1xyXG4gICAgICAgICAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodGFza0pvdXJuYWxoMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWRpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluU2lkZWJhclRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1zaWRlYmFyLXRleHQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG1haW5TaWRlYmFyVGV4dFdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZXMgYWxsIDUgY2F0ZWdvcmllcyB3aXRoIGFsbCB0aGUgcHJvamVjdHMgYW5kIHRoZSBub3RlcyBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVDYXRlZ29yaWVzLmNhbGxDYXRlZ29yeUNyZWF0aW9uKGNvbnRlbnREaXYsIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIsIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZHMgYSBkZWZhdWx0IGZvciB3aGVuIHdlYnNpdGUgbG9hZHNcclxuICAgICAgICAgICAgICAgIENyZWF0ZVBhbmVsLmdlbmVyYWxQYW5lbChjb250ZW50RGl2LCBjYXRlZ29yeUZhY3RvcnkuZ2V0QWxsKCdIb21lJyksIFRhc2tHVUkudGFzaywgJ3Rhc2tzJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLWJ0bicpO1xyXG4gICAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuICAgICAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGFsID0gQ3JlYXRlTmV3LmNyZWF0ZU5ldygpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgcGFnZSB9O1xyXG5cclxufSkoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLCBDcmVhdGVMYW5kaW5nUGFnZS5wYWdlKCkpOyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJwcm9qZWN0VmFyIiwiYnV0dG9uIiwib2JqZWN0IiwiY2hlY2tib3hEaXYiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInRhc2tEaXYiLCJzdHlsZSIsIm9wYWNpdHkiLCJhZGRUYXNrVG9DYXRlZ29yeSIsInRhc2siLCJhZGRUYXNrVG9Qcm9qZWN0IiwidGl0bGUiLCJkZXRhaWxzIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY3JlYXRlQ2F0ZWdvcmllcyIsInRhc2tUZXh0RGl2IiwidGV4dERlY29yYXRpb24iLCJhZGQiLCJkZWxldGVUYXNrIiwiQ2hhbmdlIiwiYm9yZGVyU3R5bGUiLCJkaXYiLCJ0YXJnZXQiLCJGYWRlT3V0IiwiZmFkZU91dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicG9wdXBSaWdodFNpZGUiLCJzaWRlIiwicGFyZW50IiwicmlnaHRTaWRlT2ZQb3B1cCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwibW91c2VBY3Rpb24iLCJob3ZlciIsImNoaWxkMSIsImNoaWxkMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcHRpb25Ib3ZlclBhcmVudCIsImRpdkFycmF5IiwicmVzdWx0IiwiY2xhc3NUb0FkZCIsInB1c2giLCJlIiwiZm9yRWFjaCIsIml0ZW0iLCJvbk9wdGlvblRleHRIb3ZlciIsIkNoYW5nZUJ0bkNvbG9yIiwiYXJyIiwiY2xpY2tlZEJ0biIsInNldCIsImJ0bjEiLCJidG4yIiwiYnRuMyIsImJ0biIsImxlbmd0aCIsInJldHVybkNsaWNrZWRCdG4iLCJOb2RlTWFrZXIiLCJjb25zdHJ1Y3RvciIsImN1cnJlbnQiLCJwcmV2aW91cyIsIm5leHQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIm9mZnNldCIsImdldFByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJnZXROZXh0Iiwic2V0TmV4dCIsIlRhc2siLCJQcm9qZWN0IiwidGFza0xpc3QiLCJUYXNrTGlzdCIsImdldE9mZnNldCIsInByb2plY3QiLCJOb3RlIiwibm90ZSIsIkNhdGVnb3J5Iiwic3RhcnQiLCJmaW5pc2giLCJzZXRPZmZzZXQiLCJjb21tYW5kIiwiTGlzdE1ha2VyIiwiaGVhZCIsInRhaWwiLCJlZGl0IiwianVtcGVyIiwiY291bnRlciIsImdldEFsbCIsImZ1bmMiLCJkZWxldGVUaGlzIiwicHJldmlvdXNUb09yaWdpbmFsIiwiYWZ0ZXJPcmlnaW5hbCIsImNhbGxUb0VkaXQiLCJjYXRlZ29yeUZhY3RvcnkiLCJ1cGRhdGVUYXNrIiwibnVtIiwiZ2V0QWxsVGFza3MiLCJQcm9qZWN0TGlzdCIsImVkaXRPZmZzZXQiLCJnZXRBbGxQcm9qZWN0cyIsIk5vdGVMaXN0IiwiZ2V0QWxsTm90ZXMiLCJDYXRlZ29yeUxpc3QiLCJjYXRlZ29yeSIsImVkaXRMaXN0IiwianVhbiIsIkRhdGUiLCJ0b2RheSIsInRvbW9ycm93IiwidGltZUZhY3RvcnkiLCJnZXRGdWxsWWVhciIsInllYXIiLCJtb250aEZpcnN0RGF5IiwibW9udGhMYXN0RGF5IiwibW9uZGF5Iiwic3VuZGF5IiwiZ2V0RGF0ZSIsImdldEFsbENhdGVnb3JpZXMiLCJwcm9qZWN0RmFjdG9yeSIsInByb2plY3RMaXN0IiwiY3JlYXRlVGFzayIsIm5ld1Rhc2siLCJhZGRUYXNrIiwiY3JlYXRlUHJvamVjdCIsIm5ld1Byb2plY3QiLCJwcm9qZWN0QXJyYXkiLCJ0YXNrQXJyIiwicmV0dXJuVmFyIiwicHJvamVjdHNBcnJheSIsIml0ZW1Qcm9qZWN0IiwidGFza3NBcnJheSIsImRlbGV0ZVByb2plY3QiLCJpbmNsdWRlcyIsImRlbGV0ZUFsbFRhc2tzIiwiZ2V0UHJvamVjdHMiLCJzdHJpbmciLCJzZWFyY2hXb3JkIiwiZmluZCIsImRpc3BsYXlQcm9qZWN0TGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yeUxpc3QiLCJjcmVhdGVDYXRlZ29yeSIsImhvbWUiLCJ0aGlzV2VlayIsInRoaXNNb250aCIsImNoZWNrZXIiLCJjYXRlZ29yeUFyciIsImNhdGVnb3J5VG9DaGFuZ2VBcnIiLCJ0YXNrYXJyIiwiY2F0ZWdvcnlBcnJheSIsImRlbGV0ZU9uZVRhc2siLCJjYXRjaGVyIiwiaXRlbUNhdGVnb3J5IiwiaXRlbUFycmF5IiwicHJvamVjdEl0ZW0iLCJjYXRlZ29yeUl0ZW1zQXJyIiwiaXRlbTEiLCJnZXRDYXRlZ29yaWVzIiwiZGlzcGxheUNhdGVnb3J5TGlzdCIsIm5vdGVGYWN0b3J5Iiwibm90ZUxpc3QiLCJjcmVhdGVOb3RlIiwibmV3Tm90ZSIsImVkaXROb3RlIiwiZGVsZXRlTm90ZSIsIm5vdGVBcnJheSIsImxpc3RMZW5ndGgiLCJkaXNwbGF5Tm90ZXMiLCJ0bXJ3Iiwic2V0RGF0ZSIsImRheSIsImdldERheSIsImRpZmYiLCJmaXJzdE1vbnRoRGF5IiwiZ2V0TW9udGgiLCJsYXN0TW9udGhEYXkiLCJvdXRzaWRlIiwic2V2ZW4iLCJ0aGlzV2VlazIiLCJ0aGlzV2VlazMiLCJuZXh0TW9udGgiLCJiaWxscyIsImd5bSIsImdhbWluZyIsImZvcm1hdCIsImNsb3NlU3ZnVmFyIiwidHJhc2hTdmdWYXIiLCJlZGl0U3ZnVmFyIiwid3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJDcmVhdGVOZXciLCJjcmVhdGVOZXciLCJjcmVhdGVOZXdEaXYiLCJzZXRBdHRyaWJ1dGUiLCJ0b2JCYXJDcmVhdGVUb2RvIiwiaDF0b2JCYXJQb3B1cCIsInRleHRDb250ZW50IiwiY29sb3IiLCJjbG9zZVN2Z0RpdiIsImNsb3NlU3ZnIiwiZGF0YSIsInNpZGViYXJDcmVhdGVUb2RvIiwibWFpblNpZGViYXJUZXh0V3JhcHBlciIsImNyZWF0ZVRvZG9PcHRpb24iLCJjcmVhdGVQcm9qZWN0T3B0aW9uIiwiY3JlYXRlTm90ZU9wdGlvbiIsIkNyZWF0ZVRvZG8iLCJ0b2RvIiwiQ3JlYXRlUHJvamVjdCIsIkNyZWF0ZU5vdGUiLCJwb3B1cCIsImlucHV0V3JhcHBlckRpdiIsInRpdGxlSW5wdXQiLCJkZXRhaWxzSW5wdXQiLCJkYXRlUHJpb3JpdHlXcmFwcGVyUGFyZW50IiwiZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkIiwic2hhcmVkRGlzcGxheUZsZXgxIiwiaDNEdWVEYXRlIiwidG9kb0RhdGVJbnB1dCIsInNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50IiwiaDNQcmlvcml0eSIsInNoYXJlZERpc3BsYXlGbGV4M1BhcmVudCIsInNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQiLCJsb3dQcmlvcml0eURpdiIsIm1lZGl1bVByaW9yaXR5RGl2IiwiaGlnaFByaW9yaXR5RGl2IiwiYnRuQXJyIiwiYWRkVG9Eb0J0biIsImR1ZWRhdGUiLCJNYW5hZ2VyIiwiY3JlYXRlIiwicmlnaHRTaWRlU3VibWl0QnRuRGl2IiwiY3JlYXRlUHJvamVjdEJ0biIsIkNyZWF0ZUNhdGVnb3JpZXMiLCJjYWxsQ2F0ZWdvcnlDcmVhdGlvbiIsImNyZWF0ZU5vdGVCdG4iLCJDcmVhdGVQYW5lbCIsIm5vdGVQYW5lbCIsIkRldGFpbHNEaXYiLCJkZXRhaWxzUG9wVXAiLCJkZXRhaWxzUG9wdXBUZXh0V3JhcHBlciIsImRldGFpbHNUaXRsZSIsImRldGFpbHNBYm91dCIsImRldGFpbHNQb3B1cFByaW9yaXR5IiwiZGV0YWlsc1BvcHVwVXJnZW5jeSIsInNwYW5Qcmlvcml0eSIsImRldGFpbHNQb3B1cER1ZURhdGUiLCJkZXRhaWxzUG9wdXBEZWFkbGluZSIsInNwYW5EdWVEYXRlIiwiZGV0YWlsc1BvcHVwRGVzY3JpcHRpb24iLCJkZXRhaWxzUG9wdXBNb3JlIiwic3BhbkRlc2NyaXB0aW9uIiwiRWRpdERpdiIsImVkaXRQb3BVcCIsInRleHRBcmVhV3JhcHBlciIsImVkaXRUaXRsZUFyZWEiLCJlZGl0RGV0YWlsc0FyZWEiLCJkYXRlUHJpb3JpdHlXcmFwcGVyIiwic2hhcmVkRGlzcGxheTEiLCJlZGl0RGF0ZUlucHV0IiwidmFsdWVBc0RhdGUiLCJzaGFyZWREaXNwbGF5MlBhcmVudCIsInNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQiLCJzaGFyZWREaXNwbGF5MkNoaWxkQ2hpbGQiLCJzZWxlY3RlZEJ0biIsImNvbmZpcm1DaGFuZ2VzQnRuIiwiY2xhc3NUb1Bhc3MiLCJtYW5hZ2VUYXNrVXBkYXRlIiwiVGFza0dVSSIsImxlZnRTaWRlIiwicmlnaHRTaWRlIiwiZGV0YWlsc0RpdiIsIm1vZGFsIiwic2hvd01vZGFsIiwiZGF0ZURpc3BsYXlEaXYiLCJlZGl0U3ZnRGl2IiwiZWRpdFN2ZyIsInRyYXNoU3ZnRGl2IiwidHJhc2hTdmciLCJOb3RlR3VpIiwibm90ZUl0c2VsZiIsImF1dG9SZXNpemUiLCJjYWxsZXJWYXIiLCJwYXJlbnRWYXIiLCJvYmplY3RWYXIiLCJmZXRjaENhbGxlciIsImNhbGxlciIsImdlbmVyYWxQYW5lbCIsInVwZGF0ZVBhbmVsQWZ0ZXJUYXNrRWRpdCIsImFkZExpc3RlbmVyIiwiZnVuYzEiLCJmdW5jMiIsImtleXdvcmQiLCJvYmoiLCJhcnJheSIsImZ1bmN0aW9uIiwiY2xlYXJQYW5lbCIsImVtcHR5TXNnIiwicHJlcGVuZCIsImVtcHR5TXNnQ29udGFpbmVyIiwiaDEiLCJhZGRCdG4iLCJjcmVhdGVDb2x1bW5zIiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsInBhcmVudHZhciIsImNvbHVtbjFWYXIiLCJjb2x1bW4yVmFyIiwiY29sdW1uM1ZhciIsImNvbHVtbjRWYXIiLCJhcHBlbmRUb1BhbmVsIiwiZWxlbWVudCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInBhcmVudEhvbGRlciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInJldmVyc2UiLCJ0aXRsZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZWxlbWVudHMiLCJDcmVhdGVQcm9qZWN0cyIsInBhcmVudFByb2plY3QiLCJjb250ZW50RGl2IiwicHJvamVjdHNEaXYiLCJtYWluU2lkZWJhclRleHROb0hvdmVyIiwicHJvamVjdFNpZGVUZXh0Iiwic3VidHlwZVdyYXBwZXIiLCJwcm9qZWN0QXJyIiwic3VidHlwZVNpZGViYXJUZXh0IiwiaG9sZGVyIiwiQ3JlYXRlTm90ZVBhbmVsIiwibm90ZXNDb250YWluZXIiLCJvZmZzZXROb3RlcyIsIndyYXBwZXJWYXIiLCJtYWluU2lkZWJhclRleHRXcmFwcGVyVmFyIiwicGFyZW50V3JhcHBlciIsIkNyZWF0ZUxhbmRpbmdQYWdlIiwicGFnZSIsInRvcEJhciIsInRhc2tKb3VybmFsaDEiLCJzaWRlQmFyIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==