import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../common-components/Layout'
import { AccauntingPage } from '../pages/Accaunting'
import { AccountingOrder } from '../pages/Accaunting/components/AccountingOrders'
import { AccountingTransaction } from '../pages/Accaunting/components/AccountingTransactions'
import { AdminPage } from '../pages/AdminPage'
import { Cart } from '../pages/Cart'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PurchasingPage } from '../pages/PurchasingPage'
import { PurchasingOrderPage } from '../pages/PurchasingPage/components/PurchasingOrderComponent'
import { StoragePage } from '../pages/StoragePage'
import { Store } from '../pages/Store'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/store",
                element: <Store />
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/admin",
                element: <AdminPage/>
            },
            {
                path: "/accaunting",
                element: <AccauntingPage/>,
                children: [
                    {
                        path: "/accaunting/orders",
                        element: <AccountingOrder/>
                    },
                    {
                        path: "/accaunting/transactions",
                        element: <AccountingTransaction/>
                    }
                ]
                
            },
            {
                path: "/storage",
                element: <StoragePage/>
            },
            {
                path: "/purchasing",
                element: <PurchasingPage/>,
                children: [
                    {
                        path: "/purchasing/orders",
                        element: <PurchasingOrderPage/>
                    },
                    {
                        path: "/purchasing/transactions",
                        element: <></>
                    }
                ]
            }
        ]
    }
])