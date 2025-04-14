console.log('Bonsoir Accordéon');

const accordeon_buttons = document.querySelectorAll(".accordeon_label")
console.log(accordeon_buttons);
const accordeon_contents = document.querySelectorAll(".accordeon_content")
console.log(accordeon_contents);

if(window.matchMedia("(min-width: 1025px)").matches) {
    accordeon_buttons.forEach((label) => {
        label.classList.add("active_label")
    })
    accordeon_contents.forEach((content) => {
        content.classList.add("active")
    })
}else {
    accordeon_contents[0].classList.add("active")
    accordeon_buttons[0].classList.add("active_label")
}


accordeon_buttons.forEach((button) =>(button.addEventListener('click',() => {
    console.log('clicked');
    for(i=0; i < accordeon_contents.length; i++) {
        if(accordeon_contents[i].getAttribute("data-accordeon") === button.getAttribute("data-accordeon")) {
            console.log('bonsoir ! On est bon');
            if(accordeon_contents[i].classList.contains('active')) {
                accordeon_contents[i].classList.remove("active")
                button.classList.remove("active_label")
            } else {
                accordeon_contents[i].classList.add("active")
                button.classList.add("active_label")
            }
        }
    }
})))