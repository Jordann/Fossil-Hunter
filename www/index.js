//////////////////////////////////
// Set the event listener to run when the device is ready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
// do stuff here
}

$(document).on(‘click’, “.external”, function (e) {
e.preventDefault()
var targetURL = $(this).attr(“href”);

window.open(targetURL, “_system”);
});