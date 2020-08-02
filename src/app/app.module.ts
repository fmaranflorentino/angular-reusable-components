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
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { PanelHeaderTitleComponent } from './accordion/components/accordion-panel-header/components/panel-header-title/panel-header-title.component';
import { BottomSheetService } from './bottom-sheet/bottom-sheet.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CustomInputDirective } from './input/custom-input.directive';
import { InputFieldComponent } from './input/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonDirective } from './skeleton/skeleton.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelDescriptionComponent,
    AccordionPanelContentComponent,
    BottomSheetComponent,
    PanelHeaderTitleComponent,
    CustomInputDirective,
    InputFieldComponent,
    SkeletonDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    BottomSheetService,
    OVERLAY_PROVIDERS,
  ],
  bootstrap: [AppComponent],
  exports: [
    ButtonComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelDescriptionComponent,
    AccordionPanelContentComponent,
    BottomSheetComponent,
    PanelHeaderTitleComponent,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [BottomSheetComponent],
})
export class AppModule {}
