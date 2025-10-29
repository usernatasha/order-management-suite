import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PurchaseOrderModel } from '../core/models';


@Injectable({ providedIn: 'root' })
export class PoSelectionService {
  private selectedPOSubject = new BehaviorSubject<PurchaseOrderModel | null>(null);
  selectedPO$ = this.selectedPOSubject.asObservable();

  public updateSelectedPO(po: PurchaseOrderModel): void {
    this.selectedPOSubject.next(po);
  }
}