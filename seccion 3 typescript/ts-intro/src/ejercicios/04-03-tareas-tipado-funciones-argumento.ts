/*
    ===== Código de TypeScript =====
*/
/*function suma(a:number,b:number):number{
    return a+b;
}

const sumarFlecha = (a:number,b:number):number=>{ 
    
    	return   a+b;
}

function multiplicar (numero:number,otronumero?:number,base:number = 2):number{
    return numero * base;
}

const resultado  = multiplicar(5,0,10);


console.log(resultado);*/

interface Direccion{
    calle: string;
    pais: string;
    cuidad :string;
}
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion:Direccion;
    mostrarDireccion(): string;
}
const superHeroe : SuperHeroe = {
    nombre:  'spiderman',
    edad : 30,
    direccion: {
        calle: "main",
        pais: 'uSA',
        cuidad: 'ny'
    },
    mostrarDireccion(){
        return `${this.nombre},${this.direccion.cuidad},${this.direccion.pais}`
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);