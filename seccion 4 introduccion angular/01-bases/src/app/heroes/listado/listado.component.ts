import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent  {

  heroes : string[] =  ["spiderman","ironmnan","hulk"];
  heroeBorrado :string = "" ;
  
  borrar(){
    console.log("borrando....");
    let heroeEliminado =  this.heroes.shift();

    this.heroeBorrado= heroeEliminado || "";
    console.log(heroeEliminado)
    console.log("elemento borrado");
  }

}
