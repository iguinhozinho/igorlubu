document.addEventListener("DOMContentLoaded", () => {
  NProgress.start();
});

window.addEventListener("load", () => {
  NProgress.done();
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
});
