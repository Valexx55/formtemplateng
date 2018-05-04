import { Component } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login : Login;

  constructor ()
  {
    this.login = new Login();
  }

  acceder (datos : Login)
  {
    console.log ("Nombre " +datos.nombre);
    console.log ("Pwd " +datos.pwd);
    console.log ("Pwd repe " +datos.pwd2);
  }
}
