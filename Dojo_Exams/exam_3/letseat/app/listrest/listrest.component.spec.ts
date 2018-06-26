import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrestComponent } from './listrest.component';

describe('ListrestComponent', () => {
  let component: ListrestComponent;
  let fixture: ComponentFixture<ListrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
