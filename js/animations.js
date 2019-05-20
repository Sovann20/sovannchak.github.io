//Introduction to site.
(function () {

    const buttons = [
        document.getElementById('b00'),
        document.getElementById('b01'),
        document.getElementById('b02'),
        document.getElementById('b03'),
        document.getElementById('b04')
    ];

    const content = [
        document.getElementById('c00'),
        document.getElementById('c01'),
        document.getElementById('c02'),
        document.getElementById('c03'),
        document.getElementById('c04')
    ];

    const projectButtons = [
        document.getElementById('show-resume'),
        document.getElementById('proj-but1'),
        document.getElementById('proj-but2'),
        document.getElementById('proj-but3')
    ];


    const cards = [
        'resume',
        'proj-card1',
        'proj-card2',
        'proj-card3'
    ];

    const pulls = [
        document.getElementById('resume'),
        document.getElementById('proj-card1'),
        document.getElementById('proj-card2'),
        document.getElementById('proj-card3')
    ];

    const cssClassActive = 'resume-active';

    const cssPullout = [
        'res-pullout',
        'card1-pullout',
        'card2-pullout',
        'card3-pullout',
    ];



    const closeResume = document.getElementById('x-button');

    closeResume.addEventListener('mousedown', function () {
        closeResume.style.color = 'var(--peach)';
    });

    closeResume.addEventListener('mouseup', function () {
        closeResume.style.color = 'var(--off_white)';
    });

    closeResume.addEventListener('click', function () {
        oneCardToggle(cards[0], 0, cards);
        console.log("Clicked!!");
    });

    for(var i = 0; i < pulls.length; ++i) {
        addCardPullAnimations(pulls[i], cssClassActive, cssPullout[i], i, cards, cards[i], projectButtons[i]);
    }

    for(var i = 0; i < buttons.length; ++i) {
        addButtonAnimations(projectButtons[i], buttons[i], content[i], i, cards, cards[i]);
    }


    typeMessage("Hello, I'm ", 'intro', function () {
        typeMessage("Sovann", 'name', function () {

            const sovann = document.getElementById('name');

            sovann.style.cursor = 'pointer';

            sovann.addEventListener('mousedown', function () {
                sovann.style.textDecorationColor = '#E87A4C';
            });

            document.body.addEventListener('mouseup', function () {
                sovann.style.textDecorationColor = 'var(--peach)';
            });

            sovann.addEventListener('click', function () {

                let fyi = document.getElementById('fyi');

                showOrHide(fyi);
            });

        }, 1000);
    }, 800);
})();


function oneCardToggle(project, str, cards) {

    const proj = document.getElementById(project);
    const content = document.getElementsByClassName('content');
    var activeBeginning = proj.classList.contains('resume-active');

    for( var i = 0; i < cards.length; ++i ) {

        if(cards[i] !== project && document.getElementById(cards[i]).classList.contains('resume-active')) {
            document.getElementById(cards[i]).classList.toggle('resume-active');
            document.getElementById(cards[i]).classList.toggle('right-hidden'+i);
            activeBeginning = true;
        }
    }

    proj.classList.toggle('right-hidden'+str);
    proj.classList.toggle('resume-active');

    var activeEnd = proj.classList.contains('resume-active');


    if(activeBeginning !== activeEnd) {
        for (var i = 0; i < content.length; ++i) {
            content[i].classList.toggle('content-width-no-resume');
            content[i].classList.toggle('content-width-resume');
        }
    }
}

function showOrHide(content) {
    console.log("clicked: "+content.style.display);
    if (content.style.display === 'none' || content.style.display === "") {
        content.style.display = 'block';
    }
    else {
        content.style.display = 'none';
    }
}

async function typeMessage(string, ele, func, x) {

    for (let i = 0; i < string.length; ++i) {
        appendChar(string[i], i, ele);
    }

    await resolveAfterX(x);

    if (ele === 'intro') {
        document.getElementById(ele).innerHTML += "<span id=\"name\" style=\"text-decoration: underline;\n" +
            "-webkit-text-decoration-color: var(--peach);\n" +
            "text-decoration-color: var(--peach);\"></span>.";
    }

    if (func != null) {
        func();
    }
}

function appendChar(char, i, ele) {
    setTimeout(function () {
        document.getElementById(ele).innerHTML += char;
    }, 60 * i);
}


function resolveAfterX(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, x);
    });
}

function addCardPullAnimations(pullCard, cssClassActive, cssPullout, index, cards, id, projectButton) {

    //Mouse over animation
    pullCard.addEventListener('mouseover', function () {
        if(!pullCard.classList.contains(cssClassActive) &&
            !pullCard.classList.contains(cssPullout)) {
            pullCard.classList.toggle(cssPullout);
        }
    });

    //Mouse out animation
    pullCard.addEventListener('mouseout', function () {
        if(!pullCard.classList.contains(cssClassActive) &&
            pullCard.classList.contains(cssPullout)) {
            pullCard.classList.toggle(cssPullout);
        }
    });

    //Click animations
    pullCard.addEventListener('click', function () {
        if(!pullCard.classList.contains(cssClassActive) &&
            pullCard.classList.contains(cssPullout)) {
            pullCard.classList.toggle(cssPullout);
        }

        oneCardToggle(id, index, cards);
    });

    //Project buttons
    projectButton.addEventListener('click', function () {
        oneCardToggle(id, index, cards);
    });
}


function addButtonAnimations(projectButton, button, content) {
    button.addEventListener('click', function () {
        showOrHide(content)
    });
}


