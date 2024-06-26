import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  AreaChartOutlined,
  TeamOutlined,
  GroupOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

const DetailsOne = lazy(() => import("@/pages/detailsone"));
const DetailsTwo = lazy(() => import("@/pages/detailstwo"));
const Home = lazy(() => import("@/pages/home"));
// const Events = lazy(() => import("@/pages/events"));

export const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detailsone",
    element: <DetailsOne />,
  },
  {
    path: "/detailstwo",
    element: <DetailsTwo />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
const Route = () => useRoutes(routes);

export default Route;
