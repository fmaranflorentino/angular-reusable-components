import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { axe } from 'jest-axe';

import { AppModule } from '../../../app.module';
import { AccordionPanelHeaderComponent } from './accordion-panel-header.component';
import { APP_BASE_HREF } from '@angular/common';

const cases = {
  simple: `<app-accordion-panel-header></app-accordion-panel-header>`,
  expanded: `
  <app-accordion-panel-header [expanded]="true"></app-accordion-panel-header>
  `,
  hiddeToggle: `
  <app-accordion-panel-header [hideToggle]="true"></app-accordion-panel-header>
  `,
  title: `
  <app-accordion-panel-header>
    <ng-container headerTitle>
      <ng-content select="[panel-header-title]"></ng-content>
    </ng-container>
  </app-accordion-panel-header>`,
  description: `
  <app-accordion-panel-header>
    <span panelDescription>
      <ng-content select="[accordion-panel-description]"></ng-content>
    </span>
  </app-accordion-panel-header>`,
  customIcon: `
  <app-accordion-panel-header>
    <ng-container headerIcon>
      <ng-content select="[panel-header-icon]"></ng-content>
    </ng-container>
  </app-accordion-panel-header>`,
  complex: `
  <app-accordion-panel-header>
    <ng-container headerTitle>
      <ng-content select="[panel-header-title]"></ng-content>
    </ng-container>

    <span panelDescription>
      <ng-content select="[accordion-panel-description]"></ng-content>
    </span>

    <ng-container headerIcon>
      <ng-content select="[panel-header-icon]"></ng-content>
    </ng-container>
  </app-accordion-panel-header>`
};

describe('AccordionPanelHeaderComponent', () => {
  let subject: SpectatorHost<AccordionPanelHeaderComponent>;
  const createHost = createHostFactory({
    component: AccordionPanelHeaderComponent,
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

  it('should have css class accordion_panel__header', () => {
    subject = createHost(cases.simple);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have css class accordion_panel__header--toggleanime', () => {
    subject = createHost(cases.expanded);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should have css class accordion_panel__header--hidetoggle', () => {
    subject = createHost(cases.hiddeToggle);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should render title', () => {
    subject = createHost(cases.title);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should render description', () => {
    subject = createHost(cases.description);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should render a custom icon', () => {
    subject = createHost(cases.customIcon);
    expect(subject.hostFixture).toMatchSnapshot();
  });

  it('should render title, description and icon together', () => {
    subject = createHost(cases.complex);
    expect(subject.hostFixture).toMatchSnapshot();
  });
});
