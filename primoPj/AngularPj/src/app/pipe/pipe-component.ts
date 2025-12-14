import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipeComponent',
  imports: [CommonModule],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
  standalone: true
})
export class PipeComponent {

  title = "corso Angular";
  numero = 5.2342543534534;
  oggi = Date.now();

}
