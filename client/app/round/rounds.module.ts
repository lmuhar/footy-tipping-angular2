import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundsComponent } from './rounds.component';
import { roundsRouter } from './rounds.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [RoundsComponent],
    imports: [
        CommonModule,
        SharedModule,
        roundsRouter
    ]
})

export class RoundsModule {}
