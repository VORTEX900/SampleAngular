import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Servizio } from '../../services/servizio';
import { FirebaseService } from '../../services/firebaseService';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
  standalone: true
})
export class Contatti implements OnInit {
  persone: any;
  personeFromDB: any;
  persona: any;
  isProfile!: boolean;

constructor(public servizio: Servizio, private firebase: FirebaseService){

}
  ngOnInit(): void {
    
    this.persone = this.servizio.getPersone();

    this.firebase.getPersone(this.firebase.url+"/persone.json").subscribe((data:any) =>{
      this.personeFromDB = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        
        return data[key];
      });
         
      this.personeFromDB.forEach((p:any,i:any) => {
        let obj = new FormGroup({
          email: new FormControl(p.email, [Validators.required, Validators.email])
        });
        this.modificaFormGroup.push(obj);
      });
        
      console.log(this.personeFromDB);
    });
    
  }

  onDeletePersona(id:string){
    this.firebase.deletePersona(this.firebase.url + '/persone', id)
      .subscribe(data => { 
        console.log(data);
      });
  }

  modificaFormGroup : FormGroup[] = [];
  onSubmit(id:string, f:any, i:number){
    let email = f.value[`email${i}`] || f.value.email;
    console.log("id = "+id+" - email = "+email);
    this.onPatchPersona(id, email);
  }
  onPatchPersona(id:string, email:string){
     this.firebase.patchPersona(this.firebase.url + '/persone', id, {email: email})
      .subscribe(data => { 
        console.log(data);
      });
  }

}
