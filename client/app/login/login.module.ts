import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouter } from './login.routing';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, loginRouter, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class LoginModule {}
