import { NgModule } from '@angular/core';
import { FullPageBaseComponent } from './full-page-base/full-page-base.component';
import {FullPageLayoutRoutingModule} from './full-page-layout-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FullPageLayoutRoutingModule
  ],
  declarations: [FullPageBaseComponent]
})
export class FullPageLayoutModule { }
