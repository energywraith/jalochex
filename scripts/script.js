document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector("nav");
    // Desktop Version
    // Set background to navbar when user is scrolling through the page
    if (window.innerWidth >= 900) {
        document.addEventListener("scroll", () => {
            window.scrollY > 200 ? nav.style.backgroundColor = "rgb(20, 20, 20)" : nav.style.backgroundColor = "transparent";
        })
    }

    // Mobile Version
    // navigation links hides after clicking one of the options
    if (window.innerWidth < 900) {
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

    // Contact form submit button event
    const contactForm = document.querySelector(".contact-form");
    const contactFormErrors = contactForm.querySelector(".errors");
    const contactFormSuccess = contactForm.querySelector(".success");
    contactForm.addEventListener("submit", event => sendMail(event));

    function sendMail (event) {
        // Remove default submit event to prevent page from reloading
        event.preventDefault();

        contactForm.removeEventListener("submit", sendMail);
        
        let inputData = {
            Mail: contactForm.querySelector("input#userMail"),
            PhoneNumber: contactForm.querySelector("input#userPhoneNumber"),
            Message: contactForm.querySelector("textarea#userMessage")
        }

        if(!inputData.Mail.value && !inputData.PhoneNumber.value) {
            inputData.Mail.style.outline = "red inset 2px";
            inputData.PhoneNumber.style.outline = "red inset 2px";
            contactFormErrors.innerHTML="Wpisz swój email lub numer telefonu";
            return false;
        }

        postAjax('./mail.php', { 
                mail: inputData.Mail.value, 
                subject: "Wiadomość ze strony Jałochex", 
                content: `Email osoby wysylajacej: ${inputData.Mail.value}\nnr. telefonu: ${inputData.PhoneNumber.value}\nwiadomosc: ${inputData.Message.value}` 
            }, 
            function(data){
                contactFormSuccess.innerHTML="Wiadomość została wysłana"; 
                contactFormErrors.innerHTML=""; 
                inputData.Mail.style.outline = "";
                inputData.PhoneNumber.style.outline = "";
                contactForm.reset(); 
                contactForm.addEventListener("submit", event => sendMail(event));
            }
        );
    }
})