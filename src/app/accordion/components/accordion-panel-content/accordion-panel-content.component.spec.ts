import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AccordionPanelContentComponent } from './accordion-panel-content.component';

const cases = {
  simple: `<accordion-panel-content></accordion-panel-content>`,
};

describe('AccordionPanelContentComponent', () => {
  let subject: SpectatorHost<AccordionPanelContentComponent>;
  const createHost = createHostFactory({
    component: AccordionPanelContentComponent,
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

  it('should have css class accordion_panel__contenthidden', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });
});
