document.getElementById("currentYear").innerText = new Date().getFullYear();

document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
    ToggleDescription();
});


function ToggleDescription() {
    var paragraph = document.getElementById("description");
    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "block" : "none";
}