checkMobile();

//Detectar cambio del tamaño de la ventana
var width;
var height;
$(window).resize(function() {
var newWidth = $(window).width();
var newHeight = $(window).height();
if( newWidth != width || newHeight != height ) {
width = newWidth;
height = newHeight;
checkMobile();
}
});

function checkMobile(){
  test1 = document.getElementById("test1");
  test2 = document.getElementById("test2");
  if (isMobile.apple.phone || isMobile.android.phone || test1.offsetTop == test2.offsetTop) {
    console.log("TEST")
    //document.getElementById("video").style.display = "none";
    document.getElementById("hero").setAttribute("style","background-image: url(images/hero-bg.jpg); background: linear-gradient(rgba(75, 140, 224, 0.65), rgba(172, 75, 225, 0.65)), rgba(0, 0, 0, 0.55) url(../images/hero-bg.jpg) no-repeat;");
  } else {
    console.log("TEST2")
    document.getElementById("hero").removeAttribute("style");
  }
}
