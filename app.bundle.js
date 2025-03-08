/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
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

h2 {
    width: 100%;
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

object{
    pointer-events: none;
    cursor: pointer;
}

span {
    font-size: 18px;
}


#parent {
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

#topbar {
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    background-color: var(--btn-topbar);
}

#child{
    display: flex;
    /* border: 1px solid red; */
    flex-grow: 1;
}

#side-bar{
    background-color: var(--side-bar);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 2px solid grey;
    padding: 30px;
    min-width: 19rem;
}

.tasks-container {
    padding: 30px;
    /* border: 1px solid green; */
}

.flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 30px;
}

.flex-row {
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    gap: 30px;
    align-content: flex-start;
}

#links-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.links-div {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#projects-div {
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-top: 2rem;
}

.projects-links {
    padding-left: 30px;
}

.title-h1-size {
    font-weight: 600;
    font-size: 28px;
}

.project-title-h2-size {
    font-weight: 400;
}

.project {
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right-side-project-title {
    display: flex;
    align-items: center;
    gap: 30px;
}

#add-btn{
    width: 70px;
    height: 70px;
    font-size: 60px;
    border: none;
    border-radius: 50%;
    background-color: var(--btn-topbar);
    color: white;
    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
}

#add-btn:hover{
    transform: scale(1.1);
    background-color: #4b5e8b;
}

.task-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    min-height: 35px;
    background-color: var(--side-bar);
    border-left-width: 4px;
    border-left-style: solid;
    border-radius: 5px;
}

.task-left-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.task-right-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
}

.checkbox {
    background-color: transparent;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
}

.active{ 
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: green;
}

.low-div {
    border-left-color: #119999;;
}

.mid-div {
    border-left-color: orange;
}

.high-div {
    border-left-color: red;
}


.low-checkbox-border {
    border: 2px solid #119999;
}

.mid-checkbox-border {
    border: 2px solid orange;
}

.high-checkbox-border {
    border: 2px solid red;
}

.title-holder {
    font-size: 16px;
    color: black;
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

.general-low-btn, .todo-date-class {
    color: #119999;
    background-color: rgba(#119999, 0.7);
    border: 1px solid #119999;
}

.general-low-btn:hover{
    background-color: #119999;
}

.general-low-btn-selected {
    color: white;
    transition: all 0.3s;
    background-color: #119999;
}

.general-mid-btn {
    color: orange;
    background-color: rgba(orange, 0.7);
    border: 1px solid orange;
}

.general-mid-btn:hover{
    background-color: orange;
}

.general-medium-btn-selected {
    color: white;
    transition: all 0.3s;
    background-color: orange;
}

.general-high-btn {
    color: red;
    background-color: rgba(red, 0.7);
    border: 1px solid red;
}

.general-high-btn:hover{
    background-color: red;
}

.general-high-btn-selected {
    color: white;
    transition: all 0.3s;
    background-color: red;
}

.due-date-div {
    font-size: 15px;
    width: 5rem;
    display: flex;
    justify-content: center;
}

.edit-svg, .trash-svg {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
}

.delete-svg {
    height: 30px;
    display: flex;
    align-items: center;
}

.trash-svg-project {
    height: inherit;
}

.edit-svg:hover, .trash-svg:hover, .trash-svg-project:hover{
    cursor: pointer;
    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);
}

/* code for individual note gui */
.note{
    min-width: 18rem;
    position: relative;
    height: fit-content;
    background-color: var(--side-bar);
    margin-top: 1.2rem;
    padding: 1.3rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.note:hover{
    transition: all 0.3s; 
    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
} 

.note-title, .note-paragraph, .details-input{
    height: fit-content;
    width: 96%;
    display: block;
    overflow: hidden;
}

.note-title{
    font-size: 25px;
    font-weight: normal;
    cursor: pointer;
    color: black;
    min-height: 66px;
    margin-bottom: 0.5rem;
}

.note-paragraph { 
    font-size: 20px;
}

/* #create-note-close, #create-edit-close */
.close-svg-div{
    position: absolute;
    top: 10px;
    right: 10px;
    line-height: 1;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

.close-svg-div:hover{
    cursor: pointer;
}

.close-x-svg{
    filter: invert(0%) sepia(7%) saturate(7471%) hue-rotate(279deg) brightness(91%) contrast(109%);
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

.close-x-svg:hover {
    cursor: pointer;
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
}

::backdrop{ 
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

.details-sub-title {
    font-size: 20px;
    font-weight: 600;
}

.details-project{ 
    margin-right: 4.4rem;
}

.details-urgency{
    margin-right: 4.4rem;
}

.details-deadline{
    margin-right: 3.2rem;
}

.details-description{
    margin-right: 2rem;
}

/* for edit popup */
.right-side-of-popup{
    padding: 50px;
    display: grid;
    grid-template-columns: 6fr 1fr;
    gap: 35px;
}

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
    gap: 20px;
    flex: 1;
}

#date-priority-wrapper-div{
    justify-content: space-between;
}

.shared-display-flex-gap-10px{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#priority-div-parent{
    display: flex;
    flex: 1;
}

#priority-divs-wrapper-parent{
    flex: 1;
    justify-content: space-between;
}

#priority-divs-wrapper-parent, #priority-divs-wrapper-child{
    flex-wrap: wrap;
    align-content: center;
}

 #priority-divs-wrapper-child{
    flex-wrap: wrap;
    align-content: center;
    
}

.priority-div, .add-todo-btn{
    width: 4.5rem;
}

.confirm-changes-btn{
    width: 8rem;
}

/* create a new popup */
#create-new-task-popup{
    max-width: 65rem;
    display: grid;
    grid-template-columns:1fr 4fr;
    grid-template-rows: 1fr 10fr;
    border: none;
    border-radius: 10px;
    margin: 10rem auto;
}

.create-new-topbar{
    grid-area: 1 / 1 / 1 / 3;
    background-color: var(--btn-topbar);

    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--btn-topbar);
}

.create-new-sidebar{
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--side-bar);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8rem;
    max-width: 9rem;
    min-width: 4rem;
    padding: 30px;
    border-right: 1px solid grey;
}

.main-sidebar-text-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.option-text{
    font-size: 25px;
    font-weight: normal;
    cursor: pointer;
    transform: scale (1); 
    color: black;
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

/* for todo side of 'create new' popup */
.input-wrapper-div{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* for project side of 'create new' popup */
.right-side-submit-btn-div{
    display: flex;
    flex-direction: column-reverse;
}

.create-project-note-btn{
    width: 7rem;
}

/* for note side of 'create new' popup */
.create-project-note-btn{
    width: 7rem;
}


.right-side-of-popup{
    padding: 50px;
    display: grid;
    grid-template-columns: 6fr 1fr;
    gap: 35px;
}

/* for offset */
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

.category {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

/* for hover over main titles */

.blue-clr1 {
    color: #607AB6;
}

.white-clr1 {
    color: white;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\r\n    height: 100%;\r\n    user-select: none;\r\n}\r\n\r\n*, *::before, *::after{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    --main-content: white;\r\n    --side-bar: #eee;\r\n    --btn-topbar: #607AB6;\r\n\r\n    color: black;\r\n    box-sizing: border-box;\r\n    display: flex; \r\n    flex-flow: column wrap;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nh1, h2, h3{\r\n    margin-block-start: 0em;\r\n    margin-block-end: 0em;\r\n}\r\n\r\nh2 {\r\n    width: 100%;\r\n}\r\n\r\ninput, textarea{\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: text;\r\n}\r\n\r\ninput:hover, input:focus{\r\n    outline: none;\r\n}\r\n\r\ntextarea{\r\n    border: none;\r\n    font-family: inherit;\r\n    resize: none;\r\n}\r\n\r\ntextarea:focus{\r\n    outline: none;\r\n}\r\n\r\nobject{\r\n    pointer-events: none;\r\n    cursor: pointer;\r\n}\r\n\r\nspan {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n#parent {\r\n    /* border: 1px solid yellow; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n#topbar {\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 30px;\r\n    background-color: var(--btn-topbar);\r\n}\r\n\r\n#child{\r\n    display: flex;\r\n    /* border: 1px solid red; */\r\n    flex-grow: 1;\r\n}\r\n\r\n#side-bar{\r\n    background-color: var(--side-bar);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    border-right: 2px solid grey;\r\n    padding: 30px;\r\n    min-width: 19rem;\r\n}\r\n\r\n.tasks-container {\r\n    padding: 30px;\r\n    /* border: 1px solid green; */\r\n}\r\n\r\n.flex-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    gap: 30px;\r\n}\r\n\r\n.flex-row {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    flex-grow: 1;\r\n    gap: 30px;\r\n    align-content: flex-start;\r\n}\r\n\r\n#links-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.links-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n#projects-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 22px;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.projects-links {\r\n    padding-left: 30px;\r\n}\r\n\r\n.title-h1-size {\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n}\r\n\r\n.project-title-h2-size {\r\n    font-weight: 400;\r\n}\r\n\r\n.project {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.right-side-project-title {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 30px;\r\n}\r\n\r\n#add-btn{\r\n    width: 70px;\r\n    height: 70px;\r\n    font-size: 60px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: var(--btn-topbar);\r\n    color: white;\r\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#add-btn:hover{\r\n    transform: scale(1.1);\r\n    background-color: #4b5e8b;\r\n}\r\n\r\n.task-div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 5px 20px;\r\n    min-height: 35px;\r\n    background-color: var(--side-bar);\r\n    border-left-width: 4px;\r\n    border-left-style: solid;\r\n    border-radius: 5px;\r\n}\r\n\r\n.task-left-side {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.task-right-side {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 25px;\r\n}\r\n\r\n.checkbox {\r\n    background-color: transparent;\r\n    width: 0.7rem;\r\n    height: 0.7rem;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.active{ \r\n    background-image: url(/image/check.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-color: green;\r\n}\r\n\r\n.low-div {\r\n    border-left-color: #119999;;\r\n}\r\n\r\n.mid-div {\r\n    border-left-color: orange;\r\n}\r\n\r\n.high-div {\r\n    border-left-color: red;\r\n}\r\n\r\n\r\n.low-checkbox-border {\r\n    border: 2px solid #119999;\r\n}\r\n\r\n.mid-checkbox-border {\r\n    border: 2px solid orange;\r\n}\r\n\r\n.high-checkbox-border {\r\n    border: 2px solid red;\r\n}\r\n\r\n.title-holder {\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n\r\n.btn-div{\r\n    font-size: 13px;\r\n    padding: 5px 11px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n.btn-div:hover{\r\n    color: white;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.general-low-btn, .todo-date-class {\r\n    color: #119999;\r\n    background-color: rgba(#119999, 0.7);\r\n    border: 1px solid #119999;\r\n}\r\n\r\n.general-low-btn:hover{\r\n    background-color: #119999;\r\n}\r\n\r\n.general-low-btn-selected {\r\n    color: white;\r\n    transition: all 0.3s;\r\n    background-color: #119999;\r\n}\r\n\r\n.general-mid-btn {\r\n    color: orange;\r\n    background-color: rgba(orange, 0.7);\r\n    border: 1px solid orange;\r\n}\r\n\r\n.general-mid-btn:hover{\r\n    background-color: orange;\r\n}\r\n\r\n.general-medium-btn-selected {\r\n    color: white;\r\n    transition: all 0.3s;\r\n    background-color: orange;\r\n}\r\n\r\n.general-high-btn {\r\n    color: red;\r\n    background-color: rgba(red, 0.7);\r\n    border: 1px solid red;\r\n}\r\n\r\n.general-high-btn:hover{\r\n    background-color: red;\r\n}\r\n\r\n.general-high-btn-selected {\r\n    color: white;\r\n    transition: all 0.3s;\r\n    background-color: red;\r\n}\r\n\r\n.due-date-div {\r\n    font-size: 15px;\r\n    width: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.edit-svg, .trash-svg {\r\n    width: 18px;\r\n    height: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.delete-svg {\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.trash-svg-project {\r\n    height: inherit;\r\n}\r\n\r\n.edit-svg:hover, .trash-svg:hover, .trash-svg-project:hover{\r\n    cursor: pointer;\r\n    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);\r\n}\r\n\r\n/* code for individual note gui */\r\n.note{\r\n    min-width: 18rem;\r\n    position: relative;\r\n    height: fit-content;\r\n    background-color: var(--side-bar);\r\n    margin-top: 1.2rem;\r\n    padding: 1.3rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.note:hover{\r\n    transition: all 0.3s; \r\n    box-shadow: 0.2rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\r\n} \r\n\r\n.note-title, .note-paragraph, .details-input{\r\n    height: fit-content;\r\n    width: 96%;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.note-title{\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    color: black;\r\n    min-height: 66px;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.note-paragraph { \r\n    font-size: 20px;\r\n}\r\n\r\n/* #create-note-close, #create-edit-close */\r\n.close-svg-div{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    line-height: 1;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-svg-div:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.close-x-svg{\r\n    filter: invert(0%) sepia(7%) saturate(7471%) hue-rotate(279deg) brightness(91%) contrast(109%);\r\n    width: 1rem;\r\n    height: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-x-svg:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* details popup code */\r\n#details-popup{\r\n    position: relative;\r\n    width: 40rem;\r\n    margin: auto;\r\n    padding: 2rem;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n::backdrop{ \r\n    background: rgb(0 0 0 / 30%);\r\n    backdrop-filter: blur(6px);\r\n}\r\n\r\n#details-popup-text-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 17px;\r\n}\r\n\r\n#details-popup-title{\r\n    font-size: 35px;\r\n}\r\n\r\n#details-popup-about-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.details-sub-title {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.details-project{ \r\n    margin-right: 4.4rem;\r\n}\r\n\r\n.details-urgency{\r\n    margin-right: 4.4rem;\r\n}\r\n\r\n.details-deadline{\r\n    margin-right: 3.2rem;\r\n}\r\n\r\n.details-description{\r\n    margin-right: 2rem;\r\n}\r\n\r\n/* for edit popup */\r\n.right-side-of-popup{\r\n    padding: 50px;\r\n    display: grid;\r\n    grid-template-columns: 6fr 1fr;\r\n    gap: 35px;\r\n}\r\n\r\n.edit-popup{\r\n    position: relative;\r\n    height: 21rem;\r\n    width: 50rem;\r\n    margin: auto;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.6);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.confirm-changes-btn{\r\n    width: 8rem;\r\n}\r\n\r\n#textarea-wrapper-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0px;\r\n}\r\n\r\n#textarea-wrapper-div textarea:first-of-type{\r\n    line-height: 0.8; \r\n}\r\n\r\n#textarea-wrapper-div textarea:last-of-type{\r\n    height: 100%;\r\n    line-height: 1.5; \r\n}\r\n\r\n#create-edit-close{\r\n    filter: invert(24%) sepia(100%) saturate(1934%) hue-rotate(97deg) brightness(94%) contrast(103%);\r\n}\r\n\r\n.title-input{\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.details-input{\r\n    font-size: 17px;\r\n}\r\n\r\n#date-priority-wrapper-div, #date-priority-wrapper-div-child{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    flex: 1;\r\n}\r\n\r\n#date-priority-wrapper-div{\r\n    justify-content: space-between;\r\n}\r\n\r\n.shared-display-flex-gap-10px{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n#priority-div-parent{\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n#priority-divs-wrapper-parent{\r\n    flex: 1;\r\n    justify-content: space-between;\r\n}\r\n\r\n#priority-divs-wrapper-parent, #priority-divs-wrapper-child{\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n}\r\n\r\n #priority-divs-wrapper-child{\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    \r\n}\r\n\r\n.priority-div, .add-todo-btn{\r\n    width: 4.5rem;\r\n}\r\n\r\n.confirm-changes-btn{\r\n    width: 8rem;\r\n}\r\n\r\n/* create a new popup */\r\n#create-new-task-popup{\r\n    max-width: 65rem;\r\n    display: grid;\r\n    grid-template-columns:1fr 4fr;\r\n    grid-template-rows: 1fr 10fr;\r\n    border: none;\r\n    border-radius: 10px;\r\n    margin: 10rem auto;\r\n}\r\n\r\n.create-new-topbar{\r\n    grid-area: 1 / 1 / 1 / 3;\r\n    background-color: var(--btn-topbar);\r\n\r\n    display: flex;\r\n    padding: 5px 20px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: var(--btn-topbar);\r\n}\r\n\r\n.create-new-sidebar{\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    background-color: var(--side-bar);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    gap: 8rem;\r\n    max-width: 9rem;\r\n    min-width: 4rem;\r\n    padding: 30px;\r\n    border-right: 1px solid grey;\r\n}\r\n\r\n.main-sidebar-text-wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.option-text{\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    transform: scale (1); \r\n    color: black;\r\n}\r\n\r\n.option-text.mouseOn{\r\n    font-weight: bold;\r\n    transform: scale (1.02); \r\n    color: black;\r\n}\r\n\r\n.option-text:hover{\r\n    font-weight: bold;\r\n    transform: scale (1.02); \r\n    color: black;\r\n}\r\n\r\n/* for todo side of 'create new' popup */\r\n.input-wrapper-div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n/* for project side of 'create new' popup */\r\n.right-side-submit-btn-div{\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.create-project-note-btn{\r\n    width: 7rem;\r\n}\r\n\r\n/* for note side of 'create new' popup */\r\n.create-project-note-btn{\r\n    width: 7rem;\r\n}\r\n\r\n\r\n.right-side-of-popup{\r\n    padding: 50px;\r\n    display: grid;\r\n    grid-template-columns: 6fr 1fr;\r\n    gap: 35px;\r\n}\r\n\r\n/* for offset */\r\n.show-number, #show-number-project{\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: var(--btn-topbar);\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n    border: none;\r\n    border-radius: 25px;\r\n    padding: 2px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.category {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n\r\n/* for hover over main titles */\r\n\r\n.blue-clr1 {\r\n    color: #607AB6;\r\n}\r\n\r\n.white-clr1 {\r\n    color: white;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/addDays.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


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

/***/ "./node_modules/date-fns/constructNow.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/constructNow.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


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

/***/ "./node_modules/date-fns/isSameDay.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");



/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateLeft_) === +(0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateRight_);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameMonth.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameMonth: () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");


/**
 * The {@link isSameMonth} function options.
 */

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    laterDate_.getFullYear() === earlierDate_.getFullYear() &&
    laterDate_.getMonth() === earlierDate_.getMonth()
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameMonth);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");



/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(laterDate_, options) === +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(earlierDate_, options)
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisMonth.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisMonth: () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js");
/* harmony import */ var _isSameMonth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameMonth.js */ "./node_modules/date-fns/isSameMonth.js");




/**
 * The {@link isThisMonth} function options.
 */

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth(date, options) {
  return (0,_isSameMonth_js__WEBPACK_IMPORTED_MODULE_0__.isSameMonth)(
    (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, date),
    (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date),
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisMonth);


/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js");
/* harmony import */ var _isSameWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.js */ "./node_modules/date-fns/isSameWeek.js");




/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0,_isSameWeek_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(
    (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, date),
    (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date),
    options,
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);


/***/ }),

/***/ "./node_modules/date-fns/isToday.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isToday.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js");
/* harmony import */ var _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.js */ "./node_modules/date-fns/isSameDay.js");




/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0,_isSameDay_js__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(
    (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, date),
    (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date),
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isTomorrow.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isTomorrow.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isTomorrow: () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDays.js */ "./node_modules/date-fns/addDays.js");
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js");
/* harmony import */ var _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.js */ "./node_modules/date-fns/isSameDay.js");




/**
 * The {@link isTomorrow} function options.
 */

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date, options) {
  return (0,_isSameDay_js__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(
    date,
    (0,_addDays_js__WEBPACK_IMPORTED_MODULE_1__.addDays)((0,_constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(options?.in || date), 1),
    options,
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTomorrow);


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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isTomorrow.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../image/x-svg.svg */ "./image/x-svg.svg");
/* harmony import */ var _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../image/trash-can-regular.svg */ "./image/trash-can-regular.svg");
/* harmony import */ var _image_pen_to_square_regular_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../image/pen-to-square-regular.svg */ "./image/pen-to-square-regular.svg");






// localStorage.clear();

class Task {
  constructor(title, project, details, dueDate, urgency) {
    let done = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    this.title = title;
    this.project = project;
    this.details = details;
    this.dueDate = dueDate;
    this.urgency = urgency;
    this.done = done;
  }
  editProperty(property, value) {
    this[property] = value;
  }
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
const StorageManager = function () {
  // let latch = false;

  const FirstBootDone = () => {
    localStorage.setItem('latch', JSON.stringify(true));
  };
  const isFirstBoot = () => {
    return !JSON.parse(localStorage.getItem('latch'));
  };
  const loadTasks = () => {
    var taskArr = JSON.parse(localStorage.getItem('tasks'));
    return taskArr ? taskArr : [];
  };
  const loadProjects = () => {
    var projectArr = JSON.parse(localStorage.getItem('projects'));
    return projectArr ? projectArr : [];
  };
  const loadNotes = () => {
    var notesArr = JSON.parse(localStorage.getItem('notes'));
    return notesArr ? notesArr : [];
  };
  const updateTasks = taskArr => {
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
  };
  const updateOneTask = (task, changes) => {
    var count = 0;
    var taskArr = loadTasks();
    taskArr.forEach(element => {
      Object.keys(element).forEach(key => {
        if (element[key] === task[key]) {
          count++;
          if (count === 6) {
            Object.keys(changes).forEach(property => {
              if (changes[property] !== undefined) element[property] = changes[property];
            });
            return element;
          }
          ;
        }
        ;
      });
    });
    localStorage.setItem('tasks', JSON.stringify(taskArr));
  };
  const updateProjects = projectsArr => {
    var projectList = [];
    projectsArr.forEach(project => {
      projectList.push(project.title);
    });
    localStorage.setItem('projects', JSON.stringify(projectList));
  };
  const updateNotes = notesArr => {
    var noteList = [];
    notesArr.forEach(note => {
      noteList.push({
        title: note.title,
        details: note.details
      });
    });
    localStorage.setItem('notes', JSON.stringify(noteList));
  };
  const updateOneNote = (note, changes) => {
    var count = 0;
    var noteArr = loadNotes();
    noteArr.forEach(element => {
      Object.keys(element).forEach(key => {
        if (element[key] === note[key]) {
          count++;
          if (count === 2) {
            Object.keys(element).forEach(property => {
              property === 'title' ? element[property] = changes.title : element[property] = changes.details;
            });
            return element;
          }
          ;
        }
        ;
      });
    });
    localStorage.setItem('notes', JSON.stringify(noteArr));
  };
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
  };
}();
const TaskManager = function () {
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
  };
  const deleteTask = title => {
    taskArr = taskArr.filter(task => task.title !== title);
    StorageManager.updateTasks(taskArr);
  };
  const getLength = () => {
    return taskArr.length;
  };
  const getAllTasks = () => {
    return taskArr;
  };
  StorageManager.isFirstBoot() ? initializeTasks() : StorageManager.loadTasks().forEach(task => taskArr.push(new Task(task.title, task.project, task.details, task.dueDate, task.urgency, task.done)));
  return {
    addTask,
    deleteTask,
    getLength,
    getAllTasks
  };
}();
const TaskParser = function () {
  const parseByTime = condition => {
    return TaskManager.getAllTasks().filter(task => condition(task.dueDate));
  };
  const parseByProject = project => {
    return TaskManager.getAllTasks().filter(task => task.project === project);
  };
  return {
    parseByTime,
    parseByProject
  };
}();
const ProjectManager = function () {
  var projectArr = [];
  const addProject = title => {
    projectArr.push(new Project(title));
    StorageManager.updateProjects(projectArr);
  };
  const initializeProjects = () => {
    addProject('Chores');
    addProject('Gaming');
    addProject('Bills');
  };
  const deleteProject = title => {
    projectArr = projectArr.filter(project => project.title !== title);
    TaskParser.parseByProject(title).forEach(task => TaskManager.deleteTask(task.title));
    StorageManager.updateProjects(projectArr);
  };
  const getAllProjects = () => {
    return projectArr;
  };
  StorageManager.isFirstBoot() ? initializeProjects() : StorageManager.loadProjects().forEach(title => projectArr.push(new Project(title)));
  return {
    addProject,
    deleteProject,
    getAllProjects
  };
}();
const NoteManager = function () {
  var noteList = [];
  const addNote = (title, details) => {
    noteList.push(new Note(title, details));
    StorageManager.updateNotes(noteList);
  };
  const initializeNotes = () => {
    addNote('Cinema', 'Watch latest John Wick movie');
    addNote('library', 'see if they got the book');
    addNote('vet', 'take Doggy to the vet on Thursday');
    StorageManager.FirstBootDone();
  };
  const deleteNote = title => {
    noteList = noteList.filter(note => note.title !== title);
    StorageManager.updateNotes(noteList);
  };
  const getLength = () => {
    return noteList.length();
  };
  const getAllNotes = () => {
    return noteList;
  };
  StorageManager.isFirstBoot() ? initializeNotes() : StorageManager.loadNotes().forEach(note => noteList.push(new Note(note.title, note.details)));
  return {
    addNote,
    initializeNotes,
    deleteNote,
    getLength,
    getAllNotes
  };
}();
const CLI = function () {
  const mainLoop = () => {
    while (true) {
      console.log(`Instructions: \n \
                         Choose one of the option: \n \
                         To add a task: 'addTask title project details urgency' \n \ 
                         To edit a task: 'adjust index property value' \n \
                         To get a task: 'get index' \n \
                         To get all tasks: 'getallTasks' \n \
                         To delete a task: 'deleteTask index' \n \
                         To get amount of tasks: 'length' \n \
                         To get all tasks in a project: 'project index' \n \
                         To get all projects: 'getallProjects' \n \
                         To add a project: 'addProject title' \n \
                         To delete a project: 'deleteProject index' \n \ 
                         To list categories: 'listCategories' \n \
                         To view a category: 'category index' \n \
                         To reset local storage: 'reset'`);
      let input = prompt('Enter here', '').split(' ');
      switch (input[0]) {
        case 'addTask':
          TaskManager.addTask(input[1], input[2], input[3], new Date(), input[4]);
          break;
        case 'adjust':
          editTask(parseInt(input[1]), input[2], input[3]);
          break;
        case 'get':
          getTask(parseInt(input[1]));
          break;
        case 'getallTasks':
          getAllTasks();
          break;
        case 'deleteTask':
          removeTask(parseInt(input[1]));
          break;
        case 'length':
          taskLength();
          break;
        case 'project':
          console.log(TaskParser.parseByProject(ProjectManager.getAllProjects()[parseInt(input[1])].title));
          break;
        case 'getallProjects':
          console.log(ProjectManager.getAllProjects());
          break;
        case 'addProject':
          ProjectManager.addProject(input[1]);
          break;
        case 'deleteProject':
          removeProject(parseInt(input[1]));
          break;
        case 'listCategories':
          console.log(`
                        0: Home \n \
                        1: Today \n \
                        2: Tomorrow \n \
                        3: This Week \n \
                        4: This Month`);
          break;
        case 'category':
          switch (parseInt(input[1])) {
            case 0:
              console.log(TaskManager.getAllTasks());
              break;
            case 1:
              console.log(TaskParser.parseByTime(date_fns__WEBPACK_IMPORTED_MODULE_4__.isToday));
              break;
            case 2:
              console.log(TaskParser.parseByTime(date_fns__WEBPACK_IMPORTED_MODULE_5__.isTomorrow));
              break;
            case 3:
              console.log(TaskParser.parseByTime(date_fns__WEBPACK_IMPORTED_MODULE_6__.isThisWeek));
              break;
            case 4:
              console.log(TaskParser.parseByTime(date_fns__WEBPACK_IMPORTED_MODULE_7__.isThisMonth));
              break;
          }
          break;
        case 'reset':
          localStorage.clear();
          break;
      }
    }
  };
  const editTask = (index, property, value) => {
    TaskManager.getAllTasks()[index].editProperty(property, value);
  };
  const removeTask = index => {
    TaskManager.deleteTask(TaskManager.getAllTasks()[index].title);
  };
  const removeProject = index => {
    ProjectManager.deleteProject(ProjectManager.getAllProjects()[index].title);
  };
  const taskLength = () => {
    console.log('task length: ' + TaskManager.getLength());
  };
  const getTask = index => {
    console.log('your task: ');
    console.log(TaskManager.getAllTasks()[index]);
  };
  const getAllTasks = () => {
    console.log('all tasks: ');
    console.log(TaskManager.getAllTasks());
  };
  return {
    mainLoop,
    editTask,
    removeTask,
    taskLength,
    getTask,
    getAllTasks
  };
}();

//----------------------------------------------------------------------
// gui

const GUIManager = function () {
  const body = document.querySelector('body');
  var tasksContainer, categoryLinks, projectsContainer, notesContainer;
  var offsetContainers = [];
  const homeCondition = X => {
    return true;
  };
  var filterFunc = TaskParser.parseByTime;
  var filterParam = homeCondition;
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
  const side = parent => {
    const rightSideOfPopup = document.createElement('div');
    rightSideOfPopup.classList.add('right-side-of-popup');
    parent.appendChild(rightSideOfPopup);
    return rightSideOfPopup;
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
  var onOptionTextHover = optionHoverParent();
  const hover = function (parent, child1) {
    let child2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    parent.addEventListener('mouseover', function () {
      if (child2 === 0) {
        child1.classList.add('blue-clr1');
      } else {
        child1.classList.add('blue-clr1');
        child2.classList.add('white-clr1');
      }
      ;
    });
    parent.addEventListener('mouseout', function () {
      if (child2 === 0) {
        child1.classList.remove('blue-clr1');
      } else {
        child1.classList.remove('blue-clr1');
        child2.classList.remove('white-clr1');
      }
    });
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
  const createTaskElement = task => {
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
    dueDateDiv.textContent = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(task.dueDate), 'MMM')} ${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(task.dueDate), 'do')}`;
    taskRightSide.appendChild(dueDateDiv);
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-svg');
    taskRightSide.appendChild(editDiv);
    editDiv.addEventListener('click', () => {
      createEditDiv(task).showModal();
    });
    const editSvg = document.createElement('object');
    editSvg.setAttribute('type', 'image/svg+xml');
    editSvg.classList.add('edit-svg');
    editSvg.data = _image_pen_to_square_regular_svg__WEBPACK_IMPORTED_MODULE_3__;
    editDiv.appendChild(editSvg);
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete-svg');
    taskRightSide.appendChild(deleteDiv);
    deleteDiv.addEventListener('click', () => {
      TaskManager.deleteTask(task.title);
      calculateOffsets();
      loadTaskPage(filterFunc(filterParam));
    });
    const trashSvg = document.createElement('object');
    trashSvg.setAttribute('type', 'image/svg+xml');
    trashSvg.classList.add('trash-svg');
    trashSvg.data = _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteDiv.appendChild(trashSvg);
  };
  const addProjectToOffestContainer = (offset, title) => {
    offsetContainers = offsetContainers.filter(object => object.filterP !== title);
    offsetContainers.push({
      element: offset,
      filterF: TaskParser.parseByProject,
      filterP: title
    });
    calculateOffsets();
  };
  const calculateOffsets = () => {
    offsetContainers.forEach(object => {
      object.element.textContent = object.filterF(object.filterP).filter(task => !task.done).length;
    });
  };
  const createProjectElement = project => {
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
    trashSvg.data = _image_trash_can_regular_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteDiv.appendChild(trashSvg);
    deleteDiv.addEventListener('click', () => {
      while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.lastChild);
      }
      ;
      ProjectManager.deleteProject(project.title);
      ProjectManager.getAllProjects().forEach(project => createProjectElement(project));
      offsetContainers = offsetContainers.filter(object => object.filterParam !== project.title);
      if (project.title === filterParam) {
        filterFunc = TaskParser.parseByTime;
        filterParam = homeCondition;
      }
      ;
      if (filterParam !== 'Notes') loadTaskPage(filterFunc(filterParam));
    });
    projectTitle.addEventListener('click', () => {
      loadTaskPage(TaskParser.parseByProject(project.title));
      filterFunc = TaskParser.parseByProject;
      filterParam = project.title;
    });
  };
  const autoResize = element => {
    element.style.height = '10px';
    element.style.height = element.scrollHeight + 'px';
  };
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
  };
  const noteGUI = note => {
    var changed = {};
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
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
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
  };
  const loadTaskPage = taskarr => {
    while (tasksContainer.firstChild) {
      tasksContainer.removeChild(tasksContainer.lastChild);
    }
    ;
    if (tasksContainer.classList.contains('flex-row')) tasksContainer.classList.remove('flex-row');
    tasksContainer.classList.add('flex-column');
    taskarr.forEach(task => {
      createTaskElement(task);
    });
  };
  const loadNotesPage = notesarr => {
    while (tasksContainer.firstChild) {
      tasksContainer.removeChild(tasksContainer.lastChild);
    }
    ;
    if (tasksContainer.classList.contains('flex-column')) tasksContainer.classList.remove('flex-column');
    tasksContainer.classList.add('flex-row');
    notesarr.forEach(note => {
      noteGUI(note);
    });
  };
  const createDetailsDiv = task => {
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
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    task.project === null ? spanProject.textContent = '-' : spanProject.textContent = task.project;
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
    spanDueDate.textContent = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(task.dueDate), 'MMMM')} ${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(task.dueDate), 'do')}, ${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(task.dueDate), 'yyyy')}`;
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
  const createEditDiv = task => {
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
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeSvgDiv.appendChild(closeSvg);
    const textAreaWrapper = document.createElement('div');
    textAreaWrapper.setAttribute('id', 'textarea-wrapper-div');
    editPopUp.appendChild(textAreaWrapper);
    const editTitleArea = document.createElement('textarea');
    editTitleArea.classList.add('title-input');
    editTitleArea.textContent = task.title;
    task.editProperty('title', editTitleArea.textContent);
    textAreaWrapper.appendChild(editTitleArea);
    editTitleArea.addEventListener('change', e => {
      changed.title = e.target.value;
    });
    const editDetailsArea = document.createElement('textarea');
    editDetailsArea.classList.add('details-input');
    editDetailsArea.textContent = task.details;
    textAreaWrapper.appendChild(editDetailsArea);
    editDetailsArea.addEventListener('change', e => {
      changed.details = e.target.value;
    });
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
    editDateInput.valueAsDate = new Date(task.dueDate);
    sharedDisplay1.appendChild(editDateInput);
    editDateInput.addEventListener('change', e => {
      changed.dueDate = e.target.value;
    });
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
      }
      ;
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
      if (filterParam !== 'Notes' && typeof filterParam !== 'function') project = filterParam;
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
    createProjectBtn.addEventListener('click', function () {
      ProjectManager.addProject(titleInput.value);
      while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.lastChild);
      }
      ;
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
    createNoteBtn.addEventListener('click', function () {
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
    closeSvg.data = _image_x_svg_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeSvgDiv.appendChild(closeSvg);
    const sidebarCreateTodo = document.createElement('div');
    sidebarCreateTodo.classList.add('create-new-sidebar');
    createNewDiv.appendChild(sidebarCreateTodo);
    const mainSidebarTextWrapper = document.createElement('div');
    mainSidebarTextWrapper.classList.add('main-sidebar-text-wrapper');
    sidebarCreateTodo.appendChild(mainSidebarTextWrapper);
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
    createTaskSide(div, createNewDiv); //default
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
    var categoryArr = [{
      title: 'Home',
      condition: homeCondition
    }, {
      title: 'Today',
      condition: date_fns__WEBPACK_IMPORTED_MODULE_4__.isToday
    }, {
      title: 'Tomorrow',
      condition: date_fns__WEBPACK_IMPORTED_MODULE_5__.isTomorrow
    }, {
      title: 'This Week',
      condition: date_fns__WEBPACK_IMPORTED_MODULE_6__.isThisWeek
    }, {
      title: 'This Month',
      condition: date_fns__WEBPACK_IMPORTED_MODULE_7__.isThisMonth
    }];
    categoryArr.forEach(object => {
      const category = document.createElement('div');
      category.classList.add('category');
      categoryLinks.appendChild(category);
      const categoryTitle = document.createElement('h1');
      categoryTitle.classList.add('title-h1-size');
      categoryTitle.textContent = object.title;
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
  };
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
    sidebar.setAttribute('id', 'side-bar');
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
    addBtn.setAttribute('id', 'add-btn');
    addBtn.textContent = '+';
    sidebar.appendChild(addBtn);
    addBtn.addEventListener('click', () => {
      let modal = createNewDiv();
      modal.showModal();
    });
    loadTaskPage(TaskManager.getAllTasks());
    createFilters();
    calculateOffsets();
  };
  return {
    createPage
  };
}();
window.addEventListener('onload', GUIManager.createPage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDJIQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsc0NBQXNDLHFCQUFxQiwwQkFBMEIsS0FBSywrQkFBK0IsbUJBQW1CLGtCQUFrQixLQUFLLGFBQWEsOEJBQThCLHlCQUF5Qiw4QkFBOEIseUJBQXlCLCtCQUErQix1QkFBdUIsK0JBQStCLDRKQUE0SixLQUFLLG1CQUFtQixnQ0FBZ0MsOEJBQThCLEtBQUssWUFBWSxvQkFBb0IsS0FBSyx3QkFBd0Isc0NBQXNDLHFCQUFxQixxQkFBcUIsS0FBSyxpQ0FBaUMsc0JBQXNCLEtBQUssaUJBQWlCLHFCQUFxQiw2QkFBNkIscUJBQXFCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLGVBQWUsNkJBQTZCLHdCQUF3QixLQUFLLGNBQWMsd0JBQXdCLEtBQUsscUJBQXFCLHFDQUFxQyx3QkFBd0IsK0JBQStCLHFCQUFxQixLQUFLLGlCQUFpQixzQkFBc0Isc0JBQXNCLG9DQUFvQyw0QkFBNEIsa0JBQWtCLDRDQUE0QyxLQUFLLGVBQWUsc0JBQXNCLGtDQUFrQyx1QkFBdUIsS0FBSyxrQkFBa0IsMENBQTBDLHNCQUFzQiwrQkFBK0IsdUNBQXVDLHFDQUFxQyxzQkFBc0IseUJBQXlCLEtBQUssMEJBQTBCLHNCQUFzQixvQ0FBb0MsT0FBTyxzQkFBc0Isc0JBQXNCLCtCQUErQixxQkFBcUIsa0JBQWtCLEtBQUssbUJBQW1CLHNCQUFzQiw0QkFBNEIscUJBQXFCLGtCQUFrQixrQ0FBa0MsS0FBSywwQkFBMEIsc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyxvQkFBb0Isc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyx1QkFBdUIsc0JBQXNCLCtCQUErQixrQkFBa0IseUJBQXlCLEtBQUsseUJBQXlCLDJCQUEyQixLQUFLLHdCQUF3Qix5QkFBeUIsd0JBQXdCLEtBQUssZ0NBQWdDLHlCQUF5QixLQUFLLGtCQUFrQix3QkFBd0IseUJBQXlCLHNCQUFzQix1Q0FBdUMsNEJBQTRCLEtBQUssbUNBQW1DLHNCQUFzQiw0QkFBNEIsa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsNENBQTRDLHFCQUFxQiwwREFBMEQsS0FBSyx1QkFBdUIsOEJBQThCLGtDQUFrQyxLQUFLLG1CQUFtQixzQkFBc0IsdUNBQXVDLDRCQUE0QiwwQkFBMEIseUJBQXlCLDBDQUEwQywrQkFBK0IsaUNBQWlDLDJCQUEyQixLQUFLLHlCQUF5QixzQkFBc0IsNEJBQTRCLDRCQUE0QixrQkFBa0IsS0FBSywwQkFBMEIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLEtBQUssbUJBQW1CLHNDQUFzQyxzQkFBc0IsdUJBQXVCLDJCQUEyQix3QkFBd0IsS0FBSyxpQkFBaUIsZ0RBQWdELHFDQUFxQyxpQ0FBaUMsZ0NBQWdDLEtBQUssa0JBQWtCLG9DQUFvQyxLQUFLLGtCQUFrQixrQ0FBa0MsS0FBSyxtQkFBbUIsK0JBQStCLEtBQUssa0NBQWtDLGtDQUFrQyxLQUFLLDhCQUE4QixpQ0FBaUMsS0FBSywrQkFBK0IsOEJBQThCLEtBQUssdUJBQXVCLHdCQUF3QixxQkFBcUIsS0FBSyxpQkFBaUIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsd0JBQXdCLDJCQUEyQix5QkFBeUIsS0FBSyx1QkFBdUIscUJBQXFCLDZCQUE2QixLQUFLLDRDQUE0Qyx1QkFBdUIsNkNBQTZDLGtDQUFrQyxLQUFLLCtCQUErQixrQ0FBa0MsS0FBSyxtQ0FBbUMscUJBQXFCLDZCQUE2QixrQ0FBa0MsS0FBSywwQkFBMEIsc0JBQXNCLDRDQUE0QyxpQ0FBaUMsS0FBSywrQkFBK0IsaUNBQWlDLEtBQUssc0NBQXNDLHFCQUFxQiw2QkFBNkIsaUNBQWlDLEtBQUssMkJBQTJCLG1CQUFtQix5Q0FBeUMsOEJBQThCLEtBQUssZ0NBQWdDLDhCQUE4QixLQUFLLG9DQUFvQyxxQkFBcUIsNkJBQTZCLDhCQUE4QixLQUFLLHVCQUF1Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixnQ0FBZ0MsS0FBSywrQkFBK0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsNEJBQTRCLEtBQUsscUJBQXFCLHFCQUFxQixzQkFBc0IsNEJBQTRCLEtBQUssNEJBQTRCLHdCQUF3QixLQUFLLG9FQUFvRSx3QkFBd0IseUdBQXlHLEtBQUssb0RBQW9ELHlCQUF5QiwyQkFBMkIsNEJBQTRCLDBDQUEwQywyQkFBMkIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLEtBQUssb0JBQW9CLDhCQUE4QiwwREFBMEQsTUFBTSxxREFBcUQsNEJBQTRCLG1CQUFtQix1QkFBdUIseUJBQXlCLEtBQUssb0JBQW9CLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLHFCQUFxQix5QkFBeUIsOEJBQThCLEtBQUssMEJBQTBCLHdCQUF3QixLQUFLLHVFQUF1RSwyQkFBMkIsa0JBQWtCLG9CQUFvQix1QkFBdUIsb0JBQW9CLHFCQUFxQix3QkFBd0IsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUsscUJBQXFCLHVHQUF1RyxvQkFBb0IscUJBQXFCLHdCQUF3QixLQUFLLDRCQUE0Qix3QkFBd0IsS0FBSyxtREFBbUQsMkJBQTJCLHFCQUFxQixxQkFBcUIsc0JBQXNCLGtDQUFrQyxtREFBbUQscUJBQXFCLDRCQUE0QixLQUFLLG9CQUFvQixxQ0FBcUMsbUNBQW1DLEtBQUssb0NBQW9DLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUssNkJBQTZCLHdCQUF3QixLQUFLLHFDQUFxQyxzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLDRCQUE0Qix3QkFBd0IseUJBQXlCLEtBQUssMEJBQTBCLDZCQUE2QixLQUFLLHlCQUF5Qiw2QkFBNkIsS0FBSywwQkFBMEIsNkJBQTZCLEtBQUssNkJBQTZCLDJCQUEyQixLQUFLLHFEQUFxRCxzQkFBc0Isc0JBQXNCLHVDQUF1QyxrQkFBa0IsS0FBSyxvQkFBb0IsMkJBQTJCLHNCQUFzQixxQkFBcUIscUJBQXFCLGtDQUFrQyxtREFBbUQscUJBQXFCLDRCQUE0QixLQUFLLDZCQUE2QixvQkFBb0IsS0FBSyw4QkFBOEIsc0JBQXNCLCtCQUErQixpQkFBaUIsS0FBSyxxREFBcUQsMEJBQTBCLEtBQUssb0RBQW9ELHFCQUFxQiwwQkFBMEIsS0FBSywyQkFBMkIseUdBQXlHLEtBQUsscUJBQXFCLHdCQUF3Qix5QkFBeUIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUsscUVBQXFFLHNCQUFzQiwrQkFBK0Isa0JBQWtCLGdCQUFnQixLQUFLLG1DQUFtQyx1Q0FBdUMsS0FBSyxzQ0FBc0Msc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyw2QkFBNkIsc0JBQXNCLGdCQUFnQixLQUFLLHNDQUFzQyxnQkFBZ0IsdUNBQXVDLEtBQUssb0VBQW9FLHdCQUF3Qiw4QkFBOEIsS0FBSyxzQ0FBc0Msd0JBQXdCLDhCQUE4QixhQUFhLHFDQUFxQyxzQkFBc0IsS0FBSyw2QkFBNkIsb0JBQW9CLEtBQUssMkRBQTJELHlCQUF5QixzQkFBc0Isc0NBQXNDLHFDQUFxQyxxQkFBcUIsNEJBQTRCLDJCQUEyQixLQUFLLDJCQUEyQixpQ0FBaUMsNENBQTRDLDBCQUEwQiwwQkFBMEIsdUNBQXVDLDRCQUE0Qiw0Q0FBNEMsS0FBSyw0QkFBNEIsaUNBQWlDLDBDQUEwQyxzQkFBc0IsK0JBQStCLG9DQUFvQyxrQkFBa0Isd0JBQXdCLHdCQUF3QixzQkFBc0IscUNBQXFDLEtBQUssbUNBQW1DLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUsscUJBQXFCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLDhCQUE4QixxQkFBcUIsS0FBSyw2QkFBNkIsMEJBQTBCLGlDQUFpQyxxQkFBcUIsS0FBSywyQkFBMkIsMEJBQTBCLGlDQUFpQyxxQkFBcUIsS0FBSyx3RUFBd0Usc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyxtRkFBbUYsc0JBQXNCLHVDQUF1QyxLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyw4RUFBOEUsb0JBQW9CLEtBQUssaUNBQWlDLHNCQUFzQixzQkFBc0IsdUNBQXVDLGtCQUFrQixLQUFLLCtEQUErRCxvQkFBb0IscUJBQXFCLDRDQUE0Qyx3QkFBd0IsMEJBQTBCLHFCQUFxQiw0QkFBNEIscUJBQXFCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLHVCQUF1QixLQUFLLG1CQUFtQixzQkFBc0IsNEJBQTRCLHVDQUF1Qyw0QkFBNEIsU0FBUyw0REFBNEQsdUJBQXVCLEtBQUsscUJBQXFCLHFCQUFxQixLQUFLLG1CQUFtQjtBQUNubWtCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOXFCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDSjtBQUNRO0FBQ2Q7QUFDUTs7QUFFSztBQUNEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDs7QUFFQSxXQUFXLGdFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDJCQUEyQiw0REFBVztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEOztBQUVBO0FBQ0EsV0FBVyxvRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWM7O0FBRXRDO0FBQ0EsV0FBVyxvRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvRUFBZTtBQUM5QjtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0VBQWU7QUFDOUI7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFlO0FBQzlCO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvRUFBZTtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQ0FBc0M7QUFDN0U7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQU87O0FBRXhCO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7O0FBRUEsV0FBVyxvRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVU7O0FBRTlCO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7O0FBRUEsV0FBVyxvRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFOztBQUVBLFdBQVcsZ0VBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFZOztBQUVsQztBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEU7O0FBRUEsV0FBVyxvRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFlO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0VBQWU7QUFDOUI7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvRUFBZTtBQUM5QjtBQUNBO0FBQ0Esc0RBQXNELGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUM1Qjs7QUFFTztBQUNQLFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFlBQVksNEVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QWdCLENBQUMsUUFBUSxFQUFFaEMsVUFBVSxDQUFDaUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9ub3JtYWxpemVEYXRlcy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGREYXlzLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0LmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVNb250aC5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVXZWVrLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc01vbnRoLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvbW9ycm93LmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4uanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLmpzIiwid2VicGFjazovL3Rhc2tqb3VybmFsLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5qcyIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUuanMiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGFza2pvdXJuYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNram91cm5hbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Rhc2tqb3VybmFsL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90YXNram91cm5hbC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2ltYWdlL2NoZWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICAtLW1haW4tY29udGVudDogd2hpdGU7XHJcbiAgICAtLXNpZGUtYmFyOiAjZWVlO1xyXG4gICAgLS1idG4tdG9wYmFyOiAjNjA3QUI2O1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDN7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcblxyXG5pbnB1dDpob3ZlciwgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbm9iamVjdHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcbiNwYXJlbnQge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbiN0b3BiYXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXRvcGJhcik7XHJcbn1cclxuXHJcbiNjaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbiNzaWRlLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5cmVtO1xyXG59XHJcblxyXG4udGFza3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jbGlua3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubGlua3MtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4jcHJvamVjdHMtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWxpbmtzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLnRpdGxlLWgxLXNpemUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUtaDItc2l6ZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlLXByb2plY3QtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbiNhZGQtYnRue1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAuMnJlbSAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbiNhZGQtYnRuOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiNWU4YjtcclxufVxyXG5cclxuLnRhc2stZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1iYXIpO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRhc2stbGVmdC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnRhc2stcmlnaHQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAwLjdyZW07XHJcbiAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZXsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5sb3ctZGl2IHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTE5OTk5OztcclxufVxyXG5cclxuLm1pZC1kaXYge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmhpZ2gtZGl2IHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4ubG93LWNoZWNrYm94LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTE5OTk5O1xyXG59XHJcblxyXG4ubWlkLWNoZWNrYm94LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuXHJcbi5oaWdoLWNoZWNrYm94LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi50aXRsZS1ob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRpdntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJ0bi1kaXY6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmdlbmVyYWwtbG93LWJ0biwgLnRvZG8tZGF0ZS1jbGFzcyB7XHJcbiAgICBjb2xvcjogIzExOTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzExOTk5OSwgMC43KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTk5OTk7XHJcbn1cclxuXHJcbi5nZW5lcmFsLWxvdy1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE5OTk5O1xyXG59XHJcblxyXG4uZ2VuZXJhbC1sb3ctYnRuLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExOTk5OTtcclxufVxyXG5cclxuLmdlbmVyYWwtbWlkLWJ0biB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShvcmFuZ2UsIDAuNyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuXHJcbi5nZW5lcmFsLW1pZC1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5nZW5lcmFsLW1lZGl1bS1idG4tc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5nZW5lcmFsLWhpZ2gtYnRuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHJlZCwgMC43KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmdlbmVyYWwtaGlnaC1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5nZW5lcmFsLWhpZ2gtYnRuLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZHVlLWRhdGUtZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZWRpdC1zdmcsIC50cmFzaC1zdmcge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1zdmcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFzaC1zdmctcHJvamVjdCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5lZGl0LXN2Zzpob3ZlciwgLnRyYXNoLXN2Zzpob3ZlciwgLnRyYXNoLXN2Zy1wcm9qZWN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMjQlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgxOTM0JSkgaHVlLXJvdGF0ZSg5N2RlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDEwMyUpO1xyXG59XHJcblxyXG4vKiBjb2RlIGZvciBpbmRpdmlkdWFsIG5vdGUgZ3VpICovXHJcbi5ub3Rle1xyXG4gICAgbWluLXdpZHRoOiAxOHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nOiAxLjNyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ub3RlOmhvdmVye1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IFxyXG4gICAgYm94LXNoYWRvdzogMC4ycmVtIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufSBcclxuXHJcbi5ub3RlLXRpdGxlLCAubm90ZS1wYXJhZ3JhcGgsIC5kZXRhaWxzLWlucHV0e1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ub3RlLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5ub3RlLXBhcmFncmFwaCB7IFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4vKiAjY3JlYXRlLW5vdGUtY2xvc2UsICNjcmVhdGUtZWRpdC1jbG9zZSAqL1xyXG4uY2xvc2Utc3ZnLWRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLXN2Zy1kaXY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS14LXN2Z3tcclxuICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg3JSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMjc5ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTA5JSk7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLXgtc3ZnOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogZGV0YWlscyBwb3B1cCBjb2RlICovXHJcbiNkZXRhaWxzLXBvcHVwe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46OmJhY2tkcm9weyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDMwJSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcclxufVxyXG5cclxuI2RldGFpbHMtcG9wdXAtdGV4dC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE3cHg7XHJcbn1cclxuXHJcbiNkZXRhaWxzLXBvcHVwLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4jZGV0YWlscy1wb3B1cC1hYm91dC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZGV0YWlscy1wcm9qZWN0eyBcclxuICAgIG1hcmdpbi1yaWdodDogNC40cmVtO1xyXG59XHJcblxyXG4uZGV0YWlscy11cmdlbmN5e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0LjRyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzLWRlYWRsaW5le1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzLjJyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzLWRlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4vKiBmb3IgZWRpdCBwb3B1cCAqL1xyXG4ucmlnaHQtc2lkZS1vZi1wb3B1cHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xyXG4gICAgZ2FwOiAzNXB4O1xyXG59XHJcblxyXG4uZWRpdC1wb3B1cHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjFyZW07XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm94LXNoYWRvdzogMCAycmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbmZpcm0tY2hhbmdlcy1idG57XHJcbiAgICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuI3RleHRhcmVhLXdyYXBwZXItZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDBweDtcclxufVxyXG5cclxuI3RleHRhcmVhLXdyYXBwZXItZGl2IHRleHRhcmVhOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBsaW5lLWhlaWdodDogMC44OyBcclxufVxyXG5cclxuI3RleHRhcmVhLXdyYXBwZXItZGl2IHRleHRhcmVhOmxhc3Qtb2YtdHlwZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7IFxyXG59XHJcblxyXG4jY3JlYXRlLWVkaXQtY2xvc2V7XHJcbiAgICBmaWx0ZXI6IGludmVydCgyNCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDE5MzQlKSBodWUtcm90YXRlKDk3ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoMTAzJSk7XHJcbn1cclxuXHJcbi50aXRsZS1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4jZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdiwgI2RhdGUtcHJpb3JpdHktd3JhcHBlci1kaXYtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbiNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jcHJpb3JpdHktZGl2LXBhcmVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4jcHJpb3JpdHktZGl2cy13cmFwcGVyLXBhcmVudHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNwcmlvcml0eS1kaXZzLXdyYXBwZXItcGFyZW50LCAjcHJpb3JpdHktZGl2cy13cmFwcGVyLWNoaWxke1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4gI3ByaW9yaXR5LWRpdnMtd3JhcHBlci1jaGlsZHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4ucHJpb3JpdHktZGl2LCAuYWRkLXRvZG8tYnRue1xyXG4gICAgd2lkdGg6IDQuNXJlbTtcclxufVxyXG5cclxuLmNvbmZpcm0tY2hhbmdlcy1idG57XHJcbiAgICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuLyogY3JlYXRlIGEgbmV3IHBvcHVwICovXHJcbiNjcmVhdGUtbmV3LXRhc2stcG9wdXB7XHJcbiAgICBtYXgtd2lkdGg6IDY1cmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgNGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcmVtIGF1dG87XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3LXRvcGJhcntcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXctc2lkZWJhcntcclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiA4cmVtO1xyXG4gICAgbWF4LXdpZHRoOiA5cmVtO1xyXG4gICAgbWluLXdpZHRoOiA0cmVtO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5tYWluLXNpZGViYXItdGV4dC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxKTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vcHRpb24tdGV4dC5tb3VzZU9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxLjAyKTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vcHRpb24tdGV4dDpob3ZlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSAoMS4wMik7IFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBmb3IgdG9kbyBzaWRlIG9mICdjcmVhdGUgbmV3JyBwb3B1cCAqL1xyXG4uaW5wdXQtd3JhcHBlci1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTVweDtcclxufVxyXG5cclxuLyogZm9yIHByb2plY3Qgc2lkZSBvZiAnY3JlYXRlIG5ldycgcG9wdXAgKi9cclxuLnJpZ2h0LXNpZGUtc3VibWl0LWJ0bi1kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2plY3Qtbm90ZS1idG57XHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG5cclxuLyogZm9yIG5vdGUgc2lkZSBvZiAnY3JlYXRlIG5ldycgcG9wdXAgKi9cclxuLmNyZWF0ZS1wcm9qZWN0LW5vdGUtYnRue1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcblxyXG4ucmlnaHQtc2lkZS1vZi1wb3B1cHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xyXG4gICAgZ2FwOiAzNXB4O1xyXG59XHJcblxyXG4vKiBmb3Igb2Zmc2V0ICovXHJcbi5zaG93LW51bWJlciwgI3Nob3ctbnVtYmVyLXByb2plY3R7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi8qIGZvciBob3ZlciBvdmVyIG1haW4gdGl0bGVzICovXHJcblxyXG4uYmx1ZS1jbHIxIHtcclxuICAgIGNvbG9yOiAjNjA3QUI2O1xyXG59XHJcblxyXG4ud2hpdGUtY2xyMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjs7SUFFckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZ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Q3hDO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTs7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2Qjs7QUFFQSwrQkFBK0I7O0FBRS9CO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgLS1tYWluLWNvbnRlbnQ6IHdoaXRlO1xcclxcbiAgICAtLXNpZGUtYmFyOiAjZWVlO1xcclxcbiAgICAtLWJ0bi10b3BiYXI6ICM2MDdBQjY7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoM3tcXHJcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XFxyXFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIHRleHRhcmVhe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVyLCBpbnB1dDpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm9iamVjdHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3BhcmVudCB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9wYmFyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hpbGR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1iYXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE5cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbHVtbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpbmtzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWxpbmtzIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaDEtc2l6ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUtaDItc2l6ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlLXByb2plY3QtdGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtYnRue1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWJ0bjpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1ZThiO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XFxyXFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1sZWZ0LXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXJpZ2h0LXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB3aWR0aDogMC43cmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuN3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmV7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlL2NoZWNrLnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5sb3ctZGl2IHtcXHJcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMTk5OTk7O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkLWRpdiB7XFxyXFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoLWRpdiB7XFxyXFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sb3ctY2hlY2tib3gtYm9yZGVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzExOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZC1jaGVja2JveC1ib3JkZXIge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoLWNoZWNrYm94LWJvcmRlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWhvbGRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWRpdntcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTFweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kaXY6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5nZW5lcmFsLWxvdy1idG4sIC50b2RvLWRhdGUtY2xhc3Mge1xcclxcbiAgICBjb2xvcjogIzExOTk5OTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTE5OTk5LCAwLjcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTE5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbC1sb3ctYnRuOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbC1sb3ctYnRuLXNlbGVjdGVkIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbmVyYWwtbWlkLWJ0biB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEob3JhbmdlLCAwLjcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5nZW5lcmFsLW1pZC1idG46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbmVyYWwtbWVkaXVtLWJ0bi1zZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbmVyYWwtaGlnaC1idG4ge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHJlZCwgMC43KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbC1oaWdoLWJ0bjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZXJhbC1oaWdoLWJ0bi1zZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlLWRpdiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1zdmcsIC50cmFzaC1zdmcge1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN2ZyB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoLXN2Zy1wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1zdmc6aG92ZXIsIC50cmFzaC1zdmc6aG92ZXIsIC50cmFzaC1zdmctcHJvamVjdDpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgyNCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDE5MzQlKSBodWUtcm90YXRlKDk3ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoMTAzJSk7XFxyXFxufVxcclxcblxcclxcbi8qIGNvZGUgZm9yIGluZGl2aWR1YWwgbm90ZSBndWkgKi9cXHJcXG4ubm90ZXtcXHJcXG4gICAgbWluLXdpZHRoOiAxOHJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWJhcik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZTpob3ZlcntcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IFxcclxcbiAgICBib3gtc2hhZG93OiAwLjJyZW0gMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn0gXFxyXFxuXFxyXFxuLm5vdGUtdGl0bGUsIC5ub3RlLXBhcmFncmFwaCwgLmRldGFpbHMtaW5wdXR7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiA5NiU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgbWluLWhlaWdodDogNjZweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZS1wYXJhZ3JhcGggeyBcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAjY3JlYXRlLW5vdGUtY2xvc2UsICNjcmVhdGUtZWRpdC1jbG9zZSAqL1xcclxcbi5jbG9zZS1zdmctZGl2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1zdmctZGl2OmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS14LXN2Z3tcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDclKSBzYXR1cmF0ZSg3NDcxJSkgaHVlLXJvdGF0ZSgyNzlkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCgxMDklKTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UteC1zdmc6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbHMgcG9wdXAgY29kZSAqL1xcclxcbiNkZXRhaWxzLXBvcHVwe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjpiYWNrZHJvcHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDMwJSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGV0YWlscy1wb3B1cC10ZXh0LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RldGFpbHMtcG9wdXAtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RldGFpbHMtcG9wdXAtYWJvdXQtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1zdWItdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLXByb2plY3R7IFxcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtdXJnZW5jeXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0LjRyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWRlYWRsaW5le1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtZGVzY3JpcHRpb257XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIGVkaXQgcG9wdXAgKi9cXHJcXG4ucmlnaHQtc2lkZS1vZi1wb3B1cHtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXBvcHVwe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMjFyZW07XFxyXFxuICAgIHdpZHRoOiA1MHJlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDJyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm0tY2hhbmdlcy1idG57XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dGFyZWEtd3JhcHBlci1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dGFyZWEtd3JhcHBlci1kaXYgdGV4dGFyZWE6Zmlyc3Qtb2YtdHlwZXtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuODsgXFxyXFxufVxcclxcblxcclxcbiN0ZXh0YXJlYS13cmFwcGVyLWRpdiB0ZXh0YXJlYTpsYXN0LW9mLXR5cGV7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtZWRpdC1jbG9zZXtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjQlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgxOTM0JSkgaHVlLXJvdGF0ZSg5N2RlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDEwMyUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtaW5wdXR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtcHJpb3JpdHktd3JhcHBlci1kaXYsICNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2LWNoaWxke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2e1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eS1kaXYtcGFyZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2cy13cmFwcGVyLXBhcmVudHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHktZGl2cy13cmFwcGVyLXBhcmVudCwgI3ByaW9yaXR5LWRpdnMtd3JhcHBlci1jaGlsZHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiAjcHJpb3JpdHktZGl2cy13cmFwcGVyLWNoaWxke1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1kaXYsIC5hZGQtdG9kby1idG57XFxyXFxuICAgIHdpZHRoOiA0LjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtLWNoYW5nZXMtYnRue1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3JlYXRlIGEgbmV3IHBvcHVwICovXFxyXFxuI2NyZWF0ZS1uZXctdGFzay1wb3B1cHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ldy10b3BiYXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXRvcGJhcik7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi10b3BiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ldy1zaWRlYmFye1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtYmFyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDhyZW07XFxyXFxuICAgIG1heC13aWR0aDogOXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zaWRlYmFyLXRleHQtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLXRleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxKTsgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbi10ZXh0Lm1vdXNlT257XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlICgxLjAyKTsgXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbi10ZXh0OmhvdmVye1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSAoMS4wMik7IFxcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciB0b2RvIHNpZGUgb2YgJ2NyZWF0ZSBuZXcnIHBvcHVwICovXFxyXFxuLmlucHV0LXdyYXBwZXItZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBwcm9qZWN0IHNpZGUgb2YgJ2NyZWF0ZSBuZXcnIHBvcHVwICovXFxyXFxuLnJpZ2h0LXNpZGUtc3VibWl0LWJ0bi1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1wcm9qZWN0LW5vdGUtYnRue1xcclxcbiAgICB3aWR0aDogN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIG5vdGUgc2lkZSBvZiAnY3JlYXRlIG5ldycgcG9wdXAgKi9cXHJcXG4uY3JlYXRlLXByb2plY3Qtbm90ZS1idG57XFxyXFxuICAgIHdpZHRoOiA3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZS1vZi1wb3B1cHtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBvZmZzZXQgKi9cXHJcXG4uc2hvdy1udW1iZXIsICNzaG93LW51bWJlci1wcm9qZWN0e1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tdG9wYmFyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgaG92ZXIgb3ZlciBtYWluIHRpdGxlcyAqL1xcclxcblxcclxcbi5ibHVlLWNscjEge1xcclxcbiAgICBjb2xvcjogIzYwN0FCNjtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWNscjEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIuanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIuanNcIjtcblxuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLmpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgudHJ1bmMoK2RhdGUgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcygrZGF0ZSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MuanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRGF0ZXMoY29udGV4dCwgLi4uZGF0ZXMpIHtcbiAgY29uc3Qgbm9ybWFsaXplID0gY29uc3RydWN0RnJvbS5iaW5kKFxuICAgIG51bGwsXG4gICAgY29udGV4dCB8fCBkYXRlcy5maW5kKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiksXG4gICk7XG4gIHJldHVybiBkYXRlcy5tYXAobm9ybWFsaXplKTtcbn1cbiIsImNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gd2Vla1llYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgYWRkRGF5c30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIE5hTik7XG5cbiAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICBpZiAoIWFtb3VudCkgcmV0dXJuIF9kYXRlO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cnMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2libGUgYnkgMTAwIGFuZCBub3QgZGl2aXNpYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tU3ltYm9sXG4gKiBAc3VtbWFyeSBTeW1ib2wgZW5hYmxpbmcgRGF0ZSBleHRlbnNpb25zIHRvIGluaGVyaXQgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZS5cbiAqXG4gKiBUaGUgc3ltYm9sIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBgY29uc3RydWN0RnJvbWAgZnVuY3Rpb24gdG8gY29uc3RydWN0IGEgZGF0ZVxuICogdXNpbmcgYSByZWZlcmVuY2UgZGF0ZSBhbmQgYSB2YWx1ZS4gSXQgYWxsb3dzIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXNcbiAqIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS4gSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZVxuICogW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzXG4gKiBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0RnJvbVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb21TeW1ib2wgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGFsbG93cyB0byBjb25zdHJ1Y3QgYSBkYXRlIHVzaW5nIGBbU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpXWBcbiAqIGVuYWJsaW5nIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLlxuICogSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZSBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eilcbiAqIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20vZGF0ZS1mbnNcIjtcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnN0cnVjdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBkYXRlKHZhbHVlKTtcblxuICBpZiAoZGF0ZSAmJiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiAmJiBjb25zdHJ1Y3RGcm9tU3ltYm9sIGluIGRhdGUpXG4gICAgcmV0dXJuIGRhdGVbY29uc3RydWN0RnJvbVN5bWJvbF0odmFsdWUpO1xuXG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcblxuICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbnN0cnVjdE5vd1xuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIHBhc3NlZCB2YWx1ZSBjb25zdHJ1Y3Rvci5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBjdXJyZW50IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb21cbiAqIHRoZSByZWZlcmVuY2UgZGF0ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgZGF0ZVxuICogZXh0ZW5zaW9ucyBhbmQgdXNlIHRoZSBjdXJyZW50IGRhdGUuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKlxuICogQHJldHVybnMgQ3VycmVudCBkYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdE5vdywgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogZnVuY3Rpb24gaXNUb2RheTxEYXRlVHlwZSBleHRlbmRzIERhdGU+KFxuICogICBkYXRlOiBEYXRlQXJnPERhdGVUeXBlPixcbiAqICk6IGJvb2xlYW4ge1xuICogICAvLyBJZiB3ZSB3ZXJlIHRvIHVzZSBgbmV3IERhdGUoKWAgZGlyZWN0bHksIHRoZSBmdW5jdGlvbiB3b3VsZCAgYmVoYXZlXG4gKiAgIC8vIGRpZmZlcmVudGx5IGluIGRpZmZlcmVudCB0aW1lem9uZXMgYW5kIHJldHVybiBmYWxzZSBmb3IgdGhlIHNhbWUgZGF0ZS5cbiAqICAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0Tm93KGRhdGUpIHtcbiAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgRGF0ZS5ub3coKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0Tm93O1xuIiwiaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplRGF0ZXMgfSBmcm9tIFwiLi9fbGliL25vcm1hbGl6ZURhdGVzLmpzXCI7XG5pbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSBsYXRlckRhdGUgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGVhcmxpZXJEYXRlIC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMobGF0ZXJEYXRlLCBlYXJsaWVyRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBbbGF0ZXJEYXRlXywgZWFybGllckRhdGVfXSA9IG5vcm1hbGl6ZURhdGVzKFxuICAgIG9wdGlvbnM/LmluLFxuICAgIGxhdGVyRGF0ZSxcbiAgICBlYXJsaWVyRGF0ZSxcbiAgKTtcblxuICBjb25zdCBsYXRlclN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGxhdGVyRGF0ZV8pO1xuICBjb25zdCBlYXJsaWVyU3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZWFybGllckRhdGVfKTtcblxuICBjb25zdCBsYXRlclRpbWVzdGFtcCA9XG4gICAgK2xhdGVyU3RhcnRPZkRheSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMobGF0ZXJTdGFydE9mRGF5KTtcbiAgY29uc3QgZWFybGllclRpbWVzdGFtcCA9XG4gICAgK2VhcmxpZXJTdGFydE9mRGF5IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhlYXJsaWVyU3RhcnRPZkRheSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKGxhdGVyVGltZXN0YW1wIC0gZWFybGllclRpbWVzdGFtcCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldERheU9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0SVNPV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oX2RhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oX2RhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoK19kYXRlID49ICtzdGFydE9mTmV4dFllYXIpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoK19kYXRlID49ICtzdGFydE9mVGhpc1llYXIpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplRGF0ZXMgfSBmcm9tIFwiLi9fbGliL25vcm1hbGl6ZURhdGVzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lRGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGxhdGVyRGF0ZSwgZWFybGllckRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgW2RhdGVMZWZ0XywgZGF0ZVJpZ2h0X10gPSBub3JtYWxpemVEYXRlcyhcbiAgICBvcHRpb25zPy5pbixcbiAgICBsYXRlckRhdGUsXG4gICAgZWFybGllckRhdGUsXG4gICk7XG4gIHJldHVybiArc3RhcnRPZkRheShkYXRlTGVmdF8pID09PSArc3RhcnRPZkRheShkYXRlUmlnaHRfKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZU1vbnRofSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNTYW1lTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoIChhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE1LCA4LCAyNSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChsYXRlckRhdGUsIGVhcmxpZXJEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtsYXRlckRhdGVfLCBlYXJsaWVyRGF0ZV9dID0gbm9ybWFsaXplRGF0ZXMoXG4gICAgb3B0aW9ucz8uaW4sXG4gICAgbGF0ZXJEYXRlLFxuICAgIGVhcmxpZXJEYXRlLFxuICApO1xuICByZXR1cm4gKFxuICAgIGxhdGVyRGF0ZV8uZ2V0RnVsbFllYXIoKSA9PT0gZWFybGllckRhdGVfLmdldEZ1bGxZZWFyKCkgJiZcbiAgICBsYXRlckRhdGVfLmdldE1vbnRoKCkgPT09IGVhcmxpZXJEYXRlXy5nZXRNb250aCgpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lTW9udGg7XG4iLCJpbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZVdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVXZWVrKGxhdGVyRGF0ZSwgZWFybGllckRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgW2xhdGVyRGF0ZV8sIGVhcmxpZXJEYXRlX10gPSBub3JtYWxpemVEYXRlcyhcbiAgICBvcHRpb25zPy5pbixcbiAgICBsYXRlckRhdGUsXG4gICAgZWFybGllckRhdGUsXG4gICk7XG4gIHJldHVybiAoXG4gICAgK3N0YXJ0T2ZXZWVrKGxhdGVyRGF0ZV8sIG9wdGlvbnMpID09PSArc3RhcnRPZldlZWsoZWFybGllckRhdGVfLCBvcHRpb25zKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVdlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0Tm93IH0gZnJvbSBcIi4vY29uc3RydWN0Tm93LmpzXCI7XG5pbXBvcnQgeyBpc1NhbWVNb250aCB9IGZyb20gXCIuL2lzU2FtZU1vbnRoLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RoaXNNb250aH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDE1IFNlcHRlbWJlciAyMDE0IGluIHRoaXMgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKFxuICAgIGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgZGF0ZSksXG4gICAgY29uc3RydWN0Tm93KG9wdGlvbnM/LmluIHx8IGRhdGUpLFxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc01vbnRoO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5qc1wiO1xuaW1wb3J0IHsgaXNTYW1lV2VlayB9IGZyb20gXCIuL2lzU2FtZVdlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVGhpc1dlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoXG4gICAgY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCBkYXRlKSxcbiAgICBjb25zdHJ1Y3ROb3cob3B0aW9ucz8uaW4gfHwgZGF0ZSksXG4gICAgb3B0aW9ucyxcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5qc1wiO1xuaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5LmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RvZGF5fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lRGF5KFxuICAgIGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgZGF0ZSksXG4gICAgY29uc3RydWN0Tm93KG9wdGlvbnM/LmluIHx8IGRhdGUpLFxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0Tm93IH0gZnJvbSBcIi4vY29uc3RydWN0Tm93LmpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzVG9tb3Jyb3d9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1RvbW9ycm93XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvbW9ycm93XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA3IE9jdG9iZXIgMTQ6MDA6MDAgdG9tb3Jyb3c/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvbW9ycm93KG5ldyBEYXRlKDIwMTQsIDksIDcsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb21vcnJvdyhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoXG4gICAgZGF0ZSxcbiAgICBhZGREYXlzKGNvbnN0cnVjdE5vdyhvcHRpb25zPy5pbiB8fCBkYXRlKSwgMSksXG4gICAgb3B0aW9ucyxcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvbW9ycm93O1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0aWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIHJldHVybiAhKCghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB8fCBpc05hTigrdG9EYXRlKGRhdGUpKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gW1RPRE9dIC0tIEkgY2hhbGxlbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gW1RPRE9dIC0tIEkgY2hhbGxlbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBbVE9ET10gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUuanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLmpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLmpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4uanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZkRheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgLi4ub3B0aW9ucywgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlXyA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGRhdGVfLnNldEZ1bGxZZWFyKGRhdGVfLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlXy5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGVfO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGNsb25lcyBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgY29udGV4dCkge1xuICAvLyBbVE9ET10gR2V0IHJpZCBvZiBgdG9EYXRlYCBvciBgY29uc3RydWN0RnJvbWA/XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGNvbnRleHQgfHwgYXJndW1lbnQsIGFyZ3VtZW50KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZm9ybWF0LCBpc1RvZGF5LCBpc1RvbW9ycm93LCBpc1RoaXNNb250aCwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgJy9zcmMvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBjbG9zZVN2Z1ZhciBmcm9tICcvaW1hZ2UveC1zdmcuc3ZnJztcclxuaW1wb3J0IHRyYXNoU3ZnVmFyIGZyb20gJy9pbWFnZS90cmFzaC1jYW4tcmVndWxhci5zdmcnO1xyXG5pbXBvcnQgZWRpdFN2Z1ZhciBmcm9tICcvaW1hZ2UvcGVuLXRvLXNxdWFyZS1yZWd1bGFyLnN2Zyc7XHJcblxyXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByb2plY3QsIGRldGFpbHMsIGR1ZURhdGUsIHVyZ2VuY3ksIGRvbmUgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTm90ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBTdG9yYWdlTWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgLy8gbGV0IGxhdGNoID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgRmlyc3RCb290RG9uZSA9ICgpID0+IHsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhdGNoJywgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpOyB9O1xyXG5cclxuICAgIGNvbnN0IGlzRmlyc3RCb290ID0gKCkgPT4geyByZXR1cm4gIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdGNoJykpOyB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICB2YXIgdGFza0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgICAgIHJldHVybiB0YXNrQXJyID8gdGFza0FyciA6IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHByb2plY3RBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdEFyciA/IHByb2plY3RBcnIgOiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkTm90ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG5vdGVzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzQXJyID8gbm90ZXNBcnIgOiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrcyA9ICh0YXNrQXJyKSA9PiB7XHJcbiAgICAgICAgdmFyIHRhc2tMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHRhc2tBcnIuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgdGFza0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgICAgICAgICAgIHByb2plY3Q6IHRhc2sucHJvamVjdCxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHRhc2suZGV0YWlscywgXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICB1cmdlbmN5OiB0YXNrLnVyZ2VuY3ksXHJcbiAgICAgICAgICAgICAgICBkb25lOiB0YXNrLmRvbmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVPbmVUYXNrID0gKHRhc2ssIGNoYW5nZXMpID0+IHtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIHZhciB0YXNrQXJyID0gbG9hZFRhc2tzKCk7XHJcbiAgICAgICAgdGFza0Fyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50KS5mb3JFYWNoKCBrZXkgPT4geyBcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRba2V5XSA9PT0gdGFza1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaCggcHJvcGVydHkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoYW5nZXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIGVsZW1lbnRbcHJvcGVydHldID0gY2hhbmdlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0FycikpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0cyA9IChwcm9qZWN0c0FycikgPT4ge1xyXG4gICAgICAgIHZhciBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBwcm9qZWN0c0Fyci5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlTm90ZXMgPSAobm90ZXNBcnIpID0+IHtcclxuICAgICAgICB2YXIgbm90ZUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgbm90ZXNBcnIuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICAgICAgbm90ZUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbm90ZS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IG5vdGUuZGV0YWlsc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlTGlzdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU9uZU5vdGUgPSAobm90ZSwgY2hhbmdlcykgPT4ge1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIG5vdGVBcnIgPSBsb2FkTm90ZXMoKTtcclxuICAgICAgICBub3RlQXJyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRba2V5XSA9PT0gbm90ZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZWxlbWVudCkuZm9yRWFjaChwcm9wZXJ0eSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5ID09PSAndGl0bGUnKSA/IGVsZW1lbnRbcHJvcGVydHldID0gY2hhbmdlcy50aXRsZSA6IGVsZW1lbnRbcHJvcGVydHldID0gY2hhbmdlcy5kZXRhaWxzOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlQXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBGaXJzdEJvb3REb25lLFxyXG4gICAgICAgIGlzRmlyc3RCb290LFxyXG4gICAgICAgIGxvYWRUYXNrcyxcclxuICAgICAgICBsb2FkUHJvamVjdHMsXHJcbiAgICAgICAgbG9hZE5vdGVzLFxyXG4gICAgICAgIHVwZGF0ZVRhc2tzLFxyXG4gICAgICAgIHVwZGF0ZU9uZVRhc2ssXHJcbiAgICAgICAgdXBkYXRlUHJvamVjdHMsXHJcbiAgICAgICAgdXBkYXRlTm90ZXMsXHJcbiAgICAgICAgdXBkYXRlT25lTm90ZVxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFRhc2tNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdGFza0FyciA9IFtdO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRhdGUyID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgZGF0ZTIuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAyKTtcclxuICAgIHZhciBkYXRlMyA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICAgIGRhdGUzLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgcHJvamVjdCwgZGV0YWlscywgZHVlRGF0ZSwgdXJnZW5jeSkgPT4geyBcclxuICAgICAgICB0YXNrQXJyLnB1c2gobmV3IFRhc2sodGl0bGUsIHByb2plY3QsIGRldGFpbHMsIGR1ZURhdGUsIHVyZ2VuY3kpKTsgXHJcbiAgICAgICAgU3RvcmFnZU1hbmFnZXIudXBkYXRlVGFza3ModGFza0Fycik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBhZGRUYXNrKCdDb29raW5nJywgJ0Nob3JlcycsICdDb29rIGx1bmNoJywgZGF0ZTIsICdsb3cnKTtcclxuICAgICAgICBhZGRUYXNrKCdIYWRlcyAyJywgJ0dhbWluZycsICdHYW1lIHcgZnJpZW5kcycsIHRvZGF5LCAnaGlnaCcpO1xyXG4gICAgICAgIGFkZFRhc2soJ0VsZWN0cmljaXR5JywgJ0JpbGxzJywgJ3BheSBvbiB0aW1lJywgZGF0ZTMsICdtaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRpdGxlKSA9PiB7IFxyXG4gICAgICAgIHRhc2tBcnIgPSB0YXNrQXJyLmZpbHRlcih0YXNrID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTsgXHJcbiAgICAgICAgU3RvcmFnZU1hbmFnZXIudXBkYXRlVGFza3ModGFza0Fycik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHsgcmV0dXJuIHRhc2tBcnIubGVuZ3RoOyB9O1xyXG5cclxuICAgIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4geyByZXR1cm4gdGFza0FycjsgfTtcclxuXHJcbiAgICBTdG9yYWdlTWFuYWdlci5pc0ZpcnN0Qm9vdCgpID8gaW5pdGlhbGl6ZVRhc2tzKCkgOiBTdG9yYWdlTWFuYWdlci5sb2FkVGFza3MoKS5mb3JFYWNoKHRhc2sgPT4gdGFza0Fyci5wdXNoKG5ldyBUYXNrKHRhc2sudGl0bGUsIHRhc2sucHJvamVjdCwgdGFzay5kZXRhaWxzLCB0YXNrLmR1ZURhdGUsIHRhc2sudXJnZW5jeSwgdGFzay5kb25lKSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkVGFzayxcclxuICAgICAgICBkZWxldGVUYXNrLFxyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICBnZXRBbGxUYXNrc1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFRhc2tQYXJzZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IHBhcnNlQnlUaW1lID0gKGNvbmRpdGlvbikgPT4geyByZXR1cm4gVGFza01hbmFnZXIuZ2V0QWxsVGFza3MoKS5maWx0ZXIodGFzayA9PiBjb25kaXRpb24odGFzay5kdWVEYXRlKSk7IH07XHJcblxyXG4gICAgY29uc3QgcGFyc2VCeVByb2plY3QgPSAocHJvamVjdCkgPT4geyByZXR1cm4gVGFza01hbmFnZXIuZ2V0QWxsVGFza3MoKS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpOyB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyc2VCeVRpbWUsXHJcbiAgICAgICAgcGFyc2VCeVByb2plY3RcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBQcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHByb2plY3RBcnIgPSBbXSAgIFxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcclxuICAgICAgICBwcm9qZWN0QXJyLnB1c2gobmV3IFByb2plY3QodGl0bGUpKTtcclxuICAgICAgICBTdG9yYWdlTWFuYWdlci51cGRhdGVQcm9qZWN0cyhwcm9qZWN0QXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3QoJ0Nob3JlcycpO1xyXG4gICAgICAgIGFkZFByb2plY3QoJ0dhbWluZycpO1xyXG4gICAgICAgIGFkZFByb2plY3QoJ0JpbGxzJyk7IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAodGl0bGUpID0+IHsgXHJcbiAgICAgICAgcHJvamVjdEFyciA9IHByb2plY3RBcnIuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSAhPT0gdGl0bGUpOyBcclxuICAgICAgICBUYXNrUGFyc2VyLnBhcnNlQnlQcm9qZWN0KHRpdGxlKS5mb3JFYWNoKHRhc2sgPT4gVGFza01hbmFnZXIuZGVsZXRlVGFzayh0YXNrLnRpdGxlKSk7XHJcbiAgICAgICAgU3RvcmFnZU1hbmFnZXIudXBkYXRlUHJvamVjdHMocHJvamVjdEFycik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldEFsbFByb2plY3RzID0gKCkgPT4ge3JldHVybiBwcm9qZWN0QXJyfTtcclxuXHJcbiAgICBTdG9yYWdlTWFuYWdlci5pc0ZpcnN0Qm9vdCgpID8gaW5pdGlhbGl6ZVByb2plY3RzKCkgOiBTdG9yYWdlTWFuYWdlci5sb2FkUHJvamVjdHMoKS5mb3JFYWNoKHRpdGxlID0+IHByb2plY3RBcnIucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcclxuICAgICAgICBnZXRBbGxQcm9qZWN0c1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IE5vdGVNYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbm90ZUxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBhZGROb3RlID0gKHRpdGxlLCBkZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgbm90ZUxpc3QucHVzaChuZXcgTm90ZSh0aXRsZSwgZGV0YWlscykpO1xyXG4gICAgICAgIFN0b3JhZ2VNYW5hZ2VyLnVwZGF0ZU5vdGVzKG5vdGVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplTm90ZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkTm90ZSgnQ2luZW1hJywgJ1dhdGNoIGxhdGVzdCBKb2huIFdpY2sgbW92aWUnKTtcclxuICAgICAgICBhZGROb3RlKCdsaWJyYXJ5JywgJ3NlZSBpZiB0aGV5IGdvdCB0aGUgYm9vaycpO1xyXG4gICAgICAgIGFkZE5vdGUoJ3ZldCcsICd0YWtlIERvZ2d5IHRvIHRoZSB2ZXQgb24gVGh1cnNkYXknKTtcclxuICAgICAgICBTdG9yYWdlTWFuYWdlci5GaXJzdEJvb3REb25lKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGRlbGV0ZU5vdGUgPSAodGl0bGUpID0+IHtcclxuICAgICAgICBub3RlTGlzdCA9IG5vdGVMaXN0LmZpbHRlcihub3RlID0+IG5vdGUudGl0bGUgIT09IHRpdGxlKTtcclxuICAgICAgICBTdG9yYWdlTWFuYWdlci51cGRhdGVOb3Rlcyhub3RlTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4geyByZXR1cm4gbm90ZUxpc3QubGVuZ3RoKCk7IH07XHJcblxyXG4gICAgY29uc3QgZ2V0QWxsTm90ZXMgPSAoKSA9PiB7IHJldHVybiBub3RlTGlzdDsgfTtcclxuXHJcbiAgICBTdG9yYWdlTWFuYWdlci5pc0ZpcnN0Qm9vdCgpID8gaW5pdGlhbGl6ZU5vdGVzKCkgOiBTdG9yYWdlTWFuYWdlci5sb2FkTm90ZXMoKS5mb3JFYWNoKG5vdGUgPT4gbm90ZUxpc3QucHVzaChuZXcgTm90ZShub3RlLnRpdGxlLCBub3RlLmRldGFpbHMpKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGROb3RlLFxyXG4gICAgICAgIGluaXRpYWxpemVOb3RlcyxcclxuICAgICAgICBkZWxldGVOb3RlLFxyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICBnZXRBbGxOb3Rlc1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IENMSSA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkxvb3AgPSAoKSA9PiB7XHJcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW5zdHJ1Y3Rpb25zOiBcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBvbmUgb2YgdGhlIG9wdGlvbjogXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyBhZGQgYSB0YXNrOiAnYWRkVGFzayB0aXRsZSBwcm9qZWN0IGRldGFpbHMgdXJnZW5jeScgXFxuIFxcIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG8gZWRpdCBhIHRhc2s6ICdhZGp1c3QgaW5kZXggcHJvcGVydHkgdmFsdWUnIFxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG8gZ2V0IGEgdGFzazogJ2dldCBpbmRleCcgXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyBnZXQgYWxsIHRhc2tzOiAnZ2V0YWxsVGFza3MnIFxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG8gZGVsZXRlIGEgdGFzazogJ2RlbGV0ZVRhc2sgaW5kZXgnIFxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG8gZ2V0IGFtb3VudCBvZiB0YXNrczogJ2xlbmd0aCcgXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyBnZXQgYWxsIHRhc2tzIGluIGEgcHJvamVjdDogJ3Byb2plY3QgaW5kZXgnIFxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgVG8gZ2V0IGFsbCBwcm9qZWN0czogJ2dldGFsbFByb2plY3RzJyBcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGFkZCBhIHByb2plY3Q6ICdhZGRQcm9qZWN0IHRpdGxlJyBcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRlbGV0ZSBhIHByb2plY3Q6ICdkZWxldGVQcm9qZWN0IGluZGV4JyBcXG4gXFwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyBsaXN0IGNhdGVnb3JpZXM6ICdsaXN0Q2F0ZWdvcmllcycgXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyB2aWV3IGEgY2F0ZWdvcnk6ICdjYXRlZ29yeSBpbmRleCcgXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUbyByZXNldCBsb2NhbCBzdG9yYWdlOiAncmVzZXQnYCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBwcm9tcHQoJ0VudGVyIGhlcmUnLCAnJykuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaChpbnB1dFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWRkVGFzayc6IFxyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmFkZFRhc2soaW5wdXRbMV0sIGlucHV0WzJdLCBpbnB1dFszXSwgbmV3IERhdGUoKSwgaW5wdXRbNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FkanVzdCc6IFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUYXNrKHBhcnNlSW50KGlucHV0WzFdKSwgaW5wdXRbMl0sIGlucHV0WzNdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2V0JzpcclxuICAgICAgICAgICAgICAgICAgICBnZXRUYXNrKHBhcnNlSW50KGlucHV0WzFdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2V0YWxsVGFza3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIGdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlVGFzayc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGFzayhwYXJzZUludChpbnB1dFsxXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0xlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRhc2tQYXJzZXIucGFyc2VCeVByb2plY3QoUHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKVtwYXJzZUludChpbnB1dFsxXSldLnRpdGxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2V0YWxsUHJvamVjdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FkZFByb2plY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoaW5wdXRbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZVByb2plY3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QocGFyc2VJbnQoaW5wdXRbMV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdsaXN0Q2F0ZWdvcmllcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwOiBIb21lIFxcbiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiBUb2RheSBcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjogVG9tb3Jyb3cgXFxuIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IFRoaXMgV2VlayBcXG4gXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDogVGhpcyBNb250aGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3J5JzpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2gocGFyc2VJbnQoaW5wdXRbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRhc2tNYW5hZ2VyLmdldEFsbFRhc2tzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUYXNrUGFyc2VyLnBhcnNlQnlUaW1lKGlzVG9kYXkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVGFza1BhcnNlci5wYXJzZUJ5VGltZShpc1RvbW9ycm93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRhc2tQYXJzZXIucGFyc2VCeVRpbWUoaXNUaGlzV2VlaykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUYXNrUGFyc2VyLnBhcnNlQnlUaW1lKGlzVGhpc01vbnRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jlc2V0JzpcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2sgPSAoaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIFRhc2tNYW5hZ2VyLmdldEFsbFRhc2tzKClbaW5kZXhdLmVkaXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgVGFza01hbmFnZXIuZGVsZXRlVGFzayhUYXNrTWFuYWdlci5nZXRBbGxUYXNrcygpW2luZGV4XS50aXRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBQcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKClbaW5kZXhdLnRpdGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFza0xlbmd0aCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFzayBsZW5ndGg6ICcgKyBUYXNrTWFuYWdlci5nZXRMZW5ndGgoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygneW91ciB0YXNrOiAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhUYXNrTWFuYWdlci5nZXRBbGxUYXNrcygpW2luZGV4XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgdGFza3M6ICcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2tNYW5hZ2VyLmdldEFsbFRhc2tzKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW5Mb29wLFxyXG4gICAgICAgIGVkaXRUYXNrLFxyXG4gICAgICAgIHJlbW92ZVRhc2ssXHJcbiAgICAgICAgdGFza0xlbmd0aCxcclxuICAgICAgICBnZXRUYXNrLFxyXG4gICAgICAgIGdldEFsbFRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGd1aVxyXG5cclxuY29uc3QgR1VJTWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIHZhciB0YXNrc0NvbnRhaW5lciwgY2F0ZWdvcnlMaW5rcywgcHJvamVjdHNDb250YWluZXIsIG5vdGVzQ29udGFpbmVyO1xyXG5cclxuICAgIHZhciBvZmZzZXRDb250YWluZXJzID0gW107XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbmRpdGlvbiA9IChYKSA9PiB7IHJldHVybiB0cnVlOyB9O1xyXG5cclxuICAgIHZhciBmaWx0ZXJGdW5jID0gVGFza1BhcnNlci5wYXJzZUJ5VGltZTtcclxuICAgIHZhciBmaWx0ZXJQYXJhbSA9IGhvbWVDb25kaXRpb247XHJcblxyXG4gICAgY29uc3QgZmFkZU91dCA9IChkaXYpID0+IHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChvcGFjaXR5ID4gMCkge1xyXG4gICAgICAgICAgICBvcGFjaXR5IC09IDAuMztcclxuICAgICAgICAgICAgZGl2LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaWRlID0gKHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZU9mUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByaWdodFNpZGVPZlBvcHVwLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUtb2YtcG9wdXAnKTsgXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZU9mUG9wdXApO1xyXG4gICAgICAgIHJldHVybiByaWdodFNpZGVPZlBvcHVwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbkhvdmVyUGFyZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXZBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVzdWx0IChkaXYsIGNsYXNzVG9BZGQpIHtcclxuICAgICAgICAgICAgZGl2QXJyYXkucHVzaChkaXYpO1xyXG5cclxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGRpdkFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb0FkZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25PcHRpb25UZXh0SG92ZXIgPSBvcHRpb25Ib3ZlclBhcmVudCgpO1xyXG5cclxuICAgIGNvbnN0IGhvdmVyID0gKHBhcmVudCwgY2hpbGQxLCBjaGlsZDIgPSAwKSA9PiB7XHJcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihjaGlsZDIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkMS5jbGFzc0xpc3QuYWRkKCdibHVlLWNscjEnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkMS5jbGFzc0xpc3QuYWRkKCdibHVlLWNscjEnKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkMi5jbGFzc0xpc3QuYWRkKCd3aGl0ZS1jbHIxJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZihjaGlsZDIgPT09IDApIHsgXHJcbiAgICAgICAgICAgICAgICBjaGlsZDEuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ZS1jbHIxJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZDEuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ZS1jbHIxJyk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZDIuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUtY2xyMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IChzdGF0dXMsIGNoZWNrYm94RGl2LCB0YXNrRGl2LCB0YXNrVGV4dERpdikgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHRhc2tUZXh0RGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0YXNrRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgdGFza1RleHREaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKHRhc2spID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicsIGAke3Rhc2sudXJnZW5jeX0tZGl2YCk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIucHJlcGVuZCh0YXNrRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tMZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXNrTGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0LXNpZGUnKTtcclxuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGVmdFNpZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza1JpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0YXNrUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmlnaHQtc2lkZScpO1xyXG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tSaWdodFNpZGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnLCBgJHt0YXNrLnVyZ2VuY3l9LWNoZWNrYm94LWJvcmRlcmApO1xyXG4gICAgICAgICAgICB0YXNrTGVmdFNpZGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2suZWRpdFByb3BlcnR5KCdkb25lJywgIXRhc2suZG9uZSk7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUodGFzay5kb25lLCBjaGVja2JveCwgdGFza0RpdiwgdGFza1RpdGxlKTsgXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVPZmZzZXRzKCk7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlTWFuYWdlci51cGRhdGVUYXNrcyhUYXNrTWFuYWdlci5nZXRBbGxUYXNrcygpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtaG9sZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgdGFza0xlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcblxyXG4gICAgICAgICAgICB0b2dnbGUodGFzay5kb25lLCBjaGVja2JveCwgdGFza0RpdiwgdGFza1RpdGxlKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgYGdlbmVyYWwtJHt0YXNrLnVyZ2VuY3l9LWJ0bmApO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9ICdERVRBSUxTJztcclxuICAgICAgICAgICAgICAgIHRhc2tSaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bik7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURldGFpbHNEaXYodGFzaykuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IGAke2Zvcm1hdChuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLCAnTU1NJyl9ICR7Zm9ybWF0KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSksICdkbycpfWA7IFxyXG4gICAgICAgICAgICAgICAgdGFza1JpZ2h0U2lkZS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKGVkaXREaXYpO1xyXG4gICAgICAgICAgICAgICAgZWRpdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFZGl0RGl2KHRhc2spLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0U3ZnLmNsYXNzTGlzdC5hZGQoJ2VkaXQtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFN2Zy5kYXRhID0gZWRpdFN2Z1ZhcjsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdERpdi5hcHBlbmRDaGlsZChlZGl0U3ZnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrUmlnaHRTaWRlLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGFza01hbmFnZXIuZGVsZXRlVGFzayh0YXNrLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVPZmZzZXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tQYWdlKGZpbHRlckZ1bmMoZmlsdGVyUGFyYW0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFzaFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhc2hTdmcuY2xhc3NMaXN0LmFkZCgndHJhc2gtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhc2hTdmcuZGF0YSA9IHRyYXNoU3ZnVmFyOyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZURpdi5hcHBlbmRDaGlsZCh0cmFzaFN2Zyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdFRvT2ZmZXN0Q29udGFpbmVyID0gKG9mZnNldCwgdGl0bGUpID0+IHtcclxuICAgICAgICBvZmZzZXRDb250YWluZXJzID0gb2Zmc2V0Q29udGFpbmVycy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC5maWx0ZXJQICE9PSB0aXRsZSk7XHJcblxyXG4gICAgICAgIG9mZnNldENvbnRhaW5lcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IG9mZnNldCxcclxuICAgICAgICAgICAgZmlsdGVyRjogVGFza1BhcnNlci5wYXJzZUJ5UHJvamVjdCxcclxuICAgICAgICAgICAgZmlsdGVyUDogdGl0bGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXRlT2Zmc2V0cygpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlT2Zmc2V0cyA9ICgpID0+IHtcclxuICAgICAgICBvZmZzZXRDb250YWluZXJzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LmVsZW1lbnQudGV4dENvbnRlbnQgPSAob2JqZWN0LmZpbHRlckYob2JqZWN0LmZpbHRlclApKS5maWx0ZXIodGFzayA9PiAhdGFzay5kb25lKS5sZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlLWgyLXNpemUnKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmlnaHRTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHJpZ2h0U2lkZURpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLXByb2plY3QtdGl0bGUnKTtcclxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChyaWdodFNpZGVEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zdmcnKTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0U2lkZURpdi5hcHBlbmRDaGlsZChkZWxldGVEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3ctbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRTaWRlRGl2LmFwcGVuZENoaWxkKG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaG92ZXIocHJvamVjdERpdiwgcHJvamVjdFRpdGxlLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFRvT2ZmZXN0Q29udGFpbmVyKG9mZnNldCwgcHJvamVjdC50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYXNoU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhc2hTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFzaFN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaC1zdmctcHJvamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYXNoU3ZnLmRhdGEgPSB0cmFzaFN2Z1ZhcjsgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVEaXYuYXBwZW5kQ2hpbGQodHJhc2hTdmcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RNYW5hZ2VyLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpKTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb250YWluZXJzID0gb2Zmc2V0Q29udGFpbmVycy5maWx0ZXIob2JqZWN0ID0+IG9iamVjdC5maWx0ZXJQYXJhbSAhPT0gcHJvamVjdC50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3QudGl0bGUgPT09IGZpbHRlclBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmMgPSBUYXNrUGFyc2VyLnBhcnNlQnlUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJQYXJhbSA9IGhvbWVDb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlclBhcmFtICE9PSAnTm90ZXMnKSBsb2FkVGFza1BhZ2UoZmlsdGVyRnVuYyhmaWx0ZXJQYXJhbSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZFRhc2tQYWdlKFRhc2tQYXJzZXIucGFyc2VCeVByb2plY3QocHJvamVjdC50aXRsZSkpO1xyXG4gICAgICAgICAgICBmaWx0ZXJGdW5jID0gVGFza1BhcnNlci5wYXJzZUJ5UHJvamVjdDtcclxuICAgICAgICAgICAgZmlsdGVyUGFyYW0gPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRvUmVzaXplID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVOb3RlRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBub3Rlc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWgxLXNpemUnKTtcclxuICAgICAgICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gJ05vdGVzJztcclxuICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc1RpdGxlKTtcclxuXHJcbiAgICAgICAgaG92ZXIobm90ZXNUaXRsZSwgbm90ZXNUaXRsZSk7XHJcblxyXG4gICAgICAgIG5vdGVzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkTm90ZXNQYWdlKE5vdGVNYW5hZ2VyLmdldEFsbE5vdGVzKCkpO1xyXG4gICAgICAgICAgICBmaWx0ZXJQYXJhbSA9IG5vdGVzVGl0bGUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90ZUdVSSA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQ9IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIucHJlcGVuZChub3RlRGl2KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICBkZWxldGVTdmdEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2Utc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICBub3RlRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVN2Z0Rpdik7XHJcbiAgICAgICAgICAgIGRlbGV0ZVN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIE5vdGVNYW5hZ2VyLmRlbGV0ZU5vdGUobm90ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBsb2FkTm90ZXNQYWdlKE5vdGVNYW5hZ2VyLmdldEFsbE5vdGVzKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlU3ZnLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXgtc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVN2Zy5kYXRhID0gY2xvc2VTdmdWYXI7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVTdmdEaXYuYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdub3RlLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gbm90ZS50aXRsZTtcclxuICAgICAgICAgICAgY2hhbmdlZC50aXRsZSA9IG5vdGUudGl0bGU7XHJcbiAgICAgICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlTWFuYWdlci51cGRhdGVPbmVOb3RlKG5vdGUsIGNoYW5nZWQpO1xyXG4gICAgICAgICAgICAgICAgbm90ZS5lZGl0UHJvcGVydHkoJ3RpdGxlJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYXV0b1Jlc2l6ZSh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdub3RlLXBhcmFncmFwaCcpO1xyXG4gICAgICAgICAgICBkZXRhaWxzLnZhbHVlID0gbm90ZS5kZXRhaWxzO1xyXG4gICAgICAgICAgICBjaGFuZ2VkLmRldGFpbHMgPSBub3RlLmRldGFpbHM7XHJcbiAgICAgICAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZC5kZXRhaWxzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlTWFuYWdlci51cGRhdGVPbmVOb3RlKG5vdGUsIGNoYW5nZWQpO1xyXG4gICAgICAgICAgICAgICAgbm90ZS5lZGl0UHJvcGVydHkoJ2RldGFpbHMnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBhdXRvUmVzaXplKHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkVGFza1BhZ2UgPSAodGFza2FycikgPT4ge1xyXG4gICAgICAgIHdoaWxlKHRhc2tzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza3NDb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxleC1yb3cnKSkgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1yb3cnKTtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbHVtbicpO1xyXG4gICAgICAgIHRhc2thcnIuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodGFzayk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkTm90ZXNQYWdlID0gKG5vdGVzYXJyKSA9PiB7XHJcbiAgICAgICAgd2hpbGUodGFza3NDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrc0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYodGFza3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGV4LWNvbHVtbicpKSB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbHVtbicpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtcm93Jyk7XHJcbiAgICAgICAgbm90ZXNhcnIuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICAgICAgbm90ZUdVSShub3RlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZURldGFpbHNEaXYgPSAodGFzaykgPT4geyBcclxuICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzLXBvcHVwJyk7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VTdmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgICAgIGNsb3NlU3ZnRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXN2Zy1kaXYnKTtcclxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChjbG9zZVN2Z0Rpdik7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZmFkZU91dChkZXRhaWxzRGl2KTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnLnNldEF0dHJpYnV0ZSgndHlwZScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXgtc3ZnJyk7XHJcbiAgICAgICAgICAgIGNsb3NlU3ZnLmRhdGEgPSBjbG9zZVN2Z1ZhcjtcclxuICAgICAgICAgICAgY2xvc2VTdmdEaXYuYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNEaXZUZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzRGl2VGV4dFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZXRhaWxzLXBvcHVwLXRleHQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXZUZXh0V3JhcHBlcik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGV0YWlscy1wb3B1cC10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNEaXZUZXh0V3JhcHBlci5hcHBlbmRDaGlsZChkZXRhaWxzVGl0bGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNBYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RldGFpbHMtcG9wdXAtYWJvdXQtd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0RpdlRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGRldGFpbHNBYm91dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNEaXZCZWxvbmdzVG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzQWJvdXQuYXBwZW5kQ2hpbGQoZGV0YWlsc0RpdkJlbG9uZ3NUbyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc3ViLXRpdGxlJywgJ2RldGFpbHMtcHJvamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2UHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2QmVsb25nc1RvLmFwcGVuZENoaWxkKGRldGFpbHNEaXZQcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzay5wcm9qZWN0ID09PSBudWxsKSA/IChzcGFuUHJvamVjdC50ZXh0Q29udGVudCA9ICctJykgOiAoc3BhblByb2plY3QudGV4dENvbnRlbnQgPSB0YXNrLnByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2QmVsb25nc1RvLmFwcGVuZENoaWxkKHNwYW5Qcm9qZWN0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNEaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNBYm91dC5hcHBlbmRDaGlsZChkZXRhaWxzRGl2UHJpb3JpdHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNEaXZVcmdlbmN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2VXJnZW5jeS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXN1Yi10aXRsZScsICdkZXRhaWxzLXVyZ2VuY3knKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0RpdlVyZ2VuY3kudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZQcmlvcml0eS5hcHBlbmRDaGlsZChkZXRhaWxzRGl2VXJnZW5jeSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhblByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnVyZ2VuY3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZQcmlvcml0eS5hcHBlbmRDaGlsZChzcGFuUHJpb3JpdHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzQWJvdXQuYXBwZW5kQ2hpbGQoZGV0YWlsc0RpdkR1ZURhdGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNEaXZEZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0RpdkRlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc3ViLXRpdGxlJywgJ2RldGFpbHMtZGVhZGxpbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0RpdkRlYWRsaW5lLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChkZXRhaWxzRGl2RGVhZGxpbmUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdChuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLCAnTU1NTScpfSAke2Zvcm1hdChuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLCAnZG8nKX0sICR7Zm9ybWF0KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSksICd5eXl5Jyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0RpdkR1ZURhdGUuYXBwZW5kQ2hpbGQoc3BhbkR1ZURhdGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0Fib3V0LmFwcGVuZENoaWxkKGRldGFpbHNEaXZEZXNjcmlwdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0Rpdk1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZNb3JlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtc3ViLXRpdGxlJywgJ2RldGFpbHMtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0Rpdk1vcmUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2TW9yZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChzcGFuRGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsc0RpdjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWRpdERpdiA9ICh0YXNrKSA9PiB7IFxyXG4gICAgICAgIGxldCBjaGFuZ2VkID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgICAgIGVkaXRQb3BVcC5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLW9mLXBvcHVwJywgJ2VkaXQtcG9wdXAnKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVkaXRQb3BVcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgIGNsb3NlU3ZnRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXN2Zy1kaXYnKTtcclxuICAgICAgICBlZGl0UG9wVXAuYXBwZW5kQ2hpbGQoY2xvc2VTdmdEaXYpO1xyXG4gICAgICAgIGNsb3NlU3ZnRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWRlT3V0KGVkaXRQb3BVcCk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS14LXN2ZycpO1xyXG4gICAgICAgICAgICBjbG9zZVN2Zy5kYXRhID0gY2xvc2VTdmdWYXI7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xvc2VTdmdEaXYuYXBwZW5kQ2hpbGQoY2xvc2VTdmcpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0QXJlYVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0QXJlYVdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYS13cmFwcGVyLWRpdicpO1xyXG4gICAgICAgIGVkaXRQb3BVcC5hcHBlbmRDaGlsZCh0ZXh0QXJlYVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdFRpdGxlQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIGVkaXRUaXRsZUFyZWEuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICAgICAgICAgICAgZWRpdFRpdGxlQXJlYS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgICAgIHRhc2suZWRpdFByb3BlcnR5KCd0aXRsZScsIGVkaXRUaXRsZUFyZWEudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYVdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlQXJlYSk7XHJcbiAgICAgICAgICAgIGVkaXRUaXRsZUFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQudGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlZGl0RGV0YWlsc0FyZWE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIGVkaXREZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGVkaXREZXRhaWxzQXJlYS50ZXh0Q29udGVudCA9IHRhc2suZGV0YWlscztcclxuICAgICAgICAgICAgdGV4dEFyZWFXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXREZXRhaWxzQXJlYSk7XHJcbiAgICAgICAgICAgIGVkaXREZXRhaWxzQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZC5kZXRhaWxzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtcHJpb3JpdHktd3JhcHBlci1kaXYnKTtcclxuICAgICAgICBlZGl0UG9wVXAuYXBwZW5kQ2hpbGQoZGF0ZVByaW9yaXR5V3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlUHJpb3JpdHlXcmFwcGVyQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdi1jaGlsZCcpO1xyXG4gICAgICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkxLmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZC5hcHBlbmRDaGlsZChzaGFyZWREaXNwbGF5MSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgzRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDNEdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJzsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTEuYXBwZW5kQ2hpbGQoaDNEdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXREYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICd0b2RvLWRhdGUtY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5MS5hcHBlbmRDaGlsZChlZGl0RGF0ZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQuZHVlRGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheTJQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZGl2LXBhcmVudCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXkyUGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaDNQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDNQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyUGFyZW50LmFwcGVuZENoaWxkKGgzUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5MkNoaWxkUGFyZW50ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1kaXZzLXdyYXBwZXItcGFyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJQYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheTJDaGlsZFBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWREaXNwbGF5MkNoaWxkQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktZGl2cy13cmFwcGVyLWNoaWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG93UHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2dlbmVyYWwtbG93LWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnTE9XJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRDaGlsZC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eURpdik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZWRpdW1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWRpdicsICdwcmlvcml0eS1kaXYnLCAnZ2VuZXJhbC1taWQtYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheTJDaGlsZENoaWxkLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5RGl2KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2dlbmVyYWwtaGlnaC1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdISUdIJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRDaGlsZC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRhc2sudXJnZW5jeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsLWxvdy1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1pZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsLW1lZGl1bS1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtaGlnaC1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWlkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5jbGFzc0xpc3QucmVtb3ZlKCdnZW5lcmFsLW1lZGl1bS1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGlnaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dlbmVyYWwtaGlnaC1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IFwibG93XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93UHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbC1sb3ctYnRuLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZC51cmdlbmN5ID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dlbmVyYWwtbG93LWJ0bi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZ2VuZXJhbC1oaWdoLWJ0bi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gXCJtaWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsLW1lZGl1bS1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkLnVyZ2VuY3kgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dlbmVyYWwtbWVkaXVtLWJ0bi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dlbmVyYWwtbG93LWJ0bi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gXCJoaWdoXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtaGlnaC1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkLnVyZ2VuY3kgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtQ2hhbmdlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DaGFuZ2VzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAnZ2VuZXJhbC1sb3ctYnRuJywgJ2NvbmZpcm0tY2hhbmdlcy1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2hhbmdlc0J0bi50ZXh0Q29udGVudCA9ICdDT05GSVJNIENIQU5HRVMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXkyQ2hpbGRQYXJlbnQuYXBwZW5kQ2hpbGQoY29uZmlybUNoYW5nZXNCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DaGFuZ2VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmFnZU1hbmFnZXIudXBkYXRlT25lVGFzayh0YXNrLCBjaGFuZ2VkKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZWRpdFByb3BlcnR5KHByb3BlcnR5LCBjaGFuZ2VkW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrUGFnZShmaWx0ZXJGdW5jKGZpbHRlclBhcmFtKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhZGVPdXQoZWRpdFBvcFVwKTsgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVkaXRQb3BVcDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFza1NpZGUgPSAocG9wdXAsIHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlucHV0V3JhcHBlckRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC13cmFwcGVyLWRpdicpO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGlucHV0V3JhcHBlckRpdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlOiBQYXkgYmlsbHMnO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRXcmFwcGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGV0YWlsczogZWxlY3RyaWNpdHksIGdhcywgaW5zdXJhbmNlLicpO1xyXG4gICAgICAgICAgICBkZXRhaWxzSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1pbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZVByaW9yaXR5V3JhcHBlclBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRhdGVQcmlvcml0eVdyYXBwZXJQYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXByaW9yaXR5LXdyYXBwZXItZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoZGF0ZVByaW9yaXR5V3JhcHBlclBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlUHJpb3JpdHlXcmFwcGVyQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS1wcmlvcml0eS13cmFwcGVyLWRpdi1jaGlsZCcpO1xyXG4gICAgICAgICAgICBkYXRlUHJpb3JpdHlXcmFwcGVyUGFyZW50LmFwcGVuZENoaWxkKGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheUZsZXgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDEuY2xhc3NMaXN0LmFkZCgnc2hhcmVkLWRpc3BsYXktZmxleC1nYXAtMTBweCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkLmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXlGbGV4MSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgzRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDNEdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXgxLmFwcGVuZENoaWxkKGgzRHVlRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAndG9kby1kYXRlLWNsYXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXgxLmFwcGVuZENoaWxkKHRvZG9EYXRlSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlZERpc3BsYXlGbGV4MkdyYW5kcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudC5jbGFzc0xpc3QuYWRkKCdzaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWRpdi1wYXJlbnQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVQcmlvcml0eVdyYXBwZXJDaGlsZC5hcHBlbmRDaGlsZChzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgzUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGgzUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudC5hcHBlbmRDaGlsZChoM1ByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkRGlzcGxheUZsZXgzUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXgzUGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NoYXJlZC1kaXNwbGF5LWZsZXgtZ2FwLTEwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1kaXZzLXdyYXBwZXItcGFyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXgyR3JhbmRwYXJlbnQuYXBwZW5kQ2hpbGQoc2hhcmVkRGlzcGxheUZsZXgzUGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXg0R3JhbmRjaGlsZC5jbGFzc0xpc3QuYWRkKCdzaGFyZWQtZGlzcGxheS1mbGV4LWdhcC0xMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1kaXZzLXdyYXBwZXItY2hpbGQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkRGlzcGxheUZsZXgzUGFyZW50LmFwcGVuZENoaWxkKHNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ3ByaW9yaXR5LWRpdicsICdnZW5lcmFsLWxvdy1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gJ0xPVyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDRHcmFuZGNoaWxkLmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2J0bi1kaXYnLCAncHJpb3JpdHktZGl2JywgJ2dlbmVyYWwtbWlkLWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnTUVESVVNJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ3ByaW9yaXR5LWRpdicsICdnZW5lcmFsLWhpZ2gtYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnSElHSCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDRHcmFuZGNoaWxkLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eURpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1pZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZ2VuZXJhbC1tZWRpdW0tYnRuLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi5jbGFzc0xpc3QucmVtb3ZlKCdnZW5lcmFsLWhpZ2gtYnRuLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBcImxvd1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2dlbmVyYWwtbG93LWJ0bi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eURpdi5jbGFzc0xpc3QucmVtb3ZlKCdnZW5lcmFsLWxvdy1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGlnaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2dlbmVyYWwtaGlnaC1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IFwibWlkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhbC1tZWRpdW0tYnRuLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWlkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdW1Qcmlvcml0eURpdi5jbGFzc0xpc3QucmVtb3ZlKCdnZW5lcmFsLW1lZGl1bS1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmlvcml0eURpdi5jbGFzc0xpc3QucmVtb3ZlKCdnZW5lcmFsLWxvdy1idG4tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IFwiaGlnaFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdnZW5lcmFsLWhpZ2gtYnRuLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ2dlbmVyYWwtbG93LWJ0bicsICdhZGQtdG9kby1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9ICdBREQgVE8gRE8nOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWREaXNwbGF5RmxleDNQYXJlbnQuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigoZmlsdGVyUGFyYW0gIT09ICdOb3RlcycpICYmICh0eXBlb2YgZmlsdGVyUGFyYW0gIT09ICdmdW5jdGlvbicpKSBwcm9qZWN0ID0gZmlsdGVyUGFyYW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrTWFuYWdlci5hZGRUYXNrKHRpdGxlSW5wdXQudmFsdWUsIHByb2plY3QsIGRldGFpbHNJbnB1dC52YWx1ZSwgdG9kb0RhdGVJbnB1dC52YWx1ZSwgc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlT2Zmc2V0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tQYWdlKGZpbHRlckZ1bmMoZmlsdGVyUGFyYW0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGVPdXQocGFyZW50KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0U2lkZSA9IChwb3B1cCwgcGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRXcmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRXcmFwcGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXBwZXItZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdpbnB1dCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGU6IFNjaG9vbCBQcm9qZWN0IFgnKTtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLXN1Ym1pdC1idG4tZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocmlnaHRTaWRlU3VibWl0QnRuRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ2dlbmVyYWwtbG93LWJ0bicsICdjcmVhdGUtcHJvamVjdC1ub3RlLWJ0bicpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NSRUFURSBQUk9KRUNUJztcclxuICAgICAgICAgICAgcmlnaHRTaWRlU3VibWl0QnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdG4pO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUocHJvamVjdHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgZmFkZU91dChwYXJlbnQpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5vdGVTaWRlID0gKHBvcHVwLCBwYXJlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnB1dFdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtd3JhcHBlci1kaXYnKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXJEaXYpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZTogd2hlbiBjb29raW5nLCBhZGQgc3VnYXIgdG8gc291cCcpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0V3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RldGFpbHMnKTtcclxuICAgICAgICAgICAgZGV0YWlsc0lucHV0LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRXcmFwcGVyRGl2LmFwcGVuZENoaWxkKGRldGFpbHNJbnB1dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJpZ2h0U2lkZVN1Ym1pdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1zaWRlLXN1Ym1pdC1idG4tZGl2Jyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQocmlnaHRTaWRlU3VibWl0QnRuRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZU5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY3JlYXRlTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tZGl2JywgJ2dlbmVyYWwtbG93LWJ0bicsICdjcmVhdGUtcHJvamVjdC1ub3RlLWJ0bicpO1xyXG4gICAgICAgICAgICBjcmVhdGVOb3RlQnRuLnRleHRDb250ZW50ID0gJ0NSRUFURSBOT1RFJztcclxuICAgICAgICAgICAgcmlnaHRTaWRlU3VibWl0QnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVCdG4pO1xyXG4gICAgICAgICAgICBjcmVhdGVOb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBOb3RlTWFuYWdlci5hZGROb3RlKHRpdGxlSW5wdXQudmFsdWUsIGRldGFpbHNJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBsb2FkTm90ZXNQYWdlKE5vdGVNYW5hZ2VyLmdldEFsbE5vdGVzKCkpO1xyXG4gICAgICAgICAgICAgICAgZmFkZU91dChwYXJlbnQpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5ld0RpdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVOZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgICAgICBjcmVhdGVOZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGUtbmV3LXRhc2stcG9wdXAnKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld0Rpdik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2JCYXJDcmVhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRvYkJhckNyZWF0ZVRvZG8uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ldy10b3BiYXInKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RGl2LmFwcGVuZENoaWxkKHRvYkJhckNyZWF0ZVRvZG8pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGgxdG9iQmFyUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICAgICAgaDF0b2JCYXJQb3B1cC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcuLi4nO1xyXG4gICAgICAgICAgICAgICAgaDF0b2JCYXJQb3B1cC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICB0b2JCYXJDcmVhdGVUb2RvLmFwcGVuZENoaWxkKGgxdG9iQmFyUG9wdXApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgICAgICAgICAgY2xvc2VTdmdEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2Utc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgdG9iQmFyQ3JlYXRlVG9kby5hcHBlbmRDaGlsZChjbG9zZVN2Z0Rpdik7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVN2Z0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWRlT3V0KGNyZWF0ZU5ld0Rpdik7IFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTdmcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZVN2Zy5jbGFzc0xpc3QuYWRkKCdjbG9zZS14LXN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlU3ZnLmRhdGEgPSBjbG9zZVN2Z1ZhcjsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZVN2Z0Rpdi5hcHBlbmRDaGlsZChjbG9zZVN2Zyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyQ3JlYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzaWRlYmFyQ3JlYXRlVG9kby5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3LXNpZGViYXInKTtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RGl2LmFwcGVuZENoaWxkKHNpZGViYXJDcmVhdGVUb2RvKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluU2lkZWJhclRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBtYWluU2lkZWJhclRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21haW4tc2lkZWJhci10ZXh0LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIHNpZGViYXJDcmVhdGVUb2RvLmFwcGVuZENoaWxkKG1haW5TaWRlYmFyVGV4dFdyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVUb2RvT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9kb09wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24tdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9PcHRpb24udGV4dENvbnRlbnQgPSAnVG8gRG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb09wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PcHRpb25UZXh0SG92ZXIoY3JlYXRlVG9kb09wdGlvbiwgJ21vdXNlT24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3Qgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RPcHRpb24uY2xhc3NMaXN0LmFkZCgnb3B0aW9uLXRleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdE9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PcHRpb25UZXh0SG92ZXIoY3JlYXRlUHJvamVjdE9wdGlvbiwgJ21vdXNlT24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IG5vdGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTm90ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5vdGVPcHRpb24uY2xhc3NMaXN0LmFkZCgnb3B0aW9uLXRleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVOb3RlT3B0aW9uLnRleHRDb250ZW50ID0gJ05vdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5TaWRlYmFyVGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PcHRpb25UZXh0SG92ZXIoY3JlYXRlTm90ZU9wdGlvbiwgJ21vdXNlT24nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBzaWRlKGNyZWF0ZU5ld0Rpdik7IFxyXG4gICAgICAgICAgICBjcmVhdGVUYXNrU2lkZShkaXYsIGNyZWF0ZU5ld0Rpdik7IC8vZGVmYXVsdFxyXG4gICAgICAgICAgICBjcmVhdGVUb2RvT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ21vdXNlT24nKTtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXYgPSBzaWRlKGNyZWF0ZU5ld0Rpdik7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrU2lkZShkaXYsIGNyZWF0ZU5ld0Rpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRpdiA9IHNpZGUoY3JlYXRlTmV3RGl2KTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RTaWRlKGRpdiwgY3JlYXRlTmV3RGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVOb3RlT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGl2ID0gc2lkZShjcmVhdGVOZXdEaXYpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlTm90ZVNpZGUoZGl2LCBjcmVhdGVOZXdEaXYpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5ld0RpdjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRmlsdGVycyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGNhdGVnb3J5QXJyID0gW1xyXG4gICAgICAgICAgICB7dGl0bGU6ICdIb21lJywgY29uZGl0aW9uOiBob21lQ29uZGl0aW9ufSxcclxuICAgICAgICAgICAge3RpdGxlOiAnVG9kYXknLCBjb25kaXRpb246IGlzVG9kYXl9LCBcclxuICAgICAgICAgICAge3RpdGxlOiAnVG9tb3Jyb3cnLCBjb25kaXRpb246IGlzVG9tb3Jyb3d9LCBcclxuICAgICAgICAgICAge3RpdGxlOiAnVGhpcyBXZWVrJywgY29uZGl0aW9uOiBpc1RoaXNXZWVrfSwgXHJcbiAgICAgICAgICAgIHt0aXRsZTogJ1RoaXMgTW9udGgnLCBjb25kaXRpb246IGlzVGhpc01vbnRofVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNhdGVnb3J5QXJyLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnlMaW5rcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWgxLXNpemUnKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5VGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldC5jbGFzc0xpc3QuYWRkKCdzaG93LW51bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0LnRleHRDb250ZW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaG92ZXIoY2F0ZWdvcnksIGNhdGVnb3J5LCBvZmZzZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9mZnNldENvbnRhaW5lcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogb2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckY6IFRhc2tQYXJzZXIucGFyc2VCeVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyUDogb2JqZWN0LmNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWRUYXNrUGFnZShUYXNrUGFyc2VyLnBhcnNlQnlUaW1lKG9iamVjdC5jb25kaXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlckZ1bmMgPSBUYXNrUGFyc2VyLnBhcnNlQnlUaW1lO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyUGFyYW0gPSBvYmplY3QuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkpO1xyXG4gICAgICAgIGNyZWF0ZU5vdGVFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwYXJlbnQnKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9wQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wYmFyJyk7XHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdpZCcsICdjaGlsZCcpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcGJhclN2Z0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdG9wYmFyU3ZnRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3ZnLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcGJhclN2Z0Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAndGFza0pvdXJuYWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZS1iYXInKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpbmtzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlua3NDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpbmtzLmNsYXNzTGlzdC5hZGQoJ2xpbmtzLWRpdicsICdjYXRlZ29yeS1saW5rcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUxpbmtzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtaDEtc2l6ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlua3MtZGl2JywgJ3Byb2plY3RzLWxpbmtzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzLWRpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsID0gY3JlYXRlTmV3RGl2KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkVGFza1BhZ2UoVGFza01hbmFnZXIuZ2V0QWxsVGFza3MoKSk7XHJcbiAgICAgICAgY3JlYXRlRmlsdGVycygpO1xyXG4gICAgICAgIGNhbGN1bGF0ZU9mZnNldHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9XHJcblxyXG59KSgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubG9hZCcsIEdVSU1hbmFnZXIuY3JlYXRlUGFnZSgpKTtcclxuIl0sIm5hbWVzIjpbImZvcm1hdCIsImlzVG9kYXkiLCJpc1RvbW9ycm93IiwiaXNUaGlzTW9udGgiLCJpc1RoaXNXZWVrIiwiY2xvc2VTdmdWYXIiLCJ0cmFzaFN2Z1ZhciIsImVkaXRTdmdWYXIiLCJUYXNrIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsInByb2plY3QiLCJkZXRhaWxzIiwiZHVlRGF0ZSIsInVyZ2VuY3kiLCJkb25lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZWRpdFByb3BlcnR5IiwicHJvcGVydHkiLCJ2YWx1ZSIsIlByb2plY3QiLCJOb3RlIiwiU3RvcmFnZU1hbmFnZXIiLCJGaXJzdEJvb3REb25lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0ZpcnN0Qm9vdCIsInBhcnNlIiwiZ2V0SXRlbSIsImxvYWRUYXNrcyIsInRhc2tBcnIiLCJsb2FkUHJvamVjdHMiLCJwcm9qZWN0QXJyIiwibG9hZE5vdGVzIiwibm90ZXNBcnIiLCJ1cGRhdGVUYXNrcyIsInRhc2tMaXN0IiwiZm9yRWFjaCIsInRhc2siLCJwdXNoIiwidXBkYXRlT25lVGFzayIsImNoYW5nZXMiLCJjb3VudCIsImVsZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwidXBkYXRlUHJvamVjdHMiLCJwcm9qZWN0c0FyciIsInByb2plY3RMaXN0IiwidXBkYXRlTm90ZXMiLCJub3RlTGlzdCIsIm5vdGUiLCJ1cGRhdGVPbmVOb3RlIiwibm90ZUFyciIsIlRhc2tNYW5hZ2VyIiwidG9kYXkiLCJEYXRlIiwiZGF0ZTIiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRhdGUzIiwiYWRkVGFzayIsImluaXRpYWxpemVUYXNrcyIsImRlbGV0ZVRhc2siLCJmaWx0ZXIiLCJnZXRMZW5ndGgiLCJnZXRBbGxUYXNrcyIsIlRhc2tQYXJzZXIiLCJwYXJzZUJ5VGltZSIsImNvbmRpdGlvbiIsInBhcnNlQnlQcm9qZWN0IiwiUHJvamVjdE1hbmFnZXIiLCJhZGRQcm9qZWN0IiwiaW5pdGlhbGl6ZVByb2plY3RzIiwiZGVsZXRlUHJvamVjdCIsImdldEFsbFByb2plY3RzIiwiTm90ZU1hbmFnZXIiLCJhZGROb3RlIiwiaW5pdGlhbGl6ZU5vdGVzIiwiZGVsZXRlTm90ZSIsImdldEFsbE5vdGVzIiwiQ0xJIiwibWFpbkxvb3AiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJwcm9tcHQiLCJzcGxpdCIsImVkaXRUYXNrIiwicGFyc2VJbnQiLCJnZXRUYXNrIiwicmVtb3ZlVGFzayIsInRhc2tMZW5ndGgiLCJyZW1vdmVQcm9qZWN0IiwiY2xlYXIiLCJpbmRleCIsIkdVSU1hbmFnZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFza3NDb250YWluZXIiLCJjYXRlZ29yeUxpbmtzIiwicHJvamVjdHNDb250YWluZXIiLCJub3Rlc0NvbnRhaW5lciIsIm9mZnNldENvbnRhaW5lcnMiLCJob21lQ29uZGl0aW9uIiwiWCIsImZpbHRlckZ1bmMiLCJmaWx0ZXJQYXJhbSIsImZhZGVPdXQiLCJkaXYiLCJvcGFjaXR5IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0eWxlIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZSIsInNpZGUiLCJwYXJlbnQiLCJyaWdodFNpZGVPZlBvcHVwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwib3B0aW9uSG92ZXJQYXJlbnQiLCJkaXZBcnJheSIsInJlc3VsdCIsImNsYXNzVG9BZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIml0ZW0iLCJvbk9wdGlvblRleHRIb3ZlciIsImhvdmVyIiwiY2hpbGQxIiwiY2hpbGQyIiwidG9nZ2xlIiwic3RhdHVzIiwiY2hlY2tib3hEaXYiLCJ0YXNrRGl2IiwidGFza1RleHREaXYiLCJ0ZXh0RGVjb3JhdGlvbiIsImNyZWF0ZVRhc2tFbGVtZW50IiwicHJlcGVuZCIsInRhc2tMZWZ0U2lkZSIsInRhc2tSaWdodFNpZGUiLCJjaGVja2JveCIsInRhc2tUaXRsZSIsImNhbGN1bGF0ZU9mZnNldHMiLCJ0ZXh0Q29udGVudCIsImRldGFpbHNCdG4iLCJjcmVhdGVEZXRhaWxzRGl2Iiwic2hvd01vZGFsIiwiZHVlRGF0ZURpdiIsImVkaXREaXYiLCJjcmVhdGVFZGl0RGl2IiwiZWRpdFN2ZyIsInNldEF0dHJpYnV0ZSIsImRhdGEiLCJkZWxldGVEaXYiLCJsb2FkVGFza1BhZ2UiLCJ0cmFzaFN2ZyIsImFkZFByb2plY3RUb09mZmVzdENvbnRhaW5lciIsIm9mZnNldCIsIm9iamVjdCIsImZpbHRlclAiLCJmaWx0ZXJGIiwiY3JlYXRlUHJvamVjdEVsZW1lbnQiLCJwcm9qZWN0RGl2IiwicHJvamVjdFRpdGxlIiwicmlnaHRTaWRlRGl2IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXV0b1Jlc2l6ZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNyZWF0ZU5vdGVFbGVtZW50Iiwibm90ZXNUaXRsZSIsImxvYWROb3Rlc1BhZ2UiLCJub3RlR1VJIiwiY2hhbmdlZCIsIm5vdGVEaXYiLCJkZWxldGVTdmdEaXYiLCJjbG9zZVN2ZyIsInRhcmdldCIsInRhc2thcnIiLCJjb250YWlucyIsIm5vdGVzYXJyIiwiZGV0YWlsc0RpdiIsImNsb3NlU3ZnRGl2IiwiZGV0YWlsc0RpdlRleHRXcmFwcGVyIiwiZGV0YWlsc1RpdGxlIiwiZGV0YWlsc0Fib3V0IiwiZGV0YWlsc0RpdkJlbG9uZ3NUbyIsImRldGFpbHNEaXZQcm9qZWN0Iiwic3BhblByb2plY3QiLCJkZXRhaWxzRGl2UHJpb3JpdHkiLCJkZXRhaWxzRGl2VXJnZW5jeSIsInNwYW5Qcmlvcml0eSIsImRldGFpbHNEaXZEdWVEYXRlIiwiZGV0YWlsc0RpdkRlYWRsaW5lIiwic3BhbkR1ZURhdGUiLCJkZXRhaWxzRGl2RGVzY3JpcHRpb24iLCJkZXRhaWxzRGl2TW9yZSIsInNwYW5EZXNjcmlwdGlvbiIsImVkaXRQb3BVcCIsInRleHRBcmVhV3JhcHBlciIsImVkaXRUaXRsZUFyZWEiLCJlZGl0RGV0YWlsc0FyZWEiLCJkYXRlUHJpb3JpdHlXcmFwcGVyIiwiZGF0ZVByaW9yaXR5V3JhcHBlckNoaWxkIiwic2hhcmVkRGlzcGxheTEiLCJoM0R1ZURhdGUiLCJlZGl0RGF0ZUlucHV0IiwidmFsdWVBc0RhdGUiLCJzaGFyZWREaXNwbGF5MlBhcmVudCIsImgzUHJpb3JpdHkiLCJzaGFyZWREaXNwbGF5MkNoaWxkUGFyZW50Iiwic2hhcmVkRGlzcGxheTJDaGlsZENoaWxkIiwibG93UHJpb3JpdHlEaXYiLCJtZWRpdW1Qcmlvcml0eURpdiIsImhpZ2hQcmlvcml0eURpdiIsInNlbGVjdGVkIiwiY29uZmlybUNoYW5nZXNCdG4iLCJjcmVhdGVUYXNrU2lkZSIsInBvcHVwIiwiaW5wdXRXcmFwcGVyRGl2IiwidGl0bGVJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZGV0YWlsc0lucHV0IiwiZGF0ZVByaW9yaXR5V3JhcHBlclBhcmVudCIsInNoYXJlZERpc3BsYXlGbGV4MSIsInRvZG9EYXRlSW5wdXQiLCJzaGFyZWREaXNwbGF5RmxleDJHcmFuZHBhcmVudCIsInNoYXJlZERpc3BsYXlGbGV4M1BhcmVudCIsInNoYXJlZERpc3BsYXlGbGV4NEdyYW5kY2hpbGQiLCJhZGRUb0RvQnRuIiwiY3JlYXRlUHJvamVjdFNpZGUiLCJyaWdodFNpZGVTdWJtaXRCdG5EaXYiLCJjcmVhdGVQcm9qZWN0QnRuIiwiY3JlYXRlTm90ZVNpZGUiLCJjcmVhdGVOb3RlQnRuIiwiY3JlYXRlTmV3RGl2IiwidG9iQmFyQ3JlYXRlVG9kbyIsImgxdG9iQmFyUG9wdXAiLCJjb2xvciIsInNpZGViYXJDcmVhdGVUb2RvIiwibWFpblNpZGViYXJUZXh0V3JhcHBlciIsImNyZWF0ZVRvZG9PcHRpb24iLCJjcmVhdGVQcm9qZWN0T3B0aW9uIiwiY3JlYXRlTm90ZU9wdGlvbiIsImNyZWF0ZUZpbHRlcnMiLCJjYXRlZ29yeUFyciIsImNhdGVnb3J5IiwiY2F0ZWdvcnlUaXRsZSIsImNyZWF0ZVBhZ2UiLCJ0b3BCYXIiLCJjaGlsZCIsInRvcGJhclN2Z0RpdiIsInRpdGxlRGl2Iiwic2lkZWJhciIsImxpbmtzQ29udGFpbmVyIiwicHJvamVjdHNEaXYiLCJwcm9qZWN0c1RpdGxlIiwiYWRkQnRuIiwibW9kYWwiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9