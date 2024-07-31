export interface Payment {
    uuid: string,
    fromAddress: string,
    toAddress: string,
    date: Date,
    status: PaymentStatus
}

export enum PaymentStatus {
    SUCCESS,
    FAILED
}