let memberBtn = document.querySelector(".member-btn")
let memberStory = document.querySelector(".member-story")
let memberAboutMe = document.querySelector(".member-aboutMe")

memberBtn.addEventListener("click", () => {
    memberAboutMe.classList.toggle("active")
    memberBtn.classList.toggle("active")

})