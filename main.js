// ------------------ select image for the device --------------------
// find what is the device
let Device = document.documentElement.clientWidth < 700 ? "mobile" : "desktop";

// element selector
let hero = document.querySelector(".hero img");

// add the image for the page
hero.setAttribute("src", `assets/images/image-web-3-${Device}.jpg`);

// -------------------------- Menu section ---------------------------
// elements selector
const hamburgerBtn = document.getElementsByClassName("menu")[0];
const closeBtn = document.getElementsByClassName("close")[0];
const linksList = document.getElementsByClassName("nav")[0];
const layer = document.getElementsByClassName("layer")[0];

// clicks events
hamburgerBtn.addEventListener('click', () => {
    linksList.classList.add("open-menu");
    hamburgerBtn.classList.add("hide");
    layer.classList.remove("hide");
    closeBtn.classList.remove("hide");

});

closeBtn.addEventListener('click', () => {
    linksList.classList.remove("open-menu");
    hamburgerBtn.classList.remove("hide");
    layer.classList.add("hide");
    closeBtn.classList.add("hide");
});

// click on the layer to close the menu
layer.addEventListener('click', () => {
    linksList.classList.remove("open-menu");
    hamburgerBtn.classList.remove("hide");
    layer.classList.add("hide");
    closeBtn.classList.add("hide");
});