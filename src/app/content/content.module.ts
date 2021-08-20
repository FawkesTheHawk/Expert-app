import { NgModule } from '@angular/core';
import { ContentComponent } from '../content/content.component'
import { TableModule } from '../table/table.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategorysModule } from '../categorys/categorys.module';


@NgModule({
  declarations: [
    ContentComponent,
  ],
  exports: [
    ContentComponent,
  ],
  imports: [
    TableModule,
    MatGridListModule,
    CategorysModule
  ],
})
export class ContentModule { }