import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  constructor() {}

  parseStyle(styles: string, styleName: string): string {
    let stylesArray = styles.split(';');

    if (stylesArray.length == 0) return '';

    let output = '';

    stylesArray.forEach((style) => {
      if (style.includes(styleName)) {
        output = style.split(':')[1];
      }
    });
    if (output != '' || output.startsWith(' ')) output.padStart(1);
    return output;
  }

  adjustFontToHeight(height: string): string {
    let baseHeight = +height.replace('px', '');
    return (baseHeight * 0.8).toString() + 'px';
  }
}
