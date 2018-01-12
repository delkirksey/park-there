import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatMenuModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // material elements
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    // material elements
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
