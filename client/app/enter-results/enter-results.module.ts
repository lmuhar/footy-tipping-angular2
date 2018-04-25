import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterResultsComponent } from './enter-results.component';
import { enterResultsRouter } from './enter-results.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [EnterResultsComponent],
    imports: [
        CommonModule,
        SharedModule,
        enterResultsRouter
    ]
})

export class EnterResultsModule {}
