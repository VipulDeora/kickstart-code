import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullPageBaseComponent} from './full-page-base/full-page-base.component';

export const fullPageLayoutRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [{
      path: '',
      component: FullPageBaseComponent
    }]
  }];
@NgModule({
  imports: [RouterModule.forChild(fullPageLayoutRoutes)],
  exports: [RouterModule]
})
export class FullPageLayoutRoutingModule {}
