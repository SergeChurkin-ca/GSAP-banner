// legap popup

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

// chevrons animation

const tl = gsap.timeline({ repeat: -1 });
/*
tl.from(".chevrons", { duration: 1.5, x: -90, opacity: 0.3, ease: 'power2' })
    .to('.slide-1', { duration: 1.5, opacity: 0, delay: 1 }, "+=1")
    .to('.chevrons', { duration: 1, x: 0, opacity: 1 }, 1)