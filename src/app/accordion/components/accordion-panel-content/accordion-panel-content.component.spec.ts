import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPanelContentComponent } from './accordion-panel-content.component';

describe('AccordionPanelContentComponent', () => {
  let component: AccordionPanelContentComponent;
  let fixture: ComponentFixture<AccordionPanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPanelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
