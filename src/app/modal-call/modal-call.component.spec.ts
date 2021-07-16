import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCallComponents } from './modal-call.component';

describe('ModalCallComponent', () => {
  let component: ModalCallComponents;
  let fixture: ComponentFixture<ModalCallComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCallComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCallComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
