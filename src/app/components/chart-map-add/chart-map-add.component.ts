import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Component, Inject, Output, EventEmitter, Input, OnInit } from '@angular/core';
 
export const DEFAULT_LAT = -16.328547;
export const DEFAULT_LON =  -48.953403;
export const TITULO = 'Localização (Clicar no mapa para selecionar)';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-chart-map-add',
  templateUrl: './chart-map-add.component.html',
  styleUrls: ['./chart-map-add.component.scss']
})
export class ChartMapAddComponent implements OnInit  {

  
  private map:any;
  private lat: number = DEFAULT_LAT;
  private lon: number = DEFAULT_LON;

  onChangeClient(cliente: any){
    if(cliente != undefined)
    this.adicionaMarcadoresIndividual(cliente);
  }

  @Input() titulo: string = TITULO ;
  @Output() markedlatlon = new EventEmitter<any>();
  
 
  constructor() {
  }
 
  ngOnInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 1000);
  }



  adicionaMarcadoresIndividual(cliente: any){
    var marker = L.marker([cliente.lat, cliente.lon]).bindPopup(cliente.name);
    marker.addTo(this.map);  
  }

  removerMarcacoes(){
    if(this.map != null){
      this.map.eachLayer((layer:any) => {
        if (!(layer instanceof L.TileLayer)) {
          this.map.removeLayer(layer);
        }
      });
    }  
  }
 
  async encontrarEndereco(endereco: any) {
    var dados;
    endereco.numero? endereco.numero : endereco.numero = '00';
    await fetch("https://nominatim.openstreetmap.org/search?q="+ endereco.numero + "+" + endereco.rua + "," + "+" + endereco.bairro + "+" + endereco.cidade + "&format=json&polygon=1&addressdetails=1").then(
        response => response.json ()
      ).then(
        data => {dados = { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) }; console.log(data);
      }).catch(
        err=> console.log(err)
        );
    return dados;
  }

 
 
  private initMap(): void {
      //configuração do mapa
      this.map = L.map('map', {
        center: [this.lat, this.lon],
        attributionControl: false,
        zoom: 5
      });

      var markersGroup = L.layerGroup();
      this.map.addLayer(markersGroup);

      this.map.on('click', (e: any) =>{

        if (markersGroup.getLayers().length < 1) {
          var marker = L.marker(e.latlng).addTo(markersGroup);
          this.markedlatlon.emit(e.latlng);
          return;
      }
      markersGroup.clearLayers();
      this.markedlatlon.emit({lat: "", lon: ""});

        // var marker = L.marker(e.latlng).bindPopup(e.latlng);
        // marker.addTo(this.map);
      });
 
      //icones personalizados
      var iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 30]
      });
     L.Marker.prototype.options.icon = iconDefault;
 
     //fundo do mapa
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 2,
      });

      tiles.addTo(this.map);

    }

}
