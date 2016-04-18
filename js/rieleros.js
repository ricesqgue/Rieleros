
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
    for(var i=1;i<25;i++){
        document.getElementById("soundPlayer"+i).pause();
        document.getElementById("soundPlayer"+i).currentTime = 0;
    }

    document.getElementById("soundPlayer"+num).play();


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

function cambiaCalendario(num,direccion){
    if(num==='1'){
        $("#calendario2").addClass("animated fadeOut"+direccion);
        $("#calendario3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#calendario2").addClass("hidden");
            $("#calendario3").addClass("hidden");
            $("#calendario1").removeClass("animated fadeIn");
            $("#calendario2").removeClass("animated fadeOut"+direccion);
            $("#calendario3").removeClass("animated fadeOut"+direccion);
            $("#calendario1").removeClass('hidden');
            $("#calendario1").addClass("animated fadeIn");
        },400);

    }
    else if(num==='2'){

        $("#calendario1").addClass("animated fadeOut"+direccion);
        $("#calendario3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#calendario1").addClass("hidden");
            $("#calendario3").addClass("hidden");
            $("#calendario2").removeClass("animated fadeIn");
            $("#calendario1").removeClass("animated fadeOut"+direccion);
            $("#calendario3").removeClass("animated fadeOut"+direccion);
            $("#calendario2").removeClass('hidden');
            $("#calendario2").addClass("animated fadeIn");
        },400);
    }
    else if(num==='3'){

        $("#calendario1").addClass("animated fadeOut"+direccion);
        $("#calendario2").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#calendario1").addClass("hidden");
            $("#calendario2").addClass("hidden");
            $("#calendario3").removeClass("animated fadeIn");
            $("#calendario1").removeClass("animated fadeOut"+direccion);
            $("#calendario2").removeClass("animated fadeOut"+direccion);

            $("#calendario3").removeClass('hidden');
            $("#calendario3").addClass("animated fadeIn");
        },400);
    }
}

function acomodaBotonRegresar(){
    var ancho = screen.width/2;
    $("#div-btn-regresar").css("position" , "absolute");
    $("#div-btn-regresar").css("bottom" , "10px");
    $("#div-btn-regresar").css("left" , ancho-40+"px");

}

function cambiaGaleria(num,direccion){
    if(num==='1'){
        $("#galeria2").addClass("animated fadeOut"+direccion);
        $("#galeria11").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria11").addClass("hidden");
            $("#galeria2").addClass("hidden");
            $("#galeria1").removeClass("animated fadeIn");
            $("#galeria2").removeClass("animated fadeOut"+direccion);
            $("#galeria11").removeClass("animated fadeOut"+direccion);
            $("#galeria1").removeClass('hidden');
            $("#galeria1").addClass("animated fadeIn");
        },400);
        //video
            document.getElementById('video3').pause();
            document.getElementById('video3').currentTime = 0;
            $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('2','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('11','left')");



    }
    else if(num==='2'){

        $("#galeria1").addClass("animated fadeOut"+direccion);
        $("#galeria3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria1").addClass("hidden");
            $("#galeria3").addClass("hidden");
            $("#galeria2").removeClass("animated fadeIn");
            $("#galeria1").removeClass("animated fadeOut"+direccion);
            $("#galeria3").removeClass("animated fadeOut"+direccion);
            $("#galeria2").removeClass('hidden');
            $("#galeria2").addClass("animated fadeIn");

        },400);

            $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('3','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('1','left')");
    }
    else if(num==='3'){

        $("#galeria4").addClass("animated fadeOut"+direccion);
        $("#galeria2").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria4").addClass("hidden");
            $("#galeria2").addClass("hidden");
            $("#galeria3").removeClass("animated fadeIn");
            $("#galeria4").removeClass("animated fadeOut"+direccion);
            $("#galeria2").removeClass("animated fadeOut"+direccion);

            $("#galeria3").removeClass('hidden');
            $("#galeria3").addClass("animated fadeIn");
            //video
            document.getElementById('video1').pause();
            document.getElementById('video1').currentTime = 0;
        },400);

            $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('4','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('2','left')");
    }

    else if(num==='4'){

        $("#galeria5").addClass("animated fadeOut"+direccion);
        $("#galeria3").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria5").addClass("hidden");
            $("#galeria3").addClass("hidden");
            $("#galeria4").removeClass("animated fadeIn");
            $("#galeria5").removeClass("animated fadeOut"+direccion);
            $("#galeria3").removeClass("animated fadeOut"+direccion);

            $("#galeria4").removeClass('hidden');
            $("#galeria4").addClass("animated fadeIn");
            //video
            document.getElementById('video1').play();
        },400);

            $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('5','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('3','left')");
    }
    else if(num==='5'){

        $("#galeria6").addClass("animated fadeOut"+direccion);
        $("#galeria4").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria6").addClass("hidden");
            $("#galeria4").addClass("hidden");
            $("#galeria5").removeClass("animated fadeIn");
            $("#galeria6").removeClass("animated fadeOut"+direccion);
            $("#galeria4").removeClass("animated fadeOut"+direccion);

            $("#galeria5").removeClass('hidden');
            $("#galeria5").addClass("animated fadeIn");
            //video
            document.getElementById('video1').pause();
            document.getElementById('video1').currentTime = 0;
        },400);

            $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('6','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('4','left')");
    }
    else if(num==='6'){

        $("#galeria7").addClass("animated fadeOut"+direccion);
        $("#galeria5").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria7").addClass("hidden");
            $("#galeria5").addClass("hidden");
            $("#galeria6").removeClass("animated fadeIn");
            $("#galeria7").removeClass("animated fadeOut"+direccion);
            $("#galeria5").removeClass("animated fadeOut"+direccion);

            $("#galeria6").removeClass('hidden');
            $("#galeria6").addClass("animated fadeIn");
        },400);

         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('7','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('5','left')");
    }
    else if(num==='7'){

        $("#galeria8").addClass("animated fadeOut"+direccion);
        $("#galeria6").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria8").addClass("hidden");
            $("#galeria6").addClass("hidden");
            $("#galeria7").removeClass("animated fadeIn");
            $("#galeria8").removeClass("animated fadeOut"+direccion);
            $("#galeria6").removeClass("animated fadeOut"+direccion);

            $("#galeria7").removeClass('hidden');
            $("#galeria7").addClass("animated fadeIn");
            //video
            document.getElementById('video2').pause();
            document.getElementById('video2').currentTime = 0;
        },400);
         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('8','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('6','left')");
    }
    else if(num==='8'){

        $("#galeria9").addClass("animated fadeOut"+direccion);
        $("#galeria7").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria9").addClass("hidden");
            $("#galeria7").addClass("hidden");
            $("#galeria8").removeClass("animated fadeIn");
            $("#galeria9").removeClass("animated fadeOut"+direccion);
            $("#galeria7").removeClass("animated fadeOut"+direccion);

            $("#galeria8").removeClass('hidden');
            $("#galeria8").addClass("animated fadeIn");
                        //video
            document.getElementById('video2').play();

        },400);
         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('9','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('7','left')");
    }
    else if(num==='9'){

        $("#galeria10").addClass("animated fadeOut"+direccion);
        $("#galeria8").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria10").addClass("hidden");
            $("#galeria8").addClass("hidden");
            $("#galeria9").removeClass("animated fadeIn");
            $("#galeria10").removeClass("animated fadeOut"+direccion);
            $("#galeria8").removeClass("animated fadeOut"+direccion);

            $("#galeria9").removeClass('hidden');
            $("#galeria9").addClass("animated fadeIn");
            //video
            document.getElementById('video2').pause();
            document.getElementById('video2').currentTime = 0;
        },400);

         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('10','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('8','left')");
    }
    else if(num==='10'){

        $("#galeria11").addClass("animated fadeOut"+direccion);
        $("#galeria9z").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria11").addClass("hidden");
            $("#galeria9").addClass("hidden");
            $("#galeria10").removeClass("animated fadeIn");
            $("#galeria11").removeClass("animated fadeOut"+direccion);
            $("#galeria9").removeClass("animated fadeOut"+direccion);

            $("#galeria10").removeClass('hidden');
            $("#galeria10").addClass("animated fadeIn");
            //video
            document.getElementById('video3').pause();
            document.getElementById('video3').currentTime = 0;
        },400);

         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('11','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('9','left')");
    }
    else if(num==='11'){

        $("#galeria1").addClass("animated fadeOut"+direccion);
        $("#galeria10").addClass("animated fadeOut"+direccion);
        setTimeout(function(){
            $("#galeria1").addClass("hidden");
            $("#galeria10").addClass("hidden");
            $("#galeria11").removeClass("animated fadeIn");
            $("#galeria1").removeClass("animated fadeOut"+direccion);
            $("#galeria10").removeClass("animated fadeOut"+direccion);

            $("#galeria11").removeClass('hidden');
            $("#galeria11").addClass("animated fadeIn");
                        //video
            document.getElementById('video3').play();

        },400);

         $("#flechaDer").removeAttr('onclick');
            $("#flechaIzq").removeAttr('onclick');
            $("#flechaDer").attr('onclick', "cambiaGaleria('1','right')");
            $("#flechaIzq").attr('onclick', "cambiaGaleria('10','left')");
    }
}

function restaBoleto(){
    var cantidad = parseInt($("#cantidad").html());;
    if(cantidad !== "1"){
        cantidad--;
    }
    $("#cantidad").html(cantidad);
    var precio = parseInt($("#precio").html());
    $("#total").html(precio*cantidad);
}

function sumaBoleto(){
    var cantidad = parseInt($("#cantidad").html());
    var disponibles = parseInt($("#boletosDisponibles").html());

   // alert(disponibles);
    if(cantidad<disponibles){
        cantidad++;
        $("#cantidad").html(cantidad);
       var precio = parseInt($("#precio").html());;
        $("#total").html(precio*cantidad);
    }
     //   alert(cantidad);
}

function seleccionSeccion(idPartido,idSeccion,color){
    $.post("infoBoletos.php",{idSeccion: idSeccion, idPartido:idPartido},function(res){
        $("#seccion").html(res.nombre);
        $("#precio").html(res.precio);
        $("#boletosDisponibles").html(res.disponibles);
        $(".btn-boleto").removeAttr('disabled');
        $(".btn-mediano").removeAttr('disabled');
        $("#total").html(res.precio);
        $(".panel-heading").css({
            'background-color': color
        });
    },"json");
}

function checaDisponibilidad(idPartido){
    $.post("checaDisponibilidad.php",{idPartido: idPartido},function(res){
        var colorx = 'FF0000';
        var data = {};
        data.alwaysOn = !data.alwaysOn;
        data.stroke = 'none';
        data.strokeWidth = 0.0000001;
        data.strokeColor = colorx;
        data.fillColor = colorx; // Sample color
        data.fillOpacity = 1;
        for(var i=0;i<res.length;i++){
            $("area[title='"+res[i].nombre+"']").data('maphilight', data).trigger('alwaysOn.maphilight');
        }

    },"json");
}

function registraBoletos(idPartido){
	var seccion=$("#seccion").html();
	var cantidad=$("#cantidad").html();
	var total=$("#total").html();
	window.location.href="registraVenta.php?idPartido="+idPartido+"&cantidad="+cantidad+"&total="+total+"&seccion="+seccion;
}
