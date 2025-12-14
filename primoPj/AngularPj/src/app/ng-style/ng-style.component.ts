import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-styleComponent',
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
  standalone: true
})
export class NgStyleComponent {
  persone = [{nome:'Ivan', Cognome:'Rinaldi', color:'red'},
    {nome:'jonny', Cognome:'Bravo', color:'yellow'},
    {nome:'Bryan', Cognome:'OConnor', color:'blue'},
    {nome:'jon', Cognome:'ojojonj', color:'green'}
  ];

  persone2 = [{nome:'Ivan', Cognome:'Rinaldi', isOnline:true},
    {nome:'jonny', Cognome:'Bravo', isOnline:false},
    {nome:'Bryan', Cognome:'OConnor', isOnline:false},
    {nome:'jon', Cognome:'ojojonj', isOnline:true}
  ];

   color='green';

   getColor(){
    return "pink";
   }
}
