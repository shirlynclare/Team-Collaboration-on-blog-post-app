const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went, make sure that ${selector} exists or is typed correctly.`);
};

const scrollHeader = () => {
    const headerElement= selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }

};

window.addEventListener('scroll', scrollHeader);


const menuToggleIcon = selectElement(`#menu-toggle-icon`);

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);