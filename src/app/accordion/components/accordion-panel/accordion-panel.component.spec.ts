import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../../../app.module';
import { AccordionPanelComponent } from './accordion-panel.component';
import { APP_BASE_HREF } from '@angular/common';

const cases = {
  simple: `<accordion-panel></accordion-panel>`,
  expanded: `<accordion-panel [expanded]="true"></accordion-panel>`,
  disabled: `<accordion-panel disabled></accordion-panel>`,
  hideToggle: `<accordion-panel hideToggle></accordion-panel>`,
  complex: `
  <accordion-panel>
    <h3 panel-header-title>Angular - Developer Experience</h3>
    <span accordion-panel-description
      >A meetup event for defining the future of developer experience.</span
    >
    <span class="material-icons" panel-header-icon>
      account_circle
    </span>

    <accordion-panel-content>content man</accordion-panel-content>
  </accordion-panel>
  `
};

describe('AccordionPanelComponent', () => {
  let subject: SpectatorHost<AccordionPanelComponent>;
  const createHost = createHostFactory({
    component: AccordionPanelComponent,
    declareComponent: false,
    imports: [ AppModule ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
  });

  it('should create instance', () => {
    subject = createHost(cases.simple);
    expect(subject.component).toBeTruthy();
  });

  it('should create and match raw component snapshot', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have class accordion_panel', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have class accordion_panel--expanded', () => {
    subject = createHost(cases.expanded);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have class accordion_panel__header__container--disabled', () => {
    subject = createHost(cases.disabled);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should render the component with all children', () => {
    subject = createHost(cases.complex);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should expand the panel', () => {
    subject = createHost(cases.simple);
    subject.component.handlePanelInteraction();
    subject.detectChanges();

    expect(subject.component.isExpanded).toBeTruthy();
  });

  it('should open and close the panel', () => {
    subject = createHost(cases.simple);
    subject.component.handlePanelInteraction();
    subject.detectChanges();

    expect(subject.component.isExpanded).toBeTruthy();

    subject.component.handlePanelInteraction();
    subject.detectChanges();

    expect(subject.component.isExpanded).toBeFalsy();
  });

  it('should add true to disable property', () => {
    subject = createHost(cases.disabled);
    expect(subject.component.isDisabled).toBeTruthy();
  });

  it('should add true to expand property', () => {
    subject = createHost(cases.expanded);
    expect(subject.component.isExpanded).toBeTruthy();
  });

  it('should add true to hideToggle property', () => {
    subject = createHost(cases.hideToggle);
    expect(subject.component.isHideToggle).toBeTruthy();
  });

  it('should verify component accessibility', async () => {
    subject = createHost(cases.simple);
    expect(await axe(subject.hostFixture.nativeElement)).toHaveNoViolations();
  });
});
