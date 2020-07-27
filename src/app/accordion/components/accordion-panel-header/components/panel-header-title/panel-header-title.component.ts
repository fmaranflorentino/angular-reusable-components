import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'h3[panel-header-title]',
  templateUrl: './panel-header-title.component.html',
  styleUrls: ['./panel-header-title.component.scss']
})
export class PanelHeaderTitleComponent implements OnInit {
  @HostBinding('class.accordion_panel__header__title')
  panelHeaderTitle = true;

  constructor() { }

  ngOnInit(): void {
  }

}
