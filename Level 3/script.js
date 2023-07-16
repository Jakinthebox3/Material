/* The JavaScript file remains the same as in level 2. */
/* We're still using the same function to toggle the visibility of specified HTML elements. */
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
