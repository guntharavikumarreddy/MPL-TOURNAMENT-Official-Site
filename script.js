/* Typing Effect */
const text = "Feel the Power of Cricket 🏏🔥";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

/* Dark Mode */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

/* Scroll Reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
