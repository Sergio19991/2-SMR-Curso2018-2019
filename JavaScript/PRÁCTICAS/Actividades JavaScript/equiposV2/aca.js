 function equipos() 
{
    var esto = document.getElementById ("betis").value;
    var esto2 = document.getElementById ("sevilla").value;
    var resultado = document.getElementById("aparecer") ;

    if (esto>esto2)
{
    resultado.innerText=("Betis Win");
}
else if (esto2>esto) 
{
        resultado.innerText=("Sevilla win");
} 
else
{
    resultado.innerText=("Igualado");
}
}
function equiposv2() 
{
    var equipoo1 = document.getElementById ("a2").value;
    var equipoo2 = document.getElementById ("B1").value;
    var resultado = document.getElementById("aparecer1");
    var numero1 = document.getElementById ("marcador1").value
    var numero2 = document.getElementById ("marcador2").value

    if (numero1>numero2)
{
    resultado.innerText = equipoo1 + " va ganando"
}
else if (numero1<numero2) 
{
    resultado.innerText = equipoo2 + " va ganando"
} 
else if (numero1==numero2)
{
    resultado.innerText = "EMPATE"
}
}

function Fotos() {
	var foti = document.getElementById("a2").value;
    var foti2 = document.getElementById("A1");

	switch (foti) {
		case "leganes":
			foti2.src = "escudoos/leganes.png"
			break;
		case "levante":
			foti2.src = "escudoos/levante.png"
			break;
		case "madrid":
			foti2.src = "escudoos/realmadrid.png"
			break;
		case "osasuna":
			foti2.src = "escudoos/osasuna.png"
			break;
		case "eibar":
			foti2.src = "escudoos/eibar.png"
			break;
		case "mallorca":
			foti2.src = "escudoos/mallorca.png"
			break;
		case "betis":
			foti2.src = "escudoos/betis.png"
			break;
		case "villarreal":
			foti2.src = "escudoos/villarreal.png"
			break;
		case "athletic":
			foti2.src = "escudoos/athletic.png"
			break;
		case "barcelona":
			foti2.src = "escudoos/barcelona.png"
			break;
		case "getafe":
			foti2.src = "escudoos/getafe.png"
			break;
		case "alaves":
			foti2.src = "escudoos/alaves.png"
			break;
		case "sevilla":
			foti2.src = "escudoos/sevilla.png"
			break;
		case "valladolid":
			foti2.src = "escudoos/valladolid.png"
			break;
		case "atletico":
			foti2.src = "escudoos/atletico.png"
			break;
		case "valencia":
			foti2.src = "escudoos/valencia.png"
			break;
		case "sociedad":
			foti2.src = "escudoos/realsociedad.png"
			break;
		case "espanyol":
			foti2.src = "escudoos/espanyol.png"
			break;
		case "celta":
			foti2.src = "escudoos/celta.png"
			break;
		case "granada":
			foti2.src = "escudoos/granada.png"
			break;
	}
}

function Fotos2() {
    var foti = document.getElementById("B1").value;
    var foti2 = document.getElementById("b2");

	switch (foti) {
		case "leganes":
			foti2.src = "escudoos/leganes.png"
			break;
		case "levante":
			foti2.src = "escudoos/levante.png"
			break;
		case "madrid":
			foti2.src = "escudoos/realmadrid.png"
			break;
		case "osasuna":
			foti2.src = "escudoos/osasuna.png"
			break;
		case "eibar":
			foti2.src = "escudoos/eibar.png"
			break;
		case "mallorca":
			foti2.src = "escudoos/mallorca.png"
			break;
		case "betis":
			foti2.src = "escudoos/betis.png"
			break;
		case "villarreal":
			foti2.src = "escudoos/villarreal.png"
			break;
		case "athletic":
			foti2.src = "escudoos/athletic.png"
			break;
		case "barcelona":
			foti2.src = "escudoos/barcelona.png"
			break;
		case "getafe":
			foti2.src = "escudoos/getafe.png"
			break;
		case "alaves":
			foti2.src = "escudoos/alaves.png"
			break;
		case "sevilla":
			foti2.src = "escudoos/sevilla.png"
			break;
		case "valladolid":
			foti2.src = "escudoos/valladolid.png"
			break;
		case "atletico":
			foti2.src = "escudoos/atletico.png"
			break;
		case "valencia":
			foti2.src = "escudoos/valencia.png"
			break;
		case "sociedad":
			foti2.src = "escudoos/realsociedad.png"
			break;
		case "espanyol":
			foti2.src = "escudoos/espanyol.png"
			break;
		case "celta":
			foti2.src = "escudoos/celta.png"
			break;
		case "granada":
			foti2.src = "escudoos/granada.png"
			break;
	}
}