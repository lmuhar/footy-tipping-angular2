import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { tipsRouter } from './tips.routing';
import { SharedModule } from '../shared/shared.module';
import { AFLLadderModule } from './../afl-ladder/afl-ladder.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipsComponent],
  imports: [CommonModule, SharedModule, tipsRouter, AFLLadderModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class TipsModule {}
