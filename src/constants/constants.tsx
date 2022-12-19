const backUrl = "https://localhost:7134/api/"
export const Api = {
    getProducts: `${backUrl}product`,
    orders: `${backUrl}order`,
    orderRequestedMoney: `${backUrl}order/requestedMoney`,
    orderSubmittedMoney: `${backUrl}order/submittedMoney`,
    moneyTransfer: `${backUrl}MoneyTransfer`,
    supplier: `${backUrl}Supplier`,
    supplierBuy: `${backUrl}SupplierProduct/buy`

}

export const OrderStatusesToReadable = {
    0: "Waiting Confirmation",
    1: "Waiting Bill",
    2: "Waiting Storage Confirmation",
    3: "In Delivery"
}

export const TransactionsStatusesToReadable = {
    0: "Expense",
    1: "Income",
}

export const Functions = {
    admin: "Admin",
    accaunting: "Accaunting"
}