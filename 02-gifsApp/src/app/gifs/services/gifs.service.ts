import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private APIKEY= "iAHFELLmLiMP5sTRLknGJQq3Pus3tNKV";

  private _historial:string[]=[];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){

    if(!this._historial.includes(query)){

      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
    }
    console.log(this._historial);
  }
}
