import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { AltroComponent } from './altro/altro.component';
import { FormsModule } from '@angular/forms';
import {DirettiveComponent} from './direttiveComponent/direttive.component';
import {Direttive2Component} from './direttive2Component/direttive2.component';
import {NgStyleComponent} from './ng-style/ng-style.component';
import {PassaggioVariabili} from './passaggioVariabili/passaggioVariabili.component';
import {HighlightDirective} from './directive/highlight.directive';
import {ServiziComponent} from './serviziComponent/servizi-component';
import {ServizioProvaService} from './services/servizioProvaService';
import {AboutComponent} from '../app2/componenti/about/about';
import {ContactComponent} from '../app2/componenti/contact/contact';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    ProvaComponent,
    AltroComponent,
    DirettiveComponent,
    Direttive2Component,
    NgStyleComponent,
    PassaggioVariabili,
    HighlightDirective,
    ServiziComponent,
    AboutComponent,
    ContactComponent
    
    // altri moduli qui
  ],
  providers: [ServizioProvaService],
  bootstrap: []
})
export class AppModule { }