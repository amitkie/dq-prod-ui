import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home/home";
import Layout from "../layout/Layout";
import WorkSpace from "../pages/workSpace/workSpace";
import Analytics from "../pages/analytics/Analytics";
import Insights from "../pages/insights/Insights";
import HealthCard from "../pages/healthcard/HealthCard";
import HealthCardOverview from "../pages/healthcard/overview/HealthCardOverview";
import Settings from "../pages/Settings/Settings";
import About from "../pages/About/About";
import SuperThemes from "../components/SuperThemes/SuperThemes";
import Help from "../components/Help/Help";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
//   {
//     path: "/workspace",
//     element: (
//       <Layout>
//         <WorkSpace />
//       </Layout>
//     ),
//   },
//   {
//     path: "/analytics/:projectId",
//     element: (
//       <Layout>
//         <Analytics />
//       </Layout>
//     ),
//   },
//   {
//     path: "/superthemes",
//     element: (
//       <Layout>
//         <SuperThemes />
//       </Layout>
//     ),
//   },
//   {
//     path: "/insights",
//     element: (
//       <Layout>
//         <Insights />
//       </Layout>
//     ),
//   },
//   {
//     path: "/healthcard",
//     element: (
//       <Layout>
//         <HealthCard />
//       </Layout>
//     ),
//   },
//   {
//     path: "/healthcardoverview/:brand",
//     element: (
//       <Layout>
//         <HealthCardOverview />
//       </Layout>
//     ),
//   },
//   {
//     path: "/settings",
//     element: (
//       <Layout>
//         <Settings />
//       </Layout>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <Layout>
//         <About />
//       </Layout>
//     ),
//   },
//   {
//     path: "/help",
//     element: (
//       <Layout>
//         <Help />
//       </Layout>
//     ),
//   },
// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "workspace", element: <WorkSpace /> },
      { path: "analytics", element: <Analytics /> },
      { path: "insights", element: <Insights /> },
      { path: "healthcard", element: <HealthCard /> },
      { path: "healthcard/overview", element: <HealthCardOverview /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

// import { createHashRouter } from "react-router-dom";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/workspace",
//     element: <WorkSpace />,
//   },
//   {
//     path: "/analytics",
//     element: <Analytics />,
//   },
//   {
//     path: "/insights",
//     element: <Insights />,
//   },
//   {
//     path: "/healthcard",
//     element: <HealthCard />,
//   },
// ]);

export default router;
