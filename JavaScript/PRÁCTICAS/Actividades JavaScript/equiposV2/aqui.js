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
    resultado.innerText = "empate"
}
}

function Fotos() 
{
    var foti = document.getElementById("a2").value;
    var foti2 = document.getElementById("A1");

    if (foti == "leganes")
    {
        foti2.src="escudoos/leganes.png"
    }
    else if (foti == "levante")
    {
        foti2.src="escudoos/levante.png"
    }
    else if (foti == "madrid")
    {
        foti2.src="escudoos/realmadrid.png"
    }
    else if (foti == "osasuna")
    {
        foti2.src="escudoos/osasuna.png"
    }
    else if (foti == "eibar")
    {
        foti2.src="escudoos/eibar.png"
    }
    else if (foti == "mallorca")
    {
        foti2.src="escudoos/mallorca.png"
    }
    else if (foti == "betis")
    {
        foti2.src="escudoos/betis.png"
    }
    else if (foti == "villarreal")
    {
        foti2.src="escudoos/villarreal.png"
    }
    else if (foti == "athletic")
    {
        foti2.src="escudoos/athletic.png"
    }
    else if (foti == "barcelona")
    {
        foti2.src="escudoos/barcelona.png"
    }
    else if (foti == "getafe")
    {
        foti2.src="escudoos/getafe.png"
    }
    else if (foti == "alaves")
    {
        foti2.src="escudoos/alaves.png"
    }
    else if (foti == "sevilla")
    {
        foti2.src="escudoos/sevilla.png"
    }
    else if (foti == "valladolid")
    {
        foti2.src="escudoos/valladolid.png"
    }
    else if (foti == "atletico")
    {
        foti2.src="escudoos/atletico.png"
    }
    else if (foti == "valencia")
    {
        foti2.src="escudoos/valencia.png"
    }
    else if (foti == "sociedad")
    {
        foti2.src="escudoos/realsociedad.png"
    }
    else if (foti == "espanyol")
    {
        foti2.src="escudoos/espanyol.png"
    }
    else if (foti == "celta")
    {
        foti2.src="escudoos/celta.png"
    }
    else if (foti == "granada")
    {
        foti2.src="escudoos/granada.png"
    }
}

function Fotos2() 
{
    var foti = document.getElementById("B1").value;
    var foti2 = document.getElementById("b2");

    if (foti == "leganes")
    {
        foti2.src="escudoos/leganes.png"
    }
    else if (foti == "levante")
    {
        foti2.src="escudoos/levante.png"
    }
    else if (foti == "madrid")
    {
        foti2.src="escudoos/realmadrid.png"
    }
    else if (foti == "osasuna")
    {
        foti2.src="escudoos/osasuna.png"
    }
    else if (foti == "eibar")
    {
        foti2.src="escudoos/eibar.png"
    }
    else if (foti == "mallorca")
    {
        foti2.src="escudoos/mallorca.png"
    }
    else if (foti == "betis")
    {
        foti2.src="escudoos/betis.png"
    }
    else if (foti == "villarreal")
    {
        foti2.src="escudoos/villarreal.png"
    }
    else if (foti == "athletic")
    {
        foti2.src="escudoos/athletic.png"
    }
    else if (foti == "barcelona")
    {
        foti2.src="escudoos/barcelona.png"
    }
    else if (foti == "getafe")
    {
        foti2.src="escudoos/getafe.png"
    }
    else if (foti == "alaves")
    {
        foti2.src="escudoos/alaves.png"
    }
    else if (foti == "sevilla")
    {
        foti2.src="escudoos/sevilla.png"
    }
    else if (foti == "valladolid")
    {
        foti2.src="escudoos/valladolid.png"
    }
    else if (foti == "atletico")
    {
        foti2.src="escudoos/atletico.png"
    }
    else if (foti == "valencia")
    {
        foti2.src="escudoos/valencia.png"
    }
    else if (foti == "sociedad")
    {
        foti2.src="escudoos/realsociedad.png"
    }
    else if (foti == "espanyol")
    {
        foti2.src="escudoos/espanyol.png"
    }
    else if (foti == "celta")
    {
        foti2.src="escudoos/celta.png"
    }
    else if (foti == "granada")
    {
        foti2.src="escudoos/granada.png"
    }
}