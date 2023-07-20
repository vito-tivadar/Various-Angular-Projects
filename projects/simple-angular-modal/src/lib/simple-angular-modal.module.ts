import { NgModule } from "@angular/core";
import { ModalAnchorComponent } from "./components/modal-anchor/modal-anchor.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { ModalBaseComponent } from "./components/modal-base/modal-base.component";
import { ScrollDisablerComponent } from "./components/scroll-disabler/scroll-disabler.component";

@NgModule({
  declarations: [ModalAnchorComponent, ModalBaseComponent, ScrollDisablerComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ModalAnchorComponent, ModalBaseComponent, ScrollDisablerComponent],
})
export class SimpleAngularModalModule {}
