import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentNotFoundComponent} from './shared/components/content-not-found/content-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'login',
    loadChildren: './full-page-layout/full-page-layout.module#FullPageLayoutModule'
  },
  {
    path: '**',
    component: ContentNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
