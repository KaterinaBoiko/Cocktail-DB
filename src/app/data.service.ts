import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getFilters(): Observable<any> {
    return this.http.get(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
  }

  getCocktails(cocktail: string): Observable<any> {
    return this.http.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + cocktail
    );
  }
}
