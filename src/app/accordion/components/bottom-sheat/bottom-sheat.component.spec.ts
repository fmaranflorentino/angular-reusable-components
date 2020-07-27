import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheatComponent } from './bottom-sheat.component';

describe('BottomSheatComponent', () => {
  let component: BottomSheatComponent;
  let fixture: ComponentFixture<BottomSheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
