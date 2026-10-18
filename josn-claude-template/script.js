// Optional enhancement: tab switching and copy-to-clipboard.
// The page stays readable without JavaScript (the schema is shown by default).

const tabs = document.querySelectorAll('[role="tab"]');
const title = document.getElementById("window-title");
const copyButton = document.getElementById("copy");
const fileNames = { "panel-schema": "task-schema.json", "panel-example": "example-task.json" };

function selectTab(tab) {
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
  });
  title.textContent = fileNames[tab.getAttribute("aria-controls")];
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const next = tabs[(i + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

copyButton.addEventListener("click", async () => {
  const panel = document.querySelector('[role="tabpanel"]:not([hidden])');
  try {
    await navigator.clipboard.writeText(panel.textContent);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = "Copy failed";
  }
  setTimeout(() => (copyButton.textContent = "Copy"), 1500);
});
