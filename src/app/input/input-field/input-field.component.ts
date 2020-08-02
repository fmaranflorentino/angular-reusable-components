import { Component, Input, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';
import { CustomInputDirective } from '../custom-input.directive';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements AfterContentInit {
  @ContentChildren(CustomInputDirective) inputDirective: QueryList<any>;

  @Input()
  set label(value: string) {
    this._label = value;
  };

  @Input()
  set errorMessage(value: string | string[]) {
    this._errorMessage = value;
  };

  @Input()
  set descriptionMessage(value: string) {
    this._descriptionMessage = value;
  };

  get labelValue(): string {
    return this._label;
  }

  get inputId(): string {
    return this._inputNativeElement.id;
  }

  private _label: string;

  private _errorMessage: string | string[];

  private _descriptionMessage: string;

  private _inputNativeElement: any;

  constructor() { }

  ngAfterContentInit(): void {
    this._inputNativeElement = this.inputDirective.first.el.nativeElement;
  }

}
