import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const ADMIN_ROUTER: Routes = [
    {
        path: '',
        component: AdminComponent
    }
];

export const adminRouter = RouterModule.forChild(ADMIN_ROUTER);
