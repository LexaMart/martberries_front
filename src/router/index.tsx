import {createBrowserRouter} from 'react-router-dom'
import { Layout } from '../components/Layout'
import { NotFoundPage } from '../pages/NotFoundPage'
import { Store } from '../pages/Store'
export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout/>,
        errorElement : <NotFoundPage/>,
        children: [
            {
                path: "/store",
                element : <Store/>
            }
        ]
    }
])