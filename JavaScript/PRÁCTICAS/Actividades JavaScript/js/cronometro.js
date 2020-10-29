var temporizador;

function activarTemporizador() {
	temporizador = setInterval(muestraReloj, 1000);
}

function pararTemporizador() {
	clearInterval(temporizador);
}

function muestraReloj() {
	var minutos = parseInt(document.getElementById("minutos").innerText);
	var segundos = parseInt(document.getElementById("segundos").innerText);
	
	if (segundos > 0) {
		segundos--;
	}
	if (minutos > 0 && segundos == 0) {
		minutos --;
		segundos = 59;
	}
	if (minutos == 0 && segundos == 0) {
		pararTemporizador();
	}
	
	if(minutos < 10) { minutos = "0" + minutos; }
	if(segundos < 10) { segundos = "0" + segundos; }
	
	document.getElementById("minutos").innerText = minutos;
	document.getElementById("segundos").innerText = segundos;
}




/*Sergio Bejarano Arroyo*/