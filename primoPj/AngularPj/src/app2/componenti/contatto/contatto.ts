import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from '../../../app/services/servizioProvaService';
import { Servizio } from '../../services/servizio';

@Component({
  selector: 'app-contatto',
  imports: [],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
  standalone: true
})
export class Contatto implements OnInit{
  id : number;
  persona :any;

  constructor(private route:ActivatedRoute, private servizio : Servizio){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = +params.get('id');
      this.persona = this.servizio.getPersona(this.id);
    });

  }

  

}
