import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passVariables',
  imports: [],
  templateUrl: './passVariables.component.html',
  styleUrl: './passVariables.component.css',
  standalone: true
})
export class PassVariablesComponent implements OnInit{
ngOnInit(): void {
  console.log(this.oggettoDaPassare);
}

@Input() oggettoDaPassare:any;

@Output() mandaDatiEvento = new EventEmitter<String>;
nome = "Sting";
mandaDati(){
  this.mandaDatiEvento.emit(this.nome);
}

}




