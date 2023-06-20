import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartMapComponent } from 'src/app/components/chart-map/chart-map.component';
import { ClientService } from 'src/app/services/client-service/client.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('mapaClientesLocalizacao', { static: true })
  mapaClientesLocalizacao: ChartMapComponent = new ChartMapComponent;

  clients: any;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().then((data: any)=>{
      this.clients = data;
    })
  }

}
