/*
    ===== Código de TypeScript =====
*/
let habilidades:(boolean|string|number)[]  = ['Bads','Counter','Healing',100];

interface Pesonaje {
    nombre: string;
    hp:number;
    habilidades : string[];
    puebloNatal? : string;
}

const personaje: Pesonaje = {
    nombre: "strider",
    hp:100,
    habilidades : ['bash',"counter","Healing"]
}

personaje.puebloNatal = 'Pueblo Paleta';


console.table(personaje);