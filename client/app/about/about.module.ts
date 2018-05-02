import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRouter } from './about.routing';
import { LadderComponent } from './../ladder/ladder.component';
import { AflLadderComponent } from './../afl-ladder/afl-ladder.component';
import { SharedModule } from '../shared/shared.module';
import { AFLLadderModule } from './../afl-ladder/afl-ladder.module';

@NgModule({
    declarations: [AboutComponent, LadderComponent],
    exports: [LadderComponent, AFLLadderModule, SharedModule, CommonModule],
    imports: [
        CommonModule,
        SharedModule,
        aboutRouter,
        AFLLadderModule
    ],
})

export class AboutModule {}
