var userId = 'Kiggo!';
var i = 0;
display.style.cssText = 'font-size: 40px; font-weight: bold;';
var displayColor = ["red", "blue", "green", "gray", "violet"];

function btn() {
    if (i < userId.length) {
        display.innerHTML += userId[i];
        display.style.color = displayColor[i];
        i++;

    } else {
        i = 0;
        display.innerHTML = "";
    }
}