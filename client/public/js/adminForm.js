const adminPopup = document.getElementById("logAdmin");
const popupLogin = document.getElementById("popupLogin")
const body = document.getElementById("body")
const y = window.scrollY;

adminPopup.addEventListener("click",() => {
    window.scroll(0, 0)
    body.style.filter = "blur(5px)"
    popupLogin.style.filter= "none"
    popupLogin.style.display = "flex"
})