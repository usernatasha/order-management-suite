import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLines } from './order-lines';

describe('OrderLines', () => {
  let component: OrderLines;
  let fixture: ComponentFixture<OrderLines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderLines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
