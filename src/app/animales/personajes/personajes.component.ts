import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/animales.interface';
import { AnimalesService } from '../services/animales.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes: Personaje [] = [];
 
  get personajes () {
    return this.animalesService.personajes;
  }

  constructor (private animalesService: AnimalesService) {}

}
