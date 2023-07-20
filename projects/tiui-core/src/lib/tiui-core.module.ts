import { NgModule } from '@angular/core';
import { TiuiButtonComponent } from './components/tiui-button/tiui-button.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [TiuiButtonComponent, ButtonComponent],
  imports: [],
  exports: [TiuiButtonComponent],
})
export class TiuiCoreModule {}
