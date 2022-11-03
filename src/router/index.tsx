import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Cart } from '../pages/Cart'
import { NotFoundPage } from '../pages/NotFoundPage'
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
            }
        ]
    }
])