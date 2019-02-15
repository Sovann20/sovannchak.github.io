//Introduction to site.
(function () {

    const b00 = document.getElementById('b00');
    const b01 = document.getElementById('b01');
    const b02 = document.getElementById('b02');
    const b03 = document.getElementById('b03');
    const b04 = document.getElementById('b04');

    const c00 = document.getElementById('c00');
    const c01 = document.getElementById('c01');
    const c02 = document.getElementById('c02');
    const c03 = document.getElementById('c03');
    const c04 = document.getElementById('c04');

    const resume_button = document.getElementById('show-resume');

    const p01 = document.getElementById('proj-but1');
    const p02 = document.getElementById('proj-but2');
    const p03 = document.getElementById('proj-but3');

    const cards = ["resume", "proj-card1", "proj-card2", "proj-card3"];

    const resume_cardpull = document.getElementById('resume');
    const pull1 = document.getElementById('proj-card1');
    const pull2 = document.getElementById('proj-card2');
    const pull3 = document.getElementById('proj-card3');

    const x_resume = document.getElementById('x-button');

    resume_cardpull.addEventListener('mouseover', function () {
        if(!resume_cardpull.classList.contains('resume-active') &&
            !resume_cardpull.classList.contains('res-pullout')) {
            resume_cardpull.classList.toggle('res-pullout');
        }
    });

    resume_cardpull.addEventListener('mouseout', function () {
        if(!resume_cardpull.classList.contains('resume-active') &&
            resume_cardpull.classList.contains('res-pullout')) {
            resume_cardpull.classList.toggle('res-pullout');
        }
    });

    pull1.addEventListener('mouseout', function () {
        if(!pull1.classList.contains('resume-active') &&
            pull1.classList.contains('card1-pullout')) {
            pull1.classList.toggle('card1-pullout');
        }
    });

    pull1.addEventListener('mouseover', function () {
        if(!pull1.classList.contains('resume-active') &&
            !pull1.classList.contains('card1-pullout')) {
            pull1.classList.toggle('card1-pullout');
        }
    });

    pull2.addEventListener('mouseout', function () {
        if(!pull2.classList.contains('resume-active') &&
            pull2.classList.contains('card2-pullout')) {
            pull2.classList.toggle('card2-pullout');
        }
    });

    pull2.addEventListener('mouseover', function () {
        if(!pull2.classList.contains('resume-active') &&
            !pull2.classList.contains('card2-pullout')) {
            pull2.classList.toggle('card2-pullout');
        }
    });

    pull3.addEventListener('mouseover', function () {
        if(!pull3.classList.contains('resume-active') &&
            !pull3.classList.contains('card3-pullout')) {
            pull3.classList.toggle('card3-pullout');
        }
    });

    pull3.addEventListener('mouseout', function () {
        if(!pull3.classList.contains('resume-active') &&
            pull3.classList.contains('card3-pullout')) {
            pull3.classList.toggle('card3-pullout');
        }
    });

    x_resume.addEventListener('mousedown', function () {
        x_resume.style.color = 'var(--peach)';
    });

    x_resume.addEventListener('mouseup', function () {
        x_resume.style.color = 'var(--off_white)';
    });


    x_resume.addEventListener('click', function () {
        proj('resume', '0', cards);
    });

    resume_button.addEventListener('click', function () {
        proj('resume', '0', cards);
    });

    p01.addEventListener('click', function () {
        proj('proj-card1', '1', cards);
    });

    p02.addEventListener('click', function () {
        proj('proj-card2', '2', cards);
    });

    p03.addEventListener('click', function () {
        proj('proj-card3', '3', cards);
    });

    b00.addEventListener('click', function () {
        show_or_hide(c00);
    });

    b01.addEventListener('click', function () {
        show_or_hide(c01);
    });

    b02.addEventListener('click', function () {
        show_or_hide(c02);
    });

    b03.addEventListener('click', function () {
        show_or_hide(c03);
    });
    
    b04.addEventListener('click', function () {
        show_or_hide(c04);
    });


    type_msg("Hello, I'm ", 'intro', function () {
        type_msg("Sovann", 'name', function () {

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

                show_or_hide(fyi);
            });

        }, 1000);
    }, 800);
})();


function proj(proj_, str, cards) {

    const proj = document.getElementById(proj_);
    const content = document.getElementsByClassName('content');
    var active_beginning = proj.classList.contains('resume-active');

    for( var i = 0; i < cards.length; ++i ) {

        if(cards[i] !== proj_ && document.getElementById(cards[i]).classList.contains('resume-active')) {
            document.getElementById(cards[i]).classList.toggle('resume-active');
            document.getElementById(cards[i]).classList.toggle('right-hidden'+i);
            active_beginning = true;
        }
    }

    proj.classList.toggle('right-hidden'+str);
    proj.classList.toggle('resume-active');

    var active_end = proj.classList.contains('resume-active');


    if(active_beginning !== active_end) {
        for (var i = 0; i < content.length; ++i) {
            content[i].classList.toggle('content-width-no-resume');
            content[i].classList.toggle('content-width-resume');
        }
    }
}

function show_or_hide(content) {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    }
    else {
        content.style.display = 'none';
    }
}

async function type_msg(string, ele, func, x) {

    for (let i = 0; i < string.length; ++i) {
        append_char(string[i], i, ele);
    }

    await resolve_after_x(x);

    if (ele === 'intro') {
        document.getElementById(ele).innerHTML += "<span id=\"name\" style=\"text-decoration: underline;\n" +
            "-webkit-text-decoration-color: var(--peach);\n" +
            "text-decoration-color: var(--peach);\"></span>.";
    }

    if (func != null) {
        func();
    }
}

function append_char(char, i, ele) {
    setTimeout(function () {
        document.getElementById(ele).innerHTML += char;
    }, 60 * i);
}


function resolve_after_x(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, x);
    });
}
