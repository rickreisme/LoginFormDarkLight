const modo = document.getElementById('mode_icon');

modo.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(modo.classList.contains('fa-moon')){
        modo.classList.remove('fa-moon');
        modo.classList.add('fa-sun');

        form.classList.add('dark');
    }
    else if(modo.classList.contains('fa-sun')){
        modo.classList.remove('fa-sun');
        modo.classList.add('fa-moon')

        form.classList.remove('dark');
    }
});