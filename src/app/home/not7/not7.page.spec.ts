import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not7Page } from './not7.page';

describe('Not7Page', () => {
  let component: Not7Page;
  let fixture: ComponentFixture<Not7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
