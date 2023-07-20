import { state, style, trigger, transition, animate } from '@angular/animations';

export let ripple = trigger('ripple', [state('void', style({ opacity: 0 })), transition(':enter', animate(2000))]);
