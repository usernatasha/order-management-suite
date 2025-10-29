import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shipment } from '../shipment/shipment';
import { DataService } from '../../../../service/data.service';
import { OrderLineModel, PurchaseOrderModel } from '../../../../core/models';
import { KENDO_GRID, GridModule, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { OrderLines } from '../order-lines/order-lines';
import { PoSelectionService } from '../../../../service/po-selection.service';
import { SharedChip } from '../../../../core/common/shared-chip/shared-chip';

@Component({
  selector: 'app-po-detail',
  standalone: true,
  imports: [CommonModule, KENDO_GRID, GridModule, Shipment, OrderLines, SharedChip ],
  templateUrl: './po-detail.html',
  styleUrls: ['./po-detail.scss'],
})
export class PoDetail {
  @Input() dataItem!: PurchaseOrderModel;
  public purchaseOrders: PurchaseOrderModel[] = [];
  public selectedPO: PurchaseOrderModel = {} as PurchaseOrderModel;
  public filteredLines: OrderLineModel[] = [];
  public gridView: GridDataResult = { data: [], total: 0 };
  public skip = 0;
  public pageSize = 10;

  constructor(private dataService: DataService, private poSelection: PoSelectionService) {}

  ngOnInit() {
    this.loadPO();
  }

  public loadPO(): void {
    this.dataService.getPurchaseOrderDetail().subscribe((po) => {
      this.purchaseOrders = po;
      this.updateGridData();
      this.setSelectedPO(this.purchaseOrders[0]);
    });
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.updateGridData();
  }

  public onContextChange(context: any): void {
    if (context.type === 'po') {
      this.filteredLines = this.selectedPO.orderLines;
    } else if (context.type === 'shipment') {
      this.filteredLines = this.selectedPO.orderLines.filter((l: OrderLineModel) =>
        context.lineIds.includes(l.lineId)
      );
    } else if (context.type === 'instance') {
      this.filteredLines = this.selectedPO.orderLines.filter((l: OrderLineModel) =>
        context.lineIds.includes(l.lineId)
      );
    }
  }

  public onRowClick(dataItem: PurchaseOrderModel): void {
    this.setSelectedPO(dataItem);
    this.onContextChange({ type: 'po' });
  }

  public setSelectedPO(po: PurchaseOrderModel): void {
    this.selectedPO = po;
    this.filteredLines = po.orderLines;
    this.poSelection.updateSelectedPO(po);
  }

  private updateGridData(): void {
    const start = this.skip;
    const end = this.skip + this.pageSize;
    this.gridView = {
      data: this.purchaseOrders.slice(start, end),
      total: this.purchaseOrders.length,
    };
  }
}