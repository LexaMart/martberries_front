export interface Transaction {
    id: string;
    transferDateTime: string;
    transactionTypeId: number,
    transactionType: number,
    amount: number;
}

export interface ProductTransactionComponent {
    id: string;
    transferDateTime: string;
    amount: number;
    transferType: number;
    product: {
        name: string;
        amount: string
    }
}