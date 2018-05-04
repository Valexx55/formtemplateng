import { Component } from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {
  login : Login;

  constructor (private servicioLogin : LoginService)
  {
    this.login = new Login();
  }

  acceder (datos : Login)
  {
    console.log ("Nombre " +datos.nombre);
    console.log ("Pwd " +datos.pwd);
    console.log ("Pwd repe " +datos.pwd2);
    //TODO CHECKEAR EL FORMULARIO SI ES VALIDATED
    //TODO ENVIAR
    this.servicioLogin.postLogin(datos).subscribe
    (resp=> {
      let vresp: HttpResponse<Object> = <HttpResponse<Object>>resp;
      console.log("Ha ido bien");
      console.log (vresp.body);
      console.log (vresp.status);
      }
      , 
    error=>console.log("error"));
  }
}
