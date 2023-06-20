import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste_maxima';
  page= this.changePage();

  changePage(){
    if(location.href.lastIndexOf("cliente/novo") != -1)
      return "cliente/novo"
    else
      return ""
  }
}
