/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen :number;
    segundo :number;
    cancion :string;
    detalles :Detalles
}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor:'ed sehream',
        anio:2015,
    }
} 

const {volumen,segundo,cancion,detalles} = reproductor;

const {autor} =detalles;
/*console.log("el volemen de:"+volumen); 
console.log("el segundo de:"+segundo); 
console.log("la cancion de:"+cancion); 
console.log("el autor de:"+autor); */

const dbz: string[] =  ['gplu','vegueta',"trunks"];
const [,,p3] = dbz;
console.log(dbz[0]);
console.log(dbz[0]);
console.log(p3);
