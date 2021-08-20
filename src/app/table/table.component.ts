import { Component, OnInit } from '@angular/core'
import { Drink } from '../models/drink.model'
import { NetworkService } from '../services/network.service'

@Component({
    selector: 'table-app',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
  })

export class TableComponent implements OnInit {
    
    constructor(
        private networkService: NetworkService) {}
    
        data: any;

    ngOnInit(): void {
        this.getAllDrinks()
    }

    getAllDrinks() {
        this.networkService.getAllDrinks().subscribe((data:any) => {this.data})
    }

}