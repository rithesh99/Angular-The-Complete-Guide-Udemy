import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") onBlueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = "";
  newServerContent = "";
  @ViewChild('serverNameInput') serverNameInput : ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onAddServer(inputValue: HTMLInputElement) {
    console.log(inputValue.value);
    console.log(this.serverNameInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: inputValue.value,
      serverContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.onBlueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
