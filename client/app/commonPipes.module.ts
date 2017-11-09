import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from './utils/pipes/sort.pipe';

@NgModule({
    declarations: [
        SortPipe
    ],
    exports: [
        SortPipe
    ],
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class CommonPipesModule {}
