import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") formData: NgForm;
  answer: String = "";
  genders: Array<string> = ["Male", "Female", "Others"];

  suggestUserName() {
    const suggestedName = "Superuser";
    this.formData.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(data) {
  //   console.log(data.value)
  // }

  onSubmit() {
    console.log(this.formData.value);
  }

  resetForm() {
    this.formData.reset();
  }
}
