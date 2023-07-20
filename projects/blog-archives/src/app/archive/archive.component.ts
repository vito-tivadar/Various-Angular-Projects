import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.css"],
})
export class ArchiveComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input("archive") archive: any = {};

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (response) => {
        this.archive["year"] = response.get("year");
        this.archive["month"] = response.get("month");
      },
    });
  }

  navigateToHome() {
    this.router.navigate(["/"]);
  }
}
