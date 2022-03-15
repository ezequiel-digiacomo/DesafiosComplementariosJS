const productos = [];

function configurarMayuscula(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const nombreUsuario = `Hola ${configurarMayuscula(prompt("Bienvenido!!!\n\ - Ingrese su nombre:").toLowerCase())}!!!`;

const tituloUsuario = document.getElementById(`textoUsuario`);
tituloUsuario.innerText = nombreUsuario;



let terminar = true;

const boton = document.getElementById(`btnAgregar`);

boton.onclick = ()=> {

        const inputProductos = configurarMayuscula(document.getElementById(`inputProductos`).value);
        productos.push(inputProductos)
    
        const listaProducto = document.getElementById(`listaProductos`)
    
        const nuevoProducto = document.createElement(`li`)
    
        nuevoProducto.innerText = inputProductos
    
        listaProducto.appendChild(nuevoProducto)
    
    }
    
let borrar = document.getElementById(`borrarLista`);
    
borrar.onclick = () =>{
    let lista = document.getElementById(`listaProductos`)
    lista.remove();
}
    



