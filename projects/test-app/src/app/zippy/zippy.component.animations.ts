import { animate, state, style, transition, trigger } from '@angular/animations';

export let expandCollapse = trigger('expandCollapse', [
  state('collapsed', style({ height: 0, opacity: 0, color: 'transparent' })),
  transition('collapsed => expanded', [
    animate('200ms ease-out', style({ height: '*', opacity: 1 })),
    animate('0.8s ease-out', style({ color: '*' })),
  ]),
  transition('expanded => collapsed', [animate('200ms ease-in')]),
]);
