
$(document).ready(function(){

	$('.modal').modal();
	});

//Obtener número aleatorio entre 0 y 100
let numeroAdivinar = parseInt((Math.random()*99)+1);
let numeroIntentos = 0;
//Se obtiene el dato del número de intentos que tendrá el jugador
const obtenerDificultad = ()=> {
	event.preventDefault();

	if (document.getElementById("facil").checked == true){
		numeroIntentos =9;
	}
	else if(document.getElementById("intermedio").checked == true){
		numeroIntentos =4;
	}
	else if(document.getElementById("dificil").checked == true){
		numeroIntentos =2;
	}

	//Se alterna la visualización de los elementos en pantalla
	$("#juego").show();
	$("#botonEmpezar").hide();

}

//Se comparan los valores ingresados por el usuario con el número a adivinar y contabiliza el número de intentos
const adivinar = () =>{

	event.preventDefault();

	let numeroJugador= document.getElementById("numero").value;

	if(numeroIntentos>0){

		if(numeroJugador < numeroAdivinar){
		numeroIntentos--;
		$("#numero").val("");
		$("#respuestas").html(`<p class="mensaje"> No es ${numeroJugador} . El numero que buscas es mayor.</p>`);
		}
		else if (numeroJugador > numeroAdivinar){
			$("#respuestas").html(`<p class="mensaje"> No es ${numeroJugador} . El numero que buscas es menor.</p>`);
			numeroIntentos--;
			$("#numero").val("");
		}
		else if (numeroJugador == numeroAdivinar){
			$("#respuestas").html(`<p class='acertado'>${numeroAdivinar} - GANASTE!!</p><audio autoplay src="audio/Queen -We Are The Champions fragmento.mp3"></audio><img height="250px" src="img/win.gif"><br><input class="btn waves-effect waves-light juegoNuevo" type="submit" value="Juego Nuevo">`);
		}
	} else{
		$("#respuestas").html(`<p class='fin'>PERDISTE!! El numero era el ${numeroAdivinar}.</p><audio autoplay src="audio/Nelsons haha.mp3"></audio><img height="220px" src="img/looser.gif"><br><input class="btn waves-effect waves-light juegoNuevo" type="submit" value="Juego Nuevo">`);
	}
}

//Recargar página
const jugarOtraVez = () => location.reload();

	$(document).on("click",".juegoNuevo",jugarOtraVez);


