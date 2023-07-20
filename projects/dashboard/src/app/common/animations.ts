import { animate, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [transition(':enter, :leave', [style({ opacity: 0 }), animate(2000)])]);

export let slide = trigger('slide', [
  transition(':enter', [style({ transform: 'translateX(-10px)' }), animate('500ms 0.2s ease-out')]),
]);
