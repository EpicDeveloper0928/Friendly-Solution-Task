import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import type { WorkData } from "./types/work-data";
import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "Test-friendly-solution";
  displayedColumns: string[] = [
    "work_order_id",
    "description",
    "received_date",
    "assigned_to",
    "status",
    "priority",
  ];
  dataSource: MatTableDataSource<WorkData> = new MatTableDataSource<WorkData>(
    []
  );

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getWorkData().then((res) => {
      this.dataSource = new MatTableDataSource(res.response.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.description.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
