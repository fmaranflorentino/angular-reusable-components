import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';

const cases = {
  simple: `<app-root></app-root>`,
};

describe('AppComponent', () => {
  let subject: SpectatorHost<AppComponent>;
  const createHost = createHostFactory({
    component: AppComponent,
    declareComponent: false,
    imports: [ AppModule ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
  });

  it('should create instance', () => {
    subject = createHost(cases.simple);
    expect(subject.component).toBeTruthy();
  });
});
