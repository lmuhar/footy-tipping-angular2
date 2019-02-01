import { AflLadderService } from './../services/afl-ladder.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AflLadderComponent } from './afl-ladder.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AflLadderComponent],
  exports: [AflLadderComponent],
  imports: [CommonModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [AflLadderService]
})
export class AFLLadderModule {}
