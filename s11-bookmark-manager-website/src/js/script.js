const tabs = document.getElementsByClassName("tab");
const panels = document.getElementsByClassName("panel");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

const onTabClick = (e) => {
  // Remove the active class from all the tabs
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].children[0].classList.remove("border-softRed", "border-b-4", "md:border-b-0");
  }

  // Hide all panels
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.add("hidden");
  }

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const panelName = e.target.getAttribute("data-target");
  document.getElementById(panelName).classList.remove("hidden");
};

// Tabs menu event listener
for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  tab.addEventListener("click", onTabClick);
}

// Hamburger Menu'
const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}

btn.addEventListener('click', navToggle);
