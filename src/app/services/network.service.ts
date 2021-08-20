import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { DrinkLarge } from '../models/drink-large.model';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {
  private drinks = 'drinks';

  baseString = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

  constructor(private http: HttpClient) {}

  getAllDrinksByCategory(): Observable<HttpResponse<DrinkLarge[]>> {
    return (
      this.http.get<DrinkLarge[]>(this.baseString + 's=', {observe: 'response'})
      )
  }
}
