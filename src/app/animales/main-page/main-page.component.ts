import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/animales.interface';
import { AnimalesService } from '../services/animales.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'gallina',
    poder :  250
  }

constructor () {}
  


}
