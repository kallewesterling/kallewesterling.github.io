document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const target = btn.dataset.copyTarget && document.getElementById(btn.dataset.copyTarget);
    const text = btn.dataset.copy || (target && target.textContent.trim());
    if (!text) return;
    await navigator.clipboard.writeText(text);
    const label = btn.textContent;
    btn.textContent = "Copied";
    btn.classList.add("is-done");
    setTimeout(() => {
      btn.textContent = label;
      btn.classList.remove("is-done");
    }, 1600);
  });
});
