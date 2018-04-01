import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeofthedayComponent } from './bikeoftheday.component';

describe('BikeofthedayComponent', () => {
  let component: BikeofthedayComponent;
  let fixture: ComponentFixture<BikeofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
