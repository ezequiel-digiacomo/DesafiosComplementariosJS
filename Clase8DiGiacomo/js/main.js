const productos = [];

function configurarMayuscula(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const nombreUsuario = `Hola ${configurarMayuscula(prompt("Bienvenido!!!\n\ - Ingrese su nombre:").toLowerCase())}!!!`;

const tituloUsuario = document.getElementById(`textoUsuario`);
tituloUsuario.innerText = nombreUsuario;

const boton = document.getElementById(`btnAgregar`);

boton.addEventListener(`click`, () => {

    const inputProductos = configurarMayuscula(document.getElementById(`inputProductos`).value);
    productos.push(inputProductos)

    const listaProducto = document.getElementById(`listaProductos`)

    const nuevoProducto = document.createElement(`li`)

    nuevoProducto.innerText = inputProductos

    listaProducto.appendChild(nuevoProducto)

})