import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ChartMapComponent } from './components/chart-map/chart-map.component';
import { ClientDatatableComponent } from './components/client-datatable/client-datatable.component';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartMapAddComponent } from './components/chart-map-add/chart-map-add.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ClientNewComponent,
    ChartMapComponent,
    ClientDatatableComponent,
    ChartMapAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
