import { langTags } from "./dictionary.js";
const langArr = langTags();

// Дроп меню
const LangBtn = document.querySelector(".drop-down-btn");
const LangMenu = document.querySelector(".language-menu");
const Lang = document.querySelector(".langBar");
const LangArrow = document.querySelector("#LangArrow");

let timeout;

const LangMenuOpen = () => {
    LangMenu.style.display = "flex";
    LangArrow.style.transform = "rotate(180deg)";
    clearTimeout(timeout);
};
const LangMenuClose = () => {
    timeout = setTimeout(() => {
        LangMenu.style.display = "none";
        LangArrow.style.transform = "rotate(0deg)";
    }, 1500);
};

LangBtn.addEventListener("mouseover", LangMenuOpen);
LangMenu.addEventListener("mouseover", LangMenuOpen);
LangBtn.addEventListener("mouseout", LangMenuClose);
LangMenu.addEventListener("mouseout", LangMenuClose);

// Словарь
const Title = {
    title: {
        ua: "Податкова декларація Online",
        cz: "Daňové přiznání Online",
    },
};

// Функционал перевода
const allLang = ["cz", "ua"];
var langItems = document.getElementsByClassName("language-item");
var btnImg = document.getElementById("LangBtnImg");
var btnTitle = document.getElementById("LangBtnTitle");

const LocationIndex = window.location.href.split("#")[1];
let languageIndex;

if (LocationIndex) {
    languageIndex = LocationIndex.toUpperCase();
}

if (languageIndex) {
    btnImg.src = `assets/icons/${languageIndex}.png`;
    btnTitle.innerHTML = languageIndex;
} else btnImg.src = `assets/icons/CZ.png`;

for (var i = 0; i < langItems.length; i++) {
    var langItem = langItems[i];
    langItem.onclick = changeLanguage;
}

function changeLanguage(e) {
    btnImg.src = "assets/icons/" + this.dataset.lang + ".png";
    btnTitle.innerText = this.dataset.lang;
    location.href = window.location.pathname + "#" + this.dataset.lang;
    location.reload();
}

function changeLanguageHash() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#cz";
        location.reload();
    }
    document.querySelector("title").innerHTML = Title["title"][hash];
    for (let key in langArr) {
        document.querySelector(`.${key}`).innerHTML = langArr[key][hash];
    }
}
document.addEventListener("DOMContentLoaded", changeLanguageHash());
