import { Routes, RouterModule } from '@angular/router';
import { EnterResultsComponent } from './enter-results.component';

const ENTER_RESULTS_ROUTER: Routes = [
    {
        path: '',
        component: EnterResultsComponent
    }
];

export const enterResultsRouter = RouterModule.forChild(ENTER_RESULTS_ROUTER);
