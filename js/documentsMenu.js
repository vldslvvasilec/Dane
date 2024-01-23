function toggleDocumentMenu(event) {
    let elementDoc = document.querySelector(event);
    if (
        elementDoc.style.display === "none" ||
        elementDoc.style.display === ""
    ) {
        elementDoc.style.display = "block";
    } else {
        elementDoc.style.display = "none";
    }
}
