import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  user : User;

  isLoggedIn = true;
  isAdmin = true;

  APIKey = environment.firebaseAPI;

  urlSignUp = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.APIKey;

  urlSignIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.APIKey;

  isAuthenticated(){
    return this.isLoggedIn;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }

  createUser(email:string, id:string, token:string, expirationDate:Date){
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  signUp(email:string, password:string){//register
    return this.http.post(this.urlSignUp,{email:email, password:password, returnSecureToken:true});
  }

  signIn(email:string, password:string){//login
    return this.http.post(this.urlSignIn,{email:email, password:password, returnSecureToken:true});
  }

  logout(){
    this.user = null;
    this.isLoggedIn = false;
    localStorage.removeItem("user");
    this.router.navigate(['/signin']);

  }


  
}
