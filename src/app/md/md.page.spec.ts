import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdPage } from './md.page';

describe('MdPage', () => {
  let component: MdPage;
  let fixture: ComponentFixture<MdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
