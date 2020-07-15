const boton = document.getElementById('boton');
const principal = document.getElementById('principal');
const mensaje = document.getElementById('mensaje');
const despuesdeloguearnos = document.getElementById('despuesdeloguearnos');


eventListener()
function eventListener() {
    // al arraancar la página
    document.addEventListener('DOMContentLoaded', loadPage);
    // para el boton
    boton.addEventListener('click', logueado);
}

function loadPage() {
    principal.className = 'otromas'
    mensaje.style.background = 'green'
    mensaje.innerText = 'Debes de loguearte...'
    setTimeout(() => {
        mensaje.innerText = ''
        principal.className = 'otro'

    }, 2000)

}


function logueado(e) {
    e.preventDefault();
    const segundo = document.getElementById('segundo');
    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
    // designando user y password único
    let user = 'chaname';
    let pass = 'miranda'
    if(usuario === user || usuario != '' && contrasenia === pass || contrasenia != ''){
        segundo.style.background = 'orange'
        segundo.style.color = 'black'
        segundo.style.fontSize = '30px';
        segundo.style.textAlign = 'center';
        segundo.style.padding = '20px';
        segundo.style.margin = '20px';

        segundo.className = 'otro';
        principal.className = 'otromas'

    }else{
        mensaje.style.background = 'red'
        mensaje.innerText = 'Introduce bien la contraseña o tu usuario'
        setTimeout(()=>{
        mensaje.innerText = ''
        }, 2000)
        
    }

}