import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const REGISTER_ROUTER: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

export const registerRouter = RouterModule.forChild(REGISTER_ROUTER);
