import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatSidenavModule,
  MatBadgeModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatTableModule,
  MatSortModule,
  MatSidenavModule,
  MatBadgeModule,
  MatSelectModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule
    };
  }
}
