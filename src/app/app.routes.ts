import { Routes } from '@angular/router';
import { PoDetail } from './features/purchase-orders/components/po-detail/po-detail';

export const routes: Routes = [
   { path: 'pos', component: PoDetail },
   { path: '', redirectTo: 'pos', pathMatch: 'full' },
];
