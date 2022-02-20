import { Component, OnInit, Query } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  id: number = 1;
  allowEdit: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((query: Query) => {
      console.log("Query", query);
      this.allowEdit = query["allowEdit"] == 1 ? true : false
    });
    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params.id) {
        this.id = +params.id;
      }
    });

    this.server = this.serversService.getServer(this.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
