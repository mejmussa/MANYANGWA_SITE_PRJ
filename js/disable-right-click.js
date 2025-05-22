// Disable right-click context menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    //alert("Right-click is disabled on this website.");
});



document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}


document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.keyCode == 83) || // Ctrl+S
        (event.ctrlKey && event.keyCode == 85)) { // Ctrl+U
        event.preventDefault();
        //alert('This functionality is disabled!');
    }
});

