
//Funcion que anima elemento, recibe el nombre de la animacion y el id del elemento.        
function animate(animacion,elemento){
	$("#"+elemento).addClass("animated " + animacion);
    setTimeout(function(){ $("#"+elemento).removeClass("animated " + animacion);  }, 1500);
}


//Rota las imagenes del roster, las oculta y hace visible el div correspondiente, recibe el numero de jugador.
function rotarImg(num){
    var fotoJugador = $("#jugador"+num+"-img");
    var infoJugador = $("#jugador"+num+"-info");
    fotoJugador.addClass("animated flipOutY");
    setTimeout(
        function(){ 
        fotoJugador.removeClass("animated flipOutY"); 
        fotoJugador.addClass("hidden"); 
        infoJugador.removeClass("hidden"); 
        infoJugador.addClass("animated flipInY")
    }, 600);
    setTimeout(function(){infoJugador.removeClass("animated flipInY")},500);
}


//Rota la informacion del roster, la oculta y hace visible la imagen correspondiente, recibe el numero de jugador.
function rotarInfo(num){
    var fotoJugador = $("#jugador"+num+"-img");
    var infoJugador = $("#jugador"+num+"-info");
    infoJugador.addClass("animated flipOutY");
    setTimeout(
        function(){ 
        infoJugador.removeClass("animated flipOutY"); 
        infoJugador.addClass("hidden"); 
        fotoJugador.removeClass("hidden"); 
        fotoJugador.addClass("animated flipInY")
    }, 600);
    setTimeout(function(){fotoJugador.removeClass("animated flipInY")},500);
}


//Funcion para cambiar entre diferentes divs, recibe el numero de div y la direccion.
function cambiaRoster(num,direccion){
            if(num==='1'){
                $("#roster2").addClass("animated fadeOut"+direccion);
                $("#roster3").addClass("animated fadeOut"+direccion);
                setTimeout(function(){
                    $("#roster2").addClass("hidden");
                    $("#roster3").addClass("hidden");
                    $("#roster1").removeClass("animated fadeIn");
                    $("#roster2").removeClass("animated fadeOut"+direccion);
                    $("#roster3").removeClass("animated fadeOut"+direccion);
                    $("#roster1").removeClass('hidden');
                    $("#roster1").addClass("animated fadeIn");
                },400);

            }
            else if(num==='2'){

                $("#roster1").addClass("animated fadeOut"+direccion);
                $("#roster3").addClass("animated fadeOut"+direccion);
                setTimeout(function(){
                    $("#roster1").addClass("hidden");
                    $("#roster3").addClass("hidden");
                    $("#roster2").removeClass("animated fadeIn");
                    $("#roster1").removeClass("animated fadeOut"+direccion);
                    $("#roster3").removeClass("animated fadeOut"+direccion);
                    $("#roster2").removeClass('hidden');
                    $("#roster2").addClass("animated fadeIn");                    
                },400);
            }
            else if(num==='3'){

                $("#roster1").addClass("animated fadeOut"+direccion);
                $("#roster2").addClass("animated fadeOut"+direccion);
                setTimeout(function(){
                    $("#roster1").addClass("hidden");
                    $("#roster2").addClass("hidden");
                    $("#roster3").removeClass("animated fadeIn");
                    $("#roster1").removeClass("animated fadeOut"+direccion);
                    $("#roster2").removeClass("animated fadeOut"+direccion);

                    $("#roster3").removeClass('hidden');
                    $("#roster3").addClass("animated fadeIn");
                },400);
            }
        }
