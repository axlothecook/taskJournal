const Toggle = (function() {
    const button = (checkbox, targetDiv, textDiv) => {
        if (checkbox.classList.contains('active')) {
            checkbox.classList.remove('active');
            targetDiv.style.opacity = '1';
            return textDiv.style.textDecoration = 'none';
        };
                    
        checkbox.classList.add('active');
        targetDiv.style.opacity = '0.5';
        return textDiv.style.textDecoration = 'line-through';
    };

    return { button };

})();

const Change = (function() {
    const borderStyle = (div, target) => {
        return (div.urgency === 'low') ? target.classList.add('border-green') : (div.urgency === 'medium') ? target.classList.add('border-orange') : target.classList.add('border-red');
    }

    return { borderStyle };

})();

const FadeIn = (function() {
    const fadeIn = (div) => {
        let opacity = 0;
        // popup.style.opacity = '0'; //doesnt really work

        let interval = setInterval(function() {
            if (opacity < 1) {
            opacity += 0.2;
            div.style.opacity = opacity;
            } else {
                clearInterval(interval);
                div.showModal();
            };
        }, 30);
    };

    return { fadeIn };
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

const deleteTodo = (function() {
    const deleteCurrentTodo = (div, target) => {
        target.remove();
        return taskManager.removeTask(div);  //change
    }

    return { deleteCurrentTodo }

})();

const createRightSide = (function() {
    const side = (parent) => {
        const rightSideOfPopup = document.createElement('div');
        rightSideOfPopup.classList.add('right-side-of-popup'); //fix
        parent.appendChild(rightSideOfPopup);
        return rightSideOfPopup;
    }

    return { side };

})();