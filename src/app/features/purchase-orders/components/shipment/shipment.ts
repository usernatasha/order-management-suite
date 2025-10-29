import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent, KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { ShipmentInstance } from '../shipment-instance/shipment-instance';
import { PoSelectionService } from '../../../../service/po-selection.service';
import { SharedChip } from '../../../../core/common/shared-chip/shared-chip';

@Component({
  selector: 'app-shipment',
  imports: [CommonModule, KENDO_LAYOUT, ExpansionPanelComponent, ShipmentInstance, SharedChip],
  templateUrl: './shipment.html',
  styleUrl: './shipment.scss',
})
export class Shipment implements OnInit {
  @Output() contextChange = new EventEmitter<any>();
  public shipments: any[] = [];

  constructor(private poSelection: PoSelectionService) {}

  ngOnInit() {
    this.poSelection.selectedPO$.subscribe(po => {
      this.shipments = po?.shipments || [];
    });
  }

  public onAction(item: any): void {
    item.expanded = !item.expanded;
    this.contextChange.emit({ type: 'shipment', lineIds: item.lineIds });
  }
}
