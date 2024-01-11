import { Component } from '@angular/core';
import ZingchartAngular from 'zingchart-angular/zingchart';
@Component({
  selector: 'app-diagramm02',
  templateUrl: './diagramm02.component.html',
  styleUrls: ['./diagramm02.component.css']
})
export class Diagramm02Component {
  diagramm2: ZingchartAngular.graphset = {
    type: 'bar',
    //der Hintergrund ist transparent
    'background-color':"none",
    //die Werte werden als Array übergeben
    series: [{ values: [172, 212, 208, 172] }],
    "scale-x": {
      labels: ["Frühling", 'Sommer', "Herbst", "Winter"]
    }
}
}