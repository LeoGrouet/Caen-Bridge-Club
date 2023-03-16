const adminPopup = document.getElementById("logAdmin");
const popupLogin = document.getElementById("popupLogin");
const div1 = document.getElementById("main-div");
const div2 = document.getElementById("second-div");
const div3 = document.getElementById("third-div");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const closeButton = document.getElementById("closeButton");
const y = window.scrollY;

const popupController = {
  open: adminPopup.addEventListener("click", () => {
    window.scroll(0, 0);
    popupLogin.style.display = "flex";
    const elements = [div1, div2, div3, header, footer];
    elements.forEach((element) => {
      element.style.filter = "blur(5px)";
    });
  }),

  close: closeButton.addEventListener("click", () => {
    popupLogin.style.display = "none";
    const elements = [div1, div2, div3, header, footer];
    elements.forEach((element) => {
      element.style.filter = "none";
    });
  }),
};
