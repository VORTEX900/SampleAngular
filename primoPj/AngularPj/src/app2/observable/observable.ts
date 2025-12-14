import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
  standalone:true
})
export class ObservableComponent implements OnInit, OnDestroy {
  
  sottoscrizione :Subscription;
  
  ngOnDestroy(): void {
      this.sottoscrizione.unsubscribe();
  }

  

  ngOnInit(): void {
    this.sottoscrizione = new Observable(observer=>{
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count ++;
      }, 1000);
    }).subscribe(numero => {
      console.log(numero);
    });;
  }

  
}
