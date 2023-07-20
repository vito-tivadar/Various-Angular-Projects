import { Component, HostBinding, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'drag-drop-test';

  positionY: number = 0;
  positionX: number = 0;

  ngOnInit(): void {
    this.getPosition();
  }

  getPosition(): void {
    let savedPosition = localStorage.getItem('position');

    let position: positionOnject;
    if (savedPosition) {
      position = JSON.parse(savedPosition) as positionOnject;
      this.positionX = position.x;
      this.positionY = position.y;
    } else {
      let defaultPosition: positionOnject = {
        x: 0,
        y: 0,
      };
      this.storePosition(defaultPosition);
    }
  }

  storePosition(position: positionOnject) {
    localStorage.setItem('position', JSON.stringify(position));
  }

  dragEnd(event: CdkDragEnd) {
    let distance = event.distance;
    let position: positionOnject = {
      x: this.positionX + distance.x,
      y: this.positionY + distance.y,
    };

    this.storePosition(position);
  }
}

type positionOnject = {
  x: number;
  y: number;
};
