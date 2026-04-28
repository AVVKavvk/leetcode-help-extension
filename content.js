const initExtension = () => {
  if (document.querySelector(".lh-floating-container")) return;

  const match = window.location.href.match(
    /https:\/\/leetcode\.com\/problems\/[^\/]+\//,
  );
  if (match) {
    const problemSlug = match[0].replace(/\/$/, "").split("/").pop();

    fetch(chrome.runtime.getURL("data.json"))
      .then((res) => res.json())
      .then((data) => {
        const problem = data.find((p) => p.problem_slug === problemSlug);
        if (problem && problem.companies.length > 0) {
          injectUI(problem.companies);
        }
      });
  }
};

function injectUI(companies) {
  const container = document.createElement("div");
  container.className = "lh-floating-container";

  // Toggle Button
  const btn = document.createElement("div");
  btn.className = "lh-main-btn";
  btn.setAttribute("data-tooltip", "Leetcode Help");
  btn.innerHTML = `<img src="${chrome.runtime.getURL("resources/icon.png")}" style="width:24px;">`;

  // Tooltip/Menu
  const tooltip = document.createElement("div");
  tooltip.className = "lh-tooltip";

  // Search Input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search company...";
  searchInput.className = "lh-search-input";

  const listContainer = document.createElement("div");
  listContainer.className = "lh-list-container";

  // Function to render list
  const renderList = (filter = "") => {
    listContainer.innerHTML = "";
    const filtered = companies.filter((c) =>
      c.toLowerCase().includes(filter.toLowerCase()),
    );
    filtered.forEach((name) => {
      const item = document.createElement("div");
      item.className = "lh-company-item";
      item.innerText = name;
      listContainer.appendChild(item);
    });
    if (filtered.length === 0)
      listContainer.innerHTML = '<div class="lh-no-match">No results</div>';
  };

  searchInput.addEventListener("input", (e) => renderList(e.target.value));
  renderList();

  tooltip.appendChild(searchInput);
  tooltip.appendChild(listContainer);
  container.appendChild(btn);
  container.appendChild(tooltip);
  document.body.appendChild(container);

  // Toggle Logic
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    tooltip.classList.toggle("lh-show");
    if (tooltip.classList.contains("lh-show")) searchInput.focus();
  });

  // Close if clicking outside
  document.addEventListener("click", () => tooltip.classList.remove("lh-show"));
  tooltip.addEventListener("click", (e) => e.stopPropagation());
}

initExtension();

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // Remove old UI if navigating to a new problem
    const oldUi = document.querySelector(".lh-floating-container");
    if (oldUi) oldUi.remove();
    initExtension();
  }
}).observe(document, { subtree: true, childList: true });
