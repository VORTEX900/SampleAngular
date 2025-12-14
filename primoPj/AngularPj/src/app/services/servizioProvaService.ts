import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor() { }

   persone = [{nome:'Ivan', Cognome:'Rinaldi', color:'orange', isOnline:true},
    {nome:'jonny', Cognome:'Bravo', color:'yellow', isOnline:false},
    {nome:'Bryan', Cognome:'OConnor', color:'blue', isOnline:true},
    {nome:'jon', Cognome:'ojojonj', color:'green', isOnline:false}
  ];

  getPersone(){
    return this.persone;
  }
   getPersona(id: Number){
    return this.persone[Number(id)];
  }

}
