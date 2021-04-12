const closePopUpButton = document.querySelector(".btn-close");
const openPopUpButton = document.querySelector(".btn-legal");

closePopUpButton.addEventListener("click", popUpClose);
openPopUpButton.addEventListener("click", popUpOpen);

function popUpClose() {
    document.querySelector('.legal-popup').style.cssText = "display: none"
    document.querySelector('.banner-wrapper').style.cssText = "display: block; transition: 1s ease"
}

function popUpOpen() {
    document.querySelector('.legal-popup').style.cssText = "display: block";
    document.querySelector('.banner-wrapper').style.cssText = "display: none"
}