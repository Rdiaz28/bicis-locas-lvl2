/*## Loc@s por las bicis - Level 2

Partiendo del ejercicio Loc@s por las bicis cambiaremos la forma de mostrar los errores al usuario, en vez de mostrar los errores con un alert, Si algún campo presenta error debe informarse al usuario por medio de mensaje, (idealmente un span) que se posicione en del lado derecho del input como se muestra en la imagen.

1. Descarga los archivos en la sección de Descarga, descomprime y colócalos en tu carpeta llamada **bicis-locas-lvl2**   
2. En la consola posiciónate en la carpeta **bicis-locas-lvl2** e inicializa un repositorio en dicha carpeta
3. Crea un repositorio que se llame **bicis-locas-lvl2** en GITHUB, haz tu primer commit y sube los archivos al repositorio. 
4. Abre el archivo **js/main.js** y completa la función **validateForm**, (puedes usar las validaciones anteriores) recuerda que las validaciones de los campos son las siguientes:
- Todos los campos son obligatorios, excepto los dos últimos. 
- Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
- Para los campos nombre y apellido la primera letra debe ser mayúscula
- Validar que el campo email tenga un formato válido. Ej: name@domain.com
- El campo password debe tener al menos 6 caracteres
- El campo password no puede ser igual a "password" ó "123456" ó "098754"
- El valor seleccionado de bicis, debe ser una de las opciones presentadas

**NOTA: ** Recomendamos que el mensaje se añada con un span ya que los estilos ya están definidos.*/



function validateForm(){
	
	var nombre=document.getElementById("name");
	var apellido =document.getElementById("lastname");
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password");
	var indice=document.getElementById("opciones").selectedIndex;


	
	function valor(){
		
		if(valor == null || valor.length == 0 || /^\s+$/.test(valor)){
			var elemento =document.createElement("span");
			var text = document.createTextNode("todos los campos son obligatorios, exepto los dos ultimos");
				document.getElementById("opciones").appendChild(elemento);
			return false;

		}

	}
	valor();

	function valida_nombre(){
		if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
			var elemento =document.createElement("span");
			var text1 = document.createTextNode("Ingresar nombre con inicial en mayusculas");
			document.getElementById("name").appendChild(elemento);
			return false;

		}else if(/^^[A-Z]*$/.test(nombre.value) == false){
			var elemento =document.createElement("span");
			var text2 = document.createTextNode("Favor ingresar solo letras");
			document.getElementById("name").appendChild(elemento);
			
		}    
	}
	valida_nombre();

	function valida_apellido(){
		if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
			var elemento =document.createElement("span");
			var text3 = document.createTextNode("Ingresar apellido con inicial en mayusculas");
			document.getElementById("lastname").appendChild(elemento);
			return false;

		}else if(/^^[A-Z]*$/.test(apellido.value) == false){
			var elemento =document.createElement("span");
			var text4 = document.createTextNode ("Favor ingresar solo letras");
			document.getElementById("lastname").appendChild(elemento);
			 
		}    
	}
	valida_apellido();
	
	function valida_mail(){

		var expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if( !expresion.test(email) ) {
			var elemento =document.createElement("span");
			var text5 = document.createTextNode(" correo inválido, fomato de correo valido Ej: name@domain.com ");
			document.getElementById("input-email").appendChild(elemento);
			
			return false;
		}
	}
	valida_mail();	

	function contraseña(){

		if (pass.value.length < 6){
			alert("tu contraseña no es valida, debe conterner almenos 6 caracteres.");
			return false;
		} else if (pass.value=="password"){
			alert("tu contraseña no puede ser password ");
			return false;	
		} else if (pass.value=="123456"){
			alert("tu contraseña no puede ser 123456");
			return false;
		} else if (pass.value=="098754"){
			alert("tu contraseña no puede ser 098754");
			return false;
		}
	}
	contraseña();


	function seleccion(){
		if( indice == null || indice == 0 ) {
			var elemento =document.createElement("span");
			var text5 = document.createTextNode("debes seleccionar una bici");
			document.getElementById("opciones").appendChild(elemento);
			
			return false;
		}
	}
	seleccion();
}
	





