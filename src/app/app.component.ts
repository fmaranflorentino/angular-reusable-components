import { Component } from '@angular/core';
import { BottomSheetService } from './bottom-sheet/bottom-sheet.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  variable = true;

  constructor(private bottomSheet: BottomSheetService) {
    this.form = new FormGroup({
      teste: new FormControl(''),
      'teste2': new FormControl({ value: '', disabled: false }),
      'teste3': new FormControl({ value: '', disabled: true })
    });

    setTimeout(() => {
      this.variable = false;
    }, 3000);
  }


  open() {
    this.bottomSheet.open(BottomSheetComponent);
  }

  formchange() {
    console.log('change', this.form)
  }

  forminput() {
    console.log('input', this.form)
  }

  setvalue() {
    this.form.controls.teste.setValue('vai brother');

    this.form.controls.teste.disable();
    this.form.controls.teste2.enable();
  }
}
