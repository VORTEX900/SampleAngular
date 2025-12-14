import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './auth/authService';
@Component({
  selector: 'app2-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app2-component.html',
  styleUrls: ['./app2-component.css'],
  standalone: true
})
export class App2Component implements OnInit{

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    console.log(localStorage.getItem("user"));
    if(localStorage.getItem("user")){
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate);
    }
  }

  onLoggOut(){
    this.authService.logout();
  }

}
