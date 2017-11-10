import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        CdkTableModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        CdkTableModule
    ]
})
export class MaterialModule { }
