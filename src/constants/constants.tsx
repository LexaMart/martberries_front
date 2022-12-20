const backUrl = "https://localhost:7134/api/"
export const Api = {
    getProducts: `${backUrl}product`,
    orders: `${backUrl}order`,
    orderRequestedMoney: `${backUrl}order/requestedMoney`,
    orderSubmittedMoney: `${backUrl}order/submittedMoney`,
    moneyTransfer: `${backUrl}MoneyTransfer`,
    moneyTransferReport: `${backUrl}MoneyTransfer/report`,
    supplier: `${backUrl}Supplier`,
    supplierBuy: `${backUrl}SupplierProduct/buy`,
    productTransactions: `${backUrl}ProductTransfer`
}

export const OrderStatusesToReadable = {
    0: "Waiting Confirmation",
    1: "Waiting Bill",
    2: "Waiting Payment",
    3: "Waiting Storage Confirmation",
    4: "In Delivery",
    5: "Deileverd"
}

export const TransactionsStatusesToReadable = {
    0: "Expense",
    1: "Income",
}

export const ProductTransactionsToReadable = {
    0: "Write-off",
    1: "Bought"
}

export const Functions = {
    admin: "Admin",
    accaunting: "Accaunting",
    delivery: "Delivery"
}