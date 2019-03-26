import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { adminRouter } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedModule, adminRouter, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class AdminModule {}
