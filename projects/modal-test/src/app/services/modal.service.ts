import { Injectable, ComponentRef, EnvironmentInjector, Type, createComponent, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";
import { ModalBaseComponent } from "./../components/modal-base/modal-base.component";

@Injectable()
export class ModalService {
  modalContent!: ViewContainerRef;

  private activeModalIndex: number = -1;
  allModals: ComponentRef<ModalBaseComponent>[] = [];

  activeModal: Subject<ComponentRef<ModalBaseComponent> | null> = new Subject<ComponentRef<ModalBaseComponent> | null>();

  disableScroll: boolean = false;

  constructor(private injector: EnvironmentInjector) {}

  openModal(component: Type<ModalBaseComponent>, data?: Object): void {
    let createdComponent: ComponentRef<any> = createComponent(component, {
      environmentInjector: this.injector,
    });
    this.activeModalIndex++;
    createdComponent.instance["index"] = this.activeModalIndex;

    // set data for new modal
    if (data) {
      createdComponent.instance["data"] = data;
      // console.log("createdComponent", createdComponent);
    }

    this.allModals.push(createdComponent);
    this.activeModal.next(createdComponent);
  }

  closeCurrentModal() {
    this.modalContent.remove();

    this.allModals.pop();
    this.activeModalIndex--;

    let previousComponent = this.allModals[this.activeModalIndex];
    if (this.activeModalIndex >= 0) this.activeModal.next(previousComponent);
    else this.activeModal.next(null);
  }

  closeModal(index: number) {
    if (index > this.activeModalIndex) return;
    else if (index == this.activeModalIndex) this.closeCurrentModal();
    else {
      this.allModals.splice(index, 1);

      //reindex all modals
      for (let i = 0; i < this.allModals.length; i++) {
        let currentModalIndex: number = this.allModals[i].instance["index"];
        if (currentModalIndex > index) this.allModals[i].instance["index"] == currentModalIndex - 1;
      }
    }
  }

  closeAllModals() {
    this.allModals = [];
    this.activeModalIndex = -1;
    this.activeModal.next(null);
  }

  // getCurrentModal(modalIndex: number): ComponentRef<any> | null {}
}
