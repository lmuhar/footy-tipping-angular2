import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const ACCOUNT_ROUTER: Routes = [
    {
        path: '',
        component: AccountComponent
    }
];

export const accountRouter = RouterModule.forChild(ACCOUNT_ROUTER);
