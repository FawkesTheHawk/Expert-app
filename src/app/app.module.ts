
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// import { CategoryService } from './services/category.service';
import { NetworkService } from './services/network.service';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { ContentModule } from './content/content.module';
import { TableModule } from './table/table.module';
import { CategorysModule } from './categorys/categorys.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule,
    MatTableModule,
    MatInputModule,
    TableModule,
    MatGridListModule,
    CategorysModule,
    MatListModule,
    ContentModule,
  ],
  providers: [ 
    NetworkService 
  ],
  bootstrap: [ 
    AppComponent 
  ],
})
export class AppModule {}