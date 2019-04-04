import { NgModule } from '@angular/core';
import { LayoutBaseComponent } from './layout-shared/components/layout-base/layout-base.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [LayoutBaseComponent]
})
export class LayoutModule { }
