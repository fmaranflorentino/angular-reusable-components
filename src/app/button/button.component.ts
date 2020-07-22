import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding,
  Input,
} from '@angular/core';

import IButtonProps from './button-props.interface';


@Component({
  selector: 'button[customButton], a[customButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit , IButtonProps {
  @Input()
  iconPosition: 'left' | 'right' = 'left';

  @Input()
  color: 'primary' | 'secondary';

  @Input()
  set outline(value: boolean) {
    this._outline = value !== null && `${value}` !== 'false';
  }

  @HostBinding('class.custom-button')
  _customButtom = true;

  @HostBinding('class.custom-button--outline')
  _outline = false;

  @HostBinding('class.custom-button--primary')
  get light(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.custom-button--secondary')
  get dark(): boolean {
    return this.color === 'secondary'
  }


  constructor() {}

  ngOnInit(): void {}
}
