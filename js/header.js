const BtnGeneralMenu = document.querySelector(".headerNavMenuBtn");
const MenuGeneralMenu = document.querySelector(".headerNavMenuMenu");

function toggleMenuHeader(event) {
    MenuGeneralMenu.classList.toggle("Show");
    event.stopPropagation();
}

BtnGeneralMenu.addEventListener("click", toggleMenuHeader);

document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickInsideMenu = MenuGeneralMenu.contains(target);
    const isClickInsideBtn = BtnGeneralMenu.contains(target);
    if (!isClickInsideMenu && !isClickInsideBtn) {
        MenuGeneralMenu.classList.remove("Show");
    }
});

MenuGeneralMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("submenu-items")) {
        MenuGeneralMenu.classList.remove("Show");
    }
});
