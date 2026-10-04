try {
  const theme = localStorage.getItem("theme");
  document.documentElement.dataset.theme = theme === "dark" || theme === "light" ? theme : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch { /* Use the default light theme if storage is unavailable. */ }
