import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TilesGridComponent } from './components/tiles-grid/tiles-grid.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [AppComponent, TilesGridComponent, InputFieldComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
