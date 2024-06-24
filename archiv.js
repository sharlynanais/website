function handleLogin() {
    // Obtener el valor del campo de usuario
    const username = document.getElementById('username2').value;

    // Simulación de verificación de usuario (reemplazar con lógica real)
    // Cambia 'usuario_correcto' por el nombre de usuario que deseas verificar
    if (username === '17323') {
        location.assign("segunda.html");
        alert("Fecha de aniversario correcta");
    } else {
        alert('Fecha de aniversario incorrecta.');
    }
}