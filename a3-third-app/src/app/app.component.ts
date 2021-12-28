import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Testserver",
      content: "Just a test!",
    },
    {
      type: "blueprint",
      name: "Testserver - 2",
      content: "Just a test! - 2",
    },
  ];
}
