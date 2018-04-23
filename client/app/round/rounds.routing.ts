import { Routes, RouterModule } from '@angular/router';
import { RoundsComponent } from './rounds.component';

const ROUNDS_ROUTER: Routes = [
    {
        path: '',
        component: RoundsComponent
    }
];

export const roundsRouter = RouterModule.forChild(ROUNDS_ROUTER);
