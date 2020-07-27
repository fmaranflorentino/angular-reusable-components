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

  @HostBinding('class.accordion_panel__header--hidetoggle')
  get hideToggleValue() {
    return this.isHideToggle === true;
  }

  @HostBinding('class.accordion_panel__header--toggleanime')
  get expandedValue() {
    return this.isExpanded === true;
  }

  @Input()
  set hideToggle(value: boolean) {
    this._hideToggle = value !== null && `${value}` !== 'false';
  }

  @Input()
  set expanded(value) {
    this._expanded = value;
  }

  get isHideToggle(): boolean {
    return this._hideToggle;
  }

  get isExpanded(): boolean {
    return this._expanded;
  }


  private _hideToggle: boolean;

  private _expanded: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
