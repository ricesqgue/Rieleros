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
                        <span class="titulo" style="margin-left: 0px;">P A G O </span>
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


    <!--Cuerpo  style="margin: 0 auto -330px;"-->
    <div id="principal" >
        <div class="container"> 
            <div class="row">
                <div class="col-md-6">
                    <div class='panel panel-default infoCompraBoleto'>
                        <div class="panel-heading">
                            <center><h1 id="seccion">Detalle de compra</h1></center>
                        </div>
                        <div class="panel-body">
                            <h3>Fecha del partido: <?php echo $_GET['fecha'] ?> </h3>
                            <br>
                            <h3>Cantidad de boletos:  <?php echo $_GET['cantidad'] ?> </h3>
                            <br>
                            <h3>Sección:  <?php echo $_GET['seccion'] ?> </h3>
                            <br>
                            <h3>Total a pagar: $  <?php echo $_GET['total'] ?></h3>
                            <br>
                            <br>
                            <br>
                            <br>
                            
                            <center><button class="btn btn-mediano" id="btn-cancelar" onclick="window.history.back(-1)">Cancelar</button></center>                       
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class='panel panel-default infoCompraBoleto'>
                        <div class="panel-heading">
                            <center><h1 id="seccion">Pagar boletos</h1></center>
                        </div>
                        <div class="panel-body"> 
                            <center>
                                <div id="instruccionPago"><h2>Inserte su tarjeta de crédito/débito</h2></div>
                                <br>
                                <img src="images/tarjeta.png" alt="" width="280px" onclick="insertoTarjeta('<?php echo $_GET['idPartido']; ?>','<?php echo $_GET['fecha'] ?>','<?php echo $_GET['cantidad']?>','<?php echo $_GET['seccion'] ?>','<?php echo $_GET['total'] ?>');">
                                <br><br>
                                <img src="images/visa.png" alt="Visa" width="60px">                  
                                <img src="images/masterCard.png" style="margin-left: 70px;" alt="Visa" width="70px"> 
                                
                            </center>               
                        </div>
                    </div>
                </div>  

                </div>
            </div>
        </div>
    </div>


    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/rieleros.js"></script>
</body>
</html>
