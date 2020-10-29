function tablaMultiplicar() {
	var tabla = parseInt(document.getElementById("cifra").value);
	var resultado = document.getElementById("resultado");
	var i = 1;
	var producto;
		
	resultado.innerHTML = "";	
	while (i <= 50) {
		producto = tabla * i;
		resultado.innerHTML += "<tr><td>" + tabla + " X " + i + " = " + producto + "</td></tr>";
		i++;
	}
}




/*Sergio Bejarano Arroyo*/