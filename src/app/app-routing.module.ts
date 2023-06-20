import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "cliente/novo", component: ClientNewComponent },
  { path: "**", component: ClientNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
