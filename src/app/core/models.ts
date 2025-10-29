export interface ShipmentInstanceModel {
    instanceId: string;
    status: 'In Transit' | 'Delivered' | 'Delayed';
    instanceAlerts: OrderAlert[];
    lineIds: string[];
    trackingDetail: TrackingDetail[];
}

export interface TrackingDetail {
    carrier: string;
    trackingNumber: string;
    lastUpdated: string; 
}

export interface ShipmentModel {
    shipmentId: string;
    status: 'Booked' | 'In Progress' | 'Complete';
    shipmentAlerts: OrderAlert[];
    loadPlan: string;
    shipmentInstances: ShipmentInstanceModel[];
    lineIds: string[];
}

export interface OrderLineModel {
    lineId: string;
    itemSku: string;
    description: string;
    quantity: number;
    price: number;
}

export interface OrderAlert {
    alertId: string;
    severity: 'High' | 'Medium' | 'Low';
    message: string;
}

export interface OrderTag {
    key: string;
    value: string;
}

export interface PurchaseOrderModel {
    poId: string;
    status: 'Actuve' |'Cancelled' | 'Partially Shipped';
    poDate: string;
    totalValue: number;
    poTags?: OrderTag[];
    poAlerts?: OrderAlert[];
    orderLines: OrderLineModel[];
    shipments: ShipmentModel[];
}