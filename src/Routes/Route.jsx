import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../components/Tasks/Tasks';
import Projects from '../components/Projects/MainProject/Projects';
import Request from '../components/Request/Request';
import AddNewRequest from '../components/Request/componentsRequests/AddRequest';
import FooterRequset from '../components/Request/componentsRequests/FooterRequset';
import Clients from '../components/Clients/Clients';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Items from '../components/Items/Items';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Invoice from '../components/Invoice/Invoice';
import Expense from '../components/Expense/Expense';
import Job from '../components/Job/Job';
import FirstRoute from '../components/Job/center/RoutesJob/FirstRoute';
import SecoundRoute from '../components/Job/center/RoutesJob/SecoundRoute';
import Payment from '../components/Payment/Payment';
import Reports from '../components/Reports/Reports';
import Messages from '../components/Messages/Messages';
import Settings from '../components/Settings/Settings';
import TimeSheet from '../components/TimeSheet/TimeSheet';
import Schedule from '../components/Schedule/Schedule';
import Employee from '../components/Employee/Employee';
import Dashboard from '../components/Dashboard/Dashboard';
import Statistic from '../components/Statistic/Statistic';
import Quote from '../components/Quote/Quote';
import Profession from '../components/Profession/Profession';
import Company from '../components/Company/Company';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "statistic",
                element: <Statistic />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "messages",
                element: <Messages />,
            },
            {
                path: "task",
                element: <Tasks />,
            },
            {
                path: "items",
                element: <Items />,
            },
            {
                path: "expense",
                element: <Expense />,
            },
            {
                path: "invoice",
                element: <Invoice />,
            },
            {
                path: "job",
                element: <Job />,
                children: [
                    { index: true, element: <FirstRoute /> },
                    { path: "addJob", element: <SecoundRoute /> }
                ]
            },
            {
                path: "project",
                element: <Projects />
            },
            {
                path: "request",
                element: <Request />,
                children: [
                    { index: true, element: <FooterRequset /> },
                    { path: "addrequest", element: <AddNewRequest /> }
                ]
            },
            {
                path: "clients",
                element: <Clients />
            },
            {
                path: "reports",
                element: <Reports />
            },
            {
                path: "employee",
                element: <Employee />
            },
            {
                path: "schedule",
                element: <Schedule />
            },
            {
                path: "timesheet",
                element: <TimeSheet />
            },
            {
                path: "quote",
                element: <Quote />
            },
            {
                path: "profession",
                element: <Profession />
            },
            {
                path: "company",
                element: <Company />
            },
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "settings",
        element: <Settings />,
    },
])
