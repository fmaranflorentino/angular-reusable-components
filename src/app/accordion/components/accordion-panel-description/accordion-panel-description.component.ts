import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'span[app-accordion-panel-description]',
  templateUrl: './accordion-panel-description.component.html',
  styleUrls: ['./accordion-panel-description.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionPanelDescriptionComponent implements OnInit {
  @HostBinding('class.accordion_panel__description')
  accordionPanelDescription = true;

  constructor() { }

  ngOnInit(): void {
  }

}
