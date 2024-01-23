// Дроп меню
const LangBtn = document.querySelector(".drop-down-btn");
const LangMenu = document.querySelector(".language-menu");
const Lang = document.querySelector(".langBar");
const LangArrow = document.querySelector("#LangArrow");

LangBtn.addEventListener("mouseenter", () => {
    LangMenu.style.display = "flex";
    LangArrow.style.transform = "rotate(180deg)";
});

Lang.addEventListener("mouseleave", () => {
    setTimeout(() => {
        LangMenu.style.display = "none";
        LangArrow.style.transform = "rotate(0deg)";
    }, 1500);
});

// Словарь
const Title = {
    title: {
        ua: "Податкова декларація Online",
        cz: "Daňové přiznání Online",
    },
};
const langArr = {
    lsg_header_title: { ua: "Податкова декларація", cz: "Daňové přiznání" },
    HeaderIndividual: { ua: "Фізична особа", cz: "Fyzická osoba" },
    HeaderEntity: { ua: "Юридична особа", cz: "Právnická osoba" },
    headerNavMenuHomeSp: { ua: "Головна", cz: "Hlavní" },
    headerNavMenuFunctionalitySp: { ua: "Функції", cz: "Funkce" },
    headerNavMenuDocumentsSp: { ua: "Документи", cz: "Doklady" },
    headerNavMenuPriceSp: { ua: "Прайс-лист", cz: "Ceník" },
    headerNavMenuContactsSp: { ua: "Контакти", cz: "Kontakty" },
    headerNavMenuOrderSp: { ua: "Замовити", cz: "Objednat" },
    lsgMainGeneralTextTitle: {
        ua: "Декларація про доходи за 2023 рік.",
        cz: "Daňové přiznání za rok 2023.",
    },
    lsgMainGeneralTextContent: {
        ua: "Оформіть свою декларацію про доходи для фізичних осіб у простому онлайн-додатку. Достатньо відповідати на питання. Протягом заповнення ви бачите розрахунок податку, тож ви відразу знаєте, як виходять ваші податки. Готову декларацію ми підготуємо у форматах PDF та XML. Найбільш доступний додаток на ринку, всього за 350 грн.",
        cz: "Zpracujte si daňové přiznání pro fyzické osoby v jednoduché online aplikaci. Stačí jen odpovídat na otázky. V průběhu vyplňování vidíte výpočet daně, hned tedy víte, jak vám daně vychází. Hotové přiznání vám připravíme ve formátu PDF a XML. Nejlevnější aplikace na trhu, jen za 350 Kč.",
    },
    lsgFunctionsTitle: { ua: "Як це працює?", cz: "Jak to funguje?" },
    lsgFunctionCardsTextFillingTitle: {
        ua: "Ви заповнюєте форму",
        cz: "Vyplníte formulář",
    },
    lsgFunctionCardsTextFillingContent: {
        ua: "Відповідаєте на питання анкети, та програма проведе вас крок за кроком.",
        cz: "Odpovídáte na otázky jako v dotazníku. Aplikace vás provede krok za krokem.",
    },
    lsgFunctionCardsTextDownloadTitle: {
        ua: "Отримуєте готову декларацію",
        cz: "Dostanete hotovou daňovou přiznání",
    },
    lsgFunctionCardsTextDownloadContent: {
        ua: "По завершенню заповнення ви зможете завантажити готову податкову декларацію у форматах PDF та XML, і ми також висилатимемо її вам електронною поштою.",
        cz: "Po dokončení vyplňování si budete moci stáhnout hotové daňové přiznání ve formátech PDF a XML, a my vám je rovněž zašleme e-mailem.",
    },
    lsgFunctionCardsTextSendingTitile: {
        ua: "Відправити до finančního úřadu",
        cz: "Odeslat na finanční úřad",
    },
    lsgFunctionCardsTextSendingContent: {
        ua: "Готовий пакет документів потрібно відправити finančního úřadu через datovou schránku.",
        cz: "Hotový balíček dokumentů je třeba odeslat finančnímu úřadu prostřednictvím datové schránky.",
    },
    lsgDocumentsTitle: {
        ua: "Які документи додати до річного податкового розрахунку та податкової декларації?",
        cz: "Které dokumenty přiložit k ročnímu zúčtování daně a k daňovému přiznání?",
    },
    documentsDetailsListTitle1: {
        ua: "Ви можете вирахувати наступні статті, що підлягають вирахуванню, із вашої податкової бази:",
        cz: "Od základu daně si můžete odečíst tyto odčitatelné položky:",
    },
    documentsDetailsMartgage: {
        ua: "Іпотечний відсоток",
        cz: "Úroky z hypotéky",
    },
    documentsDetailsInsurance: {
        ua: "Страхування життя",
        cz: "Životní pojištění",
    },
    documentsDetailsPension: {
        ua: "Збереження на пенсію",
        cz: "Spoření na penzi",
    },
    documentsDetailsGifts: { ua: "Подарунки", cz: "Dary" },
    documentsDetailsUnion: {
        ua: "Профспілкові внески",
        cz: "Odborové příspěvky",
    },
    documentsDetailsExams: {
        ua: "Оплата іспитів, що підтверджують результати подальшого навчання",
        cz: "Úhrada za zkoušky ověřující výsledky dalšího vzdělávání",
    },
    documentsDetailsListTitle2: {
        ua: "Потім ви можете відняти податкову знижку з розрахованого податку:",
        cz: "Z vypočítané daně si následně můžete odečíst slevu na dani:",
    },
    documentsDetailsTaxpayer: { ua: "Платнику податків", cz: "Na poplatníka" },
    documentsDetailsWife: { ua: "Дружині/чоловіку", cz: "Na manželku/manžela" },
    documentsDetailsDisWife: {
        ua: "Для дружини/чоловіка - власник ZTP/P",
        cz: "Na manželku/manžela – držitele ZTP/P",
    },
    documentsDetailsDisPensioner: {
        ua: "Для пенсіонерів по інвалідності",
        cz: "Pro invalidní důchodce",
    },
    documentsDetailsDisabled: {
        ua: "Для власників картки ZTP/P",
        cz: "Pro držitele průkazu ZTP/P",
    },
    documentsDetailsStudent: { ua: "Студенту", cz: "Na studenta" },
    documentsDetailsSchool: { ua: "За шкільні збори", cz: "Za školkovné" },
    documentsDetailsChildren: {
        ua: "Пільгу для дітей",
        cz: "Zvýhodnění na děti.",
    },
    documentsDetailsDocumentsMartgage1: {
        ua: "підтвердження про наданий кредит на житлові потреби та розмір сплачених відсотків за цим кредитом",
        cz: "potvrzení o poskytnutém úvěru na bytové potřeby a o výši zaplacených úroků z tohoto úvěru",
    },
    documentsDetailsDocumentsMartgage2: {
        ua: "ви повинні бути в змозі довести, що використовуєте майно для житла",
        cz: "musíte být schopni doložit, že nemovitost používáte k bydlení",
    },
    documentsDetailsDocumentsMartgage3: {
        ua: "договір іпотечного кредиту",
        cz: "smlouvu o hypotečním úvěru",
    },
    documentsDetailsDocumentsInsurance1: {
        ua: "підтвердження сплачених сум для приватного страхування життя",
        cz: "potvrzení o zaplacených částkách na soukromé životní pojištění",
    },
    documentsDetailsDocumentsInsurance2: {
        ua: "договір страхування життя",
        cz: "smlouvu o uzavření životního pojištění",
    },
    documentsDetailsDocumentsPension1: {
        ua: "підтвердження сплачених сум на страхування додаткової пенсії або пенсійне страхування",
        cz: "potvrzení o zaplacených částkách na penzijní připojištění nebo penzijní pojištění",
    },
    documentsDetailsDocumentsPension2: {
        ua: "договір про укладення договору страхування додаткової пенсії або пенсійного страхування",
        cz: "smlouvu o uzavření penzijního připojištění nebo penzijního pojištění",
    },
    documentsDetailsDocumentsGifts1: {
        ua: "якщо ви здали кров, кістковий мозок або інші похідні крові безкоштовно, вам потрібне підтвердження від лікарні про забір",
        cz: "pokud jste bezplatně darovali krev, kostní dřeň či jiné krevní deriváty, potřebujete potvrzení z nemocnice o odběru",
    },
    documentsDetailsDocumentsUnion1: {
        ua: "профспілкове підтвердження сплачених внесків",
        cz: "potvrzení odborové organizace o zaplacených příspěvcích",
    },
    documentsDetailsDocumentsExams1: {
        ua: "вам знадобиться підтвердження оплати для іспитів, що підтверджують результати подальшого навчання",
        cz: "budete potřebovat potvrzení o zaplacené úhradě za zkoušky ověřující výsledky dalšího vzdělávání",
    },
    documentsDetailsDocumentsTaxpayer1: {
        ua: "довідка про доходи",
        cz: "potvrzení o příjmu",
    },
    documentsDetailsDocumentsWife1: {
        ua: "письмова заява чоловіка/дружини",
        cz: "čestné prohlášení manžela/manželky",
    },
    documentsDetailsDocumentsWife2: {
        ua: "копія документа, що посвідчує особу подружжя",
        cz: "kopii dokladu prokazující totožnost manžela/manželky",
    },
    documentsDetailsDocumentsDisWife1: {
        ua: "картку ZTP/P дружини",
        cz: "průkaz ZTP/P manžela/manželky",
    },
    documentsDetailsDocumentsDisPensioner1: {
        ua: "копія висновку про призначення пенсії по інвалідності",
        cz: "kopie výměru o přiznání invalidního důchodu",
    },
    documentsDetailsDocumentsDisPensioner2: {
        ua: "підтвердження про виплату пенсії з ČSSZ",
        cz: "potvrzení o výplatě důchodu od ČSSZ",
    },
    documentsDetailsDocumentsDisabled1: {
        ua: "картка ZTP/P",
        cz: "průkaz ZTP/P",
    },
    documentsDetailsDocumentsStudent1: {
        ua: "підтвердження навчання",
        cz: "potvrzení o studiu",
    },
    documentsDetailsDocumentsSchool1: {
        ua: "довідка з дитячого садка про сплачену оплату в дитячий садок",
        cz: "potvrzení ze školky o zaplaceném školkovném",
    },
    documentsDetailsDocumentsChildren1: {
        ua: "свідоцтво про народження",
        cz: "rodný list",
    },
    documentsDetailsDocumentsChildren2: {
        ua: "довідка про навчання",
        cz: "potvrzení o studiu",
    },
    documentsDetailsDocumentsChildren3: {
        ua: "довідка про незастосування податкової пільги до дитини іншого платника податків",
        cz: "potvrzení o neuplatnění daňového zvýhodnění na dítě druhého z poplatníků",
    },
    calculationTegText: {
        ua: "Розрахувати податкову декларацію",
        cz: "Vypočítat daňové přiznání",
    },
    calculationTegText1: {
        ua: "Розрахувати податкову декларацію",
        cz: "Vypočítat daňové přiznání",
    },
    PriceContentTextTaxpayer: { ua: "Платнику податків", cz: "Na poplatníka" },
    lsgPriceTitle: { ua: "Вартість наших послуг", cz: "Cena našich služeb" },
    PriceContentTextWife: { ua: "Дружині/чоловіку", cz: "Na manželku/manžela" },
    PriceContentTextDisWife: {
        ua: "Для дружини/чоловіка - власник ZTP/P",
        cz: "Na manželku/manžela – držitele ZTP/P",
    },
    PriceContentTextDisPensioner: {
        ua: "Для пенсіонерів по інвалідності",
        cz: "Pro invalidní důchodce",
    },
    PriceContentTextDisabled: {
        ua: "Для власників картки ZTP/P",
        cz: "Pro držitele průkazu ZTP/P",
    },
    PriceContentTextStudent: { ua: "Студенту", cz: "Na studenta" },
    PriceContentTextSchool: { ua: "За шкільні збори", cz: "Za školkovné" },
    PriceContentTextChildren: {
        ua: "Пільгу для дітей",
        cz: "Zvýhodnění na děti.",
    },
    PriceContentTextMartgage: {
        ua: "Іпотечний відсоток",
        cz: "Úroky z hypotéky",
    },
    PriceContentTextInsurance: {
        ua: "Страхування життя",
        cz: "Životní pojištění",
    },
    PriceContentTextPension: {
        ua: "Збереження на пенсію",
        cz: "Spoření na penzi",
    },
    PriceContentTextGifts: { ua: "Подарунки", cz: "Dary" },
    PriceContentTextUnion: {
        ua: "Профспілкові внески",
        cz: "Odborové příspěvky",
    },
    PriceContentTextExams: {
        ua: "Оплата іспитів, що підтверджують результати подальшого навчання",
        cz: "Úhrada za zkoušky ověřující výsledky dalšího vzdělávání",
    },
    lsgContactsTitle: {
        ua: "Якщо у вас є питання, ви можете задати їх мені, заповнивши цю форму.",
        cz: "Pokud máte nějaké otázky, můžete mi je položit vyplněním tohoto formuláře.",
    },
    SendEmailName: { ua: "Ваше ім'я", cz: "Vaše jméno" },
    SendEmailEmail: { ua: "Ваша електронна адреса", cz: "Váš email" },
    SendEmailText: { ua: "Текст повідомлення", cz: "Text zprávy" },
    emailButtonsSubmit: { ua: "Надіслати", cz: "Odeslat" },
    SendEmailCancel: { ua: "Скасувати", cz: "Zrušit" },
    footerItemsHome: { ua: "Головна", cz: "Hlavní" },
    footerItemsFunction: { ua: "Функції", cz: "Funkce" },
    footerItemsDocuments: { ua: "Документи", cz: "Doklady" },
    footerItemsPrice: { ua: "Прайс-лист", cz: "Ceník" },
    footerItemsContacts: { ua: "Контакти", cz: "Kontakty" },
    footerItemsCalculation: { ua: "Замовити", cz: "Objednat" },
};
// :{ua: "", cz: ""},

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
    btnImg.src = `../assets/icons/${languageIndex}.png`;
    btnTitle.innerHTML = languageIndex;
} else btnImg.src = `../assets/icons/CZ.png`;

for (var i = 0; i < langItems.length; i++) {
    var langItem = langItems[i];
    langItem.onclick = changeLanguage;
}

function changeLanguage(e) {
    btnImg.src = "../assets/icons/" + this.dataset.lang + ".png";
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
