// Roadmaps — discipline tab switcher for a static reference page.
//
// Progressive enhancement: without JS every panel after the first is
// hidden via the `hidden` attribute, so a no-JS visitor still gets the
// Product Design map (the only one with content). With JS, the tabs swap
// which panel is shown.
(function () {
  const tablist = document.querySelector(".roadmap-tabs");
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll(".roadmap-tab"));

  function activate(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.classList.toggle("is-active", selected);
      t.setAttribute("aria-selected", selected ? "true" : "false");
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      event.preventDefault();
      const next = tabs[(index + step + tabs.length) % tabs.length];
      next.focus();
      activate(next);
    });
  });
})();
