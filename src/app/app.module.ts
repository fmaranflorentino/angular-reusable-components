import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion/components/accordion-panel/accordion-panel.component';
import { AccordionPanelHeaderComponent } from './accordion/components/accordion-panel-header/accordion-panel-header.component';
import { AccordionPanelDescriptionComponent } from './accordion/components/accordion-panel-description/accordion-panel-description.component';
import { CommonModule } from '@angular/common';
import { AccordionPanelContentComponent } from './accordion/components/accordion-panel-content/accordion-panel-content.component';
import { BottomSheatComponent } from './accordion/components/bottom-sheat/bottom-sheat.component';
import { BottomSheetComponent } from './accordion/components/bottom-sheet/bottom-sheet.component';
// import { testeServ } from './accordion/components/bottom-sheet/teste';
// import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { PanelHeaderTitleComponent } from './accordion/components/accordion-panel-header/components/panel-header-title/panel-header-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelDescriptionComponent,
    AccordionPanelContentComponent,
    BottomSheatComponent,
    BottomSheetComponent,
    PanelHeaderTitleComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule],
  providers: [
    // testeServ,
    // OVERLAY_PROVIDERS,
  ],
  bootstrap: [AppComponent],
  exports: [
    ButtonComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelDescriptionComponent,
    AccordionPanelContentComponent,
    BottomSheatComponent,
    BottomSheetComponent,
    PanelHeaderTitleComponent,
  ],
  entryComponents: [BottomSheetComponent],
})
export class AppModule {}
