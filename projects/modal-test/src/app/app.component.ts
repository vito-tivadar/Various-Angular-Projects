import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { FirstModalComponent } from './components/first-modal/first-modal.component';
import { SecondModalComponent } from './components/second-modal/second-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'modal-test';

  constructor(private _modalService: ModalService) {}

  ngOnInit() {}

  openModal(modalSelector: string) {
    if (modalSelector == 'first-modal') {
      this._modalService.openModal(FirstModalComponent, { index: Math.round(Math.random() * 100) });
    } else if (modalSelector == 'second-modal') {
      this._modalService.openModal(SecondModalComponent, { index: Math.round(Math.random() * 100) });
    }
  }
}
