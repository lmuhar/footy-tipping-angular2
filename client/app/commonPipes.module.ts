import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from './utils/pipes/sort.pipe';
import { HumanizePipe } from './utils/pipes/humanize.pipe';

@NgModule({
    declarations: [
        SortPipe,
        HumanizePipe
    ],
    exports: [
        SortPipe,
        HumanizePipe
    ],
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class CommonPipesModule {}
