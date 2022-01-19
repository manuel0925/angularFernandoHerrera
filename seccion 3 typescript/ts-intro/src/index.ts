/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre:string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre :"manuel",
} 

console.log(pasajero1.hijos?.length || 0);