import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Diagramm01Component } from './diagramm01/diagramm01.component';
import { Diagramm02Component } from './diagramm02/diagramm02.component';

//für die Material-Komponente
import { MatCardModule } from '@angular/material/card';
//für ZingChart
import { ZingchartAngularModule } from 'zingchart-angular';
@NgModule({
  declarations: [
    AppComponent,
    Diagramm01Component,
    Diagramm02Component,
   
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    ZingchartAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
