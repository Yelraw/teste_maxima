import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartMapComponent } from 'src/app/components/chart-map/chart-map.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('mapaClientesLocalizacao', { static: true })
  mapaClientesLocalizacao: ChartMapComponent = new ChartMapComponent;

  cli = [
    {
      name: 'Teste 123',
      lat: -16.328547,
      lon: -48.953403
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
