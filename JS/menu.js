console.log("Bonsoir Menu !");

const menuButton = document.getElementById("toggleMenu");
const menu = document.getElementById("nav_menu")
console.log(menuButton, menu);
let menuShowed = false


menuButton.addEventListener("click", ()=> {
    if(!menuShowed) {
        menuShowed = true;
        menu.classList.add('active_nav')
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
    }else {
        menuShowed = false;
        menu.classList.remove('active_nav')
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
    }


})