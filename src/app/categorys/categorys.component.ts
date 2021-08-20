import { Component, Input, OnInit, Output } from '@angular/core'
import { Drink } from '../models/drink.model'
import { NetworkService } from '../services/network.service'
import { DrinkLarge } from '../models/drink-large.model'
import { MatList, MatListOption } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-categorys',
    templateUrl: './categorys.component.html',
    styleUrls: ['./categorys.component.scss']
  })

  export class CategorysComponent {

    constructor (private networkService: NetworkService) {}

    displayedColumns: string[] = ['ID', 'Name', 'Category'];

    categories: string[] = [];

    @Output() cat = new EventEmitter<string>();

    c1() {
      this.cat.emit("Ordinary Drink")
    }
    c2() {
      this.cat.emit("Cocktail")
    }
    c3() {
      this.cat.emit("Milk \/ Float \/ Shake")
    }
    c4() {
      this.cat.emit("Other\/Unknown")
    }
    c5() {
      this.cat.emit("Cocoa")
    }
    c6() {
      this.cat.emit("Shot")
    }
    c7() {
      this.cat.emit("Coffee \/ Tea")
    }
    c8() {
      this.cat.emit("Homemade Liqueur")
    }
    c9() {
      this.cat.emit("Punch \/ Party Drink")
    }
    c10() {
      this.cat.emit("Beer")
    }
    c11() {
      this.cat.emit("Soft Drink \/ Soda")
    }


      
   }

  
