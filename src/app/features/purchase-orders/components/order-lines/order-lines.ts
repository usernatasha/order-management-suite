import { Component, Input } from '@angular/core';
import { GridDataResult, GridModule, PageChangeEvent } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { OrderLineModel } from '../../../../core/models';

@Component({
  selector: 'app-order-lines',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './order-lines.html',
  styleUrls: ['./order-lines.scss'],
})
export class OrderLines {
  public skip = 0;
  public pageSize = 3;
  public gridView: GridDataResult = { data: [], total: 0 };
  private _lines: OrderLineModel[] = [];
  @Input()
  set lines(value: OrderLineModel[] | null | undefined) {
    this._lines = (value ?? []).slice();
    this.skip = 0; 
    this.updateGridData();
  }
  get lines(): OrderLineModel[] {
    return this._lines;
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.updateGridData();
  }

  private updateGridData(): void {
    const start = this.skip;
    const end = this.skip + this.pageSize;
   this.gridView = {
      data: this._lines.slice(start, end),
      total: this._lines.length
    };
  }
}
