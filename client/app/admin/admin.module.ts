import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { adminRouter } from './admin.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        SharedModule,
        adminRouter
    ]
})

export class AdminModule {}
