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
                        <span class="titulo" style="margin-left: 0px;">U L T I M O </span> <span class="titulo" style="margin-left: 10px;"> P A R T I D O</span>                       
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
        <div class='container'>
            <div class="row">
                <div class="col-md-12">
                    <center>
                        <img src="<?php echo 'images/equipos/' . $_GET['imagen'] ?>" width="230px"   alt="">
                        <span class="vs">V S</span>
                       <img style="z-index: 100;" src="images/logoRieleros.png" width="250px" height="250px" alt=""> 
                   </center>   
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <center>
                        <h4>Encuentro anterior 12 de marzo de 2016</h4>
                        <table class='estadisticas table-bordered'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>C</th>
                                    <th>H</th>
                                    <th>E</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <?php 
                                        $resultado = str_split($_GET['Resultados']);
                                    ?>
                                    <td><img src="<?php echo 'images/equipos/' . $_GET['imagen'] ?>" width='50px' alt=""></td>
                                    <?php 
                                            for($i=0; $i<12; $i++){
                                                    echo "<td>" . $resultado[$i] . "</td>" ."\n";
                                            }
                                    ?>        
                                </tr>

                                <tr>
                                    <td><img src="images/logoRieleros.png" width='50px' alt=""></td>
                                    <?php 
                                            for($i=12; $i<24; $i++){
                                            echo '<td>' . $resultado[$i] . '</td>' ."\n";
                                            }
                                    ?>  
                                </tr>

                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-md-offset-3 col-md-3">
                    <button class="btn btn-grande" onclick="window.history.back(-1)">Regresar</button>
                </div>
                <div class="col-md-3 col-md-offset-1">
                    <?php 
                        $ruta = "compraBoleto.php?idPartido=".$_GET['idPartido'] . "&fecha=" . $_GET['fecha'];
                    ?>
                    <button class="btn btn-grande" onclick="window.location.href='<?php echo $ruta?>'">Comprar Boletos</button>
                </div>
            </div>    

        </div>
    </div>
      
    

    
   

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/rieleros.js"></script>
</body>
</html>
