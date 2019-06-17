import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not4Page } from './not4.page';

describe('Not4Page', () => {
  let component: Not4Page;
  let fixture: ComponentFixture<Not4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
