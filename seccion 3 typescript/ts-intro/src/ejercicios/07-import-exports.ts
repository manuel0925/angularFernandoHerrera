import { calcularISV, Producto } from "./06-destruturacion-funciones"; 
/*
    ===== Código de TypeScript =====
*/


const carritoCompras : Producto[] = [
    {
        desc:"Telefono 1", 
        precio:100
    },
    
    {
        desc:"Telefono 2", 
        precio:150
    }
];

const [total,isv] = calcularISV(carritoCompras);


console.log(total); 
console.log(isv); 





