//Introduction to site.
(function () {

    const b00 = document.getElementById('b00');
    const b01 = document.getElementById('b01');
    const b02 = document.getElementById('b02');
    const b03 = document.getElementById('b03');


    const c00 = document.getElementById('c00');
    const c01 = document.getElementById('c01');
    const c02 = document.getElementById('c02');
    const c03 = document.getElementById('c03');

    const resume_button = document.getElementById('show-resume');
    const x_resume = document.getElementById('x-button');

    x_resume.addEventListener('mousedown', function () {
        x_resume.style.color = 'var(--peach)';
    });

    x_resume.addEventListener('mouseup', function () {
        x_resume.style.color = 'var(--off_white)';
    });


    x_resume.addEventListener('click', function () {
        resume_toggle();
    });

    resume_button.addEventListener('click', function () {
        resume_toggle();
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

function resume_toggle() {

    const resume = document.getElementById('resume');
    const content = document.getElementsByClassName('content');


    for( var i = 0; i < content.length; ++i ) {
        content[i].classList.toggle('content-width-no-resume');
        content[i].classList.toggle('content-width-resume');
    }

    resume.classList.toggle('right-hidden');
    resume.classList.toggle('resume-active');
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