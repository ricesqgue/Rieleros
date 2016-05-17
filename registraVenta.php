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

  <br><br><br>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $database = "rieleros";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $idPartido = $_GET['idPartido'];
  $cantidad = $_GET['cantidad'];
  $seccion = $_GET['seccion'];
  $total = $_GET['total'];
  $fecha = $_GET["fecha"];
  $visitante;
  $idSeccion;
  $imagen;
  if($idPartido==1){
    $imagen="sultanes.png";
    $visitante="Sultantes";
  }
  else if($idPartido==2){
    $imagen="acereros.png";
    $visitante="Acereros";
  }
  else{
    $imagen="diablos.png";
    $visitante="Diablos";
  }

  $query = "select idSeccion from seccion where nombre='" . $seccion."';";
	$consulta = $conn->query("$query");

  while($row = $consulta->fetch_assoc()){
    $idSeccion=$row['idSeccion'];
	}
  $query = "insert into ventaboletos values(default," . $cantidad."," . $total. ",". $idPartido.",".$idSeccion. ");";
	$consulta = $conn->query("$query");
  ?>
  <div class="container">
    <div class="row">
      <center>
          <div class="col-md-12">
              <div class="boleto">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br> 
                <br>
                <br>         
                <img width="80px" class='infoBoleto' src="images/logoRieleros.png" onclick="animate('tada','logoRieleros')" id="logoRieleros"> VS
                <img width="80px" class='infoBoleto' src="images/equipos/<?php echo $imagen; ?>">
                <br>
                <br>  
                <span class='infoBoleto'>Parque Alberto Romo Chávez</span>
                <br><br>
                <span class='infoBoleto'><?php  echo $visitante ?> VS Rieleros</span>
                <br><br>
                <span class='infoBoleto'>Seccion: <?php  echo $seccion ?></span>
                <br><br>
                <span class='infoBoleto'><?php   echo $cantidad ?> boleto(s)</span>
                <br><br>
                <span class='infoBoleto'>$ <?php echo $total  ?></span>
                <br><br>  
                <span class='infoBoleto'><?php  echo $fecha ?> 6:00 PM</span>
              </div>
          </div>
      </center> 
    </div>
  </div>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-md-4 div col-md-offset-4">
        <div class="progress" style="height: 30px;">
          <div class="progress-bar progress-bar-striped progress-bar-warning active" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
            <span style="font-size: 18pt; text-align: center"><br>Imprimiendo boletos</span>
          </div>
        </div>
      </div>
    </div>
</div> 

  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/rieleros.js"></script>
  <script>
    setTimeout(function(){window.location.href='index.html'},7000);
  </script>

</body>
</html>
