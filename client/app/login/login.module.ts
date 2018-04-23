import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouter } from './login.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedModule,
        loginRouter
    ]
})

export class LoginModule {}
