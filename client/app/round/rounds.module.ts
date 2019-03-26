import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundsComponent } from './rounds.component';
import { roundsRouter } from './rounds.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoundsComponent],
  imports: [CommonModule, SharedModule, roundsRouter, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class RoundsModule {}
