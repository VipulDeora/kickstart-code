import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutBaseComponent} from './layout-shared/components/layout-base/layout-base.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LayoutBaseComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
