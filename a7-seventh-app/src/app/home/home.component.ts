import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // const customIntervalObservable = new Observable((observer: any) => {
    const customIntervalObservable = Observable.create((observer: any) => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        // observer.error();
        // observer.complete();
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(
      (count: any) => {
        console.log(count);
      }
    );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
