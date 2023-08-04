class Producto {
    constructor (nombre, precio, cantidad, categoria, id){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.id = id;
    }
}

let producto = [];
let mouseLogitech = new Producto ("Mouse Logitech Signature M650 ", 26000, 8, "mouse", 1);
let tecladoRazer = new Producto ("Teclado Razer Huntsman Mini", 80000, 5, "teclado", 2);
let monitorSamsung = new Producto ("Monitor Samsung Odyssey CRG5", 155000, 6, "monitor", 3);
let tecladoLogitech = new Producto ("Teclado Logitech K380", 27000, 4, "teclado", 4);
let monitorAsus = new Producto ("Monitor Asus VG24VQ", 176000, 3, "monitor", 5)




let pushearProductos = (arrayUno, arrayDos) =>{
    return arrayDos.push(arrayUno);
}

pushearProductos(mouseLogitech, producto);
pushearProductos(tecladoRazer, producto);
pushearProductos(monitorSamsung, producto);
pushearProductos(tecladoLogitech, producto);
pushearProductos(monitorAsus, producto);

console.log(producto);




const productosOrdenados = producto.slice().sort(( a, b ) => {
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
})

console.log(productosOrdenados);




const bienvenida = () => {
    alert("¡Bienvenido a CasaTech!");
    let eleccion = prompt(`Escriba el numero del producto que busca.\n 1. Mouses\n 2. Teclados\n 3. Monitores\n 0.Salir`);
    
    while(eleccion != 0){
    
        if (eleccion === "1"){
            alert("ELIJIO MOUSE");
            return "mouse";
    
        } else if (eleccion === "2"){
            alert("ELIJIO TECLADOS");
            return "teclado";
    
        } else if (eleccion === "3"){
            alert("ELIJIO MONITORES");
            return "monitor";
        } else{
            alert("ERROR. Número inválido")
        }
        eleccion = prompt(`Escriba el numero del producto que busca.\n 1. Mouses\n 2. Teclados\n 3. Monitores\n 0.Salir`);
    }
}

let busqueda = bienvenida()

// const compra = (producto) =>{
//     productosOrdenados.find((elemento) => {
//         console.log(elemento === producto);
//     })
// }
// compra(busqueda);

const prueba = productosOrdenados.forEach((producto, indice) => {
    //console.log(producto.categoria);
    return producto.categoria === "teclado";
})
console.log(prueba);


// let productoBuscado = bienvenida();
// console.log(productoBuscado);





// const busqueda = () => {
// }
// let respuesta = busqueda()




// switch(productoBuscado){
//     case "1":
//         alert("ELIJIO MOUSE");
//         return "mouses";
//         break;
//     case "2":
//         alert("ELIJIO TECLADOS");
//         return "teclados"
//         break;
//     case "3":
//         alert("ELIJIO MONITORES")
//         return "monitores";
//         break;
//     default:
//         alert("ERROR");
// }

