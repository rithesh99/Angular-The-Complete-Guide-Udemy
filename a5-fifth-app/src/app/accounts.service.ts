import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class AccountsService {
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
  statusUpdated = new EventEmitter<string>();
  addAccount(newAccount: { name: string; status: string }) {
    if (newAccount.name.trim().length == 0) {
      alert("Please enter the name");
      return;
    }
    this.accounts.push(newAccount);
  }
  statusChanged(updateInfo: { id: number; newStatus: string }){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  getAccounts(){
      return this.accounts;
  }
}
