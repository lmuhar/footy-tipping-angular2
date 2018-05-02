import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { registerRouter } from './register.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        SharedModule,
        registerRouter
    ]
})

export class RegisterModule {}
