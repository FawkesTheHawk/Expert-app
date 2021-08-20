import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DrinkLarge } from '../models/drink-large.model';
import { Drink } from '../models/drink.model'
import { NetworkService } from '../services/network.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategorysComponent } from '../categorys/categorys.component';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
  })

export class TableComponent implements OnInit {

  

  constructor (private networkService: NetworkService) {}

  displayedColumns: string[] = ['ID', 'Name', 'Category'];

  dataSource = new MatTableDataSource<DrinkLarge>();
  someDrinks: any;


  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.getDrinksByCategory();
  }

  getDrinksByCategory() {
    this.networkService.getAllDrinksByCategory().subscribe((data: any) => {
      console.log(data);
      this.dataSource.data = data.body.drinks;
      console.log(this.dataSource)

    });
          
  }

  

}