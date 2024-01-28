import { langTags } from "./dictionary.js";
const langArr = langTags();
let userLang = window.location.href.split("#").pop().toLowerCase();

let enterButton = document.querySelectorAll(".ProgOpenBut");
let progWindow = document.querySelector(".ProgramDeclorationWrap");
enterButton.forEach((button) => {
    button.addEventListener("click", () => {
        progWindow.style.display = "flex";
    });
});

let ProgramExit = document.querySelector(".ProgExit");
ProgramExit.addEventListener("click", () => {
    progWindow.style.display = "none";

    let inputs = formProgCalcFree.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
});

// function buttonSubmitForm(event) {
//     event.preventDefault();
// }

let formProgCalcFree = document.querySelector("#ProgCalcFree");
let worksProgCalcFreeWrap = document.querySelector(".worksProgCalcFreeWrap");
let worksProgCalcFree = document.querySelector("#worksProgCalcFree");
let maxObjWork = 4;

let wifeProgCalcFreeWrap = document.querySelector(".wifeProgCalcFreeWrap");
let wifeProgCalcFree = document.querySelector("#wifeProgCalcFree");

let childProgCalcFreeWrap = document.querySelector(".childProgCalcFreeWrap");
let childProgCalcFree = document.querySelector("#childProgCalcFree");

const ProgramWorkScript = () => {
    function addObjWork() {
        let workObj = document.createElement("section");
        workObj.className = "workObj";

        let rough = document.createElement("section");
        rough.className = "workRough";

        let workRoughLabel = document.createElement("label");
        workRoughLabel.className = "workRoughLabel";
        workRoughLabel.textContent = langArr.workRoughLabel[userLang];

        let workRoughInput = document.createElement("input");
        workRoughInput.type = "text";
        workRoughInput.name = "workRoughInput";
        workRoughInput.className = "workRoughInput";
        workRoughInput.required = true;
        workRoughInput.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "");
        });

        let workRoughSymbolKC = document.createElement("span");
        workRoughSymbolKC.classList = "workRoughSymbolKC";
        workRoughSymbolKC.textContent = "Kč";

        rough.appendChild(workRoughLabel);
        rough.appendChild(workRoughInput);
        rough.appendChild(workRoughSymbolKC);
        workObj.appendChild(rough);

        let tax = document.createElement("section");
        tax.className = "workTax";

        let workTaxLabel = document.createElement("label");
        workTaxLabel.textContent = langArr.workTaxLabel[userLang];
        workTaxLabel.className = "workTaxLabel";

        let workTaxInput = document.createElement("input");
        workTaxInput.type = "text";
        workTaxInput.name = "workTaxInput";
        workTaxInput.className = "workTaxInput";
        workTaxInput.required = true;
        workTaxInput.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "");
        });

        let workTaxSymbolKC = document.createElement("span");
        workTaxSymbolKC.classList = "workTaxSymbolKC";
        workTaxSymbolKC.textContent = "Kč";

        tax.appendChild(workTaxLabel);
        tax.appendChild(workTaxInput);
        tax.appendChild(workTaxSymbolKC);
        workObj.appendChild(tax);

        let svgContainerCloseWork = document.createElement("section");
        svgContainerCloseWork.className = "svgContainerCloseWork";
        let svgCodeClose =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
        let svgCloseWork = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        svgCloseWork.addEventListener("click", function () {
            let parentWorkObj = this.parentElement.parentElement;
            let allWorkObj =
                worksProgCalcFree.getElementsByClassName("workObj");
            if (allWorkObj.length > 1) {
                parentWorkObj.remove();
                updateLbWorkCount();
            }
        });

        svgCloseWork.innerHTML = svgCodeClose;
        svgContainerCloseWork.appendChild(svgCloseWork);

        workObj.appendChild(svgContainerCloseWork);

        worksProgCalcFree.appendChild(workObj);
        updateLbWorkCount();
    }

    let workObjTittle = document.createElement("p");
    workObjTittle.className = "workObjTittle";
    workObjTittle.textContent = "Данные о зп от работодателя";
    worksProgCalcFree.appendChild(workObjTittle);

    let addMoreWorkButton = document.createElement("button");
    addMoreWorkButton.textContent = "Добавить работодателя";
    addMoreWorkButton.type = "button";
    addMoreWorkButton.className = "addMoreWorkButton";
    addMoreWorkButton.addEventListener("click", addObjWork);
    worksProgCalcFreeWrap.appendChild(addMoreWorkButton);

    function updateLbWorkCount() {
        let countLbWork = document.querySelectorAll(".workRoughLabel").length;
        let ClozeWorkSvg = document.querySelector(".svgContainerCloseWork");
        if (countLbWork === maxObjWork) {
            addMoreWorkButton.style.display = "none";
        } else {
            addMoreWorkButton.style.display = "block";
        }

        if (countLbWork === 2) {
            ClozeWorkSvg.style.visibility = "hidden";
            ClozeWorkSvg.style.opacity = 0;
        } else {
            ClozeWorkSvg.style.visibility = "visible";
            ClozeWorkSvg.style.opacity = 1;
        }
    }
    addObjWork();
};

const ProgramWifeScript = () => {
    function addObjWife() {
        let wifeObj = document.createElement("section");
        wifeObj.className = "wifeObj";

        let wifeMonth = document.createElement("section");
        wifeMonth.className = "wifeMonth";
        let wifeMonthLab = document.createElement("label");
        wifeMonthLab.className = "wifeMonthLab";
        wifeMonthLab.textContent = langArr.wifeMonthLab[userLang];
        wifeMonth.appendChild(wifeMonthLab);

        let wifeMonthInp = document.createElement("input");
        wifeMonthInp.className = "wifeMonthInp";
        wifeMonthInp.type = "text";
        wifeMonthInp.name = "wifeMonthInp";
        wifeMonthInp.required = true;
        wifeMonthInp.addEventListener("input", function () {
            let inputValue = (this.value = this.value.replace(/\D/g, ""));
            if (inputValue < 1) {
                inputValue = "";
            } else if (inputValue > 12) {
                inputValue = "12";
            }
            this.value = inputValue;
        });
        wifeMonth.appendChild(wifeMonthInp);

        let wifeZTP = document.createElement("section");
        wifeZTP.className = "wifeZTP";

        let wifeZTPLb = document.createElement("label");
        wifeZTPLb.className = "wifeZTPLb";
        wifeZTPLb.textContent = langArr.wifeZTPLb[userLang];
        wifeZTP.appendChild(wifeZTPLb);

        let wifeZTPInp = document.createElement("input");
        wifeZTPInp.type = "checkbox";
        wifeZTPInp.className = "wifeZTPInp";
        wifeZTP.appendChild(wifeZTPInp);

        wifeObj.appendChild(wifeMonth);
        wifeObj.appendChild(wifeZTP);

        let svgContainerCloseWife = document.createElement("section");
        svgContainerCloseWife.className = "svgContainerCloseWife";
        let svgCodeCloseWife =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
        let svgCloseWife = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svgCloseWife.addEventListener("click", function () {
            let parentWifeObj = this.parentElement.parentElement;
            let allWifeObj = wifeProgCalcFree.getElementsByClassName("wifeObj");
            if (allWifeObj.length > 0) {
                parentWifeObj.remove();
                updateLbWifeCount();
            }
        });

        svgCloseWife.innerHTML = svgCodeCloseWife;
        svgContainerCloseWife.appendChild(svgCloseWife);

        wifeObj.appendChild(svgContainerCloseWife);

        wifeProgCalcFree.appendChild(wifeObj);
        updateLbWifeCount();
    }

    let wifeObjTittle = document.createElement("p");
    wifeObjTittle.className = "wifeObjTittle";
    wifeObjTittle.textContent =
        "Данные о супругах которые имели доход меньше 60 000 Kč за расчетный год";
    wifeProgCalcFree.appendChild(wifeObjTittle);

    let addWifeButton = document.createElement("button");
    addWifeButton.textContent = "Добавить супругу / супруга";
    addWifeButton.type = "button";
    addWifeButton.className = "addWifeButton";
    addWifeButton.addEventListener("click", addObjWife);
    wifeProgCalcFreeWrap.appendChild(addWifeButton);

    function updateLbWifeCount() {
        let countLbWife = document.querySelectorAll(".wifeObj").length;
        if (countLbWife === 1) {
            addWifeButton.style.display = "none";
        } else {
            addWifeButton.style.display = "block";
        }
    }
};

const ProgramChildScript = () => {
    function addObjChild() {
        let childCountTittleBlock = document.querySelectorAll(
            ".childObjTittleBlock"
        ).length;
        let childObj = document.createElement("section");
        childObj.className = "childObj";

        let childObjTittleBlock = document.createElement("p");
        childObjTittleBlock.className = "childObjTittleBlock";
        childObjTittleBlock.textContent =
            langArr.childObjTittleBlock[userLang] + childCountTittleBlock;
        childObj.appendChild(childObjTittleBlock);

        let childObjContent = document.createElement("section");
        childObjContent.className = "childObjContent";

        let childMonth = document.createElement("section");
        childMonth.className = "childMonth";

        let childMonthLab = document.createElement("label");
        childMonthLab.className = "childMonthLab";
        childMonthLab.textContent = langArr.childMonthLab[userLang];
        childMonth.appendChild(childMonthLab);

        let childMonthInp = document.createElement("input");
        childMonthInp.className = "childMonthInp";
        childMonthInp.type = "text";
        childMonthInp.name = "childMonthInp";
        childMonthInp.required = true;
        childMonthInp.addEventListener("input", function () {
            let inputValue = (this.value = this.value.replace(/\D/g, ""));
            if (inputValue < 1) {
                inputValue = "";
            } else if (inputValue > 12) {
                inputValue = "12";
            }
            this.value = inputValue;
        });
        childMonth.appendChild(childMonthInp);

        let childZTP = document.createElement("section");
        childZTP.className = "childZTP";

        let childZTPLb = document.createElement("label");
        childZTPLb.className = "childZTPLb";
        childZTPLb.textContent = langArr.childZTPLb[userLang];
        childZTP.appendChild(childZTPLb);

        let childZTPInp = document.createElement("input");
        childZTPInp.type = "checkbox";
        childZTPInp.className = "childZTPInp";
        childZTP.appendChild(childZTPInp);

        childObjContent.appendChild(childMonth);
        childObjContent.appendChild(childZTP);

        let svgContainerCloseChild = document.createElement("section");
        svgContainerCloseChild.className = "svgContainerCloseChild";
        let svgCodeCloseChild =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
        let svgCloseChild = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        svgCloseChild.addEventListener("click", function () {
            let parentChildObj = this.parentElement.parentElement;
            let grandparentObj = parentChildObj.parentElement;

            let allChildObj =
                childProgCalcFree.getElementsByClassName("childObj");
            if (allChildObj.length > 0) {
                grandparentObj.remove();
                updateLbChildCount();
            }
        });

        svgCloseChild.innerHTML = svgCodeCloseChild;
        svgContainerCloseChild.appendChild(svgCloseChild);

        childObjContent.appendChild(svgContainerCloseChild);
        childObj.appendChild(childObjContent);

        childProgCalcFree.appendChild(childObj);
        updateLbChildCount();
    }

    let childObjTittle = document.createElement("p");
    childObjTittle.className = "childObjTittle";
    childObjTittle.textContent = "Данные о детях которые проживали с вами";
    childProgCalcFree.appendChild(childObjTittle);

    let addChildButton = document.createElement("button");
    addChildButton.textContent = "Добавить ребенка";
    addChildButton.type = "button";
    addChildButton.className = "addChildButton";
    addChildButton.addEventListener("click", addObjChild);
    childProgCalcFreeWrap.appendChild(addChildButton);

    function updateLbChildCount() {
        let countLbChild = document.querySelectorAll(".childObj").length;
        if (countLbChild === 4) {
            addChildButton.style.display = "none";
        } else {
            addChildButton.style.display = "block";
        }
    }
};

ProgramWorkScript();
ProgramWifeScript();
ProgramChildScript();
