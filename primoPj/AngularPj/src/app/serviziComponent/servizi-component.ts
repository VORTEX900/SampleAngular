import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../services/servizioProvaService';

@Component({
  selector: 'app-servizi-component',
  imports: [],
  templateUrl: './servizi-component.html',
  styleUrl: './servizi-component.css',
  standalone: true
})
export class ServiziComponent implements OnInit {

  constructor(public servizio: ServizioProvaService){

  }
  
  ngOnInit(): void {
    console.log('prova component', this.servizio.persone);
    console.log('prova component', this.servizio.getPersone());
  }

}
