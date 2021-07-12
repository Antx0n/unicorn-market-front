import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornItemComponent } from './unicorn-item.component';

describe('UnicornItemComponent', () => {
  let component: UnicornItemComponent;
  let fixture: ComponentFixture<UnicornItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
