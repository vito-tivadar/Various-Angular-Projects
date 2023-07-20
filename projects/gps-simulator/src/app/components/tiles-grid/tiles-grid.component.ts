import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetImagesService, Pixels } from './../../services/get-images.service';

@Component({
  selector: 'tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.css'],
})
export class TilesGridComponent implements OnInit, OnChanges {
  @Input('longitude') longitude: number = 15.628240133993282;
  @Input('latitude') latitude: number = 46.56284348058583;
  @Input('numberOfTiles') numberOfTiles: number = 9;
  @Input('imageSize') imageSize: number = 256;

  constructor(private _getImagesService: GetImagesService) {}

  images: string[] = [];
  top: string = '0px';
  left: string = '0px';
  imageHeight: string = this.imageSize + 'px';

  ngOnInit(): void {
    // console.log(this.longitude, this.latitude);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['latitude']) this.latitude = changes['latitude'].currentValue;
    if (changes['longitude']) this.longitude = changes['longitude'].currentValue;

    this.images = this._getImagesService.getTileSet(this.longitude, this.latitude, this.numberOfTiles);
    let pixels: Pixels = this._getImagesService.pixelsToBounds(this.longitude, this.latitude);

    console.log('pixels', pixels);

    // this.generateDots(pixels);

    console.log('position:', pixels);

    this.top = pixels.tilePositionY + 'px';
    this.left = pixels.tilePositionX + 'px';
  }
}
