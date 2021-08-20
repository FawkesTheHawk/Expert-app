import { Component, Input, OnInit, Output } from '@angular/core'
import { Drink } from '../models/drink.model'
import { NetworkService } from '../services/network.service'
import { DrinkLarge } from '../models/drink-large.model'
import { MatList, MatListOption } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-categorys',
    templateUrl: './categorys.component.html',
    styleUrls: ['./categorys.component.scss']
  })

  export class CategorysComponent {

    constructor (private networkService: NetworkService) {}

    displayedColumns: string[] = ['ID', 'Name', 'Category'];

    categories: string[] = [];

      
   }

  
