import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  filters: [boolean, string][];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFilters().subscribe(
      (data) => {
        this.filters = data.drinks.map((x) => [true, x.strCategory]);
      },
      (error) => console.log(error)
    );
  }

  applyFilters() {
    this.filters.forEach((x) => {
      if (x[0]) console.log(x);
    });
  }
}
