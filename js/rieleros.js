
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
    document.getElementById("soundPlayer"+num).play();
    //$("#soundPlayer"+num).attr("autoplay","");
    //$("#soundPlayer"+num).removeAttr("autoplay");

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
    document.getElementById("soundPlayer"+num).pause();
    document.getElementById("soundPlayer"+num).currentTime = 0;

}


//Funcion para cambiar entre diferentes divs, recibe el numero de div y la direccion. Son solo 3 divs.. si son más agregar los 'if'.
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

function cambiaLinea(num,direccion){
    if(num==='1'){
        $("#lineaTiempo2").addClass("animated fadeOut"+direccion);
        $("#lineaTiempo3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#lineaTiempo2").addClass("hidden");
            $("#lineaTiempo3").addClass("hidden");
            $("#lineaTiempo1").removeClass("animated fadeIn");
            $("#lineaTiempo2").removeClass("animated fadeOut"+direccion);
            $("#lineaTiempo3").removeClass("animated fadeOut"+direccion);
            $("#lineaTiempo1").removeClass('hidden');
            $("#lineaTiempo1").addClass("animated fadeIn");
        },400);

    }
    else if(num==='2'){

        $("#lineaTiempo1").addClass("animated fadeOut"+direccion);
        $("#lineaTiempo3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#lineaTiempo1").addClass("hidden");
            $("#lineaTiempo3").addClass("hidden");
            $("#lineaTiempo2").removeClass("animated fadeIn");
            $("#lineaTiempo1").removeClass("animated fadeOut"+direccion);
            $("#lineaTiempo3").removeClass("animated fadeOut"+direccion);
            $("#lineaTiempo2").removeClass('hidden');
            $("#lineaTiempo2").addClass("animated fadeIn");
        },400);
    }
    else if(num==='3'){

        $("#lineaTiempo1").addClass("animated fadeOut"+direccion);
        $("#lineaTiempo2").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#lineaTiempo1").addClass("hidden");
            $("#lineaTiempo2").addClass("hidden");
            $("#lineaTiempo3").removeClass("animated fadeIn");
            $("#lineaTiempo1").removeClass("animated fadeOut"+direccion);
            $("#lineaTiempo2").removeClass("animated fadeOut"+direccion);

            $("#lineaTiempo3").removeClass('hidden');
            $("#lineaTiempo3").addClass("animated fadeIn");
        },400);
    }
}

function acomodaBotonRegresar(){
    var ancho = screen.width/2;
    $("#div-btn-regresar").css("position" , "absolute");
    $("#div-btn-regresar").css("bottom" , "10px");
    $("#div-btn-regresar").css("left" , ancho-40+"px");
     
}
