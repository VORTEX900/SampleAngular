import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AboutComponent} from './componenti/about/about';
import {ContactComponent} from './componenti/contact/contact';
import {Servizio} from './services/servizio';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AboutComponent,
    ContactComponent
    
    // altri moduli qui
  ],
  providers: [Servizio],
  bootstrap: []
})
export class AppModule { }