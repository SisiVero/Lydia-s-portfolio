document.getElementById('selected-page').addEventListener("click", function () {
    var currentUrl = window.location.href;
    if (currentUrl == "/work.html") {
        this.style.color = "#000000"
    } else {
        this.style.color = "#a2a1a1"
    }
})