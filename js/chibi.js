chibi();  //Ejecutar el script de colocación


//Detectar cambio del tamaño de la ventana
var width;
var height;
$(window).resize(function() {
var newWidth = $(window).width();
var newHeight = $(window).height();
if( newWidth != width || newHeight != height ) {
width = newWidth;
height = newHeight;
chibi();
}
});

//Script de colocación
function chibi(){
  var resdif = (screen.width/screen.height);
  if (resdif >= 1.6) {
  var Widescreen = 1;
  }
  else {
  var Widescreen = 0;
  }
  if (isMobile.apple.phone || isMobile.android.phone) {
    console.log("Deja de mirarme desde el móvil")
    document.getElementById("chibi").classList.remove("chibi");
    document.getElementById("aboutme").classList.add("aboutmemobile");
    document.getElementById("aboutme").classList.remove("aboutmepc");
  } else {
    var windowheight = $(window).height();
    var windowwidth = $(window).width();
  if (windowheight<windowwidth*0.75) {
  console.log("Hola usuario de Windows");
  document.getElementById("aboutme").classList.add("aboutmepc");
  document.getElementById("chibi").classList.add("chibi");
  document.getElementById("aboutme").classList.remove("aboutmemobile");
  } else {
  console.log("Eres muy raro")
  document.getElementById("aboutme").classList.remove("aboutmepc");
  document.getElementById("chibi").classList.remove("chibi");
  document.getElementById("aboutme").classList.add("aboutmemobile");
  }
  }
}
