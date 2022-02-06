import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // providers: [AccountsService],
})
export class AppComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}
  // accounts : Array<{ name: string; status: string }> = [];
  accounts : { name: string; status: string }[] = [];
  ngOnInit() {
    this.accounts = this.accountsService.getAccounts();
  }
  onAccountAdded(newAccount: { name: string; status: string }) {
    // if (newAccount.name.trim().length == 0) {
    //   alert("Please enter the name");
    //   return;
    // }
    // this.accounts.push(newAccount);
    this.accountsService.addAccount(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.accountsService.statusChanged(updateInfo);
  }
}
