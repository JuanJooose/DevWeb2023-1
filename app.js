document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
});

function iniciarApp() {
    openNavs();
}

function openNavs() {
    const closeSectionNav = document.querySelector(".open--section--navs");
    closeSectionNav.textContent = "OPTIONS";

    closeSectionNav.onClick = function () {
        const newSection = document.createElement("SECTION");
        const header = document.querySelector(".container--header");
        newSection.classList.add("section--header");


    };

}

