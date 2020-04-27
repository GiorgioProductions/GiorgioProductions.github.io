
if (isMobile.apple.phone || isMobile.android.phone) {
  document.getElementById("btnvideo").removeAttribute("data-lity");
  document.getElementById("btnvideo").setAttribute("target","_blank");
  document.getElementById("h3").removeAttribute("style");
  document.getElementById("h3").setAttribute("style","font-size:4vw"");
}
