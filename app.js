window.addEventListener('scroll', trigger);

function trigger() {
    var triggers = document.querySelectorAll('.trigger');

    for (var i = 0; i < triggers.length; i++) {
        var windowheight = window.innerHeight;
        var triggertop = triggers[i].getBoundingClientRect().top;
        var triggerpoint = -150;

        if (triggertop < windowheight - triggerpoint) {
            triggers[i].classList.add('active');
        }
        else {
            none;
        }
    }
}