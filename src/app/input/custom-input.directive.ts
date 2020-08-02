import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[customInput]',
})
export class CustomInputDirective {
  @HostBinding('class.custom-input')
  customInput = true;

  @HostBinding('class.custom-input--focus')
  get inputFocus() {
    return this._focus === true;
  }

  @HostBinding('class.custom-input--disabled')
  get inputDisabled() {
    return this._nativeElement.disabled === true;
  }

  @HostListener('focus')
  handleInputFocus() {
    this._focus = true;
  }

  @HostListener('blur')
  handleInputBlur() {
    this._focus = false;
  }

  @HostListener('input', ['$event'])
  handleInput($event: any) {
    this.control.control.setValue($event.target.value);
  }

  private _focus: boolean;

  private _nativeElement: any;

  constructor(private control: NgControl, private el: ElementRef) {
    this._nativeElement = this.el.nativeElement;
  }
}
