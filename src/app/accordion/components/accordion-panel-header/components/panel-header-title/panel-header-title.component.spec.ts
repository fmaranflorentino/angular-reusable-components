import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../../../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { PanelHeaderTitleComponent } from './panel-header-title.component';

const cases = {
  simple: `<h3 panel-header-title>Title</h3>`,
};

describe('PanelHeaderTitleComponent', () => {
  let subject: SpectatorHost<PanelHeaderTitleComponent>;
  const createHost = createHostFactory({
    component: PanelHeaderTitleComponent,
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

  it('should have css class accordion_panel__header__title', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });
});
