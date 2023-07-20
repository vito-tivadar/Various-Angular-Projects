import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [{ name: 'Test 1' }, { name: 'Test 2' }, { name: 'Test 3' }];

  enablePrevious: boolean = false;
  onCheckboxChange() {
    this.enablePrevious = !this.enablePrevious;
  }


  title = 'Angular Test';
  body: { isFavourited: boolean; likeCount: number } = {
    isFavourited: false,
    likeCount: 8,
  };

  onLikesChange(isLiked: Boolean) {
    if (isLiked) this.body.likeCount++;
    else this.body.likeCount--;
  }
}
