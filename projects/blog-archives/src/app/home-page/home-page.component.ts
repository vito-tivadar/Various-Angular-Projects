import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
  archives = [
    { id: 1, month: 1, year: 2017 },
    { id: 2, month: 2, year: 2017 },
    { id: 3, month: 3, year: 2017 },
  ];
}
