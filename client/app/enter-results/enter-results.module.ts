import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterResultsComponent } from './enter-results.component';
import { enterResultsRouter } from './enter-results.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnterResultsComponent],
  imports: [CommonModule, SharedModule, enterResultsRouter, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class EnterResultsModule {}
