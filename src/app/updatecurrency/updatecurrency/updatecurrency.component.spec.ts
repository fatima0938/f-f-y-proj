import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecurrencyComponent } from './updatecurrency.component';

describe('UpdatecurrencyComponent', () => {
  let component: UpdatecurrencyComponent;
  let fixture: ComponentFixture<UpdatecurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecurrencyComponent]
    });
    fixture = TestBed.createComponent(UpdatecurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
