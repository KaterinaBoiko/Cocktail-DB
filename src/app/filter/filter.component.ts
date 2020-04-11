import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  filters: [boolean, string][];
  @Output() filtersApplied: EventEmitter<string[]> = new EventEmitter();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getFilters().subscribe(
      (data) => {
        this.filters = data.drinks.map((x) => [true, x.strCategory]);
        this.filtersApplied.emit(
          this.filters.filter((x) => x[0]).map((x) => x[1])
        );
      },
      (error) => console.log(error)
    );
  }

  applyFilters() {
    this.filtersApplied.emit(this.filters.filter((x) => x[0]).map((x) => x[1]));
  }
}
