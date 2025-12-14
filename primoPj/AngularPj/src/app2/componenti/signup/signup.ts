import { Component } from '@angular/core';
import { NgForm, Validators, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../auth/authService';

@Component({
  selector: 'app-signup',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  standalone:true
})
export class Signup {

  constructor(private authService: AuthService){}

  onSubmit(form:NgForm){
    let email = form.value.email;
    let password = form.value.password;
    console.log("email -> "+email);
    console.log("password -> "+password);
    console.log(this.authService.urlSignUp);
    this.authService.signUp(email, password).subscribe({
    next: res => console.log("SUCCESS:", res),
    error: err => {
      console.error("HttpErrorResponse:", err);
      console.error("Firebase error body:", err.error);
      console.error("Firebase error text:", err.message);}
    });
    form.reset();
  }

}
