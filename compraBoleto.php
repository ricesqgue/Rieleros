<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Rieleros AGS</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="css/animate.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body class="fondo">
    <!--Header-->
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-1 ">
                    <center>
                        <img width="80px" src="images/logoRieleros.png" onclick="animate('tada','logoRieleros')" id="logoRieleros">
                    </center>
                </div>

                <div class="col-md-4 col-md-offset-3">
                    <center>
                     <!-- <img width="150px" src="images/rieleros.png"  onclick="animate('swing','logoRieleros1')" id="logoRieleros1">-->
                        <br>
                        <span class="titulo" style="margin-left: 0px;">B O L E T O S </span>
                    </center>
                </div>

                <div class="col-md-1 col-md-offset-3">
                    <center>
                        <img width="80px" src="images/LMB.png" onclick="animate('wobble','logoLMB')" id="logoLMB">
                    </center>
                </div>
            </div>
        </div>
    </div>


    <br><br><br>

    <?php
        $idPartido = $_GET['idPartido'];
    ?>

    <!--Cuerpo  style="margin: 0 auto -330px;"-->
    <div id="principal" >
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="images/Estadio3.jpg" width="100%"  alt="" class="estadio" usemap="#estadio">
                    <map name="estadio" id="#estadio">

                        <area shape="poly" class="seccion" coords="70,305,128,238,292,220,295,226,283,240,156,254,102,318" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','7','#BEC0BD')" title="Popular">

                        <area shape="poly" class="seccion" coords="343,235,480,286,481,290,466,308,327,256" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','6','#16849D')" title="Terraza">

                        <area shape="poly" class="seccion" coords="472,313,514,328,516,337,493,363,445,345" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','5','#EEC881')" title="Preferente">
                        <area shape="poly" class="seccion" coords="166,383,98,357,117,335,179,357,180,365" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','5','#EEC881')" title="Preferente">

                        <area shape="poly" class="seccion" coords="439,400,473,359,477,361,478,369,445,409,443,403" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','2','#B9D54D')" title="Palco plus">
                        <area shape="poly" class="seccion" coords="283,421,283,415,207,386,203,392" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','2','#B9D54D')" title="Palco plus">

                        <area shape="poly" class="seccion" coords="415,408,460,354,468,357,468,365,423,417,422,411" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','3','#86D4E1')" title="Butaca general">
                        <area shape="poly" class="seccion" coords="183,370,298,411,299,418,203,382,202,385,178,376" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','3','#86D4E1')" title="Butaca general">

                        <area shape="poly" class="seccion" coords="322,418,370,437,389,435,406,413,416,418,417,426,398,447,374,449,348,438,349,435,318,424" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','4','#FAEF61')" title="Butaca numerada">

                        <area shape="poly" class="seccion" coords="412,385,443,349,454,352,455,359,424,397,422,390" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','1','#F16161')" title="Palco terreno">
                        <area shape="poly" class="seccion" coords="334,414,365,425,376,425,387,411,398,415,399,423,387,435,370,436,328,421" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','1','#F16161')" title="Palco terreno">
                        <area shape="poly" class="seccion" coords="189,361,273,392,274,399,268,398,236,388,184,369" href="" onclick="seleccionSeccion('<?php echo $idPartido; ?>','1','#F16161')" title="Palco terreno">



                     </map>

                </div>
                <div class="col-md-6 ">
                    <div class='panel panel-default infoCompraBoleto'>
                        <div class="panel-heading">
                            <center><h1 id="seccion">Seleccione una sección</h1></center>
                            <audio id="instruccion" src="sounds/instruccionSeccion.mp3"></audio>
                        </div>
                        <div class="panel-body">
                            <h3>Precio: $<span id="precio">0</span></h3>
                            <br>
                            <h3>Boletos disponibles: <span id="boletosDisponibles">0</span></h3>
                            <br>
                            <h3>Cantidad: <button disabled="disabled" class='btn-boleto' onclick="restaBoleto()"><span class="glyphicon glyphicon-minus"></span></button><span id="cantidad">1</span><button disabled="disabled" class='btn-boleto' onclick="sumaBoleto()"><span class="glyphicon glyphicon-plus"></span></button></h3>
                            <br>
                            <h3>Total: $<span id="total">0</span></h3>
                            <br>
                            <br>
                            <br>
                            <br>
                            <button class="btn btn-mediano" style="margin-left: 60px;" onclick="window.history.back(-1)">Regresar</button>
                            <button class="btn btn-mediano" disabled="disabled" id="btn-compra" style="margin-left: 100px;" onclick="ventaBoletos('<?php echo $idPartido; ?>','<?php echo $_GET['fecha'] ?>')">Comprar</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/rieleros.js"></script>
    <script src="js/maphilight.js"></script>
    <script>
    $( document ).ready(function() {
            document.getElementById("instruccion").play();
        });
        checaDisponibilidad('<?php echo $idPartido?>');
        $(".estadio").maphilight();
        $('.seccion').click(function(e) {
            e.preventDefault();
            setInterval(function(){
                if($("#boletosDisponibles").html() === "0"){
                    var colorx = 'FF0000';
                    var data = {};
                    data.alwaysOn = !data.alwaysOn;
                    data.stroke = 'none';
                    data.strokeWidth = 0.0000001;
                    data.strokeColor = colorx;
                    data.fillColor = colorx; // Sample color
                    data.fillOpacity = 1;
                    $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
                }
            },200);
    });
    </script>
</body>
</html>
