import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ContainerComponent } from './components/container/container.component';
import { ServicePanelComponent } from './components/service-panel/service-panel.component';
import { DockerControlPanelComponent } from './components/docker/docker-control-panel/docker-control-panel.component';
import { TableComponent } from './components/table/table.component';
import { SliderSwitchComponent } from './components/slider-switch/slider-switch.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './modal/modal/modal.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ContainerModalComponent } from './components/docker/container-modal/container-modal.component';
// import { ModalService, SimpleAngularModalModule } from 'simple-angular-modal';
import { SimpleAngularModalModule, ModalService } from 'projects/simple-angular-modal/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    LoadingBarComponent,
    SearchBarComponent,
    HomeComponent,
    ImageButtonComponent,
    BookmarkComponent,
    ContainerComponent,
    ServicePanelComponent,
    DockerControlPanelComponent,
    TableComponent,
    SliderSwitchComponent,
    CheckboxComponent,
    TooltipComponent,
    SeparatorComponent,
    NavbarComponent,
    ModalComponent,
    IconButtonComponent,
    ContainerModalComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SimpleAngularModalModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
