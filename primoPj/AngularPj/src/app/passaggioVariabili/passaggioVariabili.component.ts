import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassVariablesComponent } from './passVariables/passVariables.component';

@Component({
  selector: 'app-passaggioVariabili',
  imports: [PassVariablesComponent, CommonModule, FormsModule],
  templateUrl: './passaggioVariabili.component.html',
  styleUrl: './passaggioVariabili.component.css',
  standalone: true
})
export class PassaggioVariabili implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log(this.inputSaluti);
  }
  ngOnInit(): void {
    console.log("ngOninit");
    console.log(this.inputSaluti);
  }

  persone = [{nome:'Ivan', Cognome:'Rinaldi', isOnline:true},{nome:'jonny', Cognome:'Bravo', isOnline:false},{nome:'Bryan', Cognome:'OConnor', isOnline:true}];

  onMandaDati(value: String){ console.log(value); }


  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>; // ! -> significa che l'elemento ci sarà e non sarà null, altrimenti sei costretto ad assegnaregli un valore
  onClick(){console.log(this.inputSaluti.nativeElement.value);}

}
