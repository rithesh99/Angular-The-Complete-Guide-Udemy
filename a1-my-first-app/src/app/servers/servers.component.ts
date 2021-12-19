import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',  --attribute
  // selector: '.app-servers',   --class
  template: `
  <h1>Servers component</h1>
  <p>Inline template</p>
  `,
  styles: [`
      h1 {
        color: red;
      }
    `],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
