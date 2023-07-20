import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gps-simulator';

  lat: number = 46.54477901039155;
  long: number = 15.629387470983449;

  lat_long: string = '46.54477901039155, 15.629387470983449';

  convertCoordinatesString($event: string): void {
    let coordinates: string[];
    coordinates = $event.split(', ');
    this.lat = +coordinates[0];
    this.long = +coordinates[1];
  }
}
