import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const AccordionBodyAnimation = trigger('body', [
    transition(':leave', [
        animate('200ms ease-out', keyframes([
            style({
                opacity: 1,
                height: 'auto'
            }),
            style({
                opacity: 0,
                height: 0
            })
        ]))
    ]),
    transition(':enter', [
        animate('500ms ease-in', keyframes([
            style({
                opacity: 0,
            }),
            style({
                opacity: 1,
            })
        ]))
    ])
]);
