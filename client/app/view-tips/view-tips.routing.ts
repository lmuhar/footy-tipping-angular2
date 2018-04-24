import { Routes, RouterModule } from '@angular/router';
import { ViewTipsComponent } from './view-tips.component';

const VIEW_TIPS_ROUTER: Routes = [
    {
        path: '',
        component: ViewTipsComponent
    }
];

export const viewTipsRouter = RouterModule.forChild(VIEW_TIPS_ROUTER);
