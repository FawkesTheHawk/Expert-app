import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {
  private drinks = 'drinks';

  constructor(private http: HttpClient) {}

  getAllDrinks(): Observable<HttpResponse<Drink[]>> {
    return (
      this.http.get<Drink[]>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', {observe: 'response'})
      )
  }
}
