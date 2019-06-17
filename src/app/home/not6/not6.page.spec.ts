import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not6Page } from './not6.page';

describe('Not6Page', () => {
  let component: Not6Page;
  let fixture: ComponentFixture<Not6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
