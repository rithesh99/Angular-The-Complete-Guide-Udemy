import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.css']
})
export class ErrorPageComponentComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe(data => {
    //   this.errorMessage = data.message;
    // })
    this.errorMessage = this.route.snapshot.data.message;
  }

}
