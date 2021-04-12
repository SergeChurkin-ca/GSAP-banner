const closePopUpButton = document.querySelector(".btn-close");


closePopUpButton.addEventListener("click", popUpClose);

function popUpClose() {
    document.querySelector('.legal-popup').style.cssText = "display: none"
}