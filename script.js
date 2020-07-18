
let nombreUsuario = document.getElementById("usuario"),
    usuario = nombreUsuario.value;
let valorContrasena = document.getElementById("contra"),
    contrasena = valorContrasena.value
let correcto, correctisimo;
function verificar(){
    if (usuario.length >= 8){
        correcto == true;
        
    }
    if(contrasena.length >= 8){
        correctisimo == true;
    }
}

function botoncito(){
    console.log(usuario.length)
    verificar()
    if(correcto== true && correctisimo == true){
         console.log(usuario + " " + contrasena)
    }else if(correcto != true || correctisimo != true){
        alert("datos inválidos, tanto el usuario como la contraseña deben tener al menos 8 caracteres")
    } 
   

}