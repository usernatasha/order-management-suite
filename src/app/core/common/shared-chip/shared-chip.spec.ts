import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedChip } from './shared-chip';

describe('SharedChip', () => {
  let component: SharedChip;
  let fixture: ComponentFixture<SharedChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedChip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
