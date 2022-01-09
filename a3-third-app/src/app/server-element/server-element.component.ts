import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngoninit called");
  }

  ngDoCheck(): void {
    console.log('ngdocheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentinit');
  }

  
}
