import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        CdkTableModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        CdkTableModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
