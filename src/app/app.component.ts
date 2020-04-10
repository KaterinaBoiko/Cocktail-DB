import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "cocktail-db";
  cocktails: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCocktails("Soft Drink / Soda").subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  filterAppliedHandler(filters: [boolean, string][]) {
    console.log(filters);
  }
}
