import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private service: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert(status);
    });
  }

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountsService.addAccount({
      name: accountName,
      status: accountStatus,
    });
    // new LoggingService(accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.service.logStatusChange(accountStatus);
  }
}
