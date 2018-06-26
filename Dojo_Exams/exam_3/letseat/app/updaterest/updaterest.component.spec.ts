import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterestComponent } from './updaterest.component';

describe('UpdaterestComponent', () => {
  let component: UpdaterestComponent;
  let fixture: ComponentFixture<UpdaterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
