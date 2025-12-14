import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direttive2',
  imports: [CommonModule],
  templateUrl: './direttive2.component.html',
  styleUrl: './direttive2.component.css',
  standalone: true
})
export class Direttive2Component {

  numero = 1;
  stringa = "pippo";

}
