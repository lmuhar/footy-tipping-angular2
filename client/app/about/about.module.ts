import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRouter } from './about.routing';
import { LadderComponent } from './../ladder/ladder.component';
import { AflLadderComponent } from './../afl-ladder/afl-ladder.component';
import { SharedModule } from '../shared/shared.module';
import { CommonPipesModule } from '../commonPipes.module';
import { MaterialModule } from '../angularMaterial.module';

@NgModule({
    declarations: [AboutComponent, LadderComponent, AflLadderComponent],
    exports: [LadderComponent, AflLadderComponent],
    imports: [
        CommonModule,
        SharedModule,
        aboutRouter,
        CommonPipesModule,
        MaterialModule
    ]
})

export class AboutModule {}
