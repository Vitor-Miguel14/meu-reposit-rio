let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const header = document.querySelector('header');
  
    // Verifica a preferência salva do usuário
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      header.classList.add(savedTheme);
    }
  
    themeToggle.addEventListener('click', () => {
      // Alterna entre os temas
      if (document.body.classList.contains('theme-light')) {
        document.body.classList.remove('theme-light');
        header.classList.remove('theme-light');
        localStorage.setItem('theme', '');
      } else {
        document.body.classList.add('theme-light');
        header.classList.add('theme-light');
        localStorage.setItem('theme', 'theme-light');
      }
    });
  });
  