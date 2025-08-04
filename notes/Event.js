
//click
document.getElementById("btn").addEventListener("click", () => alert("Button clicked!"));
//Submit
document.getElementById("form").addEventListener("submit", e => { e.preventDefault(); alert("Form submitted!"); });
//Keydown
document.getElementById("search").addEventListener("keydown", e => console.log("Key pressed:", e.key));
//Change
document.getElementById("dropdown").addEventListener("change", e => alert("Selected: " + e.target.value));
//mouseover
document.getElementById("tooltipBox").addEventListener("mouseover", () => alert("Mouse is over!"));
//Load
document.getElementById("myImage").addEventListener("load", () => console.log("Image loaded!"));
//Scroll
window.addEventListener("scroll", () => console.log("User is scrolling..."));
