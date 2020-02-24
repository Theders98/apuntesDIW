let menu = document.getElementById('menu')
let elements = document.getElementsByClassName("menu__link")

let x = window.matchMedia("(max-width: 499px)")
x.addListener(menuVisibility)
menuVisibility(x)


function menuVisibility(x) {
    if(x.matches) {
        menu.className = "menu-mobile";
    } else {
        menu.className = "menu";
    }
}

function toggleMenuVisibility() {
    
    for (var i = 0; i < elements.length; i++) {
        let element = elements[i]

        if (element.className.indexOf("menu__link--visible") >= 0) { 
            element.className = " menu__link menu__link--hide"
        } else { 
            element.className = "menu__link menu__link--visible"
        } 
    } 
}