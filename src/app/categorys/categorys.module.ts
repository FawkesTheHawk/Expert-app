import { NgModule } from '@angular/core';
import { CategorysComponent } from './categorys.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategorysComponent,
  ],
  exports: [
    CategorysComponent,
  ],
  imports: [
    MatListModule,
    CommonModule,
    BrowserModule,
    FormsModule
  ],
})
export class CategorysModule { }