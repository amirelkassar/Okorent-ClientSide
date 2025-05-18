export interface MaintenanceItem {
    id: string;
    product: string;
    quantity: number;
    from: Date;
    to: Date;
    reportedBy: string;
    assignedTo: string;
    maintenanceCost: number;
    storeLocation: string;
    remarks: string;
    files: string[];
    maintenancePeriod: 'Once' | 'Monthly' | 'BiAnnually';
    status: 'Not Repaired' | 'Repaired' | 'Offline';
}