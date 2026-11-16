// Q7: Track mouse coordinates and place a red dot on double-click.

const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", function (event) {
    const boxRectangle = trackingBox.getBoundingClientRect();
    const localX = Math.round(event.clientX - boxRectangle.left);
    const localY = Math.round(event.clientY - boxRectangle.top);

    coordinates.textContent =
        "clientX: " + event.clientX + " | clientY: " + event.clientY +
        " | Position in box: (" + localX + ", " + localY + ")";
});

trackingBox.addEventListener("dblclick", function (event) {
    const boxRectangle = trackingBox.getBoundingClientRect();
    const localX = event.clientX - boxRectangle.left;
    const localY = event.clientY - boxRectangle.top;

    const redDot = document.createElement("span");
    redDot.className = "dot";
    redDot.style.left = localX + "px";
    redDot.style.top = localY + "px";
    trackingBox.appendChild(redDot);
});
