function crearHora() {
	// body...

var d = new Date();
var dias = ['domingo','lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
var mes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
document.getElementById('date1').innerHTML = "HOY ES: " + dias[d.getDay()];
document.getElementById('date2').innerHTML = "EN EL MES: " + mes[ d.getMonth()];
document.getElementById('date3').innerHTML = "EN EL AÑO: " + d.getFullYear();
document.getElementById('date4').innerHTML = "hora: " + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
	var minutos = d.getMinutes();
	if (minutos<10) {
		minutos = '0'+ minutos;
	}

	var segundos = d.getSeconds();
	if (segundos<10) {
		segundos = '0'+ segundos;
	}

	var tiempo = document.getElementById('date4').innerHTML = "hora: " + d.getHours() + ':' + minutos + ':' + segundos;
	date4.innerHTML = tiempo;
}

var intervalo = setInterval(crearHora, 1000);