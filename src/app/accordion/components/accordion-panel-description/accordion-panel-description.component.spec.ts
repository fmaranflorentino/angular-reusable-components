import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPanelDescriptionComponent } from './accordion-panel-description.component';

describe('AccordionPanelDescriptionComponent', () => {
  let component: AccordionPanelDescriptionComponent;
  let fixture: ComponentFixture<AccordionPanelDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPanelDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPanelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
