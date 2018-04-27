import { AflLadderService } from './../services/afl-ladder.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AflLadderComponent } from './afl-ladder.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AflLadderComponent],
    exports: [AflLadderComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        AflLadderService
    ]
})

export class AFLLadderModule {}
