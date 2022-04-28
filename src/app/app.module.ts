import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { AnimalesModule } from './animales/animales.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroModule,
    ContadorModule,
    AnimalesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
