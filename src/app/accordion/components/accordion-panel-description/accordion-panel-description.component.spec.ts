import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AccordionPanelDescriptionComponent } from './accordion-panel-description.component';

const cases = {
  simple: `<span accordion-panel-description>description text</span>`,
};

describe('AccordionPanelDescriptionComponent', () => {
  let subject: SpectatorHost<AccordionPanelDescriptionComponent>;
  const createHost = createHostFactory({
    component: AccordionPanelDescriptionComponent,
    declareComponent: false,
    imports: [AppModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  });

  it('should create instance', () => {
    subject = createHost(cases.simple);
    expect(subject.component).toBeTruthy();
  });

  it('should create and match raw component snapshot', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have css class accordion_panel__header__description', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });
});
