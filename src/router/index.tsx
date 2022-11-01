import {createBrowserRouter} from 'react-router-dom'
import { Layout } from '../components/Layout'
import { NotFoundComponent } from '../components/NotFoundComponent'
export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout/>,
        errorElement : <NotFoundComponent/>
    }
])