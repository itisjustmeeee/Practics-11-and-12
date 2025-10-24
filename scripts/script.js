function toggleTheme() {
    const body = document.body;
    const page = document.querySelector('.page');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('.footer')

    const isDark = body.classList.toggle('dark-theme_back');
    if (page) page.classList.toggle('dark-theme_page');
    if (header) header.classList.toggle('dark-theme_header');
    if (nav) nav.classList.toggle('dark-theme_menu');
    if (main) main.classList.toggle('dark-theme_main');
    if (footer) footer.classList.toggle('dark_theme_footer');


    localStorage.setItem('theme', isDark ? 'dark' : 'light');


    document.querySelectorAll('.theme-toggle').forEach(button => {
        button.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const page = document.querySelector('.page');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('.footer');

    if (theme === 'dark') {
        body.classList.add('dark-theme_back');
        if (page) page.classList.add('dark-theme_page');
        if (header) header.classList.add('dark-theme_header');
        if (nav) nav.classList.add('dark-theme_menu');
        if (main) main.classList.add('dark-theme_main');
        if (footer) footer.classList.add('dark_theme_footer')
        titles.forEach(title => title.classList.add('dark-theme_title'));
        texts.forEach(text => text.classList.add('dark-theme_text'));
        document.querySelectorAll('.theme-toggle').forEach(button => {
            button.textContent = 'Светлая тема';
        });
    } else {
        body.classList.remove('dark-theme_back');
        if (page) page.classList.remove('dark-theme_page');
        if (header) header.classList.remove('dark-theme_header');
        if (nav) nav.classList.remove('dark-theme_menu');
        if (main) main.classList.remove('dark-theme_main');
        if (footer) footer.classList.remove('dark_theme_footer');
        document.querySelectorAll('.theme-toggle').forEach(button => {
            button.textContent = 'Тёмная тема';
        });
    }
});