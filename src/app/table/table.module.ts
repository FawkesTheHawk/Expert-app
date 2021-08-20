import { NgModule } from '@angular/core';
import { TableComponent } from '../table/table.component'
import { ContentModule } from '../content/content.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent,
  ],
  imports: [
    MatTableModule
  ],
})
export class TableModule { }