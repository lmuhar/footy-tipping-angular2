import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { tipsRouter } from './tips.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../angularMaterial.module';
import { AflLadderComponent } from './../afl-ladder/afl-ladder.component';
import { CommonPipesModule } from './../commonPipes.module';

@NgModule({
    declarations: [TipsComponent, AflLadderComponent],
    exports: [AflLadderComponent],
    imports: [
        CommonModule,
        SharedModule,
        tipsRouter,
        MaterialModule,
        CommonPipesModule
    ]
})

export class TipsModule {}
