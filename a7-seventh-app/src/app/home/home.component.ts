import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
        if (count == 3) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((count: number) => {
          return count % 2 == 0;
        }),
        map((count: number) => {
          return 'Round: ' + count;
        })
      )
      .subscribe(
        (count: any) => {
          console.log(count);
        },
        (error: Error) => {
          console.log(error.message);
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
