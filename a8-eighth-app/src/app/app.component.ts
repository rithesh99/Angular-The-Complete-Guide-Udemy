import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formData: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(data) {
  //   console.log(data.value)
  // }

  onSubmit() {
    console.log(this.formData.value)
  }
}
