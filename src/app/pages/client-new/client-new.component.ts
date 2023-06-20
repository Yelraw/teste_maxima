import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/services/client-service/client.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss'],
  providers: [MessageService]
})
export class ClientNewComponent implements OnInit {

      code: any
      name: any
      cnpj: any
      street: any
      number: any
      district: any
      city: any
      state: any
      country: any
      cep: any
      complement: any	
      lat: any
      lon: any

      validation: any = {
        code: false,      
        name: false,
        cnpj: false,
        street: false,
        number: false,
        district: false,
        city: false,
        state: false,
        country: false,
        cep: false,
        complement: false,	
        location: false,
      }

  constructor(private router: Router, private clientService: ClientService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  markedlatlon(latlon: any){
    this.lat = latlon.lat
    this.lon = latlon.lng
  }

  clearValidation(){
    this.validation = {
      code: false,      
      name: false,
      cnpj: false,
      street: false,
      number: false,
      district: false,
      city: false,
      state: false,
      country: false,
      cep: false,
      complement: false,	
      location: false,
    }
  }

  sendForm(){
    this.clearValidation()
    if(this.code == null || this.code == ""){
      this.validation.code = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo código é obrigatório.' });
      return;
    }
    if(this.name == null || this.name == ""){
      this.validation.name = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo nome é obrigatório.' });
      return;
    }
    if(this.name.lenght < 5 || this.name.lenght > 120){
      this.validation.name = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'O tamanho do campo deve ter entre 5 e 120 caracteres!' });
      return;
    }
    if(this.cnpj == null || this.cnpj == ""){
      this.validation.cnpj = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo CNPJ é obrigatório.' });
      return;
    }
    if(this.cnpj.length < 14 || this.cnpj.lenght > 19){
      this.validation.cnpj = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'O cnpj está incorreto ou em um formato diferente do suportado!.' });
      return;
    }
    if(this.street == null || this.street == ""){
      this.validation.street = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo rua é obrigatório.' });
      return;
    }
    if(this.number == null || this.number == ""){
      this.validation.number = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo numero é obrigatório.' });
      return;
    }
    if(this.district == null || this.district == ""){
      this.validation.district = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo bairro é obrigatório.' });
      return;
    }
    if(this.city == null || this.city == ""){
      this.validation.city = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo cidade é obrigatório.' });
      return;
    }
    if(this.state == null || this.state == ""){
      this.validation.state = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo estado é obrigatório.' });
      return;
    }
    if(this.cep == null || this.cep == ""){
      this.validation.cep = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo cep é obrigatório.' });
      return;
    }
    
    if(this.lat == null || this.lat == 0 || this.lon == null || this.lon == 0){
      this.validation.location = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'A localização é obrigatória, por favor marque a localização desejada clicando no mapa.' });
      return;
    }
    this.clientService.saveClient(
      {
        code: this.code,      
        name: this.name,
        cnpj: this.cnpj,
        street: this.street,
        number: this.number,
        district: this.district,
        city: this.city,
        state: this.state,
        country: this.country,
        cep: this.cep,
        complement: this.complement,	
        lat: this.lat,
        lon: this.lon
      }
    ).then((data: any)=>{
      if(data != null){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cadastrado com sucesso' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erro ao cadastrar' });
        this.homePageRedirect();
      }
    })
  }

  homePageRedirect(){
    this.router.navigate(['/']);
  }

}
