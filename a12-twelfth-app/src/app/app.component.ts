import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoLogin } from './auth/store/auth.actions';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AutoLogin());
  }
}
