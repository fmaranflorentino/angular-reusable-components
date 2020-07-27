import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { AccordionBodyAnimation } from '../../accordion.animations';

@Component({
  selector: 'accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ AccordionBodyAnimation ],
})
export class AccordionPanelComponent {
  @HostBinding('class.accordion_panel')
  accordion_panel = true;

  @HostBinding('class.accordion_panel--expanded')
  get expandedValue() {
    return this.isExpanded === true;
  };

  @HostBinding('class.accordion_panel__header__container--disabled')
  get disabledValue() {
    return this.isDisabled === true;
  }

  @Input()
  set expanded(value) {
    this._expanded = value;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value !== null && `${value}` !== 'false';
  }

  @Input()
  set hideToggle(value: boolean) {
    this._hideToggle = value !== null && `${value}` !== 'false';
  }

  private _expanded: boolean;

  private _disabled: boolean;

  private _hideToggle: boolean = false;


  get isExpanded(): boolean {
    return this._expanded;
  }

  get isDisabled(): boolean {
    return this._disabled;
  }

  get isHideToggle(): boolean {
    return this._hideToggle;
  }

  handlePanelInteraction(): void {
    if (this.isDisabled) {
      return;
    }

    this._expanded = !this._expanded;
  }

}
