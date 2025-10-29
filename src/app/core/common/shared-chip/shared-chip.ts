import { Component, Input } from '@angular/core';
import { ChipThemeColor, KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { CommonModule } from '@angular/common';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@Component({
  selector: 'app-shared-chip',
  imports: [CommonModule, KENDO_BUTTONS, TooltipModule ],
  templateUrl: './shared-chip.html',
  styleUrls: ['./shared-chip.scss'],
})
export class SharedChip {
  @Input() items: any[] = [];
  @Input() type: 'alert' | 'tag' = 'alert';

  // Get Labels for Chips
  public getLabel(item: any): string {
    return this.type === 'alert' ? item.message : `${item.key}: ${item.value}`;
  }

  // Get Theme color for Chips 
  public getThemeColor(item: any): ChipThemeColor {
    if (this.type === 'alert') {
      switch(item.severity) {
        case 'High': return 'error';
        case 'Medium': return 'warning';
        case 'Low': return 'info';
        default: return 'base';
      }
    } else {
      return 'base';
    }
  }
}
