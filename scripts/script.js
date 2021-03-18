document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector("nav");
    // Desktop Version
    // When page is scrolled navbar gets a backgroundColor
    if (window.innerWidth >= 800) {
        document.addEventListener("scroll", () => {
            window.scrollY > 200 ? nav.style.backgroundColor = "rgb(20, 20, 20)" : nav.style.backgroundColor = "transparent";
        })
    }

    // Mobile Version
    // navigation links hides after clicking one of the options
    if (window.innerWidth < 800) {
        let navLinks = document.querySelectorAll(".nav-link");
        let hamburgerCheckbox = document.querySelector("#hamburger-checkbox");
        for (navLink of navLinks) {
            navLink.children[0].addEventListener("click", () => hamburgerCheckbox.checked = false);
        }
    }

    // Nav links going to section didnt mention navbar height
    let navHeight = nav.offsetHeight;
    document.querySelector("#whyus-target").style.top = (`${-navHeight}px`);
    document.querySelector("#offer-target").style.top = (`${-navHeight}px`);
})
