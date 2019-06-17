import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not1Page } from './not1.page';

describe('Not1Page', () => {
  let component: Not1Page;
  let fixture: ComponentFixture<Not1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
