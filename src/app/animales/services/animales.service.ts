import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/animales.interface";



@Injectable()
export class AnimalesService {

    private _personajes: Personaje[] = [
        { 
          nombre:'vaca',
          poder : 1500
        },
        {
          nombre: 'caballo',
          poder : 5000
        }
      ];

      get personajes () : Personaje [] {
        return [...this._personajes];
      }

    constructor() {}

    agregarPersonaje ( personaje: Personaje ) {
        this._personajes.push ( personaje );
    }
}