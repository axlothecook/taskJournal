const Toggle = (function() {
    let projectVar;
    const button = (object) => {
        if (object.checkboxDiv.classList.contains('active')) {
            object.checkboxDiv.classList.remove('active');
            object.taskDiv.style.opacity = '1';
            object.addTaskToCategory(object.task, 'increase');
            object.addTaskToProject(projectVar, object.task.title, object.task.details, object.task.dueDate, object.task.priority);
            object.createCategories();
            return object.taskTextDiv.style.textDecoration = 'none';
        };
                    
        object.checkboxDiv.classList.add('active');
        object.taskDiv.style.opacity = '0.5';
        projectVar = object.deleteTask(object.task);
        object.createCategories();
        return object.taskTextDiv.style.textDecoration = 'line-through';
    };

    return { button };

})();

const Change = (function() {
    const borderStyle = (div, target) => {
        return (div.priority === 'low') ? target.classList.add('border-green') : (div.priority === 'mid') ? target.classList.add('border-orange') : target.classList.add('border-red');
    }

    return { borderStyle };

})();


const FadeOut = (function() {
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

    return { fadeOut };

})();
//     const deleteCurrentTodo = (div, target) => {
//         target.remove();
//         return taskManager.removeTask(div);  //change
//     }

//     return { deleteCurrentTodo }

// })();

const popupRightSide = (function() {
    const side = (parent) => {
        const rightSideOfPopup = document.createElement('div');
        rightSideOfPopup.classList.add('right-side-of-popup'); //fix
        parent.appendChild(rightSideOfPopup);
        return rightSideOfPopup;
    }

    return { side };

})();

const mouseAction = (function() {
    const hover = (parent, child1, child2) => {
        parent.addEventListener('mouseover', function() {
            child1.classList.add('blue-clr1');
            child2.classList.add('white-clr1');
        });

        parent.addEventListener('mouseout', function() {
            child1.classList.remove('blue-clr1');
            child2.classList.remove('white-clr1');
        });
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

    let onOptionTextHover = optionHoverParent();

    return { 
        hover,
        onOptionTextHover,
    }
})();

const ChangeBtnColor = (function(){
    let arr = [];
    let clickedBtn;
    const set = (btn1, btn2, btn3) => {
        arr = [btn1, btn2, btn3];
        arr.forEach(object => {
            object.btn.addEventListener('click', function() {
                arr.forEach(object => {
                    if(object.btn.classList.length === 4) object.btn.classList.remove(object.btn.classList[3]);
                });
                object.btn.classList.add(object.classToAdd);
                clickedBtn = object.btn.classList[2];
            });
        });
    };

    const returnClickedBtn = () => { return clickedBtn; }


    return { 
        set,
        returnClickedBtn
    }
})();


export {
    Toggle,
    Change,
    FadeOut,
    popupRightSide,
    mouseAction,
    ChangeBtnColor
}