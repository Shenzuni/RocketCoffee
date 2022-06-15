const button = document.getElementById("toggle-nav")

button.addEventListener("click", () => {
  const nav = document.getElementById("main-hrefs")
  console.log(nav.className)
  nav.className = nav.className === "desktop" ? "" : "desktop"
})
