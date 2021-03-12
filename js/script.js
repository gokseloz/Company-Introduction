let memberBtn = document.querySelectorAll(".member-btn")
let customerBtn = document.querySelectorAll(".customer-btn")
let customer = document.querySelectorAll(".customer")

memberBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
        btn.parentNode.children[4].classList.toggle("active")
    })
});


customerBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.classList.toggle("rotate")
    })
})