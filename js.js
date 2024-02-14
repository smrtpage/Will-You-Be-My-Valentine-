const YesBtn = document.getElementById("yes");
const NoBtn = document.getElementById("no");

NoBtn.style.transition = "top 0.2s, left 0.2s";

NoBtn.addEventListener("mouseover", () => {
  const maxWidth = window.innerWidth - NoBtn.offsetWidth;
  const maxHeight = window.innerHeight - NoBtn.offsetHeight;
  const randomX = Math.round(Math.random() * maxWidth);
  const randomY = Math.round(Math.random() * maxHeight);

  NoBtn.style.position = "absolute";
  NoBtn.style.left = `${randomX}px`;
  NoBtn.style.top = `${randomY}px`;
});

YesBtn.addEventListener("click", () => {
  window.location.href = "yay.html";
});
