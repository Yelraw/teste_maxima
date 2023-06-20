import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-client-datatable',
  templateUrl: './client-datatable.component.html',
  styleUrls: ['./client-datatable.component.scss']
})
export class ClientDatatableComponent implements OnInit {

  clients!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

   constructor(/*private customerService: CustomerService*/) {}

  ngOnInit() {
      // this.customerService.getCustomersLarge().then((customers) => {
      //     this.customers = customers;
      //     this.loading = false;

      //     this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      // });

      this.representatives = [
        { name: 'teste1', code: '123', 
        cnpj: '46.819.210/0001-07',
        street: 'Av vera cruz',
        number: 235,
        district: 'Alexandrina',
        city: 'Anápolis',
        cep: '75060-210',
        estado: 'GO',
        country: 'BR',
        complement: 'QD 56 Lt 15'
      },
        { name: 'teste2', code: '321',
        cnpj: '46.819.210/0001-07',
        street: 'Av vera cruz',
        number: 235,
        district: 'Alexandrina',
        city: 'Anápolis',
        cep: '75060-210',
        estado: 'GO',
        country: 'BR',
        complement: 'QD 56 Lt 15'
      },
        { name: 'teste3', code: '231', 
        cnpj: '46.819.210/0001-07',
        street: 'Av vera cruz',
        number: 235,
        district: 'Alexandrina',
        city: 'Anápolis',
        cep: '75060-210',
        estado: 'GO',
        country: 'BR',
        complement: 'QD 56 Lt 15'
      }
    ];

      this.representatives = [
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
          { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
          { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
          { name: 'Onyama Limba', image: 'onyamalimba.png' },
          { name: 'Stephen Shaw', image: 'stephenshaw.png' },
          { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      ];

      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
  }

  clear(table: Table) {
      table.clear();
  }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'unqualified':
  //             return 'danger';

  //         case 'qualified':
  //             return 'success';

  //         case 'new':
  //             return 'info';

  //         case 'negotiation':
  //             return 'warning';

  //         case 'renewal':
  //             return null;
  //     }
  // }

}
