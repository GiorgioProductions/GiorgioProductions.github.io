if (isMobile.apple.phone || isMobile.android.phone) {
  document.getElementById("about-me-title").style.display = "none";
  document.getElementById("about-me-text").setAttribute("style","text-align:center");
  document.getElementById("videos").style.display = "none";
  document.getElementById("discord").style.display = "none";
  document.getElementById("video").style.display = "none";
  document.getElementById("hero").setAttribute("style","background-image: url(../images/hero-bg.jpg); background: linear-gradient(rgba(75, 140, 224, 0.65), rgba(172, 75, 225, 0.65)), rgba(0, 0, 0, 0.55) url(../images/hero-bg.jpg) no-repeat;")
}
