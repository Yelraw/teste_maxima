import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ChartMapComponent } from './components/chart-map/chart-map.component';
import { ClientDatatableComponent } from './components/client-datatable/client-datatable.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ClientNewComponent,
    ChartMapComponent,
    ClientDatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
