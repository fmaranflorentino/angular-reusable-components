import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../app.module';
import { AccordionComponent } from './accordion.component';
import { APP_BASE_HREF } from '@angular/common';

const cases = {
  simple: `<accordion></accordion>`,
};

describe('AccordionComponent', () => {
  let subject: SpectatorHost<AccordionComponent>;
  const createHost = createHostFactory({
    component: AccordionComponent,
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
});
