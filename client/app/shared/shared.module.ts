import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPipesModule } from './../commonPipes.module';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './../angularMaterial.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CommonPipesModule, MaterialModule],
  exports: [
    // Shared Modules
    CommonPipesModule,
    // Shared Components
    ReactiveFormsModule,
    FormsModule,
    ToastComponent,
    LoadingComponent
  ],
  declarations: [ToastComponent, LoadingComponent],
  providers: [ToastComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ToastComponent]
    };
  }
}
