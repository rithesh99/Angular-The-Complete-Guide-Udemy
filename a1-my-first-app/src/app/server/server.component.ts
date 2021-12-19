import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styleUrls: []
})

export class ServerComponent {
    disableButton: boolean = false;
    
    constructor(){
        setTimeout(() => {
            this.disableButton = true
        }, 1500);
    }



}