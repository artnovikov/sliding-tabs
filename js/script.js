function tabs(event) {
    let tabs = document.getElementsByClassName("tabs__link");
    let glider = document.getElementsByClassName("glider");
    for (let tab of tabs) {
        tab.classList.remove("active");
    }
    event.classList.add("active");

    if (tabs[0].classList.contains("active")) {
        glider[0].setAttribute("style", "transform: translateX(0)");
    }
    else if (tabs[1].classList.contains("active")) {
        glider[0].setAttribute("style", "transform: translateX(100%)");
    }
    else if (tabs[2].classList.contains("active")) {
        glider[0].setAttribute("style", "transform: translateX(200%)");
    }
}