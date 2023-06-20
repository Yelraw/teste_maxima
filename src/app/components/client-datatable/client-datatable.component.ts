import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-client-datatable',
  templateUrl: './client-datatable.component.html',
  styleUrls: ['./client-datatable.component.scss']
})
export class ClientDatatableComponent implements OnInit {

  @Input() clients: any = [];
  loading: boolean = true;

   constructor() {}

  ngOnInit() {
    this.loading =false;
  }

  clear(table: Table) {
      table.clear();
  }

}
