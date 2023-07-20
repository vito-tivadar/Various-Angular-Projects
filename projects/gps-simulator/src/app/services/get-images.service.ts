import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetImagesService {
  constructor() {}
  // longitude = x
  // latitude = y
  getTileSet(longitude: number, latitude: number, numberOfTiles: number = 9, zoom: number = 16): string[] {
    let xTileNumber: Tile = this.lon2tile(longitude, zoom);
    let yTileNumber: Tile = this.lat2tile(latitude, zoom);

    // console.log(longitude, latitude);
    // console.log(xTileNumber, yTileNumber);

    let tilesArray: string[] = [];

    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        let imagePath: string = `assets/tiles/${xTileNumber.number + x}/${yTileNumber.number + y}.png`;
        tilesArray.push(imagePath);
        // console.log(imagePath, y, x);
      }
    }
    // console.log(tilesArray);
    return tilesArray;
  }

  pixelsToBounds(lon: number, lat: number, zoom: number = 16, width: number = 256, height: number = 256): Pixels {
    let xTile: Tile = this.lon2tile(lon, zoom);
    let yTile: Tile = this.lat2tile(lat, zoom);

    console.log(xTile, yTile);

    let lon1 = (xTile.number / Math.pow(2, zoom)) * 360.0 - 180.0;

    let n1 = Math.PI - (2.0 * Math.PI * yTile.number) / Math.pow(2, zoom);
    let lat1 = (180.0 / Math.PI) * Math.atan(0.5 * (Math.exp(n1) - Math.exp(-n1)));

    let lon2 = ((xTile.number + 1) / Math.pow(2, zoom)) * 360.0 - 180.0;

    let n2 = Math.PI - (2.0 * Math.PI * (yTile.number + 1)) / Math.pow(2, zoom);
    let lat2 = (180.0 / Math.PI) * Math.atan(0.5 * (Math.exp(n2) - Math.exp(-n2)));

    //return lat1.toString() + '/' + lon1.toString() + '/' + lat2.toString() + '/' + lon2.toString();

    /*

    let leftAbsolute = (lon - lon1) / (lon1 - lon2);
    let topAbsolute = (lat - lat1) / (lat1 - lat2);

    console.log('absolute:', leftAbsolute, topAbsolute);

    let pixelsLeft = leftAbsolute * width;
    let pixelsTop = topAbsolute * height;

    console.log('pixels:', pixelsLeft, pixelsTop);
*/
    // return {
    //   top: lat1 + 'px',
    //   bottom: lat2 + 'px',
    //   left: lon1 + 'px',
    //   right: lon1 + 'px',
    // };

    return {
      top: lat1,
      bottom: lat2,
      left: lon1,
      right: lon2,
      tilePositionX: 128 - Math.round(xTile.remainder * width),
      tilePositionY: 128 - Math.round(yTile.remainder * height),
    };
  }

  // Private functions
  private lon2tile(lon: number, zoom: number): Tile {
    let number: number = ((lon + 180) / 360) * Math.pow(2, zoom);
    let tileNumber = Math.floor(number);
    let remainder: number = number - Math.trunc(number);
    return {
      number: tileNumber,
      remainder: remainder,
    };
  }

  private lat2tile(lat: number, zoom: number): Tile {
    let number: number =
      ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
      Math.pow(2, zoom);
    let tileNumber = Math.floor(number);
    let remainder: number = number - Math.trunc(number);

    return {
      number: tileNumber,
      remainder: remainder,
    };
  }

  private tile2long(x: number, z: number): number {
    return (x / Math.pow(2, z)) * 360 - 180;
  }
  private tile2lat(y: number, z: number): number {
    var n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
    return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  }

  private EARTH_CIR_METERS: number = 40075016.686;
  private degreesPerMeter = 360 / this.EARTH_CIR_METERS;

  private toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }
}

export type Pixels = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  tilePositionX: number;
  tilePositionY: number;
};

type Tile = {
  number: number;
  remainder: number;
};
