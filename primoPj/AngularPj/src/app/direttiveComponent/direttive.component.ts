import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-direttive',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, CommonModule],
  templateUrl: './direttive.component.html',
  styleUrl: './direttive.component.css'
})
export class DirettiveComponent {
  isVisible = true;

  persone = [{nome:'Ivan', Cognome:'Rinaldi', isOnline:true},{nome:'jonny', Cognome:'Bravo', isOnline:false},{nome:'Bryan', Cognome:'OConnor', isOnline:true}];

}
