import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl : './server.component.html',
    styles: [`
    .clickable {
        color: white;
    };
    `]
})

export class ServerComponent {
    disableButton: boolean = false;
    names: Array<String> = ['Ronaldo', 'Messi', 'Neymar']
    
    constructor(){
        setTimeout(() => {
            this.disableButton = true
        }, 1500);
    }

    changeButtonStatus(){
        this.disableButton = !this.disableButton;
    }

    changeInputText(e){
        console.log(e);
    }

    getBackgroundColor(){
        return this.disableButton ? 'green': 'red';
    }


}