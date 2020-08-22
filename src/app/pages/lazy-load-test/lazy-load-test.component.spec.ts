import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadTestComponent } from './lazy-load-test.component';

describe('LazyLoadTestComponent', () => {
  let component: LazyLoadTestComponent;
  let fixture: ComponentFixture<LazyLoadTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
