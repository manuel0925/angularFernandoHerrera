import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre : string;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {
 
  personajes : Personaje[] = [
    {
      nombre:"Goku",
      poder: 20000
    },
    {
      nombre:"Vegueta",
      poder : 30000
    }
  ];

  nuevo :Personaje = {
    nombre: '',
    poder: 0
  }
  
  agregar(){
     if(this.nuevo.nombre.trim().length === 0){
       return;
     }

     this.personajes.push(this.nuevo);
     console.log(this.nuevo)
     this.LimpiarObjeto();

     console.log(this.personajes);

  }
  
  cambiarNombre(even : any){
    console.log(even.target.value);

  }

  LimpiarObjeto() {
      this.nuevo = {
        poder:0,
        nombre:""
      }

    

  }






}
