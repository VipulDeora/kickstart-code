import {Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentNotFoundComponent} from './components/content-not-found/content-not-found.component';
import {MatButtonModule} from '@angular/material';

export let InjectorInstance: Injector;
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    ContentNotFoundComponent,
  ],
  declarations: [
    ContentNotFoundComponent
  ]
})
export class SharedModule {

  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

