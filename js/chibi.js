chibi();  //Ejecutar el script


//Detectar cambio del tamaño de la ventana
var width;
var height;
$(window).resize(function() {
var newWidth = $(window).width();
var newHeight = $(window).height();
if( newWidth != width || newHeight != height ) {
width = newWidth;
height = newHeight;
/*var windowheight = $(window).height();
var windowwidth = $(window).width();*/
chibi();
}
});


//
// Acciones dependiendo de la pantalla
//

 function screenMobile() {
   console.log("Deja de mirarme desde el móvil")
   document.getElementById("aboutme").classList.add("aboutmemobile");
   document.getElementById("aboutme").classList.remove("aboutmepc");
   document.getElementById("chibi").classList.remove("chibi");
 }

 function screenCosaRara() {
   console.log("Eres muy raro")
   document.getElementById("aboutme").classList.add("aboutmemobile");
   document.getElementById("aboutme").classList.remove("aboutmepc");
   document.getElementById("chibi").classList.remove("chibi");
 }

  function screenPC() {
    console.log("Hola usuario de Windows");
    document.getElementById("aboutme").classList.add("aboutmepc");
    document.getElementById("aboutme").classList.remove("aboutmemobile");
    document.getElementById("chibi").classList.add("chibi");

    var testing1 = document.getElementById("testing1");
    var testing2 = document.getElementById("testing2");
    if (testing1.offsetTop < testing2.offsetTop) {
      screenCosaRara();
    }
  }


//
//Detectar tipo de pantalla
//

function chibi(){
  if ((isMobile.apple.phone || isMobile.android.phone) && (windowwidth < (windowheight * 0.75))) {
    screenMobile();
  } else {
      screenPC();
  }
}
