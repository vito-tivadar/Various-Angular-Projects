import { Component, EventEmitter, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ModalService } from "./../../services/modal.service";

@Component({
  template: "",
})
export class ModalBaseComponent implements OnChanges {
  constructor(public _modalService: ModalService) {}

  @Input("buttons") buttons: button[] = [];

  index: number = 0;
  data: Object = {};
  dataUpdated: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes["data"]) this.dataUpdated.emit(this.data);
  }

  closeModal(): void {
    this._modalService.closeModal(this.index);
  }
}

export type button = {
  text: string;
  onClick: Function;
  color?: string;
  class?: string;
};
