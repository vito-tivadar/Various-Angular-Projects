import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TiuiCoreModule } from 'projects/tiui-core/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TiuiCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
