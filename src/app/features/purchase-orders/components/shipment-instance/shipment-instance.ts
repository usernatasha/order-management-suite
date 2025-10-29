import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { SharedChip } from '../../../../core/common/shared-chip/shared-chip';
import { ShipmentInstanceModel } from '../../../../core/models';

@Component({
  selector: 'app-shipment-instance',
  imports: [CommonModule, KENDO_GRID, SharedChip],
  templateUrl: './shipment-instance.html',
  styleUrl: './shipment-instance.scss',
})
export class ShipmentInstance {
  @Input() instance!: any;
  @Output() contextChange = new EventEmitter<any>();

  public onRowClick(dataitem: ShipmentInstanceModel): void {
    this.contextChange.emit({ type: 'instance', lineIds: dataitem.lineIds });
  }
}
