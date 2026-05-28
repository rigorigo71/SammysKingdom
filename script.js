const root = document.getElementById("app");

const urls = ["/svg/1.svg", "/svg/2.svg", "/svg/3.svg", "/svg/4.svg", "/svg/5.svg"];
const classes = ["star-1", "star-2", "star-3", "star-4", "star-5"];
function createStar(x, y) {
    const star = document.createElement("img")
    const idx = Math.floor(Math.random() * classes.length);
    star.classList.add("star", classes[idx]);
    // star.classList.add(classes[Math.floor(Math.random()*classes.length)])
    star.setAttribute("src", urls[idx]);
    star.setAttribute(
        "style",
        `
    position:fixed;
    top: ${y}px;
    left: ${x}px;
`
    )
    root.appendChild(star);
    setTimeout(() => star.remove(), 500);
    return star;
}
window.addEventListener("mousemove", (e) => {
    requestAnimationFrame(function () {
        createStar(e.clientX, e.clientY);
    })
})