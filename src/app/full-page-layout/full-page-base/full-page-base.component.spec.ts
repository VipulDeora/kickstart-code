import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageBaseComponent } from './full-page-base.component';

describe('FullPageBaseComponent', () => {
  let component: FullPageBaseComponent;
  let fixture: ComponentFixture<FullPageBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPageBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
