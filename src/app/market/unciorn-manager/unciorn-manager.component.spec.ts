import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnciornManagerComponent } from './unciorn-manager.component';

describe('UnciornManagerComponent', () => {
  let component: UnciornManagerComponent;
  let fixture: ComponentFixture<UnciornManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnciornManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnciornManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
