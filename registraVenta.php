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
      <div class="col-md-6 col-md-offset-3">
        <div class='panel panel-default tickets'>
            <div class="panel-heading">
              <center>  <img width="80px" src="images/logoRieleros.png" onclick="animate('tada','logoRieleros')" id="logoRieleros"> VS
                <img width="80px" src="images/equipos/<?php echo $imagen; ?>"> </center>
            </div>
            <div class="panel-body">
                <h3>Partido: <span><?php echo $visitante; ?> VS Rieleros</span></h3>
                <br>
                <h3>Lugar: <span>Parque Alberto Romo Chávez</span></h3>
                <br>
                <h3>Hora: <span>6 P.M.</span></h3>
                <br>
                <h3>Sección: <span><?php echo $seccion; ?></span></h3>
                <br>
                <h3>Cantidad: <span><?php echo $cantidad; ?></span></h3>
                <br>
                <h3>Total: $<span><?php echo $total; ?></span></h3>
                <br>
                <br>
                <br>
                <br>
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
