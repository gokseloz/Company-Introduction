let memberBtn = document.querySelectorAll(".member-btn")
let customerBtn = document.querySelectorAll(".customer-btn")
let customer = document.querySelectorAll(".customer")

let inputs = document.querySelectorAll(".inputs")
let successText = document.querySelector(".form-successText")
let warningText = document.querySelector(".form-warningText")
let contactForm = document.querySelector(".contact-form")
let inputName = document.querySelector(".form-name")
let inputEmail = document.querySelector(".form-email")
let textArea = document.querySelector(".form-textArea")

customerBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.classList.toggle("rotate")
        if (btn.parentElement.parentElement.classList.contains("rotate")) {
            btn.setAttribute("aria-pressed", "true")
        } else {
            btn.setAttribute("aria-pressed", "false")
        }
    })
})

memberBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
        btn.parentNode.children[4].classList.toggle("active")
    })
});


const warning = () => {
    warningText.style.display = "block"
    successText.style.display = "none"
    alert("please type everything correctly")
}


const logSubmit = (e) => {
    e.preventDefault()

    if (inputName.value == "" || inputEmail.value == "" || textArea.value == "") {
        warning()

    } else {
        successText.style.display = "block"
        warningText.style.display = "none"

        inputs.forEach(input => {
            input.value = ""
        })

        setTimeout(() => {
            successText.style.display = "none"
        }, 3000);
        alert("Your message has successfully sent")

    }
}


inputEmail.addEventListener("invalid", (e) => {
    e.preventDefault()
    warning()

})

contactForm.addEventListener("submit", logSubmit)