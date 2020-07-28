import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  constructor(private overlay: Overlay) {}

  open(component: any) {
    const overlayRef = this.overlay.create({
      width: '100%',
      height: '100%',
      hasBackdrop: true,
      panelClass: 'overlay-custom',
      backdropClass: 'overlay-backdrop-custom',
    });


    const comp = new ComponentPortal(component);

    overlayRef.attach(comp);



    return overlayRef;
  }
}
