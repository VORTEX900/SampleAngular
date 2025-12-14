import { Component } from '@angular/core';
import { AuthService } from '../../auth/authService';
import { NgForm, Validators, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../modelli/user.model';

@Component({
  selector: 'app-signin',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
  standalone: true
})
export class Signin {
 constructor(private authService: AuthService){}

  onSubmit(form:NgForm){
    let email = form.value.email;
    let password = form.value.password;
    console.log("email -> "+email);
    console.log("password -> "+password);
    console.log(this.authService.urlSignIn);
    this.authService.signIn(email, password).subscribe({
    next: (res: any) => {
      console.log("SUCCESS:", res)
      let expirationDate = new Date(new Date().getTime() + res.expiresIn * 1000);
      this.authService.createUser(res.email, res.localId, res.idToken, expirationDate);
      let user = this.authService.user;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
    },
    error: err => {
      console.error("HttpErrorResponse:", err);
      console.error("Firebase error body:", err.error);
      console.error("Firebase error text:", err.message);
    }
    });
    form.reset();
  }

}
