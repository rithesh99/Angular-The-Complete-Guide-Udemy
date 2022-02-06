import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  accounts: Array<{ name: string; status: string }> = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  onAccountAdded(newAccount: { name: string; status: string }) {
    if (newAccount.name.trim().length == 0) {
      alert("Please enter the name");
      return;
    }
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
