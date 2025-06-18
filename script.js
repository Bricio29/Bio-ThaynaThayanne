function toggleMode() {
  const html = document.documentElement
  const avatarImg = document.querySelector("#profile img")
  const logoImg = document.querySelector("#nav img")

  const isLight = html.classList.toggle("light")

  // Atualiza avatar
  if (avatarImg) {
    avatarImg.setAttribute(
      "src",
      isLight ? "./assets/avatar-light.png" : "./assets/avatar.png"
    )
  }

  // Atualiza logo
  if (logoImg) {
    logoImg.setAttribute(
      "src",
      isLight ? "./assets/logo-light.svg" : "./assets/logo.svg"
    )
  }

  // Salva preferência
  localStorage.setItem("theme", isLight ? "light" : "dark")
}

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.documentElement.classList.add("light")

    const avatarImg = document.querySelector("#profile img")
    const logoImg = document.querySelector("#nav img")

    if (avatarImg) {
      avatarImg.setAttribute("src", "./assets/avatar-light.png")
    }

    if (logoImg) {
      logoImg.setAttribute("src", "./assets/logo-light.svg")
    }
  }
})
