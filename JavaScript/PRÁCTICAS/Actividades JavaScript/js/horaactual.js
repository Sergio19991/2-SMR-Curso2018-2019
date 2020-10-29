function horaactual()
{
	horareal = new Date()
	hora = horareal.getHours()
	minuto = horareal.getMinutes()
	segundo = horareal.getSeconds()
		
		if (hora<10) {
             hora="0"+hora;
             }
        if (minuto<10) {
             minuto="0"+minuto;
             }
        if (segundo<10) {
             segundo="0"+segundo;
             }
			 
	document.getElementById("reloj").innerText = hora+":"+minuto+":"+segundo;
}










//FUNCIONA PERO SE QUEDA CONGELADO EN ::59==:
/*{
		var hora;
			hora = new Date();
		
		if (hora.getHours()<10) {
			hora.getHours()="0"+hora.getHours()
		}
		if (hora.getMinutes()<10) {
			hora.getMinutes()="0"+hora.getMinutes()
		}
		if (hora.getSeconds()<10) {
			hora.getSeconds()="0"+hora.getSeconds()
		}

		document.getElementById("reloj").innerText = hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
}
*/



//FUNCIOA!!!!!!!:
/*
	{
		horareal = new Date()
		hora = horareal.getHours()
		minuto = horareal.getMinutes()
		segundo = horareal.getSeconds()
		
		if (hora<10) {
             hora="0"+hora;
             }
        if (minuto<10) {
             minuto="0"+minuto;
             }
        if (segundo<10) {
             segundo="0"+segundo;
             }
			 
		document.getElementById("reloj").innerText = hora+":"+minuto+":"+segundo;
	}
*/








//ORIGINAL (FUNCIONA CON UN DÍGITO "SIN 0"):
/*{
		var hora;
			hora = new Date();

		document.getElementById("reloj").innerText = hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
}*/


//¡¡¡ESTÁ AL REVÉS!!!:
/*
function horaactual()
	{
		var hora;
		var hora = new Date();
		var minutos = new Date();
		var segundos = new Date();

		document.getElementById("reloj").innerText = hora.getHours()+":"+minutos.getMinutes()+":"+segundos.getSeconds();
	
		if(horas < 10){
			horas = "0" + horas;
		}
		
		if(minutos < 10){
			minutos = "0" + minutos;
		}
		
		if(segundos < 10){
			segundos = "0" + segundos;
		}
	}
*/