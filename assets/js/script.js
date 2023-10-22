const modo = document.getElementById('mode_icon');
const git = document.getElementById('git-icon');
const goog = document.getElementById('google-icon');
const face = document.getElementById('face-icon');

modo.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(modo.classList.contains('fa-moon')){
        modo.classList.remove('fa-moon');
        modo.classList.add('fa-sun');
        form.classList.add('dark');

        git.style.color = 'white';
        goog.style.color = '#0FD90F';
        face.style.color = '#1056e0';
    }
    else if(modo.classList.contains('fa-sun')){
        modo.classList.remove('fa-sun');
        modo.classList.add('fa-moon')
        form.classList.remove('dark');

        git.style.color = 'black';
        goog.style.color = '#076907';
        face.style.color = '#355390';
    }
});