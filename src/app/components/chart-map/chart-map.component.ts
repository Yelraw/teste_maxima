import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Component, Inject, Input, OnInit } from '@angular/core';
 
export const DEFAULT_LAT = -16.328547;
export const DEFAULT_LON =  -48.953403;
export const TITULO = 'Localização';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss']
})
export class ChartMapComponent implements OnInit {

    private map:any;
    private lat: number = DEFAULT_LAT;
    private lon: number = DEFAULT_LON;

    countries: any[] = [];

    selectedClient: any = {};

    onChangeClient(cliente: any){
      if(cliente != undefined)
      this.adicionaMarcadoresIndividual(cliente);
    }


    @Input() data: any = [];
    @Input() titulo: string = TITULO ;
   
    constructor() {
    }
   
    ngOnInit(): void {
      setTimeout(() => {
        this.initMap();
      }, 2000);
    }

    adicionaMarcadores(clientes: any){
      
      if(clientes.length > 0 && this.map != null){
        this.map.eachLayer((layer:any) => {
          if (!(layer instanceof L.TileLayer)) {
            this.map.removeLayer(layer);
          }
        });
      }
      clientes.map(
        (cliente: any)  => {
          console.log(cliente.lat)
          var marker = L.marker([cliente.lat, cliente.lon]).bindPopup("Nome: "+cliente.name +"\n"+ "CNPJ: "+ cliente.cnpj);
          marker.addTo(this.map);
        }
      )
      
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

    refresh(){
      this.adicionaMarcadores(this.data);
    }
   
   
    private initMap(): void {
        //configuração do mapa
        this.map = L.map('map', {
          center: [this.lat, this.lon],
          attributionControl: false,
          zoom: 5
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

        
        //adiciona marcações ao mapa
        if(this.data.length > 0)
        this.adicionaMarcadores(this.data);

        tiles.addTo(this.map);

      }



}
