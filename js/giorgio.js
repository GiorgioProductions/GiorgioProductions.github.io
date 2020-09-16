window.cookieconsent.initialise({
"palette": {
    "popup": {
        "background": "#4D6A90",
        "text": "#fff"
    },
    "button": {
        "background": "#fff",
        "text": "#4D6A90"
    }
},
"theme": "classic",
"content": {
    "message": "Este sitio utiliza cookies para mejorar tu experiencia.",
    "dismiss": "De acuerdo",
    "link": "Aprender más <i class='fas fa-external-link-alt fa-xs'></i>",
    "href": "https://www.cookiesandyou.com/"
  }
});

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
    document.getElementById("hero").setAttribute("style","background-image: url(images/hero-bg.jpg); background: linear-gradient(rgba(75, 140, 224, 0.65), rgba(172, 75, 225, 0.65)), rgba(0, 0, 0, 0.55) url(../images/hero-bg.jpg) no-repeat;");
  } else {
    document.getElementById("hero").removeAttribute("style");
  }
}
