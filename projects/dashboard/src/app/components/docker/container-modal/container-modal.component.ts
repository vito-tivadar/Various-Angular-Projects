import { Component } from "@angular/core";
// import { button, ModalBaseComponent } from "simple-angular-modal";
import { button, ModalBaseComponent } from "projects/simple-angular-modal/src/public-api";
import { rowProperties } from "../../table/table.component";

@Component({
  selector: "container-modal",
  templateUrl: "./container-modal.component.html",
  styleUrls: ["./container-modal.component.css"],
})
export class ContainerModalComponent extends ModalBaseComponent {
  // tempData;

  override buttons: button[] = [
    {
      text: "UPDATE",
      color: "var(--primaryConfirmColor)",
      onClick: () => {
        this.updateData();
        this._modalService.closeModal(this.index);
      },
    },
    {
      text: "CLOSE",
      color: "var(--primaryAlertColor)",
      onClick: () => {
        this._modalService.closeModal(this.index);
      },
    },
  ];
  getDataValue(arrayPosition: number): any {
    return (this.tempData as rowProperties).textFields[arrayPosition];
  }

  updateDataValue(arrayPosition: number, newValue: any) {
    (this.tempData as rowProperties).textFields[arrayPosition] = newValue;
  }
}
