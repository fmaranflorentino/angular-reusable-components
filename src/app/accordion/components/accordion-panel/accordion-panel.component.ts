import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { AccordionBodyAnimation } from '../../accordion.animations';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ AccordionBodyAnimation ],
})
export class AccordionPanelComponent implements OnInit {
  @HostBinding('class.accordion_panel')
  accordion_panel = true;

  @HostBinding('class.accordion_panel--expanded')
  get expandedValue() {
    return this._expanded === true;
  };

  @Input()
  set expanded(value) {
    this._expanded = value;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value !== null && `${value}` !== 'false';
  }

  private _expanded: boolean;

  private _disabled: boolean;

  get isExpanded(): boolean {
    return this._expanded;
  }

  get isDisabled(): boolean {
    return this._disabled;
  }

  constructor() { }

  ngOnInit(): void {
  }

  handlePanelInteraction(): void {
    if (this.isDisabled) {
      return;
    }

    this._expanded = !this._expanded;
  }

}
