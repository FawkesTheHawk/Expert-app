
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { ContentModule } from './content/content.module';
import { TableModule } from './table/table.module';
import { CategorysModule } from './categorys/categorys.module';
import { ContentComponent } from './content/content.component';

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
    CommonModule,
    MatButtonModule,
    Input,
    FormsModule,
    ContentModule,
    ContentComponent
  ],
  providers: [ 
    NetworkService 
  ],
  bootstrap: [ 
    AppComponent 
  ],
})
export class AppModule {}