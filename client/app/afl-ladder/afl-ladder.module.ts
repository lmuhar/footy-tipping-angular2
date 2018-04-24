import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AflLadderComponent } from './afl-ladder.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../angularMaterial.module';

@NgModule({
    declarations: [AflLadderComponent],
    exports: [AflLadderComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})

export class AFLLadderModule {}
