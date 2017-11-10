import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule
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
        CdkTableModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        CdkTableModule,
        MatListModule
    ]
})
export class MaterialModule { }
