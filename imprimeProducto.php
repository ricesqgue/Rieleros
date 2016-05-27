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
  <div class="container">
    <div class="row">
      <center>
          <div class="col-md-12">
              <div class="cuponProducto">
                <br>
                <br>
                <br>
                <br>
                <br>
                <h3><b>Rieleros de Aguascalientes</b></h3>
                <br>
                <h3>Cupon válido por: </h3>
                <h3><b>Gorrra new era [Gris/Azul]</b></h3>
                <h3>Cantidad: <b><?php echo $_GET["cantidad"] ?></b></h3>
                <h3>Total: <b>$<?php echo $_GET["total"] ?></b></h3>
                <h3><?php echo $_GET["fecha"] ?></h3>
                <br>
                <h5>**Recoger en tienda de lunes a sábado. 10:00am - 5:00pm</h5>

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
            <span style="font-size: 14pt; text-align: center"><br>Imprimiendo vale de productos</span>
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
