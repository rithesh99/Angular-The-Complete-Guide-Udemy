import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService],
})
export class AccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.statusChanged({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
