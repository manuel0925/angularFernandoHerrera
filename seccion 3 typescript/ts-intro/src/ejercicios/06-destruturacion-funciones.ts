
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc : string;
    precio: number;
}


const telefono : Producto = {
    desc: "un telefono",
    precio: 100
}

const tablet : Producto = {
    desc: "una tablet",
    precio: 300
}


export function calcularISV(productos : Producto[]) : [number,number] {
    let total = 0;

    productos.forEach(({precio}) =>{
        total += precio;
    })
     

    
    return [total,total*0.15];
}

/*const articulos = [ tablet,telefono ]

const [isv,total] = calcularISV(articulos);
console.log("eso",total);
console.log("mismo",isv);*/