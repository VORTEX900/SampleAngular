import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/authService';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://corsoangular-22205-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient, private authService:AuthService) { }

  insertPersona(url:string, body:{}){//create
    console.log(this.http);
    return this.http.post(url, body);
  }

  getPersone(url:string){//read
    return this.http.get(`${url}?auth=${this.authService.user.token}`);
  }

  deletePersona(url:string, id:string){//delete
    let urlDelete = `${url}/${id}.json`;
    console.log('URL -> ' + urlDelete);
    return this.http.delete(urlDelete);
  }

  patchPersona(url:string, id:string, body:{}){//update
    let urlPatch = `${url}/${id}.json`;
    console.log('URL -> ' + urlPatch);
    return this.http.patch(urlPatch, body);//si può usare anche put, però put si aspetta l'intera entità, patch anche solo un campo
  }

}
