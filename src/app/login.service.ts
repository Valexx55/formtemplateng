import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "./login.model";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class LoginService {

    constructor (private httpclient : HttpClient)
    {

    }

    postLogin (login: Login):Observable<Object>
    {

       let dir_serv : string = "http://192.168.3.10:9080/angular/PostLogin";
       let str_login : string =  JSON.stringify(login);//Serializar
       console.log ("Enviado..." +str_login);
       let headers = new HttpHeaders().set ('Content-type', 'application/json');

       return this.httpclient.post 
        (dir_serv, str_login,{headers:headers, observe:"response"});
    }

}