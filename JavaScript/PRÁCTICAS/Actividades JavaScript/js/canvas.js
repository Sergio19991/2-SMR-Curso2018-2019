function dibujar() {

	var c = document.getElementById("micanvas");
	var cxt = c.getContext("2d");
	
	// Aquí irá el código para dibjar.
	
		cxt.fillStyle = "#123456";   // Definimos el color para rellenar el rectángulo.
		cxt.fillRect(30,10,80,100);   // Dibuja un rectángulo relleno - fillRect(x,y,width,height).

		cxt.strokeStyle = "red";   // Definimos el color para pintar el borde.
		cxt.strokeRect(70,32,100,50);   // Dibuja el borde del rectángulo - strokeRect(x,y,width,height).

		cxt.fillRect(145,25,70,70);   // Dibuja un rectángulo relleno del últimocolor definido como fillStyle.

		cxt.fillStyle = "rgba(220,220,10,0,7)";   // Define otro color para rellenar el rectángulo.
		cxt.fillRect(180,10,100,100);   // Dibuja un rectángulo relleno.
		
		cxt.clearRect(30,10,20,20);   // Borra el contenido que hubiese en el área del rectángulo definido.

		cxt.strokeRect(190,20,80,80)   // Dibuja el borde del rectángulo de definido por última vez con strokeStyle
}




/*Sergio Bejarano Arroyo*/