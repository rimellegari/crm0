class MobileNavbar {
    constructor(mobileMenu,navList,navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active" /*propriedade para ativar navbar*/
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation= "")
            : (link.style.animation= `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass); /*mostrar menu lateral*/
        this.animateLinks(); /*mostrar links*/
    }

/*método para adicionar o evento de click*/

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick); 
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

/*criando um objeto baseado nas classes criadas */

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    '.nav-list',
    '.nav-list li',
);

mobileNavbar.init();