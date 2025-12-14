import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FirebaseService} from '../services/firebaseService';



@Component({
  selector: 'app-call-db',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule ],
  providers:[],
  templateUrl: './call-db.html',
  styleUrl: './call-db.css',
  standalone:true
})
export class CallDB implements OnInit{

  constructor(private firebase: FirebaseService){}

  homeFormGroup : FormGroup;

  

  ngOnInit(): void {
    this.homeFormGroup = new FormGroup({
      nome:new FormControl(null, Validators.required),
      colore:new FormControl('nero'),
      email:new FormControl(null, [Validators.required, Validators.email]),
      testo:new FormControl('testo di prova')
      
    });

    
  }

  onSubmit(){
    let nome = this.homeFormGroup.get('nome').value;
    let colore = this.homeFormGroup.get('colore').value;
    let email = this.homeFormGroup.get('email').value;
    let testo = this.homeFormGroup.get('testo').value;

    this.firebase.insertPersona(this.firebase.url + '/persone'+'.json',
      {nome:nome, email:email, colore:colore, testo:testo}
    ).subscribe(data =>{
      console.log(data);
    });
  }

  onDeletePersonaManual(){
    this.firebase.deletePersona(this.firebase.url + '/persone', '-OYDjRELO4ZQ4H5lOBZy')//inserire un id preso da firebase
      .subscribe(data => { 
        console.log(data);
      });
  }

  onPatchPersonaManual(){
     this.firebase.patchPersona(this.firebase.url + '/persone', '-OYDjRELO4ZQ4H5lOBZy', {email:'prova@atprova'})//inserire un id preso da firebase
      .subscribe(data => { 
        console.log(data);
      });
  }

  
}
