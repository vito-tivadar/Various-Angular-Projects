import { Component, OnInit } from "@angular/core";
import { headerProperties, rowProperties, tableData, TableFunction } from "../../table/table.component";
import { ContainerModalComponent } from "./../container-modal/container-modal.component";
// import { ModalService, ModalBaseComponent } from 'simple-angular-modal';
import { ModalService } from "projects/simple-angular-modal/src/public-api";
import { Subject } from "rxjs";

@Component({
  selector: "docker-control-panel",
  templateUrl: "./docker-control-panel.component.html",
  styleUrls: ["./docker-control-panel.component.css"],
})
export class DockerControlPanelComponent implements OnInit {
  constructor(private _modalService: ModalService) {}
  ngOnInit(): void {}

  headers: headerProperties[] = [
    { columnText: "Name", columnAlignment: "left", width: "auto", enableCopyButton: false, enableOverflow: true },
    { columnText: "Short ID", columnAlignment: "center", width: "auto", enableCopyButton: true, enableOverflow: false },
    { columnText: "Created on", columnAlignment: "right", width: "auto", enableCopyButton: false, enableOverflow: false },
  ];

  openModal() {
    this._modalService.openModal(ContainerModalComponent);
  }

  rows: rowProperties[] = [
    {
      textFields: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "7b1367ef",
        "20-02-2023 12:28:42",
      ],
    },
    {
      textFields: ["flamboyant_diffie", "7b1367ef", "20-02-2023 12:28:42"],
    },
    {
      textFields: ["flamboyant_diffie", "7b1367ef", "20-02-2023 12:28:42"],
    },
    {
      textFields: ["flamboyant_diffie", "7b1367ef", "20-02-2023 12:28:42"],
    },
    {
      textFields: ["flamboyant_diffie", "7b1367ef", "20-02-2023 12:28:42"],
    },
  ];

  editFunc: TableFunction = (data: Object): void => {
    let dataSubject: Subject<Object> = this._modalService.openModal(ContainerModalComponent, data);
    dataSubject.subscribe({
      next: (data) => {
        // updateData
        console.log("Updated data:", data);
        //unsubscribe
        dataSubject.unsubscribe();
      },
    });
    console.log(dataSubject);
  };

  containersData: tableData = {
    enableEditButton: true,
    enableDeleteButton: true,
    headers: this.headers,
    rows: this.rows,
  };

  a = [
    {
      id: "7b1367ef11f3f99ead56dd6ad91d731dd7d7f92793ad5664f6c5e220e8de7ffc",
      shortId: "7b1367ef",
      firstName: "flamboyant_diffie",
      createdOn: "20-02-2023 12:28:42",
      state: "running",
      status: "Up 3 hours",
    },
    {
      id: "7b1367ef11f3f99ead56dd6ad91d731dd7d7f92793ad5664f6c5e220e8de7ffc",
      shortId: "7b1367ef",
      firstName: "flamboyant_diffie",
      createdOn: "20-02-2023 12:28:42",
      state: "running",
      status: "Up 3 hours",
    },
  ];
}
