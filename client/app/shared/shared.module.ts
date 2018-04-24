import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonPipesModule } from './../commonPipes.module';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './../angularMaterial.module';

import { AflLadderComponent } from './../afl-ladder/afl-ladder.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CommonPipesModule,
    MaterialModule
  ],
  exports: [
    // Shared Modules
    FormsModule,
    ReactiveFormsModule,
    CommonPipesModule,
    MaterialModule,
    // Shared Components
    ToastComponent,
    LoadingComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
