import {
  SpectatorHost,
  createHostFactory,
} from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../app.module';
import { ButtonComponent } from './button.component';


const cases = {
  simple: `<button customButton>Hello World!</button>`,
  secondary: `<button customButton color="secondary">Hello World!</button>`,
  outline: `<button customButton outline>Hello World!</button>`,
};

describe('ButtonComponent', () => {
  let subject: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory({
    component: ButtonComponent,
    declareComponent: false,
    imports: [ AppModule ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  });

  it('should create instance', () => {
    subject = createHost(cases.simple);
    expect(subject.component).toBeTruthy();
  });

  it('should create the raw component', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have class custom-button--secondary', () => {
    subject = createHost(cases.secondary);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have class custom-button--outline', () => {
    subject = createHost(cases.outline);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should verify component accessibility', async () => {
    subject = createHost(cases.simple);
    expect(await axe(subject.hostFixture.nativeElement)).toHaveNoViolations();
  });
});
