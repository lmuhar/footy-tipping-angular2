import { Routes, RouterModule } from '@angular/router';
import { TipsComponent } from './tips.component';

const TIPS_ROUTER: Routes = [
    {
        path: '',
        component: TipsComponent
    }
];

export const tipsRouter = RouterModule.forChild(TIPS_ROUTER);
