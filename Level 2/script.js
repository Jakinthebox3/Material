/* In level 2, we added a JavaScript file to provide interactivity to our webpage. */
/* We added a function that can toggle the visibility of a specified HTML element. */
/* This function is called when the button in section 2 is clicked. */
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
