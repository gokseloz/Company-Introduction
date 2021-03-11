let memberBtn = document.querySelectorAll(".member-btn")

memberBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
        btn.parentNode.children[4].classList.toggle("active") 
    })
});