import { Component, OnInit, HostBinding, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-panel-header',
  templateUrl: './accordion-panel-header.component.html',
  styleUrls: ['./accordion-panel-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionPanelHeaderComponent implements OnInit {
  @HostBinding('class.accordion_panel__header')
  accordionPanelHeader = true;

  @Input()
  set iconAlign(value: string) {
    this._iconAlign = value;
  }

  @Input()
  set hideToggle(value: boolean) {
    this._hideToggle = value !== null && `${value}` !== 'false';
  }

  @Input() teste;

  get isHideToggle(): boolean {
    return this._hideToggle;
  }

  get iconAlignValue(): string {
    return this._iconAlign;
  }

  private _iconAlign;
  private _hideToggle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
