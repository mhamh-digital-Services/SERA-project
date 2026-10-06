document.addEventListener("DOMContentLoaded", () => {
console.log("SERA is working!");

const footer = document.querySelector("footer > span");

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} SERA — CONCEPT PROJECT`;
}

});