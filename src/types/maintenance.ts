export interface MaintenanceItem {
    id: string;
    customerId: string;
    quantity: number;
    storeLocation: string;
    maintenancePeriod: number;
    rentalPeriodStart: string;
    rentalPeriodEnd: string;
    reportedBy: string;
    assignedTo: string;
    maintenanceCost: number;
    remark: string;
    fileLocation: string;
}