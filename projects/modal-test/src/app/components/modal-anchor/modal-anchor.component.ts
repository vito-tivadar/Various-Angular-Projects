import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, HostBinding } from "@angular/core";
import { ModalService } from "./../../services/modal.service";
import { button, ModalBaseComponent } from "./../modal-base/modal-base.component";

@Component({
  selector: "modal-anchor",
  templateUrl: "./modal-anchor.component.html",
  styleUrls: ["./modal-anchor.component.css"],
})
export class ModalAnchorComponent implements OnInit {
  constructor(private _modalService: ModalService) {}

  @Input("scrollWhenOpen") scrollWhenOpen: boolean = false;

  @Input("showModalXbutton") showModalXbutton: boolean = true;
  @Input("showBackdropXbutton") showBackdropXbutton: boolean = false;
  @Input("backdropColor") backdropColor: string = "#000000aa";
  @Input("modalColor") modalColor: string = "#454545";

  @HostBinding("style.display") display: string = "none";
  @ViewChild("modalContent", { static: true, read: ViewContainerRef })
  modalContent!: ViewContainerRef;

  disableScrolling: boolean = false;
  buttons: button[] = [];

  ngOnInit(): void {
    this._modalService.modalContent = this.modalContent;

    this._modalService.activeModal.subscribe({
      next: (component: ComponentRef<ModalBaseComponent> | null) => {
        if (component) {
          this.modalContent.detach();
          this.modalContent.insert(component.hostView);

          this.buttons = [];
          this.buttons = component.instance["buttons"];

          if (!this.scrollWhenOpen) this.disableScrolling = true;
          this.display = "flex";
        } else {
          this.modalContent.clear();
          if (!this.scrollWhenOpen) this.disableScrolling = false;
          this.display = "none";
        }
      },
    });
  }

  closeCurrentModal() {
    this.modalContent.remove();
    this._modalService.closeCurrentModal();
  }
}
