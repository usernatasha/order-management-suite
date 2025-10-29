import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoDetail } from './po-detail';
import { DataService } from '../../../../service/data.service';
describe('PoDetail', () => {
  let component: PoDetail;
  let fixture: ComponentFixture<PoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoDetail],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load purchase orders on init', () => {
  //   spyOn(component['dataService'], 'getPurchaseOrderDetail').and.callThrough();
  //   component.ngOnInit();
  //   expect(component['dataService'].getPurchaseOrderDetail).toHaveBeenCalled();
  // });

  // it('should update grid data on page change', () => {  
  //   const initialSkip = component.skip;
  //   const event = { skip: 3, take: 3 } as any;
  //   component.pageChange(event);
  //   expect(component.skip).toBe(event.skip);
  //   expect(component.gridView.data).not.toEqual(component.purchaseOrders.slice(initialSkip, initialSkip + component.pageSize));
  // });
  
});
