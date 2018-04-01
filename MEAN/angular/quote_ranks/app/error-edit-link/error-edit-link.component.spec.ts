import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorEditLinkComponent } from './error-edit-link.component';

describe('ErrorEditLinkComponent', () => {
  let component: ErrorEditLinkComponent;
  let fixture: ComponentFixture<ErrorEditLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorEditLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorEditLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
