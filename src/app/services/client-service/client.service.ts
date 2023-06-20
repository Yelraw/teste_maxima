import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http: HttpClient) { }

  getClients() {
    return new Promise((resolve, reject) => { 
      this.http.get(API_URL + 'clientes', { observe: 'response'}).subscribe((response: any) =>{
        resolve(response.body);
      },
       error => {
        reject(error);
       }
      )
    });
  }

  saveClient(client: any) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + 'clientes', client, { observe: 'response' })
        .subscribe((response: any) => {
          resolve(response.body);
        },
          error => {
            reject(error);
          })
    }
    )
  };

}
