//Script contar líneas
  void function $getLines($){
      function countLines($element){
          var lines          = 0;
          var greatestOffset = void 0;

          $element.find('character').each(function(){
              if(!greatestOffset || this.offsetTop > greatestOffset){
                  greatestOffset = this.offsetTop;
                  ++lines;
              }
          });

          return lines;
      }

      $.fn.getLines = function $getLines(){
          var lines = 0;
          var clean = this;
          var dirty = this.clone();

          (function wrapCharacters(fragment){
              var parent = fragment;

              $(fragment).contents().each(function(){
                  if(this.nodeType === Node.ELEMENT_NODE){
                      wrapCharacters(this);
                  }
                  else if(this.nodeType === Node.TEXT_NODE){
                      void function replaceNode(text){
                          var characters = document.createDocumentFragment();

                          text.nodeValue.replace(/[\s\S]/gm, function wrapCharacter(character){
                              characters.appendChild($('<character>' + character + '</>')[0]);
                          });

                          parent.replaceChild(characters, text);
                      }(this);
                  }
              });
          }(dirty[0]));

          clean.replaceWith(dirty);

          lines = countLines(dirty);

          dirty.replaceWith(clean);

          return lines;
      };
  }(jQuery);

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





// Acciones dependiendo de la pantalla

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



//Script de colocación
function chibi(){
  var resdif = (screen.width/screen.height);
  if (resdif >= 1.6) {
  var Widescreen = 1;
  }
  else {
  var Widescreen = 0;
  }
  var windowheight = $(window).height();
  var windowwidth = $(window).width();

  if ((isMobile.apple.phone || isMobile.android.phone) && (windowwidth < (windowheight * 0.75))) {
    screenMobile();
  } else {

    /*var windowheight = $(window).height();
    var windowwidth = $(window).width();*/

      screenPC();
  }
}
