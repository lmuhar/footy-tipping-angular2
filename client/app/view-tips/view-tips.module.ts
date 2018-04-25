import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTipsComponent } from './view-tips.component';
import { viewTipsRouter } from './view-tips.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ViewTipsComponent],
    imports: [
        CommonModule,
        SharedModule,
        viewTipsRouter
    ]
})

export class ViewTipsModule {}
