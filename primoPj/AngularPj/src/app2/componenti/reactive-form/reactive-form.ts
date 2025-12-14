import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
  standalone:true
})
export class ReactiveForm implements OnInit{

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
    console.log(this.homeFormGroup);
  }
  

}
