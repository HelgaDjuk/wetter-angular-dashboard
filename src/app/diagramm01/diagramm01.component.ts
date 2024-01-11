import { Component } from '@angular/core';
import ZingchartAngular from 'zingchart-angular/zingchart';

@Component({
  selector: 'app-diagramm01',
  templateUrl: './diagramm01.component.html',
  styleUrls: ['./diagramm01.component.css']
})
export class Diagramm01Component {
    //das Objekt für das Diagramm
    diagramm1: ZingchartAngular.graphset = {
    //der Typ des Diagramms
    type: 'bar',
    //der Hintergrund ist transparent
    'background-color': 'none',
    //die Werte werden als Array übergeben
    series: [{ values: [9.3, 17.5, 9.8, 0.8] }],
    "scale-x": {
      labels: ["Frühling", 'Sommer', "Herbst", "Winter"],

    }
    }  
}
