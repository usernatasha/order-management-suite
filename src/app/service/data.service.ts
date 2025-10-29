import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    // Get all purchase orders
    public getPurchaseOrders(): Observable<any[]> {
        return this.http.get<any[]>('api/purchaseOrders');
    }

    // Get detailed purchase order information including shipments, instances, and lines
    public getPurchaseOrderDetail(): Observable<any[]> {
        return forkJoin({
            purchaseOrders: this.http.get<any[]>('api/purchaseOrders'),
            shipments: this.http.get<any[]>('api/shipments'),
            instances: this.http.get<any[]>('api/shipmentInstances'),
            lines: this.http.get<any[]>('api/orderLines')
        }).pipe(
            map(({ purchaseOrders, shipments, instances, lines }) => {

            // Map through each PO and attach its related data
            return purchaseOrders.map(po => {
                const poShipments = shipments
                .filter(s => po.shipmentIds.includes(s.shipmentId))
                .map(s => ({
                    ...s,
                    shipmentInstances: instances.filter(i => i.shipmentId === s.shipmentId)
                }));

                const poLines = lines.filter(l => po.orderLineIds.includes(l.lineId));

                return {
                ...po,
                shipments: poShipments,
                orderLines: poLines
                };
            });
            })
        );
    }
}
