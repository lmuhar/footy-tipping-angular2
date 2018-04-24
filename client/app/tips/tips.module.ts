import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { tipsRouter } from './tips.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../angularMaterial.module';
import { AflLadderComponent } from './../afl-ladder/afl-ladder.component';
import { CommonPipesModule } from './../commonPipes.module';
import { AFLLadderModule } from './../afl-ladder/afl-ladder.module';

@NgModule({
    declarations: [TipsComponent],
    imports: [
        CommonModule,
        SharedModule,
        tipsRouter,
        MaterialModule,
        CommonPipesModule,
        AFLLadderModule
    ]
})

export class TipsModule {}
