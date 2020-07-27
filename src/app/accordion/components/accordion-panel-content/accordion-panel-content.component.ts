import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'accordion-panel-content',
  templateUrl: './accordion-panel-content.component.html',
  styleUrls: ['./accordion-panel-content.component.scss']
})
export class AccordionPanelContentComponent implements OnInit {
  @HostBinding('class.accordion_panel__contenthidden')
  accordionPanelContent = true;

  constructor() { }

  ngOnInit(): void {
  }

}
