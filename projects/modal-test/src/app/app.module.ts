import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalAnchorComponent } from './components/modal-anchor/modal-anchor.component';
// import { FirstModalComponent } from './components/first-modal/first-modal.component';
// import { SecondModalComponent } from './components/second-modal/second-modal.component';
import { ModalService } from './services/modal.service';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';
import { ScrollDisablerComponent } from './components/scroll-disabler/scroll-disabler.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalAnchorComponent,
    // FirstModalComponent,
    // SecondModalComponent,
    ModalBaseComponent,
    ScrollDisablerComponent,
  ],
  imports: [BrowserModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
