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
	
	$salida = array();
	$query = "select s.idSeccion as idSeleccion, s.nombre as nombre ,s.capacidad - if(sum(v.cantidad) is not null,sum(v.cantidad),0) as disponibles from ventaBoletos v natural join seccion s where v.idPartido = " . $idPartido." group by idSeccion;"; 
	$consulta = $conn->query("$query");

	while($row = $consulta->fetch_assoc()){
		array_push($salida, array('nombre'=> $row['nombre']));
	}
	echo json_encode($salida);

?>