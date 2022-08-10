// ** Router imports
import { useRoutes } from 'react-router-dom'
import * as route from './path';
import * as screen from "../views"

export default function Router() {

    return useRoutes([
        {
            path: route.PATH_DEFAULT,
            element: <screen.SplashScreen />
        },
        {
            path: route.PATH_DASHBOARD,
            element: <screen.Dashboard />
        }
    ]);

}

