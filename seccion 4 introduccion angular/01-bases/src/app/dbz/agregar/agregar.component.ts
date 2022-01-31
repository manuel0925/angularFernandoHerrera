import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter }  from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor (private dbzService:DbzService){

  }

 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  nuevos:number = 30;

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);


    //this.onNuevoPersonaje.emit(this.nuevo);
    this.LimpiarObjeto();

  }

  LimpiarObjeto() {
    this.nuevo = {
      poder:0,
      nombre:""
    }



}
}
