import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { accountRouter } from './account.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AccountComponent],
    imports: [
        CommonModule,
        SharedModule,
        accountRouter,
    ]
})

export class AccountModule {}
