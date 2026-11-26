function enviar() {
    let nombre = document.getElementById("nombre").value;
    let paterno = document.getElementById("paterno").value;
    let materno = document.getElementById("materno").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    document.getElementById("resultadoNombre").innerHTML =
    "Nombre: "+ nombre;

    document.getElementById("resultadoApellidoPaterno").innerHTML =
    "Apellido Paterno: "+ paterno;

    document.getElementById("resultadoApellidoMaterno").innerHTML =
    "Apellido Materno: "+ materno;

    document.getElementById("resultadoTelefono").innerHTML =
    "Telefono: "+ telefono;

    document.getElementById("resultadoDireccion").innerHTML =
    "Direccion: "+ direccion;

    document.getElementById("resultadoCorreoElectronico").innerHTML =
    "Correo Electronico: "+ correo;
}