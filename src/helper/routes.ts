import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/products/ProductDetail";
import UserList from '../pages/dashboard/user/UserList';
import AddUser from '../pages/dashboard/user/AddUser';
import Login from '../pages/accounting/Login';

export const routes = () => [
    {
        path: '/',
        component: Home,
        exact: true,
        private: false,
        layout: MainLayout
    },
    {
        path: '/book/:id',
        component: ProductDetail,
        exact: true,
        private: false,
        layout: MainLayout
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        private: false,
    },
    {
        path: '/user',
        component: UserList,
        exact: true,
        private: true,
        layout: DashboardLayout
    },
    {
        path: '/user/add',
        component: AddUser,
        exact: true,
        private: true,
        layout: DashboardLayout
    }
]