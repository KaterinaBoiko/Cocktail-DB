import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "cocktail-db";
  filters: string[];
  cocktails: { category: string; drinks: [] };
  page: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  filterAppliedHandler(filters: string[]) {
    this.page = 0;
    this.filters = filters;
    if (filters.length > 0) this.loadCocktails(filters[0]);
  }

  loadCocktails(filter: string) {
    this.dataService.getCocktails(filter).subscribe(
      (data) => {
        this.cocktails = { category: filter, drinks: data.drinks };
      },
      (error) => console.log(error)
    );
  }

  changePage(toPage: number): void {
    window.scroll(0, 0);
    this.page = toPage;
    this.loadCocktails(this.filters[this.page]);
  }

  prevPage(): void {
    if (this.page != 0) this.changePage(--this.page);
  }

  nextPage(): void {
    if (this.page != this.filters.length - 1) this.changePage(++this.page);
  }
}
