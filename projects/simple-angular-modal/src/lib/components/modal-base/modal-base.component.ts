import { Component, OnInit } from "@angular/core";
import { ModalService } from "./../../services/modal.service";
import { Subject } from "rxjs";

@Component({
  template: "",
})
export class ModalBaseComponent implements OnInit {
  buttons: button[] = [];

  index: number = 0;
  data: Object = {};
  tempData: Object = {};
  dataSubject: Subject<Object> = new Subject();

  constructor(public _modalService: ModalService) {}

  ngOnInit(): void {
    this.tempData = structuredClone(this.data);
  }

  updateData(): void {
    Object.assign(this.data, this.tempData);
    this.dataSubject.next(this.data);
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
