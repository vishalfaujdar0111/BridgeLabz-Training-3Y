// Q7: Track client coordinates and mark double-click positions.
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxRectangle = trackingBox.getBoundingClientRect();
  // Convert viewport coordinates into coordinates relative to the box.
  const x = event.clientX - boxRectangle.left;
  const y = event.clientY - boxRectangle.top;

  const redDot = document.createElement("span");
  redDot.className = "red-dot";
  redDot.style.left = `${x}px`;
  redDot.style.top = `${y}px`;
  trackingBox.appendChild(redDot);
});
