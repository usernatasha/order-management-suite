import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryData implements InMemoryDbService {
  
  createDb() {
    const purchaseOrders = [
      { poId: 'PO-2024-12456', status: 'Active', poDate: '2024-01-03', totalValue: 9000.00, poTags: [ { key: 'region', value: 'EMEA' }, { key: 'customer', value: 'VIP' }, { key: 'type', value: 'bulk' }], poAlerts: [{ alertId: 'AL001', severity: 'High', message: 'Supplier issue.' }, { alertId: 'AL004', severity: 'Low', message: 'Payment pending.' }, { alertId: 'AL005', severity: 'Medium', message: 'Requires verification.' }], orderLineIds: ['L-1','L-2','L-3'], shipmentIds: ['S-1', 'S-2'] },
      { poId: 'PO-2024-99001', status: 'Partially Shipped', poDate: '2024-06-18', totalValue: 14000.00, poTags: [{ key: 'customer', value: 'VIP' }], poAlerts: [{ alertId: 'AL006', severity: 'Low', message: 'Invoice not generated.' }], orderLineIds: ['L-14','L-15','L-16','L-17','L-18','L-19','L-20','L-21','L-22','L-23','L-24','L-25'], shipmentIds: ['S-6', 'S-7'] },
      { poId: 'PO-2024-67890', status: 'Cancelled', poDate: '2024-07-20', totalValue: 4800.00, poTags: [{ key: 'type', value: 'bulk' }], poAlerts: [{ alertId: 'AL004', severity: 'High', message: 'Payment pending.' }], orderLineIds: ['L-4','L-5','L-6'], shipmentIds: ['S-3'] },
      { poId: 'PO-2024-11223', status: 'Partially Shipped', poDate: '2024-09-10', totalValue: 6200.00, poTags: [], poAlerts: [], orderLineIds: ['L-7','L-8','L-9'], shipmentIds: ['S-4'] },
      { poId: 'PO-2024-44556', status: 'Active', poDate: '2024-10-05', totalValue: 8100.00, poTags: [], poAlerts: [], orderLineIds: ['L-10','L-11','L-12','L-13'], shipmentIds: ['S-5'] }

    ];

    const shipments = [
      { shipmentId: 'S-1', status: 'Booked', shipmentAlerts: [{ alertId: 'AL002', severity: 'Medium', message: 'Partial shipment received.' },   { alertId: 'AL005', severity: 'Medium', message: 'Shipping address requires verification.' }], loadPlan: 'LP001 This is test load. Load plan is generated.', shipmentInstances: ['I-1', 'I-2'], lineIds: ['L-1','L-2'] },
      { shipmentId: 'S-2', status: 'In Progress', shipmentAlerts: [{ alertId: 'AL010', severity: 'High', message: 'Order flagged for manual review.' }], loadPlan: 'LP002 is generated. This is an inquiry ', shipmentInstances: ['I-3'], lineIds: ['L-3'] },
      { shipmentId: 'S-3', status: 'Complete', shipmentAlerts: [  { alertId: 'AL005', severity: 'Medium', message: 'Shipping address requires verification.' }], loadPlan: 'LP003 will be easily shipped', shipmentInstances: ['I-4', 'I-5', 'I-6'], lineIds: ['L-4','L-5','L-6'] },
      { shipmentId: 'S-4', status: 'Booked', shipmentAlerts: [{ alertId: 'AL010', severity: 'High', message: 'Order flagged for manual review.' }], loadPlan: 'LP004 load plan is available', shipmentInstances: ['I-7'], lineIds: ['L-7','L-8','L-9'] },
      { shipmentId: 'S-5', status: 'In Progress', shipmentAlerts: [], loadPlan: 'LP005 creates another load plan since the previous is unavailable', shipmentInstances: ['I-8'], lineIds: ['L-10','L-11','L-12','L-13'] },
      { shipmentId: 'S-6', status: 'Complete', shipmentAlerts: [], loadPlan: 'LP006 is generated and ready to be shipped. Has larger items. Will be available within a few days', shipmentInstances: ['I-9', 'I-10'], lineIds: ['L-14','L-15','L-16'] },
      { shipmentId: 'S-7', status: 'Booked', shipmentAlerts: [], loadPlan: 'LP007 is pending approval before shipping', shipmentInstances: ['I-11'], lineIds: ['L-17','L-18','L-19','L-20','L-21','L-22','L-23','L-24','L-25'] }
    ];

  const shipmentInstances = [
    { instanceId: 'I-1', shipmentId: 'S-1', status: 'In Transit', instanceAlerts: [  { alertId: 'AL003', severity: 'Low', message: 'Minor discrepancy.' },], lineIds: ['L-1'], trackingDetail: 
        { carrier: 'DHL', trackingNumber: 'TRK-001', lastUpdated: '2024-05-01T10:00:00Z' } },
    { instanceId: 'I-2', shipmentId: 'S-1', status: 'Delivered', instanceAlerts: [{ alertId: 'AL007', severity: 'High', message: 'Critical stock shortage.' }, { alertId: 'AL009', severity: 'Low', message: 'Minor data mismatch in order lines.' }], lineIds: ['L-2'], trackingDetail:
        { carrier: 'FedEx', trackingNumber: 'TRK-003', lastUpdated: '2024-05-03T12:00:00Z' } },
    { instanceId: 'I-3', shipmentId: 'S-2', status: 'Delayed', instanceAlerts: [], lineIds: ['L-3'], trackingDetail:
        { carrier: 'UPS', trackingNumber: 'TRK-004', lastUpdated: '2024-05-04T09:00:00Z' } },
    { instanceId: 'I-4', shipmentId: 'S-3', status: 'In Transit', instanceAlerts: [{ alertId: 'AL006', severity: 'Low', message: 'Invoice not generated.' }], lineIds: ['L-4'], trackingDetail:
        { carrier: 'DHL', trackingNumber: 'TRK-005', lastUpdated: '2024-05-05T08:00:00Z' } },
    { instanceId: 'I-5', shipmentId: 'S-3', status: 'Delivered', instanceAlerts: [{ alertId: 'AL006', severity: 'Low', message: 'Invoice not generated.' }], lineIds: ['L-5'], trackingDetail:
        { carrier: 'FedEx', trackingNumber: 'TRK-006', lastUpdated: '2024-05-06T14:00:00Z' } },
    { instanceId: 'I-6', shipmentId: 'S-3', status: 'Delayed', instanceAlerts: [{ alertId: 'AL006', severity: 'Low', message: 'Invoice not generated.' }], lineIds: ['L-6'], trackingDetail:
        { carrier: 'UPS', trackingNumber: 'TRK-007', lastUpdated: '2024-05-07T16:00:00Z' } },
    { instanceId: 'I-7', shipmentId: 'S-4', status: 'In Transit', instanceAlerts: [{ alertId: 'AL008', severity: 'Medium', message: 'Delivery reschedule.' }], lineIds: ['L-7','L-8','L-9'], trackingDetail:
        { carrier: 'DHL', trackingNumber: 'TRK-008', lastUpdated: '2024-05-08T10:30:00Z' } },
    { instanceId: 'I-8', shipmentId: 'S-5', status: 'Delivered', instanceAlerts: [], lineIds: ['L-10','L-11','L-12','L-13'], trackingDetail:
        { carrier: 'FedEx', trackingNumber: 'TRK-009', lastUpdated: '2024-05-09T11:45:00Z' } },
    { instanceId: 'I-9', shipmentId: 'S-6', status: 'Delayed', instanceAlerts: [], lineIds: ['L-14'], trackingDetail:
        { carrier: 'UPS', trackingNumber: 'TRK-010', lastUpdated: '2024-05-10T09:20:00Z' } },
    { instanceId: 'I-10', shipmentId: 'S-6', status: 'In Transit', instanceAlerts: [], lineIds: ['L-15','L-16'], trackingDetail:
        { carrier: 'DHL', trackingNumber: 'TRK-011', lastUpdated: '2024-05-11T08:55:00Z' } },
    { instanceId: 'I-11', shipmentId: 'S-7', status: 'Delivered', instanceAlerts: [], lineIds: ['L-17','L-18','L-19','L-20','L-21','L-22','L-23','L-24','L-25'], trackingDetail:
        { carrier: 'FedEx', trackingNumber: 'TRK-012', lastUpdated: '2024-05-12T14:10:00Z' } }
  ];


    const orderLines = [
      { lineId: 'L-1', itemSku: 'FUR-001', description: 'Wooden Dining Table', quantity: 1, price: 500.00 },
      { lineId: 'L-2', itemSku: 'FUR-002', description: 'Leather Sofa', quantity: 1, price: 800.00 },
      { lineId: 'L-3', itemSku: 'FUR-003', description: 'Office Chair', quantity: 2, price: 300.00 },
      { lineId: 'L-4', itemSku: 'FUR-004', description: 'King Size Bed', quantity: 1, price: 1200.00 },
      { lineId: 'L-5', itemSku: 'FUR-005', description: 'Nightstand', quantity: 2, price: 250.00 },
      { lineId: 'L-6', itemSku: 'FUR-006', description: 'Bookshelf', quantity: 1, price: 350.00 },
      { lineId: 'L-7', itemSku: 'FUR-007', description: 'Coffee Table', quantity: 1, price: 400.00 },
      { lineId: 'L-8', itemSku: 'FUR-008', description: 'Recliner Chair', quantity: 2, price: 600.00 },
      { lineId: 'L-9', itemSku: 'FUR-009', description: 'Wardrobe', quantity: 1, price: 1500.00 },
      { lineId: 'L-10', itemSku: 'FUR-010', description: 'Dining Chairs Set', quantity: 6, price: 900.00 },
      { lineId: 'L-11', itemSku: 'FUR-011', description: 'TV Stand', quantity: 1, price: 550.00 },
      { lineId: 'L-12', itemSku: 'FUR-012', description: 'Bookshelf Cabinet', quantity: 2, price: 700.00 },
      { lineId: 'L-13', itemSku: 'FUR-013', description: 'Sideboard', quantity: 1, price: 650.00 },
      { lineId: 'L-14', itemSku: 'FUR-014', description: 'King Size Mattress', quantity: 1, price: 1300.00 },
      { lineId: 'L-15', itemSku: 'FUR-015', description: 'Queen Size Bed Frame', quantity: 1, price: 1100.00 },
      { lineId: 'L-16', itemSku: 'FUR-016', description: 'Office Desk', quantity: 2, price: 750.00 },
      { lineId: 'L-17', itemSku: 'FUR-017', description: 'Gaming Chair', quantity: 1, price: 450.00 },
      { lineId: 'L-18', itemSku: 'FUR-018', description: 'Wardrobe Cabinet', quantity: 1, price: 1400.00 },
      { lineId: 'L-19', itemSku: 'FUR-019', description: 'Coffee Set', quantity: 1, price: 600.00 },
      { lineId: 'L-20', itemSku: 'FUR-020', description: 'Dining Table Extension', quantity: 1, price: 550.00 },
      { lineId: 'L-21', itemSku: 'FUR-021', description: 'Accent Chair', quantity: 2, price: 700.00 },
      { lineId: 'L-22', itemSku: 'FUR-022', description: 'Console Table', quantity: 1, price: 800.00 },
      { lineId: 'L-23', itemSku: 'FUR-023', description: 'Wardrobe Organizer', quantity: 3, price: 500.00 },
      { lineId: 'L-24', itemSku: 'FUR-024', description: 'Bookshelf Divider', quantity: 2, price: 450.00 },
      { lineId: 'L-25', itemSku: 'FUR-025', description: 'Bedside Lamp', quantity: 4, price: 150.00 },
      { lineId: 'L-26', itemSku: 'FUR-026', description: 'Patio Set', quantity: 1, price: 1200.00 },
      { lineId: 'L-27', itemSku: 'FUR-027', description: 'Outdoor Umbrella', quantity: 2, price: 200.00 },
      { lineId: 'L-28', itemSku: 'FUR-028', description: 'Bar Stool', quantity: 4, price: 300.00 },
      { lineId: 'L-29', itemSku: 'FUR-029', description: 'Kitchen Island', quantity: 1, price: 1500.00 },
      { lineId: 'L-30', itemSku: 'FUR-030', description: 'Wine Rack', quantity: 2, price: 350.00 },
      { lineId: 'L-31', itemSku: 'FUR-031', description: 'Bookshelf Ladder', quantity: 1, price: 400.00 },
      { lineId: 'L-32', itemSku: 'FUR-032', description: 'Floor Lamp', quantity: 2, price: 180.00 },
      { lineId: 'L-33', itemSku: 'FUR-033', description: 'Outdoor Chair', quantity:1, price: 250.00}
    ];

    return { purchaseOrders, shipments, shipmentInstances, orderLines};
  } 
}
