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

	$idPartido = $_POST['idPartido'];
	$idSeccion = $_POST['idSeccion'];


	$vendidos = 0;
	$query = "select if(sum(cantidad) is not null,sum(cantidad),0) as vendidos from ventaBoletos where idPartido = " . $idPartido . " and idSeccion = ". $idSeccion .";";
	$consulta = $conn->query($query);

	if($consulta->num_rows > 0){
		$row = $consulta->fetch_assoc();
		$vendidos = $row['vendidos'];
	}
	$nombre = "";
	$precio = 0;
	$capacidad = 0;
	$query = "select nombre,precio,capacidad from seccion where idSeccion = " . $idSeccion . ";";
	$consulta = $conn->query($query);
	if($consulta->num_rows > 0){
		$row = $consulta->fetch_assoc();
		$nombre = $row["nombre"];
		$precio = $row["precio"];
		$capacidad = $row["capacidad"];
	}
	$disponibles = (int)$capacidad - (int)$vendidos;

	$salida = array("nombre" => $nombre, "precio" => $precio, "disponibles" => $disponibles);
	echo json_encode($salida);


?>