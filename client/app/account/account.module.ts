import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { accountRouter } from './account.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, SharedModule, accountRouter, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class AccountModule {}
