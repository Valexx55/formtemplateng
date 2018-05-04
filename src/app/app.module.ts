import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { EqualValidator } from './validatorpwd.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor'//PASO

@NgModule({
  declarations: [
    AppComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: Interceptor, 
    multi: true 
} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
