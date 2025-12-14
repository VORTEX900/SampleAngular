import { Component, OnInit } from '@angular/core';
import { ProvaComponent } from './prova/prova.component';
import { AltroComponent } from './altro/altro.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from "./directive/highlight.directive";
import { ServizioProvaService } from './services/servizioProvaService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ProvaComponent, AltroComponent, MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, HighlightDirective] 
})
export class AppComponent implements OnInit {

  constructor(public servizio: ServizioProvaService){}
  
  ngOnInit(): void {
   console.log('services', this.servizio.persone);
  }

  protected title = 'AngularPj';

  onClick(e:Event){
    console.log(e);
    this.title = "ho cliccato sul bottone";
  }

  onInput(e:Event){//e:Any we can use e.target.value
    this.title = (<HTMLInputElement>e.target).value;
  }

   persone = [{nome:'Ivan', Cognome:'Rinaldi', color:'orange'},
    {nome:'jonny', Cognome:'Bravo', color:'yellow'},
    {nome:'Bryan', Cognome:'OConnor', color:'blue'},
    {nome:'jon', Cognome:'ojojonj', color:'green'}
  ];
  onClickCambiaPersone(e: Event){
    this.persone = [{nome:'alfa', Cognome:'omega', color:'orange'},
    {nome:'a', Cognome:'z', color:'yellow'},
    {nome:'0', Cognome:'9', color:'blue'},
    {nome:'start', Cognome:'eng', color:'green'}
  ];
  }

  colore = "";
  cambiaColoreEvidenziatore(colore: string){
    this.colore = colore;
  }
}
